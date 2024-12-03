import ClientLayout from '@/components/ClientLayout'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solana Breakpoint 2025',
  description: 'Join us for the most innovative conference in crypto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}