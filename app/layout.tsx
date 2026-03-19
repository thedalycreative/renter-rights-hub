/* ==== ROOT LAYOUT ==== */
import type { Metadata } from 'next'
import './globals.css'

/* ---- Meta: SEO + Open Graph ---- */
export const metadata: Metadata = {
  title: 'Perth Renter Rights Hub — WA Tenancy Law Made Simple',
  description: 'Plain-English WA tenancy law assistant. Know your rights as a renter in Western Australia — powered by the Residential Tenancies Act 1987.',
  keywords: ['WA tenancy law', 'Perth renter rights', 'bond calculator', 'tenant rights', 'Western Australia'],
  authors: [{ name: 'Tim — The Daly Creative' }],
  openGraph: {
    title: 'Perth Renter Rights Hub',
    description: 'Know your rights as a WA renter. AI-powered tenancy law assistant.',
    type: 'website',
    locale: 'en_AU',
  },
}

/* ---- Root HTML shell ---- */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      {/* Head: Preload Google Fonts for faster LCP */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>" />
        <meta name="theme-color" content="#1A5C54" />
      </head>
      {/* Body: Sand background with smooth scrolling */}
      <body className="bg-sand text-ink font-sans selection:bg-teal/20 selection:text-teal-3">
        {children}
      </body>
    </html>
  )
}
