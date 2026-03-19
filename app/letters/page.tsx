import Sidebar from '@/components/Sidebar'
import LettersPage from '@/components/LettersPage'

export default function Letters() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-sand">
        <LettersPage />
      </main>
    </div>
  )
}
