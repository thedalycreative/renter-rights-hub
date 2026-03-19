/* ==== CHAT PAGE: Main conversation container ==== */
'use client'
import { useState, useRef, useEffect } from 'react'
import Topbar from './Topbar'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import WelcomeCard from './WelcomeCard'
import type { Message, Source } from '@/lib/types'

/* ---- Types: Extend Message with source/warning data ---- */
export interface MessageWithSources extends Message {
  sources?: Source[]
  isWarning?: boolean
}

/* ---- Data: Hint prompts for the input bar ---- */
const HINTS = [
  'Can my landlord increase rent mid-lease?',
  'What repairs is my landlord responsible for?',
  'How much notice do I need to give to end my lease?',
]

/* ---- ChatPage: Stateful conversation component ---- */
export default function ChatPage() {
  const [messages, setMessages] = useState<MessageWithSources[]>([])
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  /* Auto-scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  /* Send: POST question to /api/ask and append response */
  async function handleSend(question: string) {
    if (!question.trim() || loading) return

    setMessages(prev => [...prev, { role: 'user', content: question }])
    setLoading(true)

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }))
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, conversationHistory: history }),
      })

      const data = await res.json()

      /* Flag responses about serious issues for visual emphasis */
      const isWarning = /harass|illegal entry|unlawful|s\.80|magistrate/i.test(data.answer)

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.answer, sources: data.sources, isWarning },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again or contact Consumer Protection WA directly.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ChatPage: Fixed top bar */}
      <Topbar />

      {/* ChatPage: Scrollable message area */}
      <div className="flex-1 overflow-y-auto px-7 pt-7 pb-0">
        {/* Show welcome card when no messages */}
        {messages.length === 0 && <WelcomeCard onHint={handleSend} />}

        {/* Message thread */}
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} onFollowUp={handleSend} />
        ))}

        {/* Loading: Thinking indicator */}
        {loading && (
          <div className="flex gap-3 mb-6 animate-fade-in">
            {/* Loading: Bot avatar */}
            <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-teal to-teal-2 flex items-center justify-center flex-shrink-0 shadow-md shadow-teal/10">
              <HexIcon />
            </div>
            {/* Loading: Animated thinking bubble */}
            <div className="flex items-center gap-2.5 bg-white border border-sand-3 rounded-2xl rounded-bl-[4px] px-[18px] py-3 text-[13px] text-ink-4 shadow-sm">
              <ThinkingDots />
              <span>Looking up WA tenancy law…</span>
            </div>
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={bottomRef} className="h-4" />
      </div>

      {/* ChatPage: Fixed input bar */}
      <ChatInput onSend={handleSend} loading={loading} hints={HINTS} />
    </>
  )
}

/* ---- HexIcon: Small hexagon SVG for bot avatar ---- */
function HexIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L13 4.5V11.5L8 14.5L3 11.5V4.5L8 1.5Z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

/* ---- ThinkingDots: Bouncing dots animation ---- */
function ThinkingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 bg-teal-md rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '1s' }}
        />
      ))}
    </div>
  )
}
