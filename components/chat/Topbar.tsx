/* ==== TOPBAR: Chat page header ==== */
import Link from 'next/link'

export default function Topbar() {
  return (
    <div className="h-[60px] border-b border-sand-3 bg-sand/80 backdrop-blur-md px-7 flex items-center gap-4 flex-shrink-0 sticky top-0 z-10">
      {/* Topbar: Page title */}
      <span className="font-serif text-[17px] font-semibold text-teal-2">Rights assistant</span>

      {/* Topbar: Act badge with pulse indicator */}
      <span className="inline-flex items-center gap-1.5 bg-teal-lt text-teal-2 text-[12px] font-medium px-3 py-1 rounded-full border border-teal/15">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-md opacity-40" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-md opacity-70" />
        </span>
        WA Tenancy Act 1987
      </span>

      {/* Topbar: Action buttons (right-aligned) */}
      <div className="ml-auto flex gap-2">
        <Link href="/letters" className="btn-ghost text-[12.5px]">
          {/* Ghost button icon */}
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="opacity-50">
            <path d="M2.5 1.5H10.5V11.5H2.5V1.5Z" stroke="currentColor" strokeWidth="1.1" />
            <path d="M4.5 4.5H8.5M4.5 6.5H7.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
          Get template letter
        </Link>
      </div>
    </div>
  )
}
