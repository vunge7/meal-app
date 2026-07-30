import type { NextConfig } from 'next'

const nextConfig: NextConfig = {

   images: {

    remotePatterns: [

      {

        protocol: "https",

        hostname: "images.unsplash.com",

      },

    ],

  },
  devIndicators: false,
  allowedDevOrigins: ['192.168.1.115', '192.168.1.157', '192.168.1.89', '10.97.167.125'],
  async rewrites() {
    return [
      {
        source: '/meal/api/v1',
        destination: 'https://10.97.167.125/meal/api/v1/',
      },
      
    ]
  },
}

export default nextConfig