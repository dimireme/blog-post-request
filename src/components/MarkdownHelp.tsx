import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'

export default function MarkdownHelp() {
  return (
    <div className="group relative inline-block">
      <FontAwesomeIcon 
        icon={faCircleQuestion} 
        className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-help ml-1" 
      />
      <div className="hidden group-hover:block absolute left-0 top-6 w-64 p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
        <ul className="text-sm space-y-1">
          <li><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded"># Заголовок</code></li>
          <li><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">**жирный**</code></li>
          <li><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">*курсив*</code></li>
          <li><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">[ссылка](url)</code></li>
          <li><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">- список</code></li>
          <li><code className="text-xs bg-gray-100 dark:bg-gray-700 px-1 rounded">\`код\`</code></li>
        </ul>
      </div>
    </div>
  )
} 