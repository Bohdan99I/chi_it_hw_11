import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import { getServerSession } from 'next-auth'
import { SessionProvider } from '@/components/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Музей',
  description: 'Музейна колекція експонатів',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="uk">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navigation />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
