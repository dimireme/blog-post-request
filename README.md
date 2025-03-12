# Простой блог на Next.js

Этот проект представляет собой простой блог, построенный с использованием Next.js, TypeScript и Tailwind CSS. Статьи хранятся в формате Markdown и могут быть добавлены через Pull Request.

## Особенности

- 📝 Поддержка Markdown для написания статей
- 🎨 Стильный дизайн с использованием Tailwind CSS
- 🚀 Быстрая статическая генерация страниц
- 📱 Адаптивный дизайн
- 🔍 SEO-friendly

## Как добавить новую статью

1. Создайте новый Markdown файл в директории `content/posts/`
2. Добавьте метаданные в начало файла:
   ```markdown
   ---
   title: 'Заголовок статьи'
   date: 'YYYY-MM-DD'
   description: 'Краткое описание статьи'
   ---
   ```
3. Напишите содержание статьи, используя Markdown
4. Создайте Pull Request

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
