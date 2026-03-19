'use client'
import { useState, useRef, useEffect } from 'react'
import Topbar from './Topbar'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import WelcomeCard from './WelcomeCard'
import type { Message, Source } from '@/lib/types'

export interface MessageWithSources extends Message {
  sources?: Source[]
  isWarning?: boolean
}

const HINTS = [
  'Can my landlord increase rent mid-lease?',
  'What repairs is my landlord responsible for?',
  'How much notice do I need to give to end my lease?',
]

export default function ChatPage() {
  const [messages, setMessages] = useState<MessageWithSources[]>([])
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function handleSend(question: string) {
    if (!question.trim() || loading) return

    const userMessage: MessageWithSources = { role: 'user', content: question }
    setMessages(prev => [...prev, userMessage])
    setLoading(true)

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }))
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, conversationHistory: history }),
      })

      const data = await res.json()

      // Heuristic: flag responses about harassment/illegal entry
      const isWarning = /harass|illegal entry|unlawful|s\.80|magistrate/i.test(data.answer)

      setMessages(prev => [
        ...prev,
        {
          role:      'assistant',
          content:   data.answer,
          sources:   data.sources,
          isWarning,
        },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role:    'assistant',
          content: 'Sorry, something went wrong. Please try again or contact Consumer Protection WA directly.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Topbar />

      <div className="flex-1 overflow-y-auto px-7 pt-7 pb-0">
        {messages.length === 0 && <WelcomeCard onHint={handleSend} />}

        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} onFollowUp={handleSend} />
        ))}

        {loading && (
          <div className="flex gap-3 mb-6">
            <div className="w-[34px] h-[34px] rounded-full bg-teal flex items-center justify-center flex-shrink-0">
              <HexIcon />
            </div>
            <div className="flex items-center gap-2 bg-white border border-sand-3 rounded-2xl rounded-bl-[4px] px-[18px] py-3 text-[13px] text-ink-4">
              <ThinkingDots />
              Looking up WA tenancy law...
            </div>
          </div>
        )}

        <div ref={bottomRef} className="h-4" />
      </div>

      <ChatInput onSend={handleSend} loading={loading} hints={HINTS} />
    </>
  )
}

function HexIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L13 4.5V11.5L8 14.5L3 11.5V4.5L8 1.5Z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

function ThinkingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 bg-ink-4 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1.2s' }}
        />
      ))}
    </div>
  )
}
