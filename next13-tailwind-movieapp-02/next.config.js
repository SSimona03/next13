/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

      fontLoaders: [
        { loader: 'next/font/google', options: { subsets: ['latin'] } }
      ]

  },
  images:{

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'

      },
      {
        protocol: 'https',
        hostname: '"www.themoviedb.org'

      }
    ]
    
    // domains:[
    //   "image.tmdb.org"
    // ]

    }
}



module.exports = nextConfig
