/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  // Configure for static export
  output: 'export',
  // Configure image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
    unoptimized: true,
  },
  // Allow cross-origin requests from VSCode browser
  allowedDevOrigins: ['127.0.0.1'],
  // Set base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/fortys-safety' : '',
  // Set asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fortys-safety' : '',
}

module.exports = nextConfig
