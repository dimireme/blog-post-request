# Blog Post Request

A Next.js application for submitting blog posts through GitHub pull requests.

## Environment Variables

Before running the application, you need to set up your environment variables:

1. Create a GitHub OAuth App at https://github.com/settings/developers
2. Copy `.env.example` to `.env.local`
3. Fill in your GitHub OAuth App credentials:
   - `NEXT_PUBLIC_GITHUB_CLIENT_ID`: Your GitHub OAuth App Client ID
   - `GITHUB_CLIENT_SECRET`: Your GitHub OAuth App Client Secret

For production deployment on Vercel:
1. Add these environment variables in your Vercel project settings
2. Update the OAuth App settings with your production URLs:
   - Homepage URL: `https://your-app.vercel.app`
   - Authorization callback URL: `https://your-app.vercel.app/auth/callback`

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo

[View on GitHub Pages](https://dimireme.github.io/blog-post-request/)

## Features

- Generates blog posts from `.md` files in `content/posts` directory
- Modern UI with Tailwind CSS
- Responsive design
- GitHub Pages deployment

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- Yarn 1.22.0 or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blog-post-request.git
cd blog-post-request
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on GitHub Pages. The deployment is handled automatically through GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
yarn build
```

2. Export static files:
```bash
yarn export
```

3. Push to the `gh-pages` branch:
```bash
git push origin gh-pages
```

## Project Structure

```
blog-post-request/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── components/
│       ├── BlogPost.tsx
│       └── PostForm.tsx
├── public/
├── styles/
│   └── globals.css
├── next.config.js
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

<a href="https://dimireme.github.io/blog-post-request/" target="_blank">
github pages 
</a>

Генерирует список статей по `.md` файлам из `~/content/pages`