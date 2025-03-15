'use client'

import { Suspense } from 'react'
import AuthCallbackContent from '@/components/AuthCallbackContent'

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              Обработка авторизации...
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Пожалуйста, подождите...
            </p>
          </div>
        </div>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  )
} 