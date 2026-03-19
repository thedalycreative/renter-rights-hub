/* ==== TOPIC PAGE: Reusable plain-English guide layout ==== */
import Image from 'next/image'
import Link from 'next/link'
import PageFooter from '@/components/ui/PageFooter'

/* ---- Types ---- */
export interface Step {
  number: string
  title: string
  body: string
  law?: string        /* e.g. "s.43 RTA 1987" */
  tip?: string        /* Call-out tip box */
}

export interface FAQ {
  q: string
  a: string
}

export interface TopicPageProps {
  tag: string
  title: string
  intro: string
  illustration: string   /* public path, e.g. '/repairs.png' */
  color: 'teal' | 'amber'
  steps: Step[]
  faqs: FAQ[]
  ctaHref?: string
  ctaLabel?: string
  chatPrompt?: string    /* Pre-filled question for AI chat */
}

/* ---- TopicPage: Main layout component ---- */
export default function TopicPage({
  tag, title, intro, illustration, steps, faqs, ctaHref, ctaLabel, chatPrompt,
}: TopicPageProps) {
  return (
    <div className="max-w-2xl mx-auto px-7 py-10 animate-fade-in">

      {/* ── Hero section ── */}
      <div className="mb-10">
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-2">{tag}</p>

        {/* Illustration */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-teal-lt to-sand-2 border border-sand-3 shadow-sm">
          <Image
            src={illustration}
            alt={title + ' illustration'}
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent" />
        </div>

        <h1 className="font-serif text-[30px] font-bold text-teal-3 leading-tight mb-3">{title}</h1>
        <p className="text-[15px] text-ink-3 leading-relaxed">{intro}</p>
      </div>

      {/* ── "How it works" steps ── */}
      <div className="mb-10">
        <h2 className="font-serif text-[19px] font-bold text-teal-2 mb-5 flex items-center gap-2">
          <span className="w-6 h-6 bg-teal text-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l3 3L9.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Your rights, step by step
        </h2>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="card p-5 hover:border-teal-md/30 transition-all duration-300 group">
              <div className="flex gap-4">
                {/* Step number circle */}
                <div className="w-9 h-9 bg-gradient-to-br from-teal to-teal-2 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[13px] shadow-md shadow-teal/20 mt-0.5 group-hover:shadow-lg group-hover:shadow-teal/25 transition-shadow">
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[14.5px] text-ink mb-1.5">{step.title}</h3>
                  <p className="text-[13.5px] text-ink-3 leading-relaxed mb-2">{step.body}</p>
                  {step.law && (
                    <span className="cite-pill">{step.law}</span>
                  )}
                  {step.tip && (
                    <div className="mt-3 bg-amber-lt border border-amber/20 rounded-[8px] px-3.5 py-2.5">
                      <p className="text-[12.5px] text-amber-2 leading-relaxed">
                        <strong className="font-semibold">Tip: </strong>{step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ section ── */}
      {faqs.length > 0 && (
        <div className="mb-10">
          <h2 className="font-serif text-[19px] font-bold text-teal-2 mb-5 flex items-center gap-2">
            <span className="w-6 h-6 bg-amber text-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 4.5a1.5 1.5 0 0 1 2.7.9c0 .9-1.5 1.2-1.5 2.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="6" cy="9" r=".5" fill="currentColor"/></svg>
            </span>
            Common questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="card group open:border-teal-md/20 open:shadow-md open:shadow-teal/5">
                <summary className="px-5 py-4 flex items-center justify-between cursor-pointer list-none font-medium text-[14px] text-ink-2 hover:text-teal-2 transition-colors select-none">
                  {faq.q}
                  <span className="ml-3 text-[18px] text-teal-md opacity-50 group-open:opacity-100 group-open:rotate-45 transition-all flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-4 pt-0">
                  <p className="text-[13.5px] text-ink-3 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* ── CTA: Ask the AI ── */}
      <div className="bg-gradient-to-br from-teal-lt via-white to-teal-lt border border-teal/15 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-teal/6 rounded-full blur-2xl pointer-events-none" />
        <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-teal-md mb-2">Still unsure?</p>
        <h3 className="font-serif text-[18px] font-bold text-teal-2 mb-2">Ask our AI assistant</h3>
        <p className="text-[13.5px] text-ink-3 leading-relaxed mb-4">
          Get a specific answer to your situation — cited directly from the Residential Tenancies Act 1987.
        </p>
        <div className="flex flex-wrap gap-3">
          {chatPrompt ? (
            <Link
              href={`/?q=${encodeURIComponent(chatPrompt)}`}
              className="btn-primary"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ask a question
            </Link>
          ) : (
            <Link href="/" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Open AI assistant
            </Link>
          )}
          {ctaHref && ctaLabel && (
            <a href={ctaHref} target="_blank" rel="noreferrer" className="btn-ghost">
              {ctaLabel}
            </a>
          )}
        </div>
      </div>

      <PageFooter />
    </div>
  )
}
