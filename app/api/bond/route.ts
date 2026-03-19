import { NextRequest, NextResponse } from 'next/server'
import type { BondResult } from '@/lib/types'

// WA bond rules (Residential Tenancies Act 1987, s.32)
// Bond cap: if weekly rent <= $1200, max bond = 4 weeks rent
//           if weekly rent >  $1200, no cap applies (uncommon)
const BOND_WEEKS_STANDARD = 4
const HIGH_RENT_THRESHOLD_WEEKLY = 1200

export async function POST(req: NextRequest) {
  const { weeklyRent, vacateDate }: { weeklyRent: number; vacateDate?: string } = await req.json()

  if (!weeklyRent || weeklyRent <= 0) {
    return NextResponse.json({ error: 'Weekly rent is required' }, { status: 400 })
  }

  const isHighRent = weeklyRent > HIGH_RENT_THRESHOLD_WEEKLY
  const maxBond = isHighRent
    ? weeklyRent * BOND_WEEKS_STANDARD  // no statutory cap, but 4 weeks is standard
    : weeklyRent * BOND_WEEKS_STANDARD

  // Lodgement: bond must be lodged with the Bond Administrator within 5 days
  // of receipt by the landlord (s.32(2))
  const today = new Date()
  const lodgeBy = new Date(today)
  lodgeBy.setDate(today.getDate() + 5)

  // Refund: bond admin must pay out within 14 days of an uncontested claim (s.38)
  // Landlord must lodge claim within 7 days of vacancy (or forfeit right to claim)
  const refundBase = vacateDate ? new Date(vacateDate) : today
  const refundDeadline = new Date(refundBase)
  refundDeadline.setDate(refundBase.getDate() + 28) // 7 days for landlord + ~21 days processing

  const result: BondResult = {
    maxBond:        Math.round(maxBond * 100) / 100,
    weeklyRent,
    lodgeBy:        lodgeBy.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    refundDeadline: refundDeadline.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
  }

  return NextResponse.json(result)
}
