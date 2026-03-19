/* ==== TOPIC: Entry & Privacy ==== */
import TopicPage from '@/components/TopicPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entry & Privacy — Perth Renter Rights Hub',
  description: 'When can your landlord enter your rental property? Plain-English guide to tenant privacy rights in WA.',
}

const STEPS = [
  {
    number: '1',
    title: 'Your home is your private space — even if you rent it',
    body: 'As a tenant, you have a legal right to "quiet enjoyment" of your home. This means your landlord cannot just walk in whenever they like — they must follow strict rules set out in WA law.',
    law: 's.43 RTA 1987',
    tip: 'Think of your rental like your home — because legally, it is. You have real protections here.',
  },
  {
    number: '2',
    title: 'Routine inspections require 7 days\' written notice',
    body: 'If your landlord wants to inspect the property, they must give you at least 7 days\' written notice. They can only do this up to 4 times per year. If they show up without notice, that\'s a breach of the Act.',
    law: 's.43(1)(a) RTA 1987',
  },
  {
    number: '3',
    title: 'Emergency entry doesn\'t need notice',
    body: 'In a genuine emergency — like a gas leak, flooding, or fire — your landlord or agent can enter without notice. But it must be a real emergency, not just convenience.',
    law: 's.43(1)(c) RTA 1987',
  },
  {
    number: '4',
    title: 'You can decline or reschedule if notice isn\'t correct',
    body: 'If you receive an inspection notice that doesn\'t give you the full 7 days, you are legally within your rights to decline that inspection and ask them to reschedule with proper notice.',
    tip: 'Use our "Decline illegal inspection" letter template — it\'s already drafted with the right legal language.',
  },
  {
    number: '5',
    title: 'Illegal entry is an offence',
    body: 'If your landlord enters your property without following the rules, they may have committed an offence under the Act. You can report this to Consumer Protection WA or seek help from a community legal centre.',
    law: 's.80 RTA 1987',
  },
]

const FAQS = [
  {
    q: 'Can my landlord give less than 7 days if they just text me?',
    a: 'No. The notice must be written AND give you a minimum of 7 clear days. A text or email counts as written, but the timeframe still applies.',
  },
  {
    q: 'Can my landlord come for repairs without notice?',
    a: 'For urgent repairs, yes. For non-urgent repairs, they should give at least 24 hours\' notice and you should agree to a time. You don\'t have to let them in without reasonable notice.',
  },
  {
    q: 'My landlord has a key — can they use it whenever they like?',
    a: 'No. Having a key doesn\'t give them the right to enter. All entry rights are governed by the Act — the key is only for authorised and properly noticed entry.',
  },
  {
    q: 'They entered without notice. What do I do?',
    a: 'Document it (date, time, what happened). Then write to your landlord or agent reminding them of the law. If it continues, report it to Consumer Protection WA or get advice from Tenancy WA.',
  },
]

export default function EntryPage() {
  return (
    <TopicPage
      tag="Topic Guide — Privacy"
      title="Entry & Privacy"
      intro="It's your home — here's what your landlord can and can't do when it comes to entering your property. Know your privacy rights."
      illustration="/entry.png"
      color="teal"
      steps={STEPS}
      faqs={FAQS}
      ctaHref="https://tenancywa.org.au"
      ctaLabel="Tenancy WA (free advice)"
      chatPrompt="Can my landlord enter my home without telling me first?"
    />
  )
}
