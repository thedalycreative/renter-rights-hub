import Sidebar from '@/components/Sidebar'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-sand">
        <HomePage />
      </main>
    </div>
  )
}
