import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main>
      <h1 className="text-4xl font-bold mb-8 text-gradient">Мой блог</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/posts/${post.id}`}
            className="card p-6 no-underline"
          >
            <h2 className="text-2xl font-semibold mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-800 dark:text-gray-200">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
