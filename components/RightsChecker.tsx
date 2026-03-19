/* ==== RIGHTS CHECKER: "Can they do this?" interactive tool ==== */
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, QuestionIcon } from '@/components/ui/Icons'
import PageFooter from '@/components/ui/PageFooter'

/* ---- Data: Rules database ---- */
interface Rule {
  allowed: boolean
  message: string
  law?: string
  action?: string
}

const RULES: Record<string, Rule> = {
  'enter without notice': {
    allowed: false,
    message: 'No — your landlord must give you proper written notice before entering, except in a genuine emergency (e.g. fire, flood, gas leak).',
    law: 's.46 RTA 1987',
    action: 'If your landlord has entered without notice, document when it happened and contact Consumer Protection WA.',
  },
  'increase rent mid-lease': {
    allowed: false,
    message: 'No — rent cannot be increased during a fixed-term lease unless the lease specifically allows it. Even then, they must follow strict rules.',
    law: 's.30 RTA 1987',
    action: 'If you\'ve received a mid-lease rent increase, check your lease agreement. If it doesn\'t allow increases, the notice is invalid.',
  },
  'increase rent': {
    allowed: true,
    message: 'Yes — but they must give you at least 60 days written notice, and rent can only be increased once every 6 months.',
    law: 's.30 RTA 1987',
    action: 'Check the date on your notice. If it\'s less than 60 days, the increase isn\'t valid yet.',
  },
  'keep my bond without reason': {
    allowed: false,
    message: 'No — your landlord cannot keep your bond without a valid reason. They must lodge a claim within 7 days of the tenancy ending, or they lose the right to claim.',
    law: 's.38 RTA 1987',
    action: 'Apply for your bond refund through the WA Bond Administrator. If the landlord disputes it, contact Consumer Protection WA.',
  },
  'evict without notice': {
    allowed: false,
    message: 'No — your landlord must give you proper written notice before ending a tenancy. The required notice period depends on the reason and type of tenancy.',
    law: 's.64 RTA 1987',
    action: 'If you\'ve received a verbal-only eviction, it\'s not legally valid. Ask for the notice in writing.',
  },
  'inspect anytime': {
    allowed: false,
    message: 'No — inspections are limited to a maximum of 4 per year, and they must give you at least 7 days written notice for each one.',
    law: 's.46 RTA 1987',
    action: 'Keep a record of all inspections. If there have been more than 4 this year, you can decline the next one.',
  },
  'ban pets': {
    allowed: true,
    message: 'Yes — but only if the lease includes a no-pets clause. If the lease is silent on pets, you can request permission. The landlord must respond within 14 days or the request is deemed approved.',
    law: 's.42B RTA 1987',
    action: 'Put your pet request in writing and send it to your landlord. Keep a copy as evidence.',
  },
  'charge for normal wear and tear': {
    allowed: false,
    message: 'No — fair wear and tear (carpet wearing out, paint fading, etc.) is always the landlord\'s responsibility. They cannot deduct this from your bond.',
    law: 's.42 RTA 1987',
    action: 'If bond deductions include wear and tear items, dispute the claim through the WA Bond Administrator.',
  },
  'change locks without telling me': {
    allowed: false,
    message: 'No — neither party can change locks without the other\'s consent. If locks are changed, both parties must be given copies of the new keys.',
    law: 's.45 RTA 1987',
    action: 'If your landlord has changed the locks without your knowledge, this may be considered a breach. Contact Consumer Protection WA.',
  },
  'refuse to do repairs': {
    allowed: false,
    message: 'No — your landlord is legally required to maintain the property in a reasonable state of repair. This includes structural issues, plumbing, electrical, and appliances listed in the lease.',
    law: 's.42 RTA 1987',
    action: 'Report the repair in writing. If they don\'t act within 14 days, you can apply for a Repair Order from the Magistrates Court.',
  },
  'enter for inspections on weekends': {
    allowed: true,
    message: 'Yes — inspections can happen on weekdays or weekends, but must be at a reasonable time and with at least 7 days written notice. You can negotiate the timing.',
    law: 's.46 RTA 1987',
    action: 'If the proposed time doesn\'t work, respond in writing suggesting alternatives.',
  },
  'ask me to pay for a plumber': {
    allowed: false,
    message: 'No — unless you caused the damage yourself. Landlords are responsible for maintaining the plumbing and covering repair costs for normal issues.',
    law: 's.42 RTA 1987',
    action: 'If your landlord asks you to pay for repairs you didn\'t cause, decline in writing and reference their obligations under the Act.',
  },
}

/* ---- Data: Common questions for quick selection ---- */
const COMMON_QUESTIONS = [
  { label: 'Enter without notice', key: 'enter without notice' },
  { label: 'Increase rent mid-lease', key: 'increase rent mid-lease' },
  { label: 'Keep my bond', key: 'keep my bond without reason' },
  { label: 'Ban pets', key: 'ban pets' },
  { label: 'Refuse repairs', key: 'refuse to do repairs' },
  { label: 'Inspect anytime', key: 'inspect anytime' },
  { label: 'Charge for wear & tear', key: 'charge for normal wear and tear' },
  { label: 'Evict without notice', key: 'evict without notice' },
]

export default function RightsChecker() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<{ rule: Rule; key: string } | null>(null)
  const [notFound, setNotFound] = useState(false)

  function check(input?: string) {
    const q = (input || query).toLowerCase().trim()
    if (!q) return

    setNotFound(false)
    setResult(null)

    /* Find best matching rule */
    const match = Object.entries(RULES).find(([key]) => {
      const words = key.split(' ')
      return words.every(w => q.includes(w)) || q.includes(key)
    })

    if (match) {
      setResult({ rule: match[1], key: match[0] })
      setQuery(input || query)
    } else {
      /* Fuzzy fallback: check for keyword matches */
      const fuzzy = Object.entries(RULES).find(([key]) => {
        const words = key.split(' ')
        const matchCount = words.filter(w => q.includes(w)).length
        return matchCount >= Math.ceil(words.length / 2)
      })

      if (fuzzy) {
        setResult({ rule: fuzzy[1], key: fuzzy[0] })
        setQuery(input || query)
      } else {
        setNotFound(true)
      }
    }
  }

  return (
    <div className="max-w-xl mx-auto px-7 py-10 animate-fade-in">
      {/* Hero banner */}
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-teal-3 via-teal-2 to-teal shadow-lg shadow-teal/10">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 left-6 w-28 h-28 bg-amber/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 p-7 flex items-center justify-between h-full">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-1 block">Quick Tool</span>
            <h1 className="font-serif text-[26px] sm:text-[30px] font-bold text-white leading-tight">Can they do this?</h1>
          </div>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 3.5L23 8.5v11L14 24.5 5 19.5v-11L14 3.5Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M10 14l3 3 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-[14.5px] text-ink-3 leading-relaxed mb-8">
        Type what your landlord is doing (or pick from common questions) and we&apos;ll tell you if it&apos;s allowed under WA law.
      </p>

      {/* Search input */}
      <div className="card p-6 mb-6">
        <label className="block text-[13px] font-medium text-ink-2 mb-2">
          Can my landlord…
        </label>
        <div className="relative mb-4">
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setResult(null); setNotFound(false) }}
            onKeyDown={e => e.key === 'Enter' && check()}
            placeholder="e.g. enter without notice, increase rent, refuse repairs…"
            className="w-full border border-sand-3 rounded-xl px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-4 outline-none focus:border-teal-md focus:ring-2 focus:ring-teal/8 transition-all duration-200"
          />
        </div>

        <button
          onClick={() => check()}
          className="w-full bg-gradient-to-r from-teal to-teal-2 hover:from-teal-2 hover:to-teal-3 text-white font-medium text-[14.5px] py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-teal/10 hover:shadow-lg active:scale-[0.99]"
        >
          Check my rights
        </button>
      </div>

      {/* Common questions */}
      <div className="mb-8">
        <p className="text-[11.5px] font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3">Common questions</p>
        <div className="flex flex-wrap gap-2">
          {COMMON_QUESTIONS.map(q => (
            <button
              key={q.key}
              onClick={() => { setQuery(`Can my landlord ${q.label.toLowerCase()}?`); check(q.key) }}
              className="followup-chip"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="animate-slide-up space-y-4">
          {/* Answer card */}
          <div className={`border rounded-2xl p-6 relative overflow-hidden ${
            result.rule.allowed
              ? 'bg-gradient-to-br from-amber-lt to-white border-amber/20'
              : 'bg-gradient-to-br from-teal-lt to-white border-teal/15'
          }`}>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal/5 rounded-full blur-2xl pointer-events-none" />

            {/* Verdict */}
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${
                result.rule.allowed
                  ? 'bg-gradient-to-br from-amber to-amber-2 shadow-amber/20'
                  : 'bg-gradient-to-br from-teal to-teal-2 shadow-teal/20'
              }`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  {result.rule.allowed ? (
                    <path d="M10 2L1.5 17h17L10 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  ) : (
                    <><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/><path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></>
                  )}
                </svg>
              </div>
              <div>
                <p className={`text-[12px] font-semibold uppercase tracking-wider mb-1 ${
                  result.rule.allowed ? 'text-amber-2' : 'text-teal-2'
                }`}>
                  {result.rule.allowed ? 'Yes, with conditions' : 'No, this is not allowed'}
                </p>
                <p className="text-[15px] text-ink leading-relaxed font-medium">
                  {result.rule.message}
                </p>
              </div>
            </div>

            {/* Law reference */}
            {result.rule.law && (
              <div className="mb-3">
                <span className="cite-pill">{result.rule.law}</span>
              </div>
            )}

            {/* What to do */}
            {result.rule.action && (
              <div className="bg-white/60 border border-sand-3/50 rounded-xl p-4 mt-4">
                <p className="text-[12px] font-semibold text-ink-2 mb-1.5 flex items-center gap-1.5">
                  <ArrowRightIcon size={14} /> What you should do
                </p>
                <p className="text-[13.5px] text-ink-3 leading-relaxed">{result.rule.action}</p>
              </div>
            )}
          </div>

          {/* Further help link */}
          <div className="flex gap-3">
            <Link href="/chat" className="btn-primary flex-1 justify-center">
              Ask AI for more detail
            </Link>
            <Link href="/letters" className="btn-ghost flex-1 justify-center">
              Generate a letter
            </Link>
          </div>
        </div>
      )}

      {/* Not found */}
      {notFound && (
        <div className="animate-slide-up card p-6 text-center">
          <div className="mb-2 text-ink-4"><QuestionIcon size={24} /></div>
          <p className="text-[15px] text-ink-2 font-medium mb-2">We don&apos;t have a quick answer for that one</p>
          <p className="text-[13.5px] text-ink-3 mb-4">
            Try rephrasing, or ask our AI assistant for a detailed answer based on the full Act.
          </p>
          <Link href="/chat" className="btn-primary inline-flex">
            Ask AI assistant
          </Link>
        </div>
      )}

      <PageFooter />
    </div>
  )
}
