# Perth Renter Rights Hub

Plain-English WA tenancy law, powered by Gemini 2.5 Flash + the full Residential Tenancies Act 1987.

## Project Structure

```
renter-rights-hub/
├── app/
│   ├── globals.css            # Tailwind base + custom component styles + animations
│   ├── layout.tsx             # Root HTML layout + meta tags + font preloading
│   ├── page.tsx               # Chat (home)
│   ├── bond/page.tsx          # Bond calculator page
│   ├── letters/page.tsx       # Template letters page
│   └── api/
│       ├── ask/route.ts       # Gemini 2.5 Flash + full Act context endpoint
│       └── bond/route.ts      # Bond calculation endpoint
├── components/
│   ├── Sidebar.tsx            # App-wide sidebar nav with active indicators
│   ├── BondCalculator.tsx     # Bond calc form + results cards
│   ├── LettersPage.tsx        # Letter templates + live preview + copy
│   └── chat/
│       ├── ChatPage.tsx       # Chat container + state management
│       ├── MessageBubble.tsx  # User/assistant message rendering + follow-ups
│       ├── ChatInput.tsx      # Textarea + hint chips + send button
│       ├── Topbar.tsx         # Chat header bar with Act badge
│       └── WelcomeCard.tsx    # Intro card + stat cards + quick-start prompts
├── lib/
│   ├── act.ts                 # Fetches + caches full Act text from WA legislation site
│   └── types.ts               # Shared TypeScript interfaces
├── data/                      # (local only — not committed)
├── .env.local                 # API keys (not committed)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── vercel.json
└── package.json
```

## Table of Contents

| Page | Section | Content |
|---|---|---|
| `/` (Home) | `<Sidebar>` | Logo + amber glow, nav links (Tools/Topics/Resources), legal disclaimer |
| `/` (Home) | `<Topbar>` | Page title, live Act badge with pulse, template letter link |
| `/` (Home) | `<WelcomeCard>` | Intro text, stat cards (7-day notice, 4× inspections, 28-day bond), quick-start chips |
| `/` (Home) | `<ChatPage>` | Conversation thread, `<MessageBubble>` with citations + follow-ups, `<ChatInput>` |
| `/bond` | `<BondCalculator>` | Weekly rent input, vacate date, max bond result card, key date cards, info box |
| `/letters` | `<LettersPage>` | Template picker (inspection/repairs/bond), form fields, live letter preview, copy button |
| External | WA Tenancy Act 1987 | https://www.legislation.wa.gov.au |
| External | Consumer Protection WA | https://www.commerce.wa.gov.au/consumer-protection |

## Features

| Tool | Description |
|---|---|
| Rights assistant | AI Q&A grounded in the full *Residential Tenancies Act 1987 (WA)* via Gemini 2.5 Flash |
| Bond calculator | Max bond, lodgement deadline, refund estimate |
| Template letters | Inspection decline, repairs request, bond refund — cite real sections |

## Stack

- **Next.js 15** (App Router) + TypeScript + React 19
- **Tailwind CSS 3** — custom sand/teal/amber palette with animations
- **Google Gemini 2.5 Flash** — 1M token context, full Act ingestion per request
- **WA Legislation website** — live fetch + server-side cache of the full Act HTML
- **Vercel** — deployment + serverless functions

## Packages Required

```bash
# Install all dependencies
npm install

# Key packages (auto-installed by above):
# next ^15.3.0       — React framework (App Router)
# react ^19.0.0      — UI library
# tailwindcss ^3.4.3 — Utility-first CSS
# typescript ^5      — Type safety
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create `.env.local` in the project root:

```
GEMINI_API_KEY=your-gemini-api-key-here
```

Get a Gemini API key from: https://aistudio.google.com/apikey

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
# Add your Gemini key to Vercel project secrets
vercel env add GEMINI_API_KEY

# Deploy
vercel --prod
```

## Git Deployments

```bash
git reset --hard 1~InitialSetup
git reset --hard 2~APIRoutes+RAG
git reset --hard 3~UIComponents
git reset --hard 4~EnvLocal+SDKUpdate
git reset --hard 5~GeminiMigration+StylingUpgrade
```

## Repo & Links

- **Repo URL:** https://github.com/thedalycreative/renter-rights-hub
- **GitHub Pages:** https://thedalycreative.github.io/renter-rights-hub/
- **Live Site:** (Vercel deployment URL — add after first deploy)

```bash
# Clone into VS Code
git clone https://github.com/thedalycreative/renter-rights-hub.git
cd renter-rights-hub
code .
```

## Package / Framework Links

- Next.js 15: https://nextjs.org
- React 19: https://react.dev
- Tailwind CSS 3: https://tailwindcss.com
- Google Gemini API: https://ai.google.dev
- Vercel: https://vercel.com

## Author & License

- **Author:** Tim — The Daly Creative
- **License:** MIT

## Disclaimer

This tool explains WA law in plain English and is not legal advice.
For complex disputes, contact [Consumer Protection WA](https://www.commerce.wa.gov.au/consumer-protection)
or a community legal centre.
