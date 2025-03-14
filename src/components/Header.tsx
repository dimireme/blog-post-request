'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isSubmitPage = pathname === '/submit'

  return (
    <header className="flex items-center justify-between py-6 mb-8">
      <div>
        {isHomePage ? (
          <h1 className="text-3xl font-bold text-gradient">Мой блог</h1>
        ) : (
          <Link href="/" className="text-2xl font-bold hover:text-purple-600 transition-colors">
            Мой блог
          </Link>
        )}
      </div>
      <div className="flex items-center gap-4">
        {!isSubmitPage && (
          <Link 
            href="/submit" 
            className="btn btn-primary"
          >
            Предложить статью
          </Link>
        )}
        <ThemeToggle />
      </div>
    </header>
  )
} 