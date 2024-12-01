'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface Comment {
  id: string
  content: string
  author: string
  createdAt: string
}

interface CommentsProps {
  postId: string
}

export default function Comments({ postId }: CommentsProps) {
  const { data: session } = useSession()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchComments()
  }, [postId])

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}/comments`)
      const data = await response.json()
      setComments(data)
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!session) return
    
    setIsLoading(true)
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      })

      if (response.ok) {
        setNewComment('')
        fetchComments()
      }
    } catch (error) {
      console.error('Error posting comment:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      
      {session && (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded-md"
            rows={3}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{comment.author}</p>
                <p className="text-gray-600 text-sm">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="mt-2">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
