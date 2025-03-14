import Link from 'next/link'
import { getPostData, getAllPosts } from '@/lib/posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCalendar } from '@fortawesome/free-solid-svg-icons'

// Генерируем статические пути для всех постов
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

type Params = Promise<{ id: string }>

export default async function Post(props: { params: Params }) {
  const params = await props.params
  const postData = await getPostData(params.id)

  return (
    <article>
      <div className="flex items-center justify-between mb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 no-underline"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
          Назад к списку
        </Link>
        
        <div className="flex items-center text-gray-600">
          <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
          <time>{postData.date}</time>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </article>
  )
} 