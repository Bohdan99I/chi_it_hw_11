import { getPosts } from '@/lib/posts'
import PostCard from './PostCard'

async function PostsList({ page }: { page: number }) {
  const { posts, totalPages } = await getPosts(page)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostsList
