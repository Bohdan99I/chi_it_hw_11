import { Post } from '@/types/post'

interface GetPostsParams {
  page: number
  limit: number
}

export async function getPosts({ page, limit }: GetPostsParams) {
  const start = (page - 1) * limit
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_start=${start}&_limit=${limit}`)
    const posts = await response.json()
    
    const totalResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const allPosts = await totalResponse.json()
    
    return {
      posts,
      total: allPosts.length
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return {
      posts: [],
      total: 0
    }
  }
}

export async function createPost(postData: Partial<Post>) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    return await response.json()
  } catch (error) {
    console.error('Error creating post:', error)
    throw error
  }
}

export async function getPostById(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching post:', error)
    throw error
  }
}
