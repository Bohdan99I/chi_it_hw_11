export interface Post {
  id: string
  title: string
  description: string
  image: string
  author: string
  createdAt: string
}

export interface Comment {
  id: string
  postId: string
  author: string
  content: string
  createdAt: string
}
