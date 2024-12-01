import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
})

export const config = {
  matcher: [
    '/posts/new',
    '/api/posts/:path*/comments',
    '/api/posts/create',
  ],
}
