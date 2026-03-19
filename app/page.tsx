import Sidebar from '@/components/Sidebar'
import ChatPage from '@/components/chat/ChatPage'

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <ChatPage />
      </main>
    </div>
  )
}
