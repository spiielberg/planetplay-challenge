import type { Metadata } from 'next'
import { Rubik, Sora } from 'next/font/google'
import './globals.css'

const soraSans = Sora({
  variable: '--font-sora-sans',
  subsets: ['latin'],
})

const rubikSans = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Planetplay Challenge',
  description: 'A Next.js e-commerce application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${soraSans.variable} ${rubikSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
