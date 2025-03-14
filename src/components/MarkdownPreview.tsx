type MarkdownPreviewProps = {
  content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none h-[500px] overflow-auto p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div className="text-gray-500 italic">
          Начните вводить текст для предпросмотра...
        </div>
      )}
    </div>
  )
} 