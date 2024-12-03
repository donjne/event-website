"use client"
import Navigation from '@/components/Navigation'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      {children}
    </>
  )
}