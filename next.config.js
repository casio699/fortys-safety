/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  // Configure image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
  },
  // Allow cross-origin requests from VSCode browser
  allowedDevOrigins: ['127.0.0.1'],
}

module.exports = nextConfig
