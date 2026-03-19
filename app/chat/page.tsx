/* ==== CHAT PAGE: AI assistant with sidebar layout ==== */
import Sidebar from '@/components/Sidebar'
import ChatPage from '@/components/chat/ChatPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Rights Assistant — Perth Renter Rights Hub',
  description: 'Ask any question about WA tenancy law and get a plain-English answer.',
}

export default function Chat() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <ChatPage />
      </main>
    </div>
  )
}
