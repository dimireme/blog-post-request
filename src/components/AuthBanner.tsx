import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function AuthBanner() {
  return (
    <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
      <div className="flex items-start gap-3">
        <FontAwesomeIcon 
          icon={faInfoCircle} 
          className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" 
        />
        <div>
          <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
            Требуется авторизация через GitHub
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Для отправки статьи вам потребуется авторизоваться через GitHub. 
            После заполнения формы вы будете перенаправлены на страницу авторизации, 
            где сможете предоставить доступ для создания pull request.
          </p>
        </div>
      </div>
    </div>
  )
} 