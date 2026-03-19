/* ==== TOPIC: Ending a Tenancy ==== */
import TopicPage from '@/components/TopicPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ending a Tenancy — Perth Renter Rights Hub',
  description: 'How do you end your rental lease in WA? Notice periods, bond refunds, and your rights explained simply.',
}

const STEPS = [
  {
    number: '1',
    title: 'Know your lease type',
    body: 'You\'re either on a Fixed-Term lease (a set end date, e.g. 12 months) or a Periodic lease (ongoing, week-to-week or month-to-month). The notice period you need to give depends on which type you have.',
    tip: 'Check your lease agreement for the type and end date. If you\'re not sure, ask your property manager.',
  },
  {
    number: '2',
    title: 'Give the right amount of notice',
    body: 'On a periodic lease, you must give 21 days\' written notice before vacating. On a fixed-term lease, you\'re generally expected to stay until the end date — leaving early without agreement can mean breaking your lease.',
    law: 's.62 RTA 1987',
  },
  {
    number: '3',
    title: 'Give notice in writing',
    body: 'Your notice must be in writing — email or letter both count. State your intended vacate date clearly. Keep a copy for yourself as proof that you gave notice.',
  },
  {
    number: '4',
    title: 'Leave the property in a clean and tidy state',
    body: 'When you leave, the property should be in the same condition as when you moved in (allowing for fair wear and tear). Clean the property thoroughly, repair any damage you caused, and return all keys.',
    tip: 'Use your entry condition report as a guide. If something was already damaged when you moved in and you documented it, you\'re not responsible for it.',
  },
  {
    number: '5',
    title: 'Get your bond back',
    body: 'Once you vacate, your landlord has 7 days to either agree to return your bond or make a claim. If they don\'t claim within 7 days, apply to the Bond Administrator for a full refund. Use our Bond Refund template letter!',
    law: 's.38 RTA 1987',
  },
]

const FAQS = [
  {
    q: 'What happens if I leave before my fixed-term lease ends?',
    a: 'This is called "breaking your lease." You may owe the landlord compensation for any costs they incur finding a new tenant (like re-letting fees and advertising). However, they must try to minimise their losses.',
  },
  {
    q: 'Can my landlord make me leave without notice?',
    a: 'No. For most reasons, your landlord must give you written notice of at least 30–60 days (depending on the reason). The only exception is serious breach situations, which still require a formal Notice to Remedy.',
  },
  {
    q: 'Do I have to do a final inspection?',
    a: 'Yes — you\'re entitled to be present at a final inspection. This is important so you can dispute any claims before the landlord reports to the bond authority. Request one in writing.',
  },
  {
    q: 'Can I be kicked out for complaining about repairs?',
    a: 'No — this is called retaliatory eviction and it\'s unlawful. If you suspect this, document everything and contact Consumer Protection WA or Tenancy WA immediately.',
  },
  {
    q: 'How long does it take to get my bond back?',
    a: 'Once both parties agree, the Bond Administrator aims to process refunds within a few business days. If the landlord disputes your bond, it may take 2–4 weeks while the case is resolved.',
  },
]

export default function EndingPage() {
  return (
    <TopicPage
      tag="Topic Guide — Moving Out"
      title="Ending a Tenancy"
      intro="Moving out? Whether you're choosing to leave or your lease is coming to an end, here's everything you need to know — and how to get your bond back."
      illustration="/ending.png"
      color="teal"
      steps={STEPS}
      faqs={FAQS}
      ctaHref="https://www.commerce.wa.gov.au/consumer-protection/renting"
      ctaLabel="WA Renting Info"
      chatPrompt="How much notice do I need to give to end my lease in WA?"
    />
  )
}
