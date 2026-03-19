/* ==== TOOL CARD: Quick access card for interactive tools ==== */
import Link from 'next/link'

interface ToolCardProps {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'teal' | 'amber'
}

export default function ToolCard({ href, icon, title, description, accent = 'teal' }: ToolCardProps) {
  const accentColors = {
    teal: 'from-teal-lt to-white border-teal/12 hover:border-teal-md/30',
    amber: 'from-amber-lt to-white border-amber/12 hover:border-amber/30',
  }

  const iconColors = {
    teal: 'from-teal to-teal-2 shadow-teal/20',
    amber: 'from-amber to-amber-2 shadow-amber/20',
  }

  return (
    <Link
      href={href}
      className={`group bg-gradient-to-br ${accentColors[accent]} border rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:shadow-teal/5`}
    >
      <div className={`w-10 h-10 bg-gradient-to-br ${iconColors[accent]} rounded-xl flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-semibold text-[15px] text-ink mb-1">{title}</h3>
      <p className="text-[13px] text-ink-3 leading-relaxed">{description}</p>
    </Link>
  )
}
