'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TOOLS = [
  { href: '/',        label: 'Rights assistant', badge: 'AI', icon: 'chat' },
  { href: '/bond',    label: 'Bond calculator',  icon: 'calc' },
  { href: '/letters', label: 'Template letters', icon: 'doc' },
]

const TOPICS = [
  { href: '/?topic=repairs',  label: 'Repairs & maintenance' },
  { href: '/?topic=entry',    label: 'Entry & privacy' },
  { href: '/?topic=ending',   label: 'Ending a tenancy' },
  { href: '/?topic=rent',     label: 'Rent increases' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[280px] bg-gradient-to-b from-teal-3 via-teal-2 to-teal-3 flex flex-col overflow-hidden flex-shrink-0 border-r border-teal-md/20 shadow-xl z-10">
      {/* Logo Area */}
      <div className="px-6 py-8 border-b border-white/5 bg-black/10 relative overflow-hidden">
        {/* Decorative flair */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="flex items-center gap-3.5 mb-2 relative">
          <div className="w-10 h-10 bg-gradient-to-br from-amber to-amber-2 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber/20 border border-white/20">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15 5.5V12.5L9 16L3 12.5V5.5L9 2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9 7V11M7 9H11" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif text-[17px] font-semibold text-white leading-tight tracking-wide drop-shadow-sm">
            Perth Renter<br />Rights Hub
          </span>
        </div>
        <div className="flex items-center gap-2 mt-3 pl-[54px]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber/80 blur-[1px]"></span>
          <p className="text-[12px] text-white/50 tracking-wider uppercase font-medium">WA Tenancy Law</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2">
        <Section label="Tools">
          {TOOLS.map(t => (
            <NavItem key={t.href} href={t.href} label={t.label} badge={t.badge} active={pathname === t.href} />
          ))}
        </Section>

        <Section label="Topics">
          {TOPICS.map(t => (
            <NavItem key={t.href} href={t.href} label={t.label} active={false} />
          ))}
        </Section>

        <Section label="Resources">
          <NavItem href="https://www.legislation.wa.gov.au" label="WA Tenancy Act 1987" external />
          <NavItem href="https://www.commerce.wa.gov.au/consumer-protection" label="Consumer Protection WA" external />
        </Section>
      </nav>

      {/* Disclaimer */}
      <div className="p-3.5 border-t border-white/7">
        <div className="bg-white/5 border border-white/10 rounded-[8px] p-3">
          <p className="text-[11px] text-white/35 leading-relaxed">
            <strong className="text-white/55 font-medium">Not legal advice.</strong>{' '}
            This tool explains WA law in plain English. For complex disputes, contact Consumer Protection WA or a community legal centre.
          </p>
        </div>
      </div>
    </aside>
  )
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-3.5 pt-4 pb-1">
      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/30 px-1.5 mb-1.5">{label}</p>
      {children}
    </div>
  )
}

function NavItem({ href, label, badge, active, external }: {
  href: string; label: string; badge?: string; active?: boolean; external?: boolean
}) {
  const cls = `flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[13.5px] transition-colors
    ${active ? 'bg-white/12 text-white' : 'text-white/65 hover:bg-white/7 hover:text-white'}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        <span className="flex-1">{label}</span>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="opacity-40">
          <path d="M2 9L9 2M9 2H4.5M9 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="bg-amber text-white text-[10px] font-medium px-1.5 py-[1px] rounded-full">{badge}</span>
      )}
    </Link>
  )
}
