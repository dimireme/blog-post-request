'use client'

import { useSearchParams } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function SubmissionSuccess() {
  const searchParams = useSearchParams()
  const showSuccess = searchParams.get('status') === 'success'

  if (!showSuccess) return null

  return (
    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
      <div className="flex items-start gap-3">
        <FontAwesomeIcon 
          icon={faCheckCircle} 
          className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5" 
        />
        <div>
          <h3 className="text-sm font-medium text-green-900 dark:text-green-100 mb-1">
            Статья успешно отправлена
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300">
            Pull request создан и открыт в новой вкладке. После проверки модераторами статья будет опубликована.
          </p>
        </div>
      </div>
    </div>
  )
} 