/* ==== SIDEBAR NAVIGATION ==== */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* ---- Data: Navigation items ---- */
const TOOLS = [
  { href: '/',        label: 'Rights assistant', badge: 'AI' },
  { href: '/bond',    label: 'Bond calculator' },
  { href: '/letters', label: 'Template letters' },
]

const TOPICS = [
  { href: '/?topic=repairs',  label: 'Repairs & maintenance' },
  { href: '/?topic=entry',    label: 'Entry & privacy' },
  { href: '/?topic=ending',   label: 'Ending a tenancy' },
  { href: '/?topic=rent',     label: 'Rent increases' },
]

/* ---- Sidebar: Main component ---- */
export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[280px] bg-gradient-to-b from-teal-3 via-teal-2 to-teal-3 flex flex-col overflow-hidden flex-shrink-0 border-r border-teal-md/20 shadow-xl z-10">

      {/* Sidebar: Logo area */}
      <div className="px-6 py-7 border-b border-white/5 bg-black/10 relative overflow-hidden">
        {/* Logo: Decorative glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-md/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        {/* Logo: Icon + title */}
        <div className="flex items-center gap-3.5 mb-2 relative">
          <div className="w-11 h-11 bg-gradient-to-br from-amber to-amber-2 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber/25 border border-white/20 animate-glow">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L16 5.5V13.5L10 17L4 13.5V5.5L10 2Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 7.5V12M8.5 9.75H11.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="font-serif text-[17px] font-semibold text-white leading-tight tracking-wide drop-shadow-sm block">
              Perth Renter
            </span>
            <span className="font-serif text-[17px] font-semibold text-white leading-tight tracking-wide drop-shadow-sm block">
              Rights Hub
            </span>
          </div>
        </div>

        {/* Logo: Subtitle */}
        <div className="flex items-center gap-2 mt-3 pl-[54px]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber/80 animate-pulse" />
          <p className="text-[11px] text-white/45 tracking-[0.12em] uppercase font-medium">WA Tenancy Law</p>
        </div>
      </div>

      {/* Sidebar: Navigation links */}
      <nav className="flex-1 overflow-y-auto py-2">
        {/* Nav: Tools section */}
        <Section label="Tools">
          {TOOLS.map(t => (
            <NavItem key={t.href} href={t.href} label={t.label} badge={t.badge} active={pathname === t.href} />
          ))}
        </Section>

        {/* Nav: Topics section */}
        <Section label="Topics">
          {TOPICS.map(t => (
            <NavItem key={t.href} href={t.href} label={t.label} active={false} />
          ))}
        </Section>

        {/* Nav: External resources */}
        <Section label="Resources">
          <NavItem href="https://www.legislation.wa.gov.au" label="WA Tenancy Act 1987" external />
          <NavItem href="https://www.commerce.wa.gov.au/consumer-protection" label="Consumer Protection WA" external />
        </Section>
      </nav>

      {/* Sidebar: Legal disclaimer */}
      <div className="p-3.5 border-t border-white/5">
        <div className="bg-white/5 border border-white/8 rounded-[10px] p-3">
          <p className="text-[11px] text-white/30 leading-relaxed">
            <strong className="text-white/50 font-medium">Not legal advice.</strong>{' '}
            This tool explains WA law in plain English. For complex disputes, contact Consumer Protection WA or a community legal centre.
          </p>
        </div>
      </div>
    </aside>
  )
}

/* ---- Section: Label group wrapper ---- */
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-3.5 pt-4 pb-1">
      <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/25 px-2.5 mb-2">{label}</p>
      <div className="space-y-0.5">
        {children}
      </div>
    </div>
  )
}

/* ---- NavItem: Individual navigation link ---- */
function NavItem({ href, label, badge, active, external }: {
  href: string; label: string; badge?: string; active?: boolean; external?: boolean
}) {
  /* NavItem: Base + active/hover classes */
  const base = 'flex items-center gap-2.5 px-2.5 py-[9px] rounded-[9px] text-[13.5px] transition-all duration-200 group relative'
  const state = active
    ? 'bg-white/12 text-white shadow-sm shadow-black/10'
    : 'text-white/60 hover:bg-white/7 hover:text-white/90'

  /* NavItem: Active indicator bar */
  const indicator = active
    ? <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-amber rounded-r-full" />
    : null

  /* NavItem: External link variant */
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${state}`}>
        {indicator}
        <span className="flex-1">{label}</span>
        {/* External: Arrow icon */}
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="opacity-30 group-hover:opacity-60 transition-opacity">
          <path d="M2 9L9 2M9 2H4.5M9 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </a>
    )
  }

  /* NavItem: Internal link variant */
  return (
    <Link href={href} className={`${base} ${state}`}>
      {indicator}
      <span className="flex-1">{label}</span>
      {/* NavItem: AI badge */}
      {badge && (
        <span className="bg-gradient-to-r from-amber to-amber-2 text-white text-[10px] font-semibold px-2 py-[2px] rounded-full shadow-sm shadow-amber/20">
          {badge}
        </span>
      )}
    </Link>
  )
}
