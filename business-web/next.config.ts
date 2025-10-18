import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    // Enable admin route for both development and production (self-hosted mode)
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
}

export default nextConfig
