import { ProgressBar } from '@/components/common/ProgressBar'
import type { Topic } from '@/types'
import { cn } from '@/lib/utils'

interface TopicCardProps {
  topic: Topic
  className?: string
  onClick?: () => void
}

export function TopicCard({ topic, className, onClick }: TopicCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[#26313D] bg-[#151D26] p-4',
        onClick && 'hover:border-[#7C5CFC]/40 cursor-pointer transition-colors duration-200',
        className,
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-[#F5F7FA]">{topic.name}</h4>
        <span className="text-xs font-semibold" style={{ color: topic.color }}>
          {topic.mastery}%
        </span>
      </div>
      <ProgressBar value={topic.mastery} color={topic.color} />
      <p className="text-xs text-[#66727F] mt-2">
        {topic.problemsSolved}/{topic.problemsTotal} solved
      </p>
    </div>
  )
}
