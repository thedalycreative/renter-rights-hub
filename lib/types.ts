export interface Message {
  role: 'user' | 'assistant'
  content: string
}

export interface Source {
  section: string
  source: string
  partTitle?: string
  relevanceScore: number
}

export interface AskResponse {
  answer: string
  sources: Source[]
}

export interface BondResult {
  maxBond: number
  weeklyRent: number
  lodgeBy: string
  refundDeadline: string
}
