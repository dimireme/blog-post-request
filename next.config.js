/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Настройки для GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/blog-post-request' : '',
  // Добавляем настройку для правильной обработки ассетов
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/blog-post-request/' : '',
}

module.exports = nextConfig 