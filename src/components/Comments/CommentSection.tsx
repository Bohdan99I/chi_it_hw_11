'use client'

import { useState, useEffect } from 'react'
import { Comment } from '@/types/post'

export function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Тут буде запит до API для отримання коментарів
    fetch(`/api/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => {
        setComments(data)
        setIsLoading(false)
      })
  }, [postId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    try {
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      })

      if (res.ok) {
        const comment = await res.json()
        setComments(prev => [...prev, comment])
        setNewComment('')
      }
    } catch (error) {
      console.error('Error posting comment:', error)
    }
  }

  if (isLoading) return <div>Завантаження коментарів...</div>

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Коментарі</h3>
      <div className="space-y-2">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-3 rounded">
            <div className="flex justify-between">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="mt-1">{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Додайте коментар..."
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Додати коментар
        </button>
      </form>
    </div>
  )
}
