# Blog Post Request

Приложение для отправки статей в блог через GitHub Pull Requests. Авторы могут писать статьи в Markdown, предпросматривать их и отправлять на проверку через PR.

## Демо

- [Демо на Vercel](https://blog-post-request.vercel.app)

## Разработка

### Требования

- Node.js 18.0 или выше
- Yarn 1.22.0 или выше

### Установка и запуск

1. Клонируем репозиторий:
```bash
git clone https://github.com/yourusername/blog-post-request.git
cd blog-post-request
```

2. Устанавливаем зависимости:
```bash
yarn install
```

3. Запускаем сервер разработки:
```bash
yarn dev
```

4. Открываем [http://localhost:3000](http://localhost:3000)

### Настройка GitHub OAuth

1. Создаем OAuth приложение на [GitHub](https://github.com/settings/developers)
2. Копируем `.env.example` в `.env.local`
3. Заполняем переменные окружения:
   - `NEXT_PUBLIC_GITHUB_CLIENT_ID`: Client ID из настроек OAuth приложения
   - `GITHUB_CLIENT_SECRET`: Client Secret из настроек OAuth приложения

Для продакшена на Vercel:
1. Добавляем переменные окружения в настройках проекта
2. Обновляем настройки OAuth приложения:
   - Homepage URL: `https://your-app.vercel.app`
   - Authorization callback URL: `https://your-app.vercel.app/auth/callback`

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- GitHub API
