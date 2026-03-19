/* ==== SITUATION CARD: Clickable card for common renter situations ==== */
import Link from 'next/link'

interface SituationCardProps {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export default function SituationCard({ href, icon, title, description, delay = 0 }: SituationCardProps) {
  return (
    <Link
      href={href}
      className="group card p-5 hover:border-teal-md/30 hover:shadow-md hover:shadow-teal/5 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-9 h-9 bg-gradient-to-br from-teal-lt to-sand-2 border border-teal/10 rounded-xl flex items-center justify-center text-teal-2 mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-[15px] text-ink mb-1.5 group-hover:text-teal-2 transition-colors">
        {title}
      </h3>
      <p className="text-[13px] text-ink-3 leading-relaxed">{description}</p>
      <div className="mt-3 flex items-center gap-1.5 text-[12px] text-teal-md opacity-0 group-hover:opacity-100 transition-opacity">
        <span>See what to do</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}
