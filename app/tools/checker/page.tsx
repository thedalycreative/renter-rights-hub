import Sidebar from '@/components/Sidebar'
import RightsChecker from '@/components/RightsChecker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Can They Do This? — Perth Renter Rights Hub',
  description: 'Check if what your landlord is doing is allowed under WA tenancy law.',
}

export default function CheckerPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-sand">
        <RightsChecker />
      </main>
    </div>
  )
}
