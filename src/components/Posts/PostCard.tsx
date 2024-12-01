import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types/post'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/posts/${post.id}`}>
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span className="text-sm text-gray-500">
              Автор: {post.author}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
