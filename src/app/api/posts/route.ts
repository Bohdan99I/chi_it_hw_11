import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import connectDB from '@/lib/mongodb'
import Post from '@/models/Post'

export async function POST(req: Request) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const { title, description, image } = await req.json()

    if (!title || !description || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await connectDB()

    const post = await Post.create({
      title,
      description,
      image,
      author: session.user.id,
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Error creating post' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '9')
    const skip = (page - 1) * limit

    const total = await Post.countDocuments()
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('author', 'name')

    return NextResponse.json({
      posts,
      total,
      totalPages: Math.ceil(total / limit)
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Error fetching posts' },
      { status: 500 }
    )
  }
}
