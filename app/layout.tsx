import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gist 1 Sec',
  description: 'Quick and easy note taking',
  icons: {
    icon: '/one.png',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
