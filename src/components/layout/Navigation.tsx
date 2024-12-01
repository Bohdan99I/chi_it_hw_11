'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

export default function Navigation() {
  const { data: session } = useSession()

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                Museum
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/posts"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
              >
                Exhibits
              </Link>
              {session && (
                <Link
                  href="/posts/new"
                  className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
                >
                  Add Exhibit
                </Link>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {session ? (
              <>
                <span className="text-gray-900">{session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
