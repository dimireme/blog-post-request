import './global.css'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

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
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider>
          <div className="max-w-4xl mx-auto px-4">
            <Header />
            <main className="pb-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
