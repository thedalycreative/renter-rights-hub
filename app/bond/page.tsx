import Sidebar from '@/components/Sidebar'
import BondCalculator from '@/components/BondCalculator'

export default function BondPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-sand">
        <BondCalculator />
      </main>
    </div>
  )
}
