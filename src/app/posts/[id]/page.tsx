import { getPostById } from '@/services/posts'
import Comments from '@/components/posts/Comments'
import Image from 'next/image'
import Link from 'next/link'

interface PostPageProps {
  params: {
    id: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostById(params.id)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/posts" className="text-blue-600 hover:text-blue-500">
          Back to posts
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/posts" className="text-blue-600 hover:text-blue-500 mb-4 inline-block">
        ← Back to posts
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        
        <div className="relative w-full h-96 mb-6">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div className="prose max-w-none mb-8">
          <p>{post.description}</p>
        </div>

        <div className="border-t pt-8">
          <Comments postId={params.id} />
        </div>
      </article>
    </div>
  )
}
