package extension_repo

import (
	"context"
	"encoding/json"
	"fmt"
	"seanime/internal/extension"
	"seanime/internal/goja/goja_runtime"

	"github.com/dop251/goja"
	"github.com/dop251/goja/parser"
	"github.com/rs/zerolog"
)

type gojaProviderBase struct {
	ext            *extension.Extension
	logger         *zerolog.Logger
	pool           *goja_runtime.Pool
	program        *goja.Program
	source         string
	runtimeManager *goja_runtime.Manager
}

func initializeProviderBase(ext *extension.Extension, language extension.Language, logger *zerolog.Logger, runtimeManager *goja_runtime.Manager) (*gojaProviderBase, error) {
	// initFn, pr, err := SetupGojaExtensionVM(ext, language, logger)
	// if err != nil {
	// 	return nil, err
	// }
	source := ext.Payload
	if language == extension.LanguageTypescript {
		var err error
		source, err = JSVMTypescriptToJS(ext.Payload)
		if err != nil {
			logger.Error().Err(err).Str("id", ext.ID).Msg("extensions: Failed to convert typescript")
			return nil, err
		}
	}

	ext.Payload = source

	// Compile the program once, to be reused by all VMs
	program, err := goja.Compile("", source, false)
	if err != nil {
		logger.Error().Err(err).Str("id", ext.ID).Msg("extensions: Failed to compile program")
		return nil, fmt.Errorf("compilation failed: %w", err)
	}

	initFn := func() *goja.Runtime {
		vm := goja.New()
		vm.SetParserOptions(parser.WithDisableSourceMaps)
		// Bind the shared bindings
		ShareBinds(vm, logger)
		return vm
	}

	pool, err := runtimeManager.GetOrCreateBasePool(initFn)
	if err != nil {
		return nil, err
	}

	return &gojaProviderBase{
		ext:            ext,
		logger:         logger,
		pool:           pool,
		program:        program,
		source:         ext.Payload,
		runtimeManager: runtimeManager,
	}, nil
}

func (g *gojaProviderBase) callClassMethod(ctx context.Context, methodName string, args ...interface{}) (goja.Value, error) {
	if ctx == nil {
		ctx = context.Background()
	}

	vm, err := g.pool.Get(ctx)
	if err != nil {
		g.logger.Error().Err(err).Str("id", g.ext.ID).Msg("extension: Failed to get VM")
		return nil, fmt.Errorf("failed to get VM: %w", err)
	}
	defer g.pool.Put(vm)

	// Run the pre-compiled program
	_, err = vm.RunProgram(g.program)
	if err != nil {
		g.logger.Error().Err(err).Str("id", g.ext.ID).Msg("extension: Failed to run program")
		return nil, fmt.Errorf("failed to run program: %w", err)
	}

	// Create a new instance of the Provider class
	providerInstance, err := vm.RunString("new Provider()")
	if err != nil {
		g.logger.Error().Err(err).Str("id", g.ext.ID).Msg("extension: Failed to create Provider instance")
		return nil, fmt.Errorf("failed to create Provider instance: %w", err)
	}

	if providerInstance == nil {
		g.logger.Error().Str("id", g.ext.ID).Msg("extension: Provider constructor returned nil")
		return nil, fmt.Errorf("provider constructor returned nil")
	}

	// Get the method from the instance
	method, ok := goja.AssertFunction(providerInstance.ToObject(vm).Get(methodName))
	if !ok {
		g.logger.Error().Str("id", g.ext.ID).Str("method", methodName).Msg("extension: Method not found or not a function")
		return nil, fmt.Errorf("method %s not found or not a function", methodName)
	}

	// Convert arguments to Goja values
	gojaArgs := make([]goja.Value, len(args))
	for i, arg := range args {
		gojaArgs[i] = vm.ToValue(arg)
	}

	// Call the method
	result, err := method(providerInstance, gojaArgs...)
	if err != nil {
		g.logger.Error().Err(err).Str("id", g.ext.ID).Str("method", methodName).Msg("extension: Method execution failed")
		return nil, fmt.Errorf("method %s execution failed: %w", methodName, err)
	}

	// g.runtimeManager.PrintBasePoolMetrics()

	return result, nil
}

// unmarshalValue unmarshals a Goja value to a target interface
// This is used to convert the result of a method call to a struct
func (g *gojaProviderBase) unmarshalValue(value goja.Value, target interface{}) error {
	if value == nil {
		return fmt.Errorf("cannot unmarshal nil value")
	}

	exported := value.Export()
	if exported == nil {
		return fmt.Errorf("exported value is nil")
	}

	data, err := json.Marshal(exported)
	if err != nil {
		return fmt.Errorf("failed to marshal value: %w", err)
	}
	return json.Unmarshal(data, target)
}

// waitForPromise waits for a promise to resolve and returns the result
func (g *gojaProviderBase) waitForPromise(value goja.Value) (goja.Value, error) {
	if value == nil {
		return nil, fmt.Errorf("cannot wait for nil promise")
	}

	if promise, ok := value.Export().(*goja.Promise); ok {
		result := promise.Result()
		if result == nil {
			return nil, fmt.Errorf("promise result is nil")
		}

		switch promise.State() {
		case goja.PromiseStatePending:
			return nil, fmt.Errorf("promise is still pending")
		case goja.PromiseStateRejected:
			if err, ok := result.Export().(error); ok {
				return nil, fmt.Errorf("promise rejected: %w", err)
			}
			return nil, fmt.Errorf("promise rejected: %v", result)
		case goja.PromiseStateFulfilled:
			return result, nil
		default:
			return nil, fmt.Errorf("unknown promise state: %v", promise.State())
		}
	}
	return value, nil
}

func (g *gojaProviderBase) PutVM(vm *goja.Runtime) {
	g.pool.Put(vm)
}

func (g *gojaProviderBase) ClearInterrupt() {
	// no-op
}
