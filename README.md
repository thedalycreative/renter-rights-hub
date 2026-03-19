# Perth Renter Rights Hub

Plain-English WA tenancy law, powered by RAG + Claude.

## Project Structure

```
perth-renter-rights-hub/
├── app/
│   ├── globals.css            # Tailwind base + custom component styles
│   ├── layout.tsx             # Root HTML layout
│   ├── page.tsx               # Chat (home)
│   ├── bond/page.tsx          # Bond calculator page
│   ├── letters/page.tsx       # Template letters page
│   └── api/
│       ├── ask/route.ts       # RAG + Claude endpoint
│       └── bond/route.ts      # Bond calculation endpoint
├── components/
│   ├── Sidebar.tsx            # App-wide sidebar nav
│   ├── BondCalculator.tsx     # Bond calc form + results
│   ├── LettersPage.tsx        # Letter templates + preview
│   └── chat/
│       ├── ChatPage.tsx       # Chat container + state
│       ├── MessageBubble.tsx  # User/assistant message rendering
│       ├── ChatInput.tsx      # Textarea + hint chips
│       ├── Topbar.tsx         # Chat header bar
│       └── WelcomeCard.tsx    # Intro card + quick-start prompts
├── lib/
│   ├── embeddings.ts          # Voyage AI wrapper
│   ├── pinecone.ts            # Vector store client + query helper
│   ├── prompts.ts             # System prompt builder
│   └── types.ts               # Shared TypeScript interfaces
├── scripts/
│   └── ingest.mjs             # One-time legislation indexing script
├── data/
│   └── rta-1987-wa.txt        # WA Residential Tenancies Act (not committed)
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
| `/` (Home) | `<Sidebar>` | Logo, nav links (Tools/Topics/Resources), disclaimer |
| `/` (Home) | `<Topbar>` | Page title, WA Tenancy Act badge, action buttons |
| `/` (Home) | `<WelcomeCard>` | Intro text, stat cards (7-day notice, 4× inspections, 28-day bond), quick-start chips |
| `/` (Home) | `<ChatPage>` | Conversation thread, `<MessageBubble>` with sources + follow-ups, `<ChatInput>` |
| `/bond` | `<BondCalculator>` | Weekly rent input, vacate date, max bond result, key dates, info box |
| `/letters` | `<LettersPage>` | Template picker (inspection/repairs/bond), field inputs, live letter preview, copy button |
| External | Resources | WA Tenancy Act 1987: legislation.wa.gov.au |
| External | Resources | Consumer Protection WA: commerce.wa.gov.au/consumer-protection |

## Features

| Tool | Description |
|---|---|
| Rights assistant | AI Q&A grounded in the *Residential Tenancies Act 1987 (WA)* |
| Bond calculator | Max bond, lodgement deadline, refund estimate |
| Template letters | Inspection decline, repairs request, bond refund |

## Stack

- **Next.js 15** (App Router) + TypeScript + React 19
- **Tailwind CSS 3** — custom sand/teal palette
- **Claude API** (`claude-sonnet-4-6` via `@anthropic-ai/sdk` v0.79) — answer generation
- **Voyage AI** (`voyage-law-2`) — legal-domain embeddings
- **Pinecone** (`@pinecone-database/pinecone` v7) — serverless vector store
- **Vercel** — deployment

## Packages Required

```bash
# Install all dependencies
npm install

# Key packages (auto-installed by above):
# @anthropic-ai/sdk ^0.79.0   — Claude AI SDK
# @pinecone-database/pinecone ^7.1.0 — Vector DB client
# next ^15.3.0                 — React framework
# react ^19.0.0                — UI library
# voyageai ^0.2.1              — Embedding model client
# tailwindcss ^3.4.3           — Utility-first CSS
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

All API keys live in `.env.local` (auto-read by Next.js and each SDK):

```
ANTHROPIC_API_KEY=sk-ant-...
VOYAGE_API_KEY=pa-...            # https://www.voyageai.com
PINECONE_API_KEY=pcsk_...        # https://www.pinecone.io
PINECONE_INDEX=renter-rights
```

### 3. Ingest the legislation

Download the *Residential Tenancies Act 1987 (WA)* as plain text from:
https://www.legislation.wa.gov.au

Save it to `data/rta-1987-wa.txt`, then run:

```bash
npm run ingest
```

This chunks the Act by section, embeds each chunk with Voyage AI, and upserts into Pinecone. Runs once — re-run only if the legislation changes.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
# Add secrets to Vercel project
vercel env add ANTHROPIC_API_KEY
vercel env add VOYAGE_API_KEY
vercel env add PINECONE_API_KEY
vercel env add PINECONE_INDEX

# Deploy
vercel --prod
```

## Git Deployments

```bash
git reset --hard 1~InitialSetup
git reset --hard 2~APIRoutes+RAG
git reset --hard 3~UIComponents
git reset --hard 4~EnvLocal+SDKUpdate
```

## Repo & Links

- **Repo URL:** `git clone <your-repo-url>`
- **Live Site:** (add Vercel deployment URL here)

## Package / Framework Links

- Next.js 15: https://nextjs.org
- React 19: https://react.dev
- Tailwind CSS 3: https://tailwindcss.com
- Anthropic Claude SDK: https://docs.anthropic.com/en/api
- Voyage AI: https://www.voyageai.com
- Pinecone: https://www.pinecone.io
- Vercel: https://vercel.com

## Author & License

- **Author:** Tim
- **License:** MIT

## Disclaimer

This tool explains WA law in plain English and is not legal advice.
For complex disputes, contact [Consumer Protection WA](https://www.commerce.wa.gov.au/consumer-protection)
or a community legal centre.
# renter-rights-hub
