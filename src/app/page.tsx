import { Suspense } from 'react'
import Posts from '@/components/Posts'

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Блог</h1>
      <Posts />
    </div>
  )
}
