/* ==== SIDEBAR NAVIGATION ==== */
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

/* ---- Data: Tools navigation items ---- */
const TOOLS = [
  {
    href: '/',
    label: 'Rights assistant',
    badge: 'AI',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5C4.41 1.5 1.5 4.14 1.5 7.4c0 1.66.72 3.16 1.88 4.24L2.5 14.5l3.1-1.4A6.7 6.7 0 0 0 8 13.3c3.59 0 6.5-2.64 6.5-5.9S11.59 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5.5 7.5h5M5.5 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/bond',
    label: 'Bond calculator',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/letters',
    label: 'Template letters',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 5.5l5.5 4a1 1 0 0 0 1 0L14 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

/* ---- Data: Topic guide navigation items ---- */
const TOPICS = [
  {
    href: '/topics/repairs',
    label: 'Repairs & maintenance',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M10.5 2.5a3.5 3.5 0 0 1 0 4.95l-5.5 5.5a1.5 1.5 0 0 1-2.12-2.12l5.5-5.5A3.5 3.5 0 0 1 10.5 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M3.5 12.5l.5-.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="12" cy="4" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: '/topics/entry',
    label: 'Entry & privacy',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <rect x="3" y="2" width="10" height="13" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="10" cy="8.5" r="1" fill="currentColor"/>
        <path d="M6 2v13" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    href: '/topics/ending',
    label: 'Ending a tenancy',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <rect x="5" y="8" width="4" height="5.5" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2.5 8H14M8 2.5l5.5 5.5H2.5L8 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/topics/rent',
    label: 'Rent increases',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M3 12L8 4l5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 9h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M8 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

/* ---- Data: External resource links ---- */
const RESOURCES = [
  {
    href: 'https://www.legislation.wa.gov.au',
    label: 'WA Tenancy Act 1987',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M4 2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: 'https://www.commerce.wa.gov.au/consumer-protection',
    label: 'Consumer Protection WA',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5L13.5 4v4.5c0 3-2.5 5-5.5 6C5 13.5 2.5 11.5 2.5 8.5V4L8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5.5 8l1.5 1.5L10.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: 'https://tenancywa.org.au',
    label: 'Tenancy WA',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1.5 8h13M8 1.5C6 4 5 6 5 8s1 4 3 6.5M8 1.5C10 4 11 6 11 8s-1 4-3 6.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
]

/* ---- Sidebar: Main component ---- */
export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[272px] bg-gradient-to-b from-teal-3 via-[#0f3d38] to-teal-3 flex flex-col overflow-hidden flex-shrink-0 border-r border-white/5 shadow-2xl z-10">

      {/* ── Logo area ── */}
      <div className="relative overflow-hidden border-b border-white/8">
        {/* Decorative glows */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal/15 rounded-full blur-2xl pointer-events-none" />

        {/* Site logo + name */}
        <Link href="/" className="flex items-center gap-3.5 px-5 pt-6 pb-4 relative group">
          {/* Hub logo mark */}
          <div className="w-11 h-11 rounded-[12px] overflow-hidden flex-shrink-0 shadow-lg shadow-black/30 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300">
            <Image
              src="/hub-logo.png"
              alt="Perth Renter Rights Hub logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Site name */}
          <div>
            <div className="font-serif text-[15.5px] font-bold text-white leading-tight tracking-wide drop-shadow-sm">
              Perth Renter
            </div>
            <div className="font-serif text-[15.5px] font-bold text-white leading-tight tracking-wide drop-shadow-sm">
              Rights Hub
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber/80 animate-pulse flex-shrink-0" />
              <span className="text-[10px] text-white/40 tracking-[0.1em] uppercase font-medium">WA Tenancy Law</span>
            </div>
          </div>
        </Link>

        {/* TDC agency credit strip */}
        <a
          href="https://thedalycreative.com.au"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 bg-black/20 border-t border-white/5 hover:bg-black/30 transition-colors duration-200 group"
        >
          <div className="w-[42px] h-[18px] relative flex-shrink-0 rounded overflow-hidden">
            <Image
              src="/tdc-logo-white.png"
              alt="The Daly Creative"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="text-[10px] text-white/25 tracking-[0.08em] uppercase font-medium group-hover:text-white/45 transition-colors">
            A TDC product
          </span>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="ml-auto opacity-20 group-hover:opacity-40 transition-opacity">
            <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3.5M7.5 1.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </a>
      </div>

      {/* ── Navigation links ── */}
      <nav className="flex-1 overflow-y-auto py-2 scrollbar-thin">

        <Section label="Tools">
          {TOOLS.map(t => (
            <NavItem
              key={t.href}
              href={t.href}
              label={t.label}
              icon={t.icon}
              badge={t.badge}
              active={pathname === t.href}
            />
          ))}
        </Section>

        <Section label="Topic guides">
          {TOPICS.map(t => (
            <NavItem
              key={t.href}
              href={t.href}
              label={t.label}
              icon={t.icon}
              active={pathname === t.href}
            />
          ))}
        </Section>

        <Section label="Resources">
          {RESOURCES.map(r => (
            <NavItem
              key={r.href}
              href={r.href}
              label={r.label}
              icon={r.icon}
              external
            />
          ))}
        </Section>

      </nav>

      {/* ── Legal disclaimer footer ── */}
      <div className="p-3.5 border-t border-white/8">
        <div className="bg-white/4 border border-white/7 rounded-[10px] p-3">
          <p className="text-[11px] text-white/28 leading-relaxed">
            <strong className="text-white/45 font-semibold">Not legal advice.</strong>{' '}
            For complex disputes, contact Consumer Protection WA or a community legal centre.
          </p>
        </div>
      </div>

    </aside>
  )
}

/* ---- Section: Labelled group wrapper ---- */
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-3 pt-5 pb-1">
      <p className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-white/22 px-2 mb-1.5 select-none">
        {label}
      </p>
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

/* ---- NavItem: Single navigation link ---- */
function NavItem({
  href, label, icon, badge, active, external,
}: {
  href: string
  label: string
  icon: React.ReactNode
  badge?: string
  active?: boolean
  external?: boolean
}) {
  const base =
    'group relative flex items-center gap-2.5 px-2.5 py-[9px] rounded-[9px] text-[13px] font-medium transition-all duration-200 w-full text-left'

  const state = active
    ? 'bg-white/13 text-white shadow-sm'
    : 'text-white/55 hover:bg-white/7 hover:text-white/90'

  const iconClass = active
    ? 'text-amber'
    : 'text-white/40 group-hover:text-white/70 transition-colors'

  /* Active left-bar indicator */
  const bar = active && (
    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[18px] bg-amber rounded-r-full" />
  )

  const inner = (
    <>
      {bar}
      {/* Icon */}
      <span className={`flex-shrink-0 ${iconClass} transition-colors duration-200`}>
        {icon}
      </span>
      {/* Label */}
      <span className="flex-1 leading-tight">{label}</span>
      {/* AI badge */}
      {badge && (
        <span className="bg-gradient-to-r from-amber to-amber-2 text-white text-[9.5px] font-bold px-1.5 py-[2px] rounded-full tracking-wide shadow-sm shadow-amber/30">
          {badge}
        </span>
      )}
      {/* External arrow */}
      {external && (
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          className="flex-shrink-0 opacity-25 group-hover:opacity-50 transition-opacity"
        >
          <path d="M1.5 8.5L8.5 1.5M8.5 1.5H4.5M8.5 1.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )}
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${state}`}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={`${base} ${state}`}>
      {inner}
    </Link>
  )
}
