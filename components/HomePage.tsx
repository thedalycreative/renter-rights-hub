/* ==== HOME PAGE: Renter decision assistant landing (sidebar layout) ==== */
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SituationCard from '@/components/ui/SituationCard'
import ToolCard from '@/components/ui/ToolCard'
import { WrenchIcon, DollarUpIcon, ClipboardIcon, BankIcon, PawIcon, HomeIcon as HomeIcn, ChatIcon, ScaleIcon, CheckCircleIcon } from '@/components/ui/Icons'
import PageFooter from '@/components/ui/PageFooter'

/* ---- Data: Popular situations ---- */
const SITUATIONS = [
  {
    href: '/situations/repairs',
    icon: <WrenchIcon size={18} />,
    title: 'Repairs not being done',
    description: 'Your landlord hasn\'t fixed something. Here\'s what the law says and what to do.',
  },
  {
    href: '/topics/rent',
    icon: <DollarUpIcon size={18} />,
    title: 'Rent increased',
    description: 'Got a rent increase notice? Check if it\'s valid and what your options are.',
  },
  {
    href: '/topics/ending',
    icon: <ClipboardIcon size={18} />,
    title: 'Eviction notice',
    description: 'Received a notice to leave? Understand your rights and required timeframes.',
  },
  {
    href: '/bond',
    icon: <BankIcon size={18} />,
    title: 'Bond not returned',
    description: 'Moving out and worried about your bond? Know the rules and deadlines.',
  },
  {
    href: '/topics/entry',
    icon: <PawIcon size={18} />,
    title: 'Pets',
    description: 'Want a pet or told you can\'t have one? Check what the law actually says.',
  },
  {
    href: '/topics/entry',
    icon: <HomeIcn size={18} />,
    title: 'Starting a lease',
    description: 'New to renting? Know what to check before you sign anything.',
  },
]

/* ---- Data: Quick-start search prompts ---- */
const QUICK_BUTTONS = [
  { label: 'Repairs', query: 'My landlord won\'t fix repairs' },
  { label: 'Rent increase', query: 'I got a rent increase notice' },
  { label: 'Eviction', query: 'I received an eviction notice' },
  { label: 'Bond', query: 'How do I get my bond back' },
]

export default function HomePage() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  function handleSearch(q?: string) {
    const searchQuery = q || query
    if (!searchQuery.trim()) return
    router.push(`/chat?q=${encodeURIComponent(searchQuery.trim())}`)
  }

  return (
    <div className="max-w-3xl mx-auto px-7 py-10 animate-fade-in">

      {/* ══════════ HERO ══════════ */}
      <section className="mb-12">
        {/* Hero visual banner */}
        <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-teal-3 via-teal-2 to-teal-3 shadow-lg shadow-teal/10">
          <div className="absolute inset-0 flex items-center justify-between px-8">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/50">
                  WA Tenancy Law
                </span>
              </div>
              <h1 className="font-serif text-[28px] sm:text-[32px] font-bold text-white leading-[1.15]">
                What&apos;s happening<br />with your rental?
              </h1>
            </div>
            <div className="hidden sm:block w-28 h-28 relative flex-shrink-0 opacity-90">
              <Image
                src="/hero.png"
                alt="Renter illustration"
                width={112}
                height={112}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        <p className="text-[15px] text-ink-3 leading-relaxed mb-6">
          Get clear answers and what to do next — based on the Residential Tenancies Act 1987 (WA).
        </p>

        {/* Search input */}
        <div className="relative mb-4">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            placeholder="Describe your situation…"
            className="w-full p-4 pr-14 rounded-2xl border border-sand-3 bg-white text-[15px] text-ink placeholder:text-ink-4 outline-none focus:ring-2 focus:ring-teal/15 focus:border-teal-md transition-all duration-200 shadow-sm"
          />
          <button
            onClick={() => handleSearch()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal hover:bg-teal-2 text-white rounded-xl flex items-center justify-center transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Quick buttons */}
        <div className="flex flex-wrap gap-2">
          {QUICK_BUTTONS.map(btn => (
            <button
              key={btn.label}
              onClick={() => handleSearch(btn.query)}
              className="followup-chip"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════ POPULAR SITUATIONS ══════════ */}
      <section className="mb-12">
        <div className="mb-5">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-1.5">Common situations</p>
          <h2 className="font-serif text-[22px] font-bold text-teal-3 leading-tight">
            What are you dealing with?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SITUATIONS.map((s, i) => (
            <SituationCard
              key={s.href + s.title}
              href={s.href}
              icon={s.icon}
              title={s.title}
              description={s.description}
              delay={i * 0.05}
            />
          ))}
        </div>
      </section>

      {/* ══════════ QUICK TOOLS ══════════ */}
      <section className="mb-12">
        <div className="mb-5">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-1.5">Quick tools</p>
          <h2 className="font-serif text-[22px] font-bold text-teal-3 leading-tight">
            Get a quick answer
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ToolCard
            href="/tools/checker"
            accent="teal"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2.5L16.5 6v8L10 17.5 3.5 14V6L10 2.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Can they do this?"
            description="Check if what your landlord is doing is actually allowed under WA law."
          />
          <ToolCard
            href="/tools/notice-calculator"
            accent="amber"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="4" width="14" height="13" rx="2" stroke="white" strokeWidth="1.5"/>
                <path d="M3 8h14M7 2.5v3M13 2.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            }
            title="Notice period calculator"
            description="Find out how much notice is required for your situation and lease type."
          />
          <ToolCard
            href="/bond"
            accent="teal"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="5" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5"/>
                <path d="M3 9h14" stroke="white" strokeWidth="1.5"/>
                <path d="M7 13h3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            }
            title="Bond checklist"
            description="Make sure you've covered everything to get your full bond back."
          />
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="mb-12">
        <div className="mb-6">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-1.5">How it works</p>
          <h2 className="font-serif text-[22px] font-bold text-teal-3 leading-tight">
            Three simple steps
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { num: '1', title: 'Tell us what\'s happening', desc: 'Describe your situation or pick from common scenarios. No legal jargon needed.', icon: <ChatIcon size={20} className="text-teal-md" /> },
            { num: '2', title: 'We explain your rights', desc: 'Get a clear, plain-English summary of what the law says — with specific section references.', icon: <ScaleIcon size={20} className="text-teal-md" /> },
            { num: '3', title: 'We show you what to do', desc: 'Step-by-step actions you can take right now, including template letters and key contacts.', icon: <CheckCircleIcon size={20} className="text-teal-md" /> },
          ].map((step, i) => (
            <div key={step.num} className="relative card p-5 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-gradient-to-br from-teal to-teal-2 text-white rounded-xl flex items-center justify-center font-bold text-[14px] shadow-md shadow-teal/15">
                  {step.num}
                </div>
                {step.icon}
              </div>
              <h3 className="font-semibold text-[14.5px] text-ink mb-1.5">{step.title}</h3>
              <p className="text-[13px] text-ink-3 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA: AI Assistant ══════════ */}
      <section className="mb-10">
        <div className="bg-gradient-to-br from-teal-3 via-teal-2 to-teal-3 rounded-2xl p-7 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-amber/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-1.5">AI-Powered</p>
            <h2 className="font-serif text-[22px] font-bold text-white leading-tight mb-2">Need a specific answer?</h2>
            <p className="text-[14px] text-white/70 leading-relaxed mb-5">
              Ask our AI assistant anything about WA tenancy law. It reads the actual Act and explains it in plain English.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-teal-2 font-semibold text-[13px] px-4 py-2.5 rounded-xl hover:bg-sand transition-colors shadow-lg"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C3.69 1 1 3.42 1 6.45c0 1.52.66 2.9 1.72 3.89L2 13l2.84-1.28A6.2 6.2 0 0 0 7 11.9c3.31 0 6-2.42 6-5.45S10.31 1 7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}
