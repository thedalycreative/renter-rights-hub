/* ==== WELCOME CARD: Landing state for chat ==== */
interface Props {
  onHint: (q: string) => void
}

/* ---- Data: Key stats from the Act ---- */
const STATS = [
  { num: '7',  unit: 'days',   label: 'notice for inspection',    icon: '📋' },
  { num: '4×', unit: '',       label: 'max inspections per year',  icon: '🔑' },
  { num: '28', unit: 'days',   label: 'to return your bond',       icon: '💰' },
]

/* ---- Data: Quick-start prompts ---- */
const QUICK_START = [
  'Can my landlord enter without notice?',
  'How do I get my bond back?',
  'What repairs must my landlord fix?',
  'How much notice do I need to leave?',
]

export default function WelcomeCard({ onHint }: Props) {
  return (
    <div className="card p-6 mb-7 animate-fade-in relative overflow-hidden">
      {/* WelcomeCard: Decorative gradient blob */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-teal/5 to-amber/5 rounded-full blur-3xl pointer-events-none" />

      {/* WelcomeCard: Header with logo */}
      <div className="flex items-center gap-3.5 mb-5 border-b border-sand-3 pb-4 relative">
        {/* Header: Hex icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-teal-2 to-teal rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal/15 border border-teal-md/30">
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L16 5.5V13.5L10 17L4 13.5V5.5L10 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 8v4M8 10h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Header: Title + subtitle */}
        <div>
          <h1 className="font-serif text-[20px] font-bold text-teal-3 tracking-wide">Perth Renter Rights Hub</h1>
          <div className="text-[13px] text-ink-4 mt-0.5 tracking-wide">Powered by the <span className="font-medium text-ink-3">Residential Tenancies Act 1987 (WA)</span></div>
        </div>
      </div>

      {/* WelcomeCard: Description */}
      <p className="text-[14px] text-ink-3 leading-relaxed mb-5">
        Ask anything about your rights as a WA tenant. Answers cite real legislation so you know exactly where you stand.
      </p>

      {/* WelcomeCard: Stat cards grid */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {STATS.map((s, i) => (
          <div
            key={s.num}
            className="bg-gradient-to-br from-sand to-sand-2 border border-sand-3 rounded-[12px] px-4 py-3.5 group hover:border-teal-md/30 hover:shadow-md hover:shadow-teal/5 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Stat: Emoji icon */}
            <div className="text-[18px] mb-1.5">{s.icon}</div>
            {/* Stat: Number + unit */}
            <div className="font-serif text-[24px] font-bold text-teal-2 leading-none mb-1 group-hover:text-teal transition-colors">
              {s.num}<span className="text-[13px] font-sans font-normal text-ink-4 ml-1">{s.unit}</span>
            </div>
            {/* Stat: Description */}
            <div className="text-[11.5px] text-ink-4 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>

      {/* WelcomeCard: Quick-start prompt chips */}
      <div className="flex flex-wrap gap-2 animate-fade-in-delay">
        {QUICK_START.map(q => (
          <button key={q} className="followup-chip" onClick={() => onHint(q)}>
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}
