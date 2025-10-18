import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    // Only enable admin in development (Tina local mode)
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/admin',
          destination: '/admin/index.html',
        },
      ]
    }
    return []
  },
}

export default nextConfig
