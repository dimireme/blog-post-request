import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { Post } from '@/types/post'

export default async function Posts() {
  const posts = await getAllPosts()

  return (
    <main>
      <div className="grid gap-6">
        {(posts as Post[]).map((post) => (
          <Link 
            key={post.id} 
            href={`/posts/${post.id}`}
            className="card p-6 no-underline"
          >
            <h2 className="text-2xl font-semibold mb-2 hover:text-purple-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  )
} 