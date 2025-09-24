/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  // Ensure Next uses this project as the tracing root to avoid mixing sibling workspaces
  outputFileTracingRoot: path.resolve(__dirname),
}

module.exports = nextConfig
