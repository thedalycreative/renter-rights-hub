/* ==== PAGE FOOTER: Consistent amber footer for all content pages ==== */
import Image from 'next/image'

export default function PageFooter() {
  return (
    <footer className="-mx-7 -mb-10 mt-8 bg-amber/90 px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p className="text-[12px] text-white/80 leading-relaxed">
        <strong className="text-white font-medium">Not legal advice.</strong>{' '}
        Based on the <em>Residential Tenancies Act 1987 (WA)</em>.
      </p>
      <a
        href="https://thedalycreative.net"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 group flex-shrink-0"
      >
        <Image
          src="/tdc-logo-white.png"
          alt="The Daly Creative"
          width={28}
          height={28}
          className="rounded-md flex-shrink-0"
        />
        <span className="text-[11px] text-white/70 group-hover:text-white transition-colors font-medium">
          A TDC product
        </span>
      </a>
    </footer>
  )
}
