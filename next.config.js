/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'whimsical-badge-f41b91c26a.media.strapiapp.com',
      },
      {
        protocol: 'https',
        hostname: 'slowmoto.tours',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
