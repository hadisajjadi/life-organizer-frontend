import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './_components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Life Organizer',
  description: 'Life Organizer app to help you organize your life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
