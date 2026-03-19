import { NextRequest, NextResponse } from 'next/server'
import { getActText } from '@/lib/act'
import type { Message, AskResponse } from '@/lib/types'

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { question, conversationHistory = [] }: {
      question: string
      conversationHistory: Message[]
    } = await req.json()

    if (!question?.trim()) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    if (!GOOGLE_API_KEY) {
      return NextResponse.json({ error: 'Missing GOOGLE_API_KEY or GEMINI_API_KEY' }, { status: 500 })
    }

    // 1. Fetch the ENTIRE Act using straight text, no vector databases!
    // Gemini 2.5 Flash loves long contexts and handles 1 Million tokens easily.
    const actFullText = await getActText()

    // 2. Build the system prompt
    const systemPrompt = `You are a plain-English tenancy law assistant for Western Australia.

RULES:
- Answer based on the FULL legal text provided below. Never guess or generalise beyond it.
- Always cite the specific section number inline, e.g. "under s.43 of the Act".
- If the Act does not cover the question, state that clearly and suggest contacting Consumer Protection WA or a community legal centre.
- Keep answers conversational but precise. Replace legal jargon with everyday language where possible.
- If the situation sounds serious (harassment, illegal entry, discrimination), add a clear escalation path.
- Never tell the user what they "must" do legally — explain what the law says, then recommend professional advice for complex disputes.
- Format responses as short paragraphs. Avoid bullet-heavy walls of text.

RELEVANT FULL LEGAL TEXT:
The FULL text of the Residential Tenancies Act 1987 (WA) is provided here for your exhaustive context:

<ACT_WA_1987>
${actFullText}
</ACT_WA_1987>
`

    // 3. Call Gemini via standard fetch (gemini-2.5-flash)
    const geminiHistory = conversationHistory.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }))

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [
            ...geminiHistory,
            { role: 'user', parts: [{ text: question }] }
          ],
        })
      }
    )

    if (!response.ok) {
      console.error('Gemini error:', await response.text())
      return NextResponse.json({ error: 'LLM generated an error' }, { status: 500 })
    }

    const json = await response.json()
    const answer = json.candidates?.[0]?.content?.parts?.[0]?.text || ''

    const result: AskResponse = {
      answer,
      // We aren't retrieving specific sections through similarity search, so we can return an empty visual sources list.
      // Gemini natively cites it within its response text.
      sources: [],
    }

    return NextResponse.json(result)
  } catch (err) {
    console.error('/api/ask error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
