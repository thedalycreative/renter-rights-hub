/* ==== CALLOUT BOX: Highlighted info/warning/tip block ==== */
import { InfoIcon, AlertIcon, LightbulbIcon, ScaleIcon } from '@/components/ui/Icons'

interface CalloutBoxProps {
  type?: 'info' | 'warning' | 'tip' | 'law'
  title?: string
  children: React.ReactNode
}

const STYLES = {
  info: {
    bg: 'from-teal-lt to-white',
    border: 'border-teal/15',
    titleColor: 'text-teal-2',
    iconColor: 'text-teal-md',
  },
  warning: {
    bg: 'from-amber-lt to-white',
    border: 'border-amber/20',
    titleColor: 'text-amber-2',
    iconColor: 'text-amber-2',
  },
  tip: {
    bg: 'from-teal-lt to-white',
    border: 'border-teal/15',
    titleColor: 'text-teal-2',
    iconColor: 'text-teal-md',
  },
  law: {
    bg: 'from-sand to-white',
    border: 'border-sand-3',
    titleColor: 'text-ink-2',
    iconColor: 'text-ink-3',
  },
}

const ICONS = {
  info: InfoIcon,
  warning: AlertIcon,
  tip: LightbulbIcon,
  law: ScaleIcon,
}

export default function CalloutBox({ type = 'info', title, children }: CalloutBoxProps) {
  const s = STYLES[type]
  const Icon = ICONS[type]

  return (
    <div className={`bg-gradient-to-br ${s.bg} border ${s.border} rounded-xl p-4`}>
      {title && (
        <p className={`text-[13px] font-semibold ${s.titleColor} mb-1.5 flex items-center gap-1.5`}>
          <Icon size={15} className={s.iconColor} />
          {title}
        </p>
      )}
      <div className="text-[13.5px] text-ink-3 leading-relaxed">{children}</div>
    </div>
  )
}
