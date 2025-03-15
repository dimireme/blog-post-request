'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getAccessToken, getFormState, clearFormState } from '@/lib/auth'
import { generatePostFile } from '@/lib/generatePostFile'
import { createPullRequest } from '@/lib/github'

export default function AuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string>()

  useEffect(() => {
    async function handleCallback() {
      try {
        const code = searchParams.get('code')
        
        if (!code) {
          throw new Error('No authorization code received')
        }

        // Получаем токен
        const token = await getAccessToken(code)

        // Получаем сохраненные данные формы
        const formData = getFormState()
        if (!formData) {
          throw new Error('No form data found')
        }

        // Генерируем файл для PR
        const { content, filename } = generatePostFile(formData)

        // Создаем PR
        const prUrl = await createPullRequest({
          title: formData.title,
          content,
          filename,
          token
        })

        // Очищаем сохраненные данные
        clearFormState()

        // Открываем PR в новой вкладке
        window.open(prUrl, '_blank')

        // Перенаправляем на главную с сообщением об успехе
        router.push('/?status=success')
      } catch (err) {
        console.error('Auth callback error:', err)
        setError(err instanceof Error ? err.message : 'Authentication failed')
      }
    }

    handleCallback()
  }, [router, searchParams])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Ошибка авторизации
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => router.push('/submit')}
            className="btn btn-primary"
          >
            Вернуться к форме
          </button>
        </div>
      </div>
    )
  }

  return null
} 