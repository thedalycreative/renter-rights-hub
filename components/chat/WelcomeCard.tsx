/* ==== WELCOME CARD: Landing state for chat — first-timer friendly ==== */
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  onHint: (q: string) => void
}

/* ---- Data: Quick-start prompts for first-time renters ---- */
const QUICK_START = [
  'Can my landlord enter without notice?',
  'How do I get my bond back?',
  'What repairs must my landlord fix?',
  'How much notice do I need to leave?',
]

/* ---- Data: Topic guides ---- */
const TOPIC_CARDS = [
  { href: '/topics/repairs',  label: 'Repairs',        icon: '🔧', desc: 'What must be fixed & how to ask', color: 'from-teal-lt to-sand' },
  { href: '/topics/entry',    label: 'Entry & Privacy', icon: '🔑', desc: 'When can they enter your home?',  color: 'from-amber-lt to-sand' },
  { href: '/topics/ending',   label: 'Moving Out',      icon: '📦', desc: 'Notice periods & bond returns',   color: 'from-teal-lt to-sand' },
  { href: '/topics/rent',     label: 'Rent Increases',  icon: '💸', desc: 'Rules around increasing rent',   color: 'from-amber-lt to-sand' },
]

export default function WelcomeCard({ onHint }: Props) {
  return (
    <div className="animate-fade-in space-y-6 pb-6">

      {/* ── Hero card ── */}
      <div className="card p-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-teal/5 to-amber/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start gap-4 mb-5 relative">
          <div className="hidden sm:block flex-shrink-0">
            <Image
              src="/hero.png"
              alt="First-time renter illustration"
              width={100}
              height={100}
              className="rounded-xl object-cover"
              priority
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 mb-2">
              <div className="w-5 h-5 bg-gradient-to-br from-amber to-amber-2 rounded-[4px] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-[8px]">TDC</span>
              </div>
              <span className="text-[10.5px] text-ink-4 font-medium tracking-[0.06em] uppercase">Perth Renter Rights Hub</span>
            </div>
            <h1 className="font-serif text-[22px] font-bold text-teal-3 leading-tight mb-2">
              Know your rights as a WA renter
            </h1>
            <p className="text-[14px] text-ink-3 leading-relaxed">
              New to renting? This tool explains WA tenancy law in simple English — no legal jargon. Ask any question and get a real answer.
            </p>
          </div>
        </div>

        {/* First-timer callout */}
        <div className="bg-gradient-to-r from-teal-lt to-sand border border-teal/15 rounded-xl px-4 py-3 mb-5 flex items-start gap-3">
          <span className="text-[20px] flex-shrink-0 mt-0.5">👋</span>
          <div>
            <p className="text-[13px] font-semibold text-teal-2 mb-0.5">First time renting?</p>
            <p className="text-[12.5px] text-ink-3 leading-relaxed">
              Start with our plain-English topic guides below — they explain everything from getting your bond back to what happens when repairs aren't done.
            </p>
          </div>
        </div>

        {/* Quick-start prompt chips */}
        <p className="text-[11.5px] font-semibold tracking-[0.08em] uppercase text-ink-4 mb-2.5">Or ask directly:</p>
        <div className="flex flex-wrap gap-2 animate-fade-in-delay">
          {QUICK_START.map(q => (
            <button key={q} className="followup-chip" onClick={() => onHint(q)}>
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* ── Topic guide cards ── */}
      <div>
        <p className="text-[11.5px] font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3 px-1">Plain-English topic guides</p>
        <div className="grid grid-cols-2 gap-3">
          {TOPIC_CARDS.map((card, i) => (
            <Link
              key={card.href}
              href={card.href}
              className={`card p-4 bg-gradient-to-br ${card.color} hover:border-teal-md/30 hover:shadow-md hover:shadow-teal/5 transition-all duration-300 group animate-fade-in`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="text-[22px] mb-2">{card.icon}</div>
              <p className="font-semibold text-[14px] text-ink-2 mb-1 group-hover:text-teal-2 transition-colors">{card.label}</p>
              <p className="text-[12px] text-ink-4 leading-snug">{card.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-[11.5px] text-teal-md opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Read guide</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Key numbers strip ── */}
      <div className="card p-4">
        <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-4 mb-3">Key numbers to know</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: '7',  unit: 'days',   label: 'notice for inspection', icon: '📋' },
            { num: '4×', unit: 'per yr', label: 'max inspections',        icon: '🔑' },
            { num: '60', unit: 'days',   label: 'notice for rent rise',   icon: '💰' },
          ].map((s, i) => (
            <div
              key={s.num}
              className="bg-gradient-to-br from-sand to-sand-2 border border-sand-3 rounded-[12px] px-3.5 py-3 group hover:border-teal-md/30 hover:shadow-sm transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-[16px] mb-1.5">{s.icon}</div>
              <div className="font-serif text-[22px] font-bold text-teal-2 leading-none mb-1">
                {s.num}<span className="text-[11px] font-sans font-normal text-ink-4 ml-1">{s.unit}</span>
              </div>
              <div className="text-[11px] text-ink-4 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
