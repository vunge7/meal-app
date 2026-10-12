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
  allowedDevOrigins: ['192.168.1.115',
     '192.168.1.157', 
     '192.168.1.89', 
     '10.97.167.125', 
     '10.35.50.125',
     '10.90.203.125',
     'localhost'
    ],
  async rewrites() {
    return [
      {
        source: '/meal/api/v1',
        destination: 'https://192.168.1.89/meal/api/v1/',
      },
      
    ]
  },
}

export default nextConfig