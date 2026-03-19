/* ==== SVG ICON LIBRARY: Consistent icons across the app ==== */

interface IconProps {
  size?: number
  className?: string
}

const d = { size: 18, className: '' }

/* ── Situation icons ── */

export function WrenchIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M14.5 3a4.5 4.5 0 0 0-3.88 6.76L4.5 15.88a1.5 1.5 0 1 0 2.12 2.12l6.12-6.12A4.5 4.5 0 1 0 14.5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12.5 7.5l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function DollarUpIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2v16M6 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 10h6M7.5 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function ClipboardIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="4" y="3" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5 3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 8h6M7 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function BankIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2L2 7h16L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 7v8M8 7v8M12 7v8M16 7v8M2 15h16M3 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function PawIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <ellipse cx="10" cy="13" rx="3.5" ry="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="14" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="8" cy="5" r="1.3" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="12" cy="5" r="1.3" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  )
}

export function HomeIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M3 10V17h5v-4a2 2 0 0 1 4 0v4h5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 10l9-8 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Tool / action icons ── */

export function ChatIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2C5.58 2 2 5.13 2 9c0 2.07.91 3.94 2.38 5.29L3 18l3.78-1.71A9 9 0 0 0 10 17c4.42 0 8-3.13 8-7s-3.58-7-8-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6.5 9h7M6.5 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function ScaleIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2v16M3 6l7-2 7 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 11l2-5 2 5a3 3 0 0 1-4 0ZM15 11l2-5 2 5a3 3 0 0 1-4 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function CheckCircleIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6.5 10l2.5 2.5L13.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ── Repairs page icons ── */

export function CameraIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 5l1-3h4l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function EnvelopeIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 6l7.3 5.1a1.5 1.5 0 0 0 1.4 0L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function HourglassIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5 2h10M5 18h10M5 2v4l5 4-5 4v4M15 2v4l-5 4 5 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function PhoneIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M3.5 2h4l1.5 4.5L7 8.5a10.5 10.5 0 0 0 4.5 4.5l2-2 4.5 1.5v4c0 1-1 2-2 2C8 18 2 12 2 4.5c0-1 1-2 2-2l-.5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function CourtIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 1L3 5v2h14V5L10 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M5 7v8M10 7v8M15 7v8M2 15h16M2 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function AlertIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2L1.5 17h17L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 8v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Urgent repair type icons ── */

export function DropletIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2C10 2 4 9 4 12.5a6 6 0 0 0 12 0C16 9 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function FlameIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 1C10 1 4 7 4 12a6 6 0 0 0 12 0c0-5-6-11-6-11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 10c0 0-2 2-2 3.5a2 2 0 0 0 4 0c0-1.5-2-3.5-2-3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function BoltIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M11 1L4 11h5l-1 8 8-11h-5l1-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function LockIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13.5" r="1" fill="currentColor"/>
    </svg>
  )
}

export function RainIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5 10A5 5 0 0 1 15 10h.5a3 3 0 0 1 0 6H4.5a3 3 0 0 1 0-6H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 18l1-2M10 18l1-2M13 18l1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function ToiletIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5 3h10v6H5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3 9h14v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 16v2h4v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Key stat icons ── */

export function ClockIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 5v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function BanknoteIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="1" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4.5 7v6M15.5 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function SirenIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5 14V10a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="14" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 2v2M3 7l1.5 1M17 7l-1.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Misc / callout icons ── */

export function InfoIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function LightbulbIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M8 16h4M8.5 18h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 13c-1.5-1-3-3-3-5.5a6 6 0 0 1 12 0c0 2.5-1.5 4.5-3 5.5v1H7v-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function ShieldIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 1.5L3 5v5c0 4.5 3 7.5 7 9.5 4-2 7-5 7-9.5V5L10 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function BlockIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4.5 4.5l11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function KeyIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="7.5" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 10h7M16 7.5V10M18 8.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function BoxIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M2 6l8-4 8 4v9l-8 4-8-4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 6l8 4 8-4M10 10v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function HandIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M14 9V4.5a1.5 1.5 0 0 0-3 0V9M11 7V3.5a1.5 1.5 0 0 0-3 0V9M8 8V5.5a1.5 1.5 0 0 0-3 0V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M14 9a1.5 1.5 0 0 1 3 0v3a7 7 0 0 1-7 7H9a7 7 0 0 1-4-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

export function ArrowRightIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function QuestionIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5 7.5a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2.5 2-2.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="14.5" r=".75" fill="currentColor"/>
    </svg>
  )
}

export function CalendarIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 8.5h16M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function CoinIcon({ size = d.size, className = d.className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 5v10M12.5 7.5c0-1-1-1.5-2.5-1.5s-2.5.5-2.5 1.5 1 1.5 2.5 2 2.5 1 2.5 2-1 1.5-2.5 1.5-2.5-.5-2.5-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}
