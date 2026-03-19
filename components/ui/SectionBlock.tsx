/* ==== SECTION BLOCK: Labelled content section with icon ==== */

interface SectionBlockProps {
  icon?: string
  label: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function SectionBlock({ icon, label, title, children, className = '' }: SectionBlockProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="mb-6">
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-1.5 flex items-center gap-1.5">
          {icon && <span className="text-sm">{icon}</span>}
          {label}
        </p>
        <h2 className="font-serif text-[24px] font-bold text-teal-3 leading-tight">{title}</h2>
      </div>
      {children}
    </section>
  )
}
