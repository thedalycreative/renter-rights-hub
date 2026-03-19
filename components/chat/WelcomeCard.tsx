interface Props {
  onHint: (q: string) => void
}

const STATS = [
  { num: '7',  label: 'days notice for inspection' },
  { num: '4×', label: 'max inspections per year' },
  { num: '28', label: 'days to return bond' },
]

const QUICK_START = [
  'Can my landlord enter without notice?',
  'How do I get my bond back?',
  'What repairs must my landlord fix?',
  'How much notice do I need to leave?',
]

export default function WelcomeCard({ onHint }: Props) {
  return (
    <div className="bg-white border border-sand-3 rounded-2xl p-5 mb-7">
      <div className="flex items-center gap-3.5 mb-5 border-b border-sand-3 pb-4">
        <div className="w-11 h-11 bg-gradient-to-br from-teal-2 to-teal rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-md shadow-teal-2/10">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L16 5.5V13.5L10 17L4 13.5V5.5L10 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M10 8v4M8 10h4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <h1 className="font-serif text-[18px] font-bold text-teal-3 tracking-wide drop-shadow-sm">Perth Renter Rights Hub</h1>
          <div className="text-[13px] text-ink-4 mt-0.5 tracking-wide font-medium">Powered by the Residential Tenancies Act 1987 (WA)</div>
        </div>
      </div>

      <p className="text-[13.5px] text-ink-3 leading-relaxed mb-4">
        Ask anything about your rights as a WA tenant. Answers cite real legislation so you know exactly where you stand.
      </p>

      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {STATS.map(s => (
          <div key={s.num} className="bg-sand border border-sand-3 rounded-[10px] px-3.5 py-3">
            <div className="font-serif text-[22px] font-semibold text-teal-2 leading-none mb-1">{s.num}</div>
            <div className="text-[11px] text-ink-4 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {QUICK_START.map(q => (
          <button key={q} className="followup-chip" onClick={() => onHint(q)}>
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}
