'use client'
import { useState } from 'react'
import type { BondResult } from '@/lib/types'

export default function BondCalculator() {
  const [weeklyRent, setWeeklyRent] = useState('')
  const [vacateDate, setVacateDate] = useState('')
  const [result, setResult] = useState<BondResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function calculate() {
    const rent = parseFloat(weeklyRent)
    if (!rent || rent <= 0) { setError('Please enter a valid weekly rent.'); return }

    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/bond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weeklyRent: rent, vacateDate: vacateDate || undefined }),
      })
      const data = await res.json()
      setResult(data)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const rent = parseFloat(weeklyRent) || 0
  const isHighRent = rent > 1200

  return (
    <div className="max-w-xl mx-auto px-7 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink-4 mb-1.5">Tool</p>
        <h1 className="font-serif text-[26px] font-semibold text-teal-2 leading-tight mb-2">Bond calculator</h1>
        <p className="text-[14px] text-ink-3 leading-relaxed">
          Calculate the maximum bond your landlord can charge and key dates under the{' '}
          <span className="font-medium text-ink-2">Residential Tenancies Act 1987 (WA)</span>.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white border border-sand-3 rounded-2xl p-6 mb-6">
        <div className="mb-5">
          <label className="block text-[13px] font-medium text-ink-2 mb-2">
            Weekly rent (AUD)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-4 text-[14px]">$</span>
            <input
              type="number"
              value={weeklyRent}
              onChange={e => setWeeklyRent(e.target.value)}
              placeholder="e.g. 650"
              className="w-full border border-sand-3 rounded-[10px] pl-8 pr-4 py-3 text-[15px] text-ink outline-none focus:border-teal-md focus:ring-2 focus:ring-teal/8 transition-all"
            />
          </div>
          {isHighRent && (
            <p className="text-[12px] text-amber-2 mt-1.5">
              High-rent property (&gt;$1,200/wk) — standard 4-week bond applies but no statutory cap.
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-[13px] font-medium text-ink-2 mb-2">
            Vacate date <span className="text-ink-4 font-normal">(optional — for refund estimate)</span>
          </label>
          <input
            type="date"
            value={vacateDate}
            onChange={e => setVacateDate(e.target.value)}
            className="w-full border border-sand-3 rounded-[10px] px-4 py-3 text-[15px] text-ink outline-none focus:border-teal-md focus:ring-2 focus:ring-teal/8 transition-all"
          />
        </div>

        {error && (
          <p className="text-[13px] text-red-600 mb-4">{error}</p>
        )}

        <button
          onClick={calculate}
          disabled={loading}
          className="w-full bg-teal hover:bg-teal-2 disabled:opacity-50 text-white font-medium text-[14.5px] py-3 rounded-[10px] transition-colors"
        >
          {loading ? 'Calculating...' : 'Calculate bond'}
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Max bond */}
          <div className="bg-teal-lt border border-teal/15 rounded-2xl p-5">
            <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-teal-md mb-1">Maximum bond</p>
            <p className="font-serif text-[36px] font-semibold text-teal-2 leading-none mb-1">
              ${result.maxBond.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-[13px] text-teal/80">
              4 weeks × ${result.weeklyRent.toLocaleString('en-AU')} per week — under s.32 RTA 1987
            </p>
          </div>

          {/* Key dates */}
          <div className="grid grid-cols-2 gap-3">
            <DateCard
              label="Landlord must lodge bond by"
              date={result.lodgeBy}
              note="5 days after receiving it (s.32)"
            />
            <DateCard
              label="Estimated bond refund by"
              date={result.refundDeadline}
              note="If uncontested (s.38)"
            />
          </div>

          {/* Info box */}
          <div className="bg-amber-lt border border-amber/20 rounded-xl p-4">
            <p className="text-[12px] font-medium text-amber-2 mb-1.5">Important</p>
            <ul className="text-[13px] text-ink-3 space-y-1 leading-relaxed list-none">
              <li>— Bond must be lodged with the WA Bond Administrator, not held by the landlord.</li>
              <li>— At end of tenancy, landlord has 7 days to lodge a claim or loses the right to claim.</li>
              <li>— You can apply to get your bond back via <strong className="text-ink-2 font-medium">Tenancy WA's bond portal</strong>.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Reference */}
      <div className="mt-8 pt-6 border-t border-sand-3">
        <p className="text-[12px] text-ink-4 leading-relaxed">
          Calculations based on the <em>Residential Tenancies Act 1987 (WA)</em>, sections 32–38.
          For disputes, contact{' '}
          <a href="https://www.commerce.wa.gov.au/consumer-protection" target="_blank" rel="noreferrer"
            className="text-teal underline hover:text-teal-2">
            Consumer Protection WA
          </a>.
        </p>
      </div>
    </div>
  )
}

function DateCard({ label, date, note }: { label: string; date: string; note: string }) {
  return (
    <div className="bg-white border border-sand-3 rounded-xl p-4">
      <p className="text-[11px] text-ink-4 mb-1.5 leading-tight">{label}</p>
      <p className="font-serif text-[16px] font-semibold text-ink-2 leading-tight mb-1">{date}</p>
      <p className="text-[11px] text-ink-4">{note}</p>
    </div>
  )
}
