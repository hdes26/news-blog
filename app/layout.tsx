import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News App',
  description: 'News App - The place you can find good news'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-row h-full bg-[#23162a]`}>
        <div className='noise' />
        {children}
      </body>
    </html>
  )
}
