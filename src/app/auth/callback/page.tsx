'use client'

import { Suspense } from 'react'
import AuthCallbackContent from '@/components/AuthCallbackContent'
import LoadingScreen from '@/components/LoadingScreen'

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          title="Обработка авторизации..."
          message="Пожалуйста, подождите..."
        />
      }
    >
      <AuthCallbackContent />
    </Suspense>
  )
} 