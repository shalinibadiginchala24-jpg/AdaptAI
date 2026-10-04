import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number     // 0–100
  color?: string    // CSS color
  size?: 'sm' | 'md'
  className?: string
  showLabel?: boolean
}

export function ProgressBar({ value, color = '#7C5CFC', size = 'sm', className, showLabel }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div className={cn('w-full', className)}>
      <div className={cn('w-full bg-[#26313D] rounded-full overflow-hidden', size === 'sm' ? 'h-1.5' : 'h-2.5')}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${clamped}%`, backgroundColor: color }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-[#9AA6B2] mt-1 block">{clamped}%</span>
      )}
    </div>
  )
}
