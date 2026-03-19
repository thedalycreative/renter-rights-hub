/* ==== BOND CALCULATOR: Max bond + key dates tool ==== */
'use client'
import { useState } from 'react'
import type { BondResult } from '@/lib/types'

export default function BondCalculator() {
  const [weeklyRent, setWeeklyRent] = useState('')
  const [vacateDate, setVacateDate] = useState('')
  const [result, setResult] = useState<BondResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  /* Calculate: POST rent to /api/bond */
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
      setResult(await res.json())
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const rent = parseFloat(weeklyRent) || 0
  const isHighRent = rent > 1200

  return (
    <div className="max-w-xl mx-auto px-7 py-10 animate-fade-in">
      {/* Header: Page title + description */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-2">Tool</p>
        <h1 className="font-serif text-[28px] font-bold text-teal-3 leading-tight mb-2">Bond calculator</h1>
        <p className="text-[14.5px] text-ink-3 leading-relaxed">
          Calculate the maximum bond your landlord can charge and key dates under the{' '}
          <span className="font-medium text-ink-2">Residential Tenancies Act 1987 (WA)</span>.
        </p>
      </div>

      {/* Form: Input card */}
      <div className="card p-6 mb-6">
        {/* Field: Weekly rent */}
        <div className="mb-5">
          <label className="block text-[13px] font-medium text-ink-2 mb-2">Weekly rent (AUD)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-4 text-[14px] font-medium">$</span>
            <input
              type="number"
              value={weeklyRent}
              onChange={e => setWeeklyRent(e.target.value)}
              placeholder="e.g. 650"
              className="w-full border border-sand-3 rounded-[10px] pl-9 pr-4 py-3 text-[15px] text-ink outline-none focus:border-teal-md focus:ring-2 focus:ring-teal/8 transition-all duration-200"
            />
          </div>
          {/* High rent warning */}
          {isHighRent && (
            <p className="text-[12px] text-amber-2 mt-2 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3.5v3M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              High-rent property (&gt;$1,200/wk) — standard 4-week bond applies but no statutory cap.
            </p>
          )}
        </div>

        {/* Field: Vacate date */}
        <div className="mb-6">
          <label className="block text-[13px] font-medium text-ink-2 mb-2">
            Vacate date <span className="text-ink-4 font-normal">(optional — for refund estimate)</span>
          </label>
          <input
            type="date"
            value={vacateDate}
            onChange={e => setVacateDate(e.target.value)}
            className="w-full border border-sand-3 rounded-[10px] px-4 py-3 text-[15px] text-ink outline-none focus:border-teal-md focus:ring-2 focus:ring-teal/8 transition-all duration-200"
          />
        </div>

        {/* Error message */}
        {error && <p className="text-[13px] text-red-600 mb-4">{error}</p>}

        {/* Submit button */}
        <button
          onClick={calculate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-teal to-teal-2 hover:from-teal-2 hover:to-teal-3 disabled:opacity-40 text-white font-medium text-[14.5px] py-3.5 rounded-[10px] transition-all duration-200 shadow-md shadow-teal/10 hover:shadow-lg hover:shadow-teal/15 active:scale-[0.99]"
        >
          {loading ? 'Calculating…' : 'Calculate bond'}
        </button>
      </div>

      {/* Results: Show after calculation */}
      {result && (
        <div className="space-y-4 animate-slide-up">
          {/* Result: Max bond hero card */}
          <div className="bg-gradient-to-br from-teal-lt via-white to-teal-lt border border-teal/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal/5 rounded-full blur-2xl pointer-events-none" />
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-1.5">Maximum bond</p>
            <p className="font-serif text-[40px] font-bold text-teal-2 leading-none mb-1.5">
              ${result.maxBond.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-[13.5px] text-teal/70">
              4 weeks × ${result.weeklyRent.toLocaleString('en-AU')} per week — under s.32 RTA 1987
            </p>
          </div>

          {/* Result: Key dates grid */}
          <div className="grid grid-cols-2 gap-3">
            <DateCard label="Landlord must lodge bond by" date={result.lodgeBy} note="5 days after receiving it (s.32)" icon="📅" />
            <DateCard label="Estimated bond refund by" date={result.refundDeadline} note="If uncontested (s.38)" icon="💸" />
          </div>

          {/* Result: Important info box */}
          <div className="bg-gradient-to-br from-amber-lt to-white border border-amber/20 rounded-xl p-5">
            <p className="text-[12.5px] font-semibold text-amber-2 mb-2 flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/><path d="M7 4v4M7 10v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              Important
            </p>
            <ul className="text-[13px] text-ink-3 space-y-1.5 leading-relaxed list-none">
              <li>— Bond must be lodged with the WA Bond Administrator, not held by the landlord.</li>
              <li>— At end of tenancy, landlord has 7 days to lodge a claim or loses the right to claim.</li>
              <li>— You can apply to get your bond back via <strong className="text-ink-2 font-medium">Tenancy WA&apos;s bond portal</strong>.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Footer: Reference note */}
      <div className="mt-8 pt-6 border-t border-sand-3">
        <p className="text-[12px] text-ink-4 leading-relaxed">
          Calculations based on the <em>Residential Tenancies Act 1987 (WA)</em>, sections 32–38.
          For disputes, contact{' '}
          <a href="https://www.commerce.wa.gov.au/consumer-protection" target="_blank" rel="noreferrer" className="text-teal underline hover:text-teal-2 transition-colors">
            Consumer Protection WA
          </a>.
        </p>
      </div>
    </div>
  )
}

/* ---- DateCard: Key date display sub-component ---- */
function DateCard({ label, date, note, icon }: { label: string; date: string; note: string; icon: string }) {
  return (
    <div className="card p-4 hover:border-teal-md/20">
      <div className="text-[16px] mb-1">{icon}</div>
      <p className="text-[11px] text-ink-4 mb-1.5 leading-tight">{label}</p>
      <p className="font-serif text-[17px] font-semibold text-ink-2 leading-tight mb-1">{date}</p>
      <p className="text-[11px] text-ink-4">{note}</p>
    </div>
  )
}
