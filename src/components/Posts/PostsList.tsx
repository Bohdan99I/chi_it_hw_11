import { getPosts } from '@/lib/posts'
import PostCard from './PostCard'
import { Post } from '@/types/post'

interface PostsListProps {
  page: number
}

async function PostsList({ page }: PostsListProps) {
  const { posts, totalPages } = await getPosts(page)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostsList
