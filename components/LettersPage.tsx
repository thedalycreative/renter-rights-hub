/* ==== LETTERS PAGE: Template letter generator ==== */
'use client'
import { useState } from 'react'

/* ---- Data: Letter templates grounded in WA tenancy law ---- */
const TEMPLATES = [
  {
    id: 'inspection-notice',
    label: 'Decline illegal inspection',
    description: 'For when landlord has given less than 7 days written notice',
    tag: 'Entry & privacy',
    icon: '🔑',
    template: (f: Fields) => `${f.tenantName}
${f.propertyAddress}
${f.date}

${f.landlordName}
${f.landlordAddress}

Dear ${f.landlordName},

RE: Notice of Proposed Inspection — ${f.propertyAddress}

I write in response to your notice of ${f.inspectionDate ?? '[inspection date]'} regarding a proposed inspection of the above property.

Under section 43 of the Residential Tenancies Act 1987 (WA), a landlord must provide a tenant with not less than seven (7) days' written notice before conducting a routine inspection. The notice I received does not meet this statutory requirement.

Accordingly, I am not able to consent to the proposed inspection on the notified date. I am happy to accommodate an inspection on a mutually agreed date, provided seven days' written notice is given in accordance with the Act.

Please note that any entry without proper notice constitutes an offence under section 80 of the Act.

Yours sincerely,

${f.tenantName}`,
  },
  {
    id: 'repairs-request',
    label: 'Formal repairs request',
    description: 'Request urgent or routine repairs in writing with a deadline',
    tag: 'Repairs',
    icon: '🔧',
    template: (f: Fields) => `${f.tenantName}
${f.propertyAddress}
${f.date}

${f.landlordName}
${f.landlordAddress}

Dear ${f.landlordName},

RE: Request for Repairs — ${f.propertyAddress}

I write to formally request the following repairs to the above property:

${f.repairDetails ?? '[Describe the repair needed and when the issue was first noticed]'}

Under section 42 of the Residential Tenancies Act 1987 (WA), a landlord is required to maintain the premises in a reasonable state of repair. I request that the above repairs be completed within 14 days of this notice.

If the repairs are not completed within this timeframe, I may seek a repair order through the Magistrates Court under section 42A of the Act, or contact Consumer Protection WA.

Please confirm receipt of this letter and advise when the repairs will be scheduled.

Yours sincerely,

${f.tenantName}`,
  },
  {
    id: 'bond-claim',
    label: 'Bond refund request',
    description: 'Request return of bond after vacating',
    tag: 'Bond',
    icon: '💰',
    template: (f: Fields) => `${f.tenantName}
${f.propertyAddress}
${f.date}

${f.landlordName}
${f.landlordAddress}

Dear ${f.landlordName},

RE: Return of Bond — ${f.propertyAddress}

I vacated the above property on ${f.vacateDate ?? '[vacate date]'} and returned the keys as agreed. The property was left in a clean and tidy condition, consistent with its condition at the commencement of the tenancy (fair wear and tear excepted).

Under section 38 of the Residential Tenancies Act 1987 (WA), I request the return of my bond of ${f.bondAmount ? `$${f.bondAmount}` : '[bond amount]'} in full.

If you intend to make a claim on the bond, please note you must do so within seven (7) days of the tenancy ending. If I do not hear from you within this period, I will apply directly to the Bond Administrator for a full refund.

Yours sincerely,

${f.tenantName}`,
  },
]

/* ---- Types: Form field values ---- */
interface Fields {
  tenantName: string
  propertyAddress: string
  landlordName: string
  landlordAddress: string
  date: string
  inspectionDate?: string
  repairDetails?: string
  vacateDate?: string
  bondAmount?: string
}

const today = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })

export default function LettersPage() {
  const [selected, setSelected] = useState(TEMPLATES[0].id)
  const [fields, setFields] = useState<Fields>({
    tenantName: '', propertyAddress: '', landlordName: '', landlordAddress: '', date: today,
  })
  const [copied, setCopied] = useState(false)

  const template = TEMPLATES.find(t => t.id === selected)!
  const letter = template.template(fields)

  /* Update a single field */
  function update(key: keyof Fields, value: string) {
    setFields(prev => ({ ...prev, [key]: value }))
  }

  /* Copy letter text to clipboard */
  async function copyLetter() {
    await navigator.clipboard.writeText(letter)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const needsInspectionDate = selected === 'inspection-notice'
  const needsRepairs        = selected === 'repairs-request'
  const needsBond           = selected === 'bond-claim'

  return (
    <div className="max-w-4xl mx-auto px-7 py-10 animate-fade-in">
      {/* Header: Page title */}
      <div className="mb-7">
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-teal-md mb-2">Tool</p>
        <h1 className="font-serif text-[28px] font-bold text-teal-3 mb-2">Template letters</h1>
        <p className="text-[14.5px] text-ink-3">
          Pre-filled dispute letters grounded in WA tenancy law. Fill in your details and copy.
        </p>
      </div>

      {/* Layout: Two-column grid */}
      <div className="grid grid-cols-[1fr_1.4fr] gap-6">

        {/* Left column: Template selector + form fields */}
        <div className="space-y-5">
          {/* Template picker cards */}
          <div className="space-y-2">
            {TEMPLATES.map(t => (
              <button
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`w-full text-left border rounded-xl px-4 py-3.5 transition-all duration-200 group ${
                  selected === t.id
                    ? 'bg-teal-lt border-teal-md shadow-md shadow-teal/5'
                    : 'bg-white border-sand-3 hover:border-teal-md/30 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]">{t.icon}</span>
                    <span className={`text-[13.5px] font-medium ${selected === t.id ? 'text-teal-2' : 'text-ink-2'}`}>
                      {t.label}
                    </span>
                  </div>
                  <span className="text-[10px] bg-sand border border-sand-3 text-ink-4 px-2 py-[2px] rounded-full flex-shrink-0 mt-0.5">
                    {t.tag}
                  </span>
                </div>
                <p className="text-[12px] text-ink-4 mt-1 pl-7">{t.description}</p>
              </button>
            ))}
          </div>

          {/* Form: Your details */}
          <div className="card p-5 space-y-4">
            <p className="text-[12px] font-semibold text-ink-3 uppercase tracking-[0.08em]">Your details</p>
            <Field label="Your full name"          value={fields.tenantName}      onChange={v => update('tenantName', v)} />
            <Field label="Property address"        value={fields.propertyAddress} onChange={v => update('propertyAddress', v)} />
            <Field label="Landlord / agent name"   value={fields.landlordName}    onChange={v => update('landlordName', v)} />
            <Field label="Landlord / agent address" value={fields.landlordAddress} onChange={v => update('landlordAddress', v)} />

            {/* Conditional fields based on selected template */}
            {needsInspectionDate && (
              <Field label="Date of proposed inspection" value={fields.inspectionDate ?? ''} onChange={v => update('inspectionDate', v)} />
            )}
            {needsRepairs && (
              <Field label="Describe the repair needed" value={fields.repairDetails ?? ''} onChange={v => update('repairDetails', v)} textarea />
            )}
            {needsBond && (
              <>
                <Field label="Vacate date"     value={fields.vacateDate ?? ''}  onChange={v => update('vacateDate', v)} />
                <Field label="Bond amount ($)"  value={fields.bondAmount ?? ''}  onChange={v => update('bondAmount', v)} />
              </>
            )}
          </div>
        </div>

        {/* Right column: Letter preview */}
        <div className="flex flex-col">
          {/* Preview: Header + copy button */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-[13px] font-medium text-ink-3">Letter preview</p>
            <button
              onClick={copyLetter}
              className={`text-[12.5px] px-3.5 py-1.5 rounded-[8px] border transition-all duration-200 ${
                copied
                  ? 'bg-teal-lt border-teal-md text-teal-2 shadow-sm'
                  : 'bg-white border-sand-3 text-ink-3 hover:border-teal-md hover:text-teal-2 hover:shadow-sm'
              }`}
            >
              {copied ? '✓ Copied!' : 'Copy letter'}
            </button>
          </div>

          {/* Preview: Letter content */}
          <div className="card p-6 flex-1 overflow-y-auto">
            <pre className="font-sans text-[13px] text-ink-2 leading-relaxed whitespace-pre-wrap">{letter}</pre>
          </div>

          {/* Preview: Footer disclaimer */}
          <p className="text-[11.5px] text-ink-4 mt-3 leading-relaxed">
            Review before sending. For complex disputes, consider getting advice from a community legal centre or{' '}
            <a href="https://tenancywa.org.au" target="_blank" rel="noreferrer" className="text-teal underline hover:text-teal-2 transition-colors">
              Tenancy WA
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ---- Field: Reusable form input sub-component ---- */
function Field({ label, value, onChange, textarea }: {
  label: string; value: string; onChange: (v: string) => void; textarea?: boolean
}) {
  const cls = "w-full border border-sand-3 rounded-[8px] px-3 py-2.5 text-[13.5px] text-ink outline-none focus:border-teal-md focus:ring-2 focus:ring-teal/8 transition-all duration-200 placeholder:text-ink-4"
  return (
    <div>
      <label className="block text-[12px] text-ink-4 mb-1.5 font-medium">{label}</label>
      {textarea
        ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} className={`${cls} resize-none`} />
        : <input value={value} onChange={e => onChange(e.target.value)} className={cls} />
      }
    </div>
  )
}
