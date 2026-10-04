import { DifficultyBadge, Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { Lightbulb } from 'lucide-react'
import type { Problem } from '@/types'
import { cn } from '@/lib/utils'

interface ProblemCardProps {
  problem: Problem
  showReason?: boolean
  className?: string
}

const statusDot: Record<string, string> = {
  Solved:    'bg-[#35C98B]',
  Attempted: 'bg-[#F5B942]',
  Unsolved:  'bg-[#26313D]',
}

export function ProblemCard({ problem, showReason, className }: ProblemCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[#26313D] bg-[#151D26] p-4 hover:border-[#7C5CFC]/30 transition-colors duration-200',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {/* Status indicator */}
        <div className="mt-1.5 flex-shrink-0">
          <span className={cn('block w-2 h-2 rounded-full', statusDot[problem.status])} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="text-sm font-medium text-[#F5F7FA] leading-snug">{problem.title}</h4>
            <DifficultyBadge difficulty={problem.difficulty} />
          </div>

          {/* Meta row */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <Badge variant="info">{problem.topic}</Badge>
            {problem.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs text-[#66727F]">#{tag}</span>
            ))}
          </div>

          {/* Why this problem */}
          {showReason && problem.reason && (
            <div className="flex items-start gap-2 bg-[#111820] rounded-md px-3 py-2 mb-3">
              <Lightbulb className="w-3.5 h-3.5 text-[#7C5CFC] mt-0.5 flex-shrink-0" />
              <p className="text-xs text-[#9AA6B2] leading-relaxed">{problem.reason}</p>
            </div>
          )}

          <Button variant="outline" size="sm">Practice</Button>
        </div>
      </div>
    </div>
  )
}
