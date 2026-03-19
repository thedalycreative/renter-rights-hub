/* ==== SITUATION FLOW: Repairs not being done ==== */
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ClockIcon, BanknoteIcon, SirenIcon, LockIcon, HourglassIcon, AlertIcon, ScaleIcon, BlockIcon, CameraIcon, EnvelopeIcon, PhoneIcon, CourtIcon, DropletIcon, FlameIcon, BoltIcon, RainIcon, ToiletIcon } from '@/components/ui/Icons'
import PageFooter from '@/components/ui/PageFooter'

export const metadata: Metadata = {
  title: 'Repairs Not Being Done — Perth Renter Rights Hub',
  description: 'Your landlord won\'t fix repairs? Here\'s what WA law says and exactly what to do, step by step.',
}

export default function RepairsSituationPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-sand">
        <div className="max-w-2xl mx-auto px-7 py-10 animate-fade-in">

          {/* ── Hero banner ── */}
          <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-teal-3 via-teal-2 to-teal shadow-lg shadow-teal/10">
            <div className="absolute right-4 bottom-0 w-36 h-36 sm:w-44 sm:h-44 opacity-90">
              <Image src="/repairs.png" alt="Repairs illustration" fill className="object-contain object-bottom" priority />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 left-8 w-32 h-32 bg-amber/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 p-7 flex flex-col justify-end h-full">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/50 mb-1.5">Situation Guide</span>
              <h1 className="font-serif text-[28px] sm:text-[32px] font-bold text-white leading-tight">Repairs not being done</h1>
            </div>
          </div>

          <p className="text-[15px] text-ink-3 leading-relaxed mb-10">
            You&apos;ve reported a repair and your landlord hasn&apos;t fixed it. Here&apos;s what the law says and exactly what to do next.
          </p>

          {/* ── Key numbers strip ── */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {[
              { num: '14', unit: 'days', label: 'to fix non-urgent repairs', icon: <ClockIcon size={18} className="text-teal-2" /> },
              { num: '$1,800', unit: '', label: 'max you can claim for urgent repairs', icon: <BanknoteIcon size={18} className="text-teal-2" /> },
              { num: '0', unit: 'days', label: 'for urgent — must be immediate', icon: <SirenIcon size={18} className="text-amber-2" /> },
            ].map((s, i) => (
              <div key={i} className="card p-4 text-center animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="mb-1.5 flex justify-center">{s.icon}</div>
                <div className="font-serif text-[22px] font-bold text-teal-2 leading-none mb-0.5">
                  {s.num}{s.unit && <span className="text-[11px] font-sans font-normal text-ink-4 ml-0.5">{s.unit}</span>}
                </div>
                <div className="text-[11px] text-ink-4 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ══════════ SECTION 1: What's happening ══════════ */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-teal to-teal-2 rounded-xl flex items-center justify-center shadow-md shadow-teal/15">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.4"/>
                  <path d="M9 5.5v4M9 12v.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="font-serif text-[20px] font-bold text-teal-3">What&apos;s happening</h2>
            </div>

            {/* Inline illustration: person looking at a dripping tap */}
            <div className="rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-teal-lt to-sand-2 border border-sand-3 p-6 flex items-center gap-5">
              <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-teal/10 to-teal-lt flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  {/* Tap */}
                  <rect x="18" y="8" width="12" height="6" rx="2" stroke="#1A5C54" strokeWidth="1.8"/>
                  <path d="M24 14v4" stroke="#1A5C54" strokeWidth="1.8" strokeLinecap="round"/>
                  {/* Drips */}
                  <path d="M24 22v2M24 28v2M24 34v2" stroke="#2E7D74" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0 4"/>
                  {/* Basin */}
                  <path d="M16 38h16" stroke="#1A5C54" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M18 38c0-3 2.5-5 6-5s6 2 6 5" stroke="#1A5C54" strokeWidth="1.5"/>
                  {/* Person silhouette */}
                  <circle cx="38" cy="16" r="3" stroke="#6B6659" strokeWidth="1.5"/>
                  <path d="M38 19v8M34 23h8M35 31l3-4 3 4" stroke="#6B6659" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[14.5px] text-ink-2 leading-relaxed">
                  Your rental has a problem — a leaking tap, broken heater, damaged window, or something else — and your landlord or property manager hasn&apos;t done anything about it.
                </p>
              </div>
            </div>

            <div className="card p-5 border-l-4 border-l-teal">
              <p className="text-[14.5px] text-ink-2 leading-relaxed">
                This is one of the most common issues WA renters face. The good news: <strong className="font-semibold text-teal-2">the law is
                clearly on your side.</strong> Your landlord has a legal obligation to keep the property in
                a reasonable state of repair.
              </p>
            </div>
          </section>

          {/* ── Inline scene: reading the law ── */}
          <div className="relative rounded-xl overflow-hidden mb-10 bg-gradient-to-r from-teal-3 to-teal-2 p-5 flex items-center gap-5">
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="6" y="4" width="20" height="24" rx="2" stroke="white" strokeWidth="1.6"/>
                <path d="M10 10h12M10 14h12M10 18h8" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M10 23h5" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/50 mb-0.5">Your rights</p>
              <p className="text-[14px] text-white/90 leading-relaxed">
                The Residential Tenancies Act 1987 is clear about your landlord&apos;s repair obligations. Here&apos;s what it says in plain English.
              </p>
            </div>
          </div>

          {/* ══════════ SECTION 2: What the law says ══════════ */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-teal to-teal-2 rounded-xl flex items-center justify-center shadow-md shadow-teal/15">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L3 5v4c0 4 2.5 6.5 6 8 3.5-1.5 6-4 6-8V5L9 2Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M6.5 9l2 2L12 7" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-serif text-[20px] font-bold text-teal-3">What the law says</h2>
            </div>

            <div className="space-y-3">
              {[
                { icon: <LockIcon size={16} />, text: 'Your landlord **must maintain the property** in a reasonable state of repair, including the structure, fixtures, and any appliances included in the lease.', law: 's.42 RTA 1987', accent: 'teal' },
                { icon: <HourglassIcon size={16} />, text: '**Non-urgent repairs** must be completed within a reasonable time — generally **14 days** after being notified.', law: 's.42 RTA 1987', accent: 'teal' },
                { icon: <SirenIcon size={16} />, text: '**Urgent repairs** (burst pipes, gas leaks, broken locks, flooding) must be addressed **immediately**. If your landlord can\'t be reached, you can arrange the repair yourself and claim back up to **$1,800**.', law: 's.43A RTA 1987', accent: 'amber' },
                { icon: <ScaleIcon size={16} />, text: 'If the landlord fails to repair after written notice, you can apply for a **Repair Order** from the Magistrates Court. You may also be entitled to **compensation**.', law: 's.42A RTA 1987', accent: 'teal' },
                { icon: <BlockIcon size={16} />, text: '**You cannot withhold rent** even if repairs aren\'t done. Doing so could result in a breach notice against you.', accent: 'amber' },
              ].map((item, i) => (
                <div key={i} className={`card p-4 flex gap-3 border-l-4 ${item.accent === 'amber' ? 'border-l-amber' : 'border-l-teal'} animate-fade-in`} style={{ animationDelay: `${i * 0.06}s` }}>
                  <span className="flex-shrink-0 mt-0.5 text-teal-md">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] text-ink-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>') }} />
                    {item.law && <span className="cite-pill mt-2 inline-block">{item.law}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Inline scene: person taking action ── */}
          <div className="rounded-xl overflow-hidden mb-10 bg-gradient-to-br from-sand-2 to-amber-lt border border-sand-3 p-6 flex items-center gap-5">
            <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-amber/10 to-amber-lt flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                {/* Checklist */}
                <rect x="10" y="6" width="22" height="30" rx="3" stroke="#9D5E18" strokeWidth="1.6"/>
                <path d="M16 14h10M16 20h10M16 26h7" stroke="#C97B2A" strokeWidth="1.4" strokeLinecap="round"/>
                {/* Checkmarks */}
                <path d="M14 14l1.5 1.5L18 13" stroke="#1A5C54" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 20l1.5 1.5L18 19" stroke="#1A5C54" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Circle pending */}
                <circle cx="15.5" cy="26" r="1.5" stroke="#C97B2A" strokeWidth="1.2"/>
                {/* Arrow pointing right */}
                <path d="M36 22h-4M36 22l-3-3M36 22l-3 3" stroke="#9D5E18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-amber-2 mb-1">Your action plan</p>
              <p className="text-[14px] text-ink-2 leading-relaxed">
                Follow these steps in order. Most repairs issues are resolved at step 2 — a written request is often all it takes.
              </p>
            </div>
          </div>

          {/* ══════════ SECTION 3: What you should do ══════════ */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-teal to-teal-2 rounded-xl flex items-center justify-center shadow-md shadow-teal/15">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M9 3l6 6-6 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-serif text-[20px] font-bold text-teal-3">What you should do</h2>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-teal via-teal-md to-amber rounded-full" />
              <div className="space-y-5">
                {[
                  { num: 1, icon: <CameraIcon size={16} className="text-teal-md" />, title: 'Document the problem', desc: 'Take clear photos or videos of the issue. Include timestamps. Note when the problem started and any impact on your daily life.', color: 'teal' },
                  { num: 2, icon: <EnvelopeIcon size={16} className="text-teal-md" />, title: 'Send a written repair request', desc: 'Notify your landlord or property manager in writing (email, text, or letter). This creates a paper trail and starts the legal clock.', color: 'teal', cta: { href: '/letters', label: 'Use our repair request template' } },
                  { num: 3, icon: <HourglassIcon size={16} className="text-teal-md" />, title: 'Wait 14 days for non-urgent repairs', desc: 'Your landlord has a reasonable period to arrange the repair — generally 14 days for non-urgent issues. Keep records of any follow-up communication.', color: 'teal' },
                  { num: 4, icon: <PhoneIcon size={16} className="text-teal-md" />, title: 'Contact Consumer Protection WA', desc: 'Consumer Protection WA offers free dispute resolution. They can contact your landlord on your behalf and try to resolve it without going to court.', color: 'teal', ctaExternal: { href: 'https://www.commerce.wa.gov.au/consumer-protection', label: 'Consumer Protection WA' } },
                  { num: 5, icon: <CourtIcon size={16} className="text-amber" />, title: 'Last resort: apply for a Repair Order', desc: 'Apply to the Magistrates Court for a Repair Order. The court can order your landlord to complete the repairs and may award you compensation.', color: 'amber' },
                ].map((step, i) => (
                  <div key={i} className="relative flex gap-4 animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                    <div className={`relative z-10 w-11 h-11 bg-gradient-to-br ${step.color === 'amber' ? 'from-amber to-amber-2 shadow-amber/20' : 'from-teal to-teal-2 shadow-teal/20'} text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-[14px] shadow-md`}>{step.num}</div>
                    <div className="flex-1 card p-5 hover:border-teal-md/20 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        {step.icon}
                        <h3 className="font-semibold text-[15px] text-ink">{step.title}</h3>
                      </div>
                      <p className="text-[13.5px] text-ink-3 leading-relaxed mb-3">{step.desc}</p>
                      {step.cta && (
                        <Link href={step.cta.href} className="btn-primary inline-flex text-[12.5px]">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="2.5" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M1.5 4.5l4 3a.8.8 0 0 0 1 0l4-3" stroke="currentColor" strokeWidth="1.2"/></svg>
                          {step.cta.label}
                        </Link>
                      )}
                      {step.ctaExternal && (
                        <a href={step.ctaExternal.href} target="_blank" rel="noreferrer" className="btn-ghost inline-flex text-[12.5px]">
                          {step.ctaExternal.label}
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 8.5L8.5 1.5M8.5 1.5H4.5M8.5 1.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Inline scene: urgent repair visual ── */}
          <div className="rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-amber-lt via-white to-amber-lt border border-amber/20 p-6 relative">
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-amber/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber to-amber-2 flex items-center justify-center shadow-md shadow-amber/20">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  {/* Alarm bell */}
                  <path d="M16 4c-5 0-8 3.5-8 8v6l-2 3h20l-2-3v-6c0-4.5-3-8-8-8Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M13 21c0 1.5 1.5 3 3 3s3-1.5 3-3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M16 1v3" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                  {/* Sound waves */}
                  <path d="M6 10c-1 1-1.5 2.5-1.5 4M26 10c1 1 1.5 2.5 1.5 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity=".6"/>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-[17px] font-bold text-amber-2 mb-2">Is this an urgent repair?</h3>
                <p className="text-[13.5px] text-ink-3 leading-relaxed mb-2">
                  Urgent repairs include anything that makes the property unsafe or uninhabitable. Your landlord must act immediately.
                </p>
                <p className="text-[13.5px] font-medium text-amber-2">
                  If they can&apos;t be reached, you can arrange the repair yourself and claim back up to $1,800.
                </p>
              </div>
            </div>
          </div>

          {/* ── Urgent repair types grid ── */}
          <section className="mb-10">
            <h3 className="font-serif text-[17px] font-bold text-teal-2 mb-4">What counts as urgent?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: <DropletIcon size={16} className="text-teal-2" />, label: 'Burst pipes or flooding' },
                { icon: <FlameIcon size={16} className="text-amber-2" />, label: 'Gas leak' },
                { icon: <BoltIcon size={16} className="text-amber-2" />, label: 'Dangerous electrical fault' },
                { icon: <LockIcon size={16} className="text-teal-2" />, label: 'Broken locks' },
                { icon: <RainIcon size={16} className="text-teal-2" />, label: 'Serious roof leak' },
                { icon: <ToiletIcon size={16} className="text-teal-2" />, label: 'Blocked or broken toilet' },
              ].map((item, i) => (
                <div key={i} className="card p-3.5 flex items-center gap-2.5 hover:border-amber/30 transition-colors">
                  {item.icon}
                  <span className="text-[12.5px] text-ink-2 font-medium leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA section with illustration ── */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-teal-lt via-white to-teal-lt border border-teal/15 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-teal/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="hidden sm:block flex-shrink-0 w-20 h-20 relative rounded-xl overflow-hidden">
                  <Image src="/hero.png" alt="Get help" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-[18px] font-bold text-teal-2 mb-2">Need more help?</h3>
                  <p className="text-[13.5px] text-ink-3 leading-relaxed mb-4">
                    Every situation is different. Ask our AI assistant for advice specific to your case.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/chat?q=My%20landlord%20hasn't%20fixed%20a%20repair%20I%20reported%203%20weeks%20ago.%20What%20can%20I%20do?" className="btn-primary">Ask about my situation</Link>
                    <Link href="/letters" className="btn-ghost">Write a letter</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PageFooter />
        </div>
      </main>
    </div>
  )
}
