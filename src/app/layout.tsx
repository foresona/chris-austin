import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPageContent } from '@/lib/getPageContent'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Chris Austin PR Agency - Strategic Public Relations & Brand Storytelling',
  description:
    'Leading PR agency specializing in brand storytelling, media relations, and strategic communications that drive results.',
  colorScheme: 'light',
  other: {
    'color-scheme': 'light only',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get contact data for footer and brand name for header
  const contactData = getPageContent('contact')
  const homeData = getPageContent('home')

  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header brandName={homeData.brandName || contactData.footerBrandName} />
        <main className="pt-20">{children}</main>
        <Footer contactData={contactData} />
      </body>
    </html>
  )
}
