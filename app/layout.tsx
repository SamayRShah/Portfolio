import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Providers from '@/components/providers'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin']
})

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Samay R. Shah | Personal Portfolio',
  description: 'Samay is a software developer with 6 years experience'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
