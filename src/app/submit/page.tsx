'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'
import MarkdownEditor from '@/components/MarkdownEditor'
import MarkdownPreview from '@/components/MarkdownPreview'
import PreviewModeToggle, { PreviewMode } from '@/components/PreviewModeToggle'
import MarkdownHelp from '@/components/MarkdownHelp'

type PostFormData = {
  title: string;
  content: string;
  author: string;
}

export default function SubmitPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    content: '',
    author: ''
  })
  const [preview, setPreview] = useState('')
  const [previewMode, setPreviewMode] = useState<PreviewMode>('split')

  const handleContentChange = async (content: string) => {
    setFormData(prev => ({ ...prev, content }))
    const processedContent = await remark()
      .use(html)
      .process(content)
    setPreview(processedContent.toString())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement GitHub PR creation
    console.log('Form submitted:', formData)
    router.push('/')
  }

  const togglePreview = () => {
    setPreviewMode(current => {
      switch (current) {
        case 'hidden': return 'split'
        case 'split': return 'full'
        case 'full': return 'hidden'
      }
    })
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Предложить статью</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Заголовок
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        
        <div>
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            Автор
          </label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>

        <div className="relative">
          <div className={`grid gap-6 ${previewMode === 'split' ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <div 
              className={`transition-all transform duration-300 ease-in-out ${
                previewMode === 'full' 
                  ? 'opacity-0 scale-95 absolute inset-0' 
                  : 'opacity-100 scale-100'
              }`}
            >
              <div className="flex items-center justify-between h-8 mb-1">
                <label htmlFor="content" className="block text-sm font-medium flex items-center">
                  Содержание (Markdown)
                  <MarkdownHelp />
                </label>
                {previewMode === 'hidden' && (
                  <PreviewModeToggle mode={previewMode} onToggle={togglePreview} />
                )}
              </div>
              <MarkdownEditor 
                content={formData.content}
                onChange={handleContentChange}
              />
            </div>

            {previewMode !== 'hidden' && (
              <div className={`transition-all transform duration-300 ease-in-out opacity-100 scale-100`}>
                <div className="flex items-center justify-between h-8 mb-1">
                  <div className="text-sm font-medium">Предпросмотр</div>
                  <PreviewModeToggle mode={previewMode} onToggle={togglePreview} />
                </div>
                <MarkdownPreview content={preview} />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="btn bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
} 