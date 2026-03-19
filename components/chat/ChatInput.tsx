'use client'
import { useState, useRef } from 'react'

interface Props {
  onSend: (q: string) => void
  loading: boolean
  hints: string[]
}

export default function ChatInput({ onSend, loading, hints }: Props) {
  const [value, setValue] = useState('')
  const taRef = useRef<HTMLTextAreaElement>(null)

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  function submit() {
    const q = value.trim()
    if (!q || loading) return
    onSend(q)
    setValue('')
    if (taRef.current) taRef.current.style.height = 'auto'
  }

  function autoResize() {
    if (!taRef.current) return
    taRef.current.style.height = 'auto'
    taRef.current.style.height = Math.min(taRef.current.scrollHeight, 160) + 'px'
  }

  return (
    <div className="px-7 pt-4 pb-5 border-t border-sand-3 bg-sand flex-shrink-0">
      <div className="bg-white border-[1.5px] border-sand-3 rounded-2xl overflow-hidden focus-within:border-teal-md focus-within:ring-2 focus-within:ring-teal/8 transition-all">
        <textarea
          ref={taRef}
          value={value}
          onChange={e => { setValue(e.target.value); autoResize() }}
          onKeyDown={handleKey}
          placeholder="Ask about your rights as a WA tenant..."
          rows={2}
          className="w-full border-none outline-none bg-transparent font-sans text-[14.5px] text-ink px-[18px] pt-3.5 pb-2 resize-none min-h-[52px] max-h-40 leading-relaxed placeholder:text-ink-4"
        />
        <div className="flex items-center justify-between px-2.5 pb-2.5 pl-[18px]">
          <div className="flex gap-1.5">
            {hints.map(h => (
              <button
                key={h}
                onClick={() => { setValue(h); taRef.current?.focus() }}
                className="text-[12px] text-ink-4 bg-sand border border-sand-3 px-2.5 py-[3px] rounded-full hover:text-teal-2 hover:border-teal-md transition-colors"
              >
                {h.split(' ').slice(0, 3).join(' ')}…
              </button>
            ))}
          </div>
          <button
            onClick={submit}
            disabled={loading || !value.trim()}
            className="w-[38px] h-[38px] rounded-[10px] bg-teal hover:bg-teal-2 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8L3 3l2.5 5L3 13l10-5z" fill="#fff" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
