import './global.css'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Мой блог',
  description: 'Блог о веб-разработке и технологиях',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} min-h-screen`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  )
}
