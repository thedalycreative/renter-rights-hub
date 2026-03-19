/* ==== NOTICE PERIOD CALCULATOR: How much notice is required? ==== */
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ClipboardIcon } from '@/components/ui/Icons'
import PageFooter from '@/components/ui/PageFooter'

/* ---- Types ---- */
type Situation =
  | 'tenant-ending-fixed'
  | 'tenant-ending-periodic'
  | 'landlord-ending-periodic'
  | 'landlord-ending-fixed-breach'
  | 'landlord-ending-periodic-no-reason'
  | 'landlord-sale'

type LeaseType = 'fixed' | 'periodic'

interface Result {
  days: number
  description: string
  law: string
  notes: string[]
}

/* ---- Data: Notice period rules ---- */
function calculateNotice(situation: Situation): Result {
  const rules: Record<Situation, Result> = {
    'tenant-ending-fixed': {
      days: 30,
      description: 'You must give at least 30 days written notice before the end of your fixed-term lease.',
      law: 's.68 RTA 1987',
      notes: [
        'The notice must be in writing.',
        'The end date on your notice cannot be before the lease end date.',
        'If you don\'t give notice, the lease may roll into a periodic tenancy.',
      ],
    },
    'tenant-ending-periodic': {
      days: 21,
      description: 'You must give at least 21 days written notice to end a periodic (month-to-month) tenancy.',
      law: 's.68 RTA 1987',
      notes: [
        'Notice must end on the last day of a rental period (usually the day before rent is due).',
        'Send the notice in writing — email or letter both work.',
        'Keep a copy as proof.',
      ],
    },
    'landlord-ending-periodic': {
      days: 60,
      description: 'Your landlord must give you at least 60 days written notice to end a periodic tenancy without grounds.',
      law: 's.64 RTA 1987',
      notes: [
        'The landlord doesn\'t need to give a reason for a no-grounds termination of a periodic tenancy.',
        'The notice must be in the prescribed form.',
        'You can leave earlier by giving 21 days notice after receiving the landlord\'s notice.',
      ],
    },
    'landlord-ending-fixed-breach': {
      days: 14,
      description: 'If you\'ve breached the lease, the landlord must give you a 14-day written notice to fix the breach before they can proceed.',
      law: 's.62 RTA 1987',
      notes: [
        'You have 14 days to fix ("remedy") the breach.',
        'If the breach is fixed within 14 days, the notice is cancelled.',
        'If it\'s not fixed, the landlord can apply to the court for a termination order.',
        'Serious breaches (e.g. damage, illegal activity) may allow faster action.',
      ],
    },
    'landlord-ending-periodic-no-reason': {
      days: 60,
      description: 'For a no-grounds termination of a periodic tenancy, the landlord must give at least 60 days notice.',
      law: 's.64A RTA 1987',
      notes: [
        'This only applies to periodic (month-to-month) tenancies.',
        'A fixed-term lease cannot be ended early without grounds.',
        'You may be eligible for relocation assistance in some cases.',
      ],
    },
    'landlord-sale': {
      days: 30,
      description: 'If the property is being sold, the landlord must give at least 30 days notice for the tenancy to end (periodic tenancy). A fixed-term lease continues regardless of sale.',
      law: 's.64 RTA 1987',
      notes: [
        'A sale does not automatically end your lease.',
        'If on a fixed-term lease, the new owner must honour it.',
        'For periodic tenancies, 30 days notice is required.',
        'The landlord must provide reasonable access for inspections (with 7 days notice).',
      ],
    },
  }

  return rules[situation]
}

/* ---- Data: Situation options ---- */
const SITUATIONS = [
  { value: 'tenant-ending-fixed' as Situation, label: 'I want to end my fixed-term lease', group: 'tenant' },
  { value: 'tenant-ending-periodic' as Situation, label: 'I want to end my periodic tenancy', group: 'tenant' },
  { value: 'landlord-ending-periodic' as Situation, label: 'Landlord ending my periodic tenancy', group: 'landlord' },
  { value: 'landlord-ending-fixed-breach' as Situation, label: 'Landlord says I breached my lease', group: 'landlord' },
  { value: 'landlord-ending-periodic-no-reason' as Situation, label: 'Landlord ending tenancy — no reason given', group: 'landlord' },
  { value: 'landlord-sale' as Situation, label: 'Property is being sold', group: 'landlord' },
]

export default function NoticeCalculator() {
  const [situation, setSituation] = useState<Situation | ''>('')
  const [result, setResult] = useState<Result | null>(null)

  function calculate() {
    if (!situation) return
    setResult(calculateNotice(situation))
  }

  /* Calculate the target date */
  const targetDate = result
    ? new Date(Date.now() + result.days * 24 * 60 * 60 * 1000).toLocaleDateString('en-AU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <div className="max-w-xl mx-auto px-7 py-10 animate-fade-in">
      {/* Hero banner */}
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-amber-2 via-amber to-amber-2 shadow-lg shadow-amber/10">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 left-6 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 p-7 flex items-center justify-between h-full">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-1 block">Quick Tool</span>
            <h1 className="font-serif text-[26px] sm:text-[30px] font-bold text-white leading-tight">Notice period<br />calculator</h1>
          </div>
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="4" y="6" width="20" height="18" rx="3" stroke="white" strokeWidth="1.6"/>
              <path d="M4 11h20M9 3.5v5M19 3.5v5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
              <circle cx="14" cy="18" r="2" stroke="white" strokeWidth="1.4"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-[14.5px] text-ink-3 leading-relaxed mb-8">
        Find out how much notice is required for your situation under WA tenancy law.
      </p>

      {/* Form */}
      <div className="card p-6 mb-6">
        <div className="mb-5">
          <label className="block text-[13px] font-medium text-ink-2 mb-2">What&apos;s happening?</label>
          <select
            value={situation}
            onChange={e => { setSituation(e.target.value as Situation); setResult(null) }}
            className="w-full border border-sand-3 rounded-xl px-4 py-3.5 text-[15px] text-ink outline-none focus:border-teal-md focus:ring-2 focus:ring-teal/8 transition-all duration-200 bg-white appearance-none cursor-pointer"
          >
            <option value="">Select your situation…</option>
            <optgroup label="I want to leave">
              {SITUATIONS.filter(s => s.group === 'tenant').map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </optgroup>
            <optgroup label="My landlord wants me to leave">
              {SITUATIONS.filter(s => s.group === 'landlord').map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </optgroup>
          </select>
        </div>

        <button
          onClick={calculate}
          disabled={!situation}
          className="w-full bg-gradient-to-r from-teal to-teal-2 hover:from-teal-2 hover:to-teal-3 disabled:opacity-40 text-white font-medium text-[14.5px] py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-teal/10 hover:shadow-lg active:scale-[0.99]"
        >
          Calculate notice period
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="animate-slide-up space-y-4">
          {/* Hero result */}
          <div className="bg-gradient-to-br from-teal-lt via-white to-teal-lt border border-teal/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal/5 rounded-full blur-2xl pointer-events-none" />
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-1.5">
              Minimum notice required
            </p>
            <p className="font-serif text-[44px] font-bold text-teal-2 leading-none mb-2">
              {result.days} <span className="text-[20px] font-sans font-normal text-teal/60">days</span>
            </p>
            <p className="text-[13.5px] text-ink-3 leading-relaxed mb-3">
              {result.description}
            </p>
            <span className="cite-pill">{result.law}</span>
          </div>

          {/* Target date */}
          {targetDate && (
            <div className="card p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber to-amber-2 rounded-xl flex items-center justify-center shadow-md shadow-amber/15 flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="4.5" width="16" height="14.5" rx="2" stroke="white" strokeWidth="1.5"/>
                  <path d="M3 9h16M7 2.5v4M15 2.5v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[12px] text-ink-4 mb-0.5">If you give notice today, the earliest end date is</p>
                <p className="font-serif text-[17px] font-semibold text-ink-2">{targetDate}</p>
              </div>
            </div>
          )}

          {/* Important notes */}
          <div className="bg-gradient-to-br from-amber-lt to-white border border-amber/20 rounded-xl p-5">
            <p className="text-[12.5px] font-semibold text-amber-2 mb-3 flex items-center gap-1.5">
              <ClipboardIcon size={14} /> Important notes
            </p>
            <ul className="space-y-2">
              {result.notes.map((note, i) => (
                <li key={i} className="text-[13px] text-ink-3 leading-relaxed flex gap-2">
                  <span className="text-teal-md mt-0.5 flex-shrink-0">—</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link href="/letters" className="btn-primary flex-1 justify-center">
              Generate notice letter
            </Link>
            <Link href="/chat" className="btn-ghost flex-1 justify-center">
              Ask AI for help
            </Link>
          </div>
        </div>
      )}

      <PageFooter />
    </div>
  )
}
