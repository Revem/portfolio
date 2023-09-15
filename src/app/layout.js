import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Victor Picon',
  description: "An fullstack developer by passion.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth bg-black text-white'>
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
