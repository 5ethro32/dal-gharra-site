import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Dall Gharra — Finance, AI & Branch Transformation',
    template: '%s — Dall Gharra',
  },
  description:
    'Dall Gharra is a banking professional with 20 years at Lloyds Banking Group, focused on branch transformation, GenAI in financial services, and the future of high-street banking.',
  openGraph: {
    title: 'Dall Gharra — Finance, AI & Branch Transformation',
    description:
      'Banking professional with 20 years at Lloyds Banking Group. Writing about branch transformation, GenAI, and the future of financial services.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Dall Gharra — Finance, AI & Branch Transformation',
    description:
      'Banking professional with 20 years at Lloyds Banking Group. Writing about branch transformation, GenAI, and the future of financial services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
