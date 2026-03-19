/* ==== TOPIC: Rent Increases ==== */
import TopicPage from '@/components/TopicPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rent Increases — Perth Renter Rights Hub',
  description: 'Can your landlord increase your rent? Learn the rules for rent increases in WA in simple language.',
}

const STEPS = [
  {
    number: '1',
    title: 'Your landlord can\'t increase rent whenever they like',
    body: 'WA law has strict rules about rent increases. Under a fixed-term lease, your rent generally cannot be increased during the lease unless the lease agreement specifically allows for it (and states how).',
    law: 's.30 RTA 1987',
    tip: 'Check your lease for any rent review clauses. If there\'s none, your rent is locked in for the lease term.',
  },
  {
    number: '2',
    title: 'At least 60 days\' notice is required',
    body: 'Before increasing your rent, your landlord must give you at least 60 days\' written notice. This applies to periodic (ongoing) leases. The current rule is that rent can only be increased once every 12 months.',
    law: 's.30 RTA 1987',
  },
  {
    number: '3',
    title: 'The notice must be in writing',
    body: 'The rent increase notice must be in writing and must clearly state the new rent amount and the date it takes effect. A verbal notice doesn\'t count and is not legally valid.',
  },
  {
    number: '4',
    title: 'You may be able to challenge an excessive increase',
    body: 'If you believe a rent increase is excessive, you can apply to the Magistrates Court to have it reviewed. The court considers market rents and the condition of the property.',
    law: 's.30A RTA 1987',
    tip: 'Start by checking what similar rental properties in your area cost. Realestate.com.au and REIWA data are useful references.',
  },
  {
    number: '5',
    title: 'Never agreed increases don\'t have to be paid',
    body: 'If your landlord tries to increase rent without proper notice, or increases it more frequently than the law allows, you are not legally obligated to pay the increase. Document everything and seek advice.',
  },
]

const FAQS = [
  {
    q: 'How often can my rent be increased?',
    a: 'Under current WA law (as of July 2023), rent can only be increased once every 12 months for any tenancy — whether periodic or fixed-term with a review clause.',
  },
  {
    q: 'My landlord texted me about a rent increase — is that valid?',
    a: 'No. Rent increase notices must be in writing as a formal document — email is acceptable, but a casual text message does not meet the legal requirement. Ask for it formally in writing.',
  },
  {
    q: 'Can I refuse a rent increase?',
    a: 'You can challenge a rent increase in the Magistrates Court if you think it\'s excessive. But if the increase was issued correctly and is reasonable, you\'d need to pay it, negotiate, or vacate.',
  },
  {
    q: 'Is there a maximum amount rent can be increased?',
    a: 'WA doesn\'t cap the dollar amount of a rent increase (unlike some other states). However, you can challenge an "excessive" increase in the Magistrates Court.',
  },
  {
    q: 'What if I\'m on a fixed-term lease?',
    a: 'During a fixed-term lease, rent can only be increased if your lease agreement includes a specific rent review clause that outlines how and when increases will happen. Without that clause, your rent is fixed for the whole term.',
  },
]

export default function RentPage() {
  return (
    <TopicPage
      tag="Topic Guide — Rent"
      title="Rent Increases"
      intro="Received a rent increase notice? Don't panic — there are rules your landlord must follow. Here's what\'s legal and what isn't."
      illustration="/rent.png"
      color="teal"
      steps={STEPS}
      faqs={FAQS}
      ctaHref="https://www.commerce.wa.gov.au/consumer-protection/renting/rent-increases"
      ctaLabel="Govt info on rent increases"
      chatPrompt="My landlord wants to increase my rent. Is the notice period correct in WA?"
    />
  )
}
