import AddPostForm from '@/components/Posts/AddPostForm'

export default function NewPost() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      <AddPostForm />
    </div>
  )
}
