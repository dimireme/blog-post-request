export default function MarkdownHelp() {
  return (
    <details className="mt-2 text-sm">
      <summary className="cursor-pointer text-purple-600 hover:text-purple-700">
        Показать справку по Markdown
      </summary>
      <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3">
        <h4 className="font-semibold">Базовый синтаксис Markdown:</h4>
        <ul className="space-y-2">
          <li><code className="px-1"># Заголовок</code> - Заголовок первого уровня</li>
          <li><code className="px-1">## Заголовок</code> - Заголовок второго уровня</li>
          <li><code className="px-1">**текст**</code> - <strong>Жирный текст</strong></li>
          <li><code className="px-1">*текст*</code> - <em>Курсив</em></li>
          <li><code className="px-1">[текст](url)</code> - Ссылка</li>
          <li><code className="px-1">- элемент</code> - Маркированный список</li>
          <li><code className="px-1">1. элемент</code> - Нумерованный список</li>
          <li><code className="px-1">\`код\`</code> - Строка кода</li>
          <li>
            <code className="px-1">```<br/>блок кода<br/>```</code> - Блок кода
          </li>
          <li><code className="px-1">{'>'} текст</code> - Цитата</li>
        </ul>
      </div>
    </details>
  )
} 