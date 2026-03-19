/* ==== MESSAGE BUBBLE: User + assistant message rendering ==== */
import type { MessageWithSources } from './ChatPage'

/* ---- Data: Context-aware follow-up suggestions ---- */
const FOLLOWUP_SUGGESTIONS: Record<string, string[]> = {
  entry:   ['How do I decline in writing?', 'What if they enter anyway?', 'What counts as an emergency?'],
  bond:    ['How do I lodge my bond?', 'What can the landlord claim from my bond?', 'How long does a bond refund take?'],
  repairs: ['What if landlord ignores repair requests?', 'Can I withhold rent for unrepaired issues?', 'What counts as urgent repairs?'],
  notice:  ['What if I need to leave sooner?', 'Can I break a fixed-term lease?', 'What is a mutual agreement to end tenancy?'],
  default: ['Tell me more', 'What are my next steps?', 'Who can I contact for help?'],
}

/* Match answer content to relevant follow-up category */
function getFollowUps(content: string): string[] {
  if (/entry|inspect|access/i.test(content))       return FOLLOWUP_SUGGESTIONS.entry
  if (/bond/i.test(content))                        return FOLLOWUP_SUGGESTIONS.bond
  if (/repair|maintenance|urgent/i.test(content))   return FOLLOWUP_SUGGESTIONS.repairs
  if (/notice|vacate|end.*lease/i.test(content))    return FOLLOWUP_SUGGESTIONS.notice
  return FOLLOWUP_SUGGESTIONS.default
}

interface Props {
  message: MessageWithSources
  onFollowUp: (q: string) => void
}

export default function MessageBubble({ message, onFollowUp }: Props) {
  const isUser = message.role === 'user'

  /* ---- User message: Right-aligned teal bubble ---- */
  if (isUser) {
    return (
      <div className="flex flex-row-reverse gap-3 mb-6 animate-fade-in">
        {/* User: Avatar circle */}
        <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-sand-3 to-sand-2 text-ink-3 flex items-center justify-center text-[11px] font-semibold flex-shrink-0 border border-sand-3">
          TM
        </div>
        {/* User: Message bubble */}
        <div className="max-w-[72%]">
          <div className="bg-gradient-to-br from-teal to-teal-2 text-white rounded-2xl rounded-br-[4px] px-[18px] py-3.5 text-[14.5px] leading-relaxed shadow-md shadow-teal/10">
            {message.content}
          </div>
        </div>
      </div>
    )
  }

  /* ---- Assistant message: Left-aligned white bubble ---- */
  const bubbleClass = message.isWarning
    ? 'bg-gradient-to-br from-amber-lt to-white border border-amber/25 text-ink-2'
    : 'bg-white border border-sand-3 text-ink shadow-sm'

  return (
    <div className="flex gap-3 mb-6 animate-fade-in">
      {/* Assistant: Bot avatar */}
      <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-teal to-teal-2 flex items-center justify-center flex-shrink-0 shadow-md shadow-teal/10">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5L13 4.5V11.5L8 14.5L3 11.5V4.5L8 1.5Z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="max-w-[72%] flex flex-col gap-1.5">
        {/* Warning: Escalation banner */}
        {message.isWarning && (
          <div className="flex items-center gap-1.5 text-[12px] font-medium text-amber-2 mb-1">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1L12 11H1L6.5 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M6.5 5v3M6.5 9.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Possible serious issue — escalation warranted
          </div>
        )}

        {/* Assistant: Message body */}
        <div className={`rounded-2xl rounded-bl-[4px] px-[18px] py-3.5 text-[14.5px] leading-relaxed ${bubbleClass}`}>
          <FormattedAnswer content={message.content} />
        </div>

        {/* Sources: Cited legislation sections */}
        {message.sources && message.sources.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
            <span className="text-[11px] text-ink-4">Sources:</span>
            {message.sources.map(s => (
              <span key={s.section} className="source-pill">
                s.{s.section} — {s.relevanceScore}% match
              </span>
            ))}
          </div>
        )}

        {/* Follow-ups: Contextual suggestion chips */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {getFollowUps(message.content).map(q => (
            <button key={q} className="followup-chip" onClick={() => onFollowUp(q)}>
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---- FormattedAnswer: Parse bold + cite references ---- */
function FormattedAnswer({ content }: { content: string }) {
  const paragraphs = content.split('\n\n').filter(Boolean)
  return (
    <>
      {paragraphs.map((para, i) => (
        <p key={i} className={i < paragraphs.length - 1 ? 'mb-2.5' : ''}>
          <InlineFormatted text={para} />
        </p>
      ))}
    </>
  )
}

/* ---- InlineFormatted: Bold **text** and s.XX cite pills ---- */
function InlineFormatted({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|s\.\d+[A-Z]?(?:\([^)]+\))?)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-medium text-teal-2">{part.slice(2, -2)}</strong>
        }
        if (/^s\.\d+/.test(part)) {
          return <span key={i} className="cite-pill">{part}</span>
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}
