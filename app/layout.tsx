import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perth Renter Rights Hub',
  description: 'Plain-English WA tenancy law — powered by the Residential Tenancies Act 1987',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
