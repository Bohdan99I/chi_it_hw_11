'use client'

import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`/posts?page=${currentPage - 1}`}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </Link>
      )}
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/posts?page=${page}`}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page}
        </Link>
      ))}
      
      {currentPage < totalPages && (
        <Link
          href={`/posts?page=${currentPage + 1}`}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </Link>
      )}
    </div>
  )
}

export default Pagination
