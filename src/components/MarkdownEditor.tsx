type MarkdownEditorProps = {
  content: string;
  onChange: (content: string) => void;
}

export default function MarkdownEditor({ content, onChange }: MarkdownEditorProps) {
  return (
    <div>
      <textarea
        id="content"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg h-[500px] dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300"
        required
      />
    </div>
  )
} 