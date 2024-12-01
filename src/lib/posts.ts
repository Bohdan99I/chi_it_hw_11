const POSTS_PER_PAGE = 9

export async function getPosts(page: number = 1) {
  // Тут буде ваш API запит до бекенду
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}&limit=${POSTS_PER_PAGE}`)
  const data = await response.json()
  
  return {
    posts: data.posts,
    totalPages: Math.ceil(data.total / POSTS_PER_PAGE)
  }
}
