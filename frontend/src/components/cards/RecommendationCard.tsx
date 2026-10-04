import { Brain, ArrowRight } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { cn } from '@/lib/utils'

interface RecommendationCardProps {
  title?: string
  insight: string
  action?: string
  onAction?: () => void
  className?: string
}

export function RecommendationCard({
  title = 'Your next best step',
  insight,
  action = 'Start targeted practice',
  onAction,
  className,
}: RecommendationCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[#7C5CFC]/30 bg-[#7C5CFC]/5 p-4',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-md bg-[#7C5CFC]/20 flex items-center justify-center flex-shrink-0">
          <Brain className="w-4 h-4 text-[#7C5CFC]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-[#7C5CFC] uppercase tracking-wide">AI Insight</span>
          </div>
          <h4 className="text-sm font-semibold text-[#F5F7FA] mb-1">{title}</h4>
          <p className="text-xs text-[#9AA6B2] leading-relaxed mb-3">{insight}</p>
          <Button variant="primary" size="sm" onClick={onAction}>
            {action}
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
