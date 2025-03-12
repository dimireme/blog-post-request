import { getPostData, getSortedPostsData, PostData } from '@/lib/posts';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post: PostData) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: Props) {
  const post = await getPostData(params.id);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Назад к списку
      </Link>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-8">{post.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
      </article>
    </main>
  );
} 