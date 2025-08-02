/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'labattaria-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};