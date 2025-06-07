import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '曼波配音',
  description: 'github: kxsmm',
  generator: 'github: kxsmm',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
