import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import connectDB from '@/lib/mongodb'
import Post from '@/models/Post'
import PostCard from '@/components/Posts/PostCard'

export default async function MyPosts() {
  const session = await getServerSession()
  
  if (!session) {
    redirect('/auth/signin')
  }

  await connectDB()
  
  const posts = await Post.find({ author: session.user.id })
    .sort({ createdAt: -1 })
    .populate('author', 'name')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Мої пости</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">У вас ще немає постів</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
