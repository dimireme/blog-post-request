/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Настройки для GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/blog-post-request' : '',
  // Используем тот же путь для статических файлов, что и для basePath
  assetPrefix: process.env.NODE_ENV === 'production' ? '/blog-post-request' : '',
  // Добавляем слэш в конце URL для лучшей совместимости
  trailingSlash: true,
}

module.exports = nextConfig 