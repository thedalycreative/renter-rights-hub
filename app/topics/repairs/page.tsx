/* ==== TOPIC: Repairs & Maintenance ==== */
import TopicPage from '@/components/TopicPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Repairs & Maintenance — Perth Renter Rights Hub',
  description: 'What repairs is your landlord responsible for in WA? Plain-English guide for first-time renters.',
}

const STEPS = [
  {
    number: '1',
    title: 'Your landlord must keep the property in good repair',
    body: 'Under WA law, your landlord is legally required to maintain the property in a reasonable state of repair — this includes the roof, walls, plumbing, electrical systems, and any appliances included in your lease.',
    law: 's.42 RTA 1987',
    tip: 'Take photos of any damage when you move in and when issues appear. Use timestamps if possible — it\'s your evidence if anything is disputed.',
  },
  {
    number: '2',
    title: 'Report the repair in writing',
    body: 'Always notify your landlord or property manager about repairs in writing (text, email, or letter). This creates a paper trail and starts the legal clock for them to respond.',
    tip: 'Use our "Formal repairs request" template letter in the Letters tool to make this easy.',
  },
  {
    number: '3',
    title: 'They have 14 days to fix non-urgent repairs',
    body: 'For routine repairs, your landlord must complete the work within a reasonable time — generally taken as 14 days for non-urgent issues. Urgent repairs (like burst pipes or gas leaks) must be addressed immediately.',
    law: 's.42 RTA 1987',
  },
  {
    number: '4',
    title: 'If they don\'t act, you can apply to the Magistrates Court',
    body: 'If your landlord fails to make repairs after you\'ve notified them in writing, you can apply for a Repair Order from the Magistrates Court. You may also be entitled to compensation for any harm caused.',
    law: 's.42A RTA 1987',
    tip: 'Before going to court, try contacting Consumer Protection WA — they offer free dispute resolution services.',
  },
  {
    number: '5',
    title: 'Urgent repairs have special rules',
    body: 'If there\'s an urgent repair (e.g. a broken heater in winter, flooding, gas leak), you may be able to organise the repair yourself and claim back the cost — up to $1,800 — if your landlord can\'t be reached.',
    law: 's.43A RTA 1987',
  },
]

const FAQS = [
  {
    q: 'Can my landlord charge me for repairs?',
    a: 'Only if the damage was caused by you, your family, or guests through misuse or neglect. Normal wear and tear is always the landlord\'s responsibility.',
  },
  {
    q: 'What counts as an "urgent" repair?',
    a: 'Urgent repairs include: burst water service, blocked or broken toilet, serious roof leak, gas leak, dangerous electrical fault, flooding, or any issue that makes the property unsafe or uninhabitable.',
  },
  {
    q: 'Can I withhold rent if repairs aren\'t done?',
    a: 'No — withholding rent is not legal in WA and could get you evicted. Instead, apply to the Magistrates Court for a Repair Order or contact Consumer Protection WA.',
  },
  {
    q: 'What\'s "fair wear and tear"?',
    a: 'Fair wear and tear is the normal deterioration of a property from everyday use — like carpet wearing out, paint fading, or door handles loosening over time. This is ALWAYS the landlord\'s cost, not yours.',
  },
]

export default function RepairsPage() {
  return (
    <TopicPage
      tag="Topic Guide — Repairs"
      title="Repairs & Maintenance"
      intro="Something broken at your rental? You have legal rights. Here's exactly what your landlord must do — and what you can do if they don't."
      illustration="/repairs.png"
      color="teal"
      steps={STEPS}
      faqs={FAQS}
      ctaHref="https://www.commerce.wa.gov.au/consumer-protection"
      ctaLabel="Consumer Protection WA"
      chatPrompt="My landlord hasn't fixed a repair I reported 3 weeks ago. What can I do?"
    />
  )
}
