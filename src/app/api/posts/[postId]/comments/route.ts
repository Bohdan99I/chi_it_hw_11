import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params
  
  try {
    // Тут буде логіка отримання коментарів з бази даних
    const comments = [] // Замініть на реальні дані
    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params
  
  try {
    const body = await request.json()
    // Тут буде логіка збереження коментаря в базі даних
    const comment = {
      id: Date.now().toString(),
      postId,
      content: body.content,
      author: 'User', // Замініть на реального користувача
      createdAt: new Date().toISOString()
    }
    
    return NextResponse.json(comment)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    )
  }
}
