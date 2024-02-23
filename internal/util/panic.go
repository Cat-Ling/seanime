package util

import (
	"errors"
	"fmt"
	"github.com/fatih/color"
	"runtime/debug"
)

func printRuntimeError(r any, module string) string {
	debugStr := string(debug.Stack())
	logger := NewLogger()
	red := color.New(color.FgRed, color.Bold)
	fmt.Println()
	red.Print("PANIC")
	if module != "" {
		fmt.Printf(" \"%s\"", module)
	}
	fmt.Printf(" Please report this issue on the GitHub repository\n")
	fmt.Println("========================================= Stack Trace =========================================")
	logger.Error().Msgf("%+v\n\n%+v", r, debugStr)
	fmt.Println("===================================== End of Stack Trace ======================================")
	return debugStr
}

func HandlePanicWithError(err *error) {
	if r := recover(); r != nil {
		*err = errors.New("fatal error occurred, please report this issue")
		printRuntimeError(r, "")
	}
}

func HandlePanicInModuleWithError(module string, err *error) {
	if r := recover(); r != nil {
		*err = errors.New("fatal error occurred, please report this issue")
		printRuntimeError(r, module)
	}
}

func HandlePanicThen(f func()) {
	if r := recover(); r != nil {
		f()
		printRuntimeError(r, "")
	}
}

func HandlePanicInModuleThen(module string, f func()) {
	if r := recover(); r != nil {
		f()
		printRuntimeError(r, module)
	}
}

func HandlePanicInModuleThenS(module string, f func(stackTrace string)) {
	if r := recover(); r != nil {
		str := printRuntimeError(r, module)
		f(str)
	}
}

func Recover() {
	if r := recover(); r != nil {
		printRuntimeError(r, "")
	}
}

func RecoverInModule(module string) {
	if r := recover(); r != nil {
		printRuntimeError(r, module)
	}
}
