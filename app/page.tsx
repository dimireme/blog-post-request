import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/posts';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Мой блог</h1>
      <div className="grid gap-6">
        {posts.map((post: PostData) => (
          <article key={post.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
            </Link>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="text-sm text-gray-500">{post.date}</div>
          </article>
        ))}
      </div>
    </main>
  );
} 