/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
    transpilePackages: ["@uiw/react-textarea-code-editor"],
}

module.exports = nextConfig
