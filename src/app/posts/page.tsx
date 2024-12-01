import { getPosts } from '@/services/posts'
import PostCard from '@/components/posts/PostCard'
import Pagination from '@/components/posts/Pagination'

export const dynamic = 'force-dynamic'

async function Posts({ 
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams?.page === 'string' ? Number(searchParams.page) : 1
  const limit = 6
  
  const { posts, total } = await getPosts({ page, limit })
  const totalPages = Math.ceil(total / limit)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Museum Exhibits</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  )
}

export default Posts
