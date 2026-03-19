import Sidebar from '@/components/Sidebar'
import NoticeCalculator from '@/components/NoticeCalculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notice Period Calculator — Perth Renter Rights Hub',
  description: 'Calculate how much notice is required for ending a WA tenancy.',
}

export default function NoticeCalcPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-sand">
        <NoticeCalculator />
      </main>
    </div>
  )
}
