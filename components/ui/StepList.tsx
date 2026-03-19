/* ==== STEP LIST: Numbered action steps ==== */

interface Step {
  title: string
  description: string
}

interface StepListProps {
  steps: Step[]
}

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4 group">
          <div className="w-8 h-8 bg-gradient-to-br from-teal to-teal-2 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[13px] shadow-md shadow-teal/15 mt-0.5">
            {i + 1}
          </div>
          <div className="flex-1 min-w-0 pb-4 border-b border-sand-3 last:border-0">
            <h4 className="font-semibold text-[14.5px] text-ink mb-1">{step.title}</h4>
            <p className="text-[13.5px] text-ink-3 leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
