/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Используем basePath только в production
  basePath: process.env.NODE_ENV === 'production' ? '/blog-post-request' : '',
}

module.exports = nextConfig 