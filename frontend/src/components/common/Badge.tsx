import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'ai'

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'bg-[#26313D] text-[#9AA6B2]',
  success: 'bg-[#35C98B]/15 text-[#35C98B] border border-[#35C98B]/25',
  warning: 'bg-[#F5B942]/15 text-[#F5B942] border border-[#F5B942]/25',
  error:   'bg-[#F05D6C]/15 text-[#F05D6C] border border-[#F05D6C]/25',
  info:    'bg-[#26313D] text-[#9AA6B2] border border-[#26313D]',
  ai:      'bg-[#7C5CFC]/15 text-[#7C5CFC] border border-[#7C5CFC]/25',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-0.5 text-xs font-medium',
        badgeVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// Difficulty-specific badge
export function DifficultyBadge({ difficulty }: { difficulty: 'Easy' | 'Medium' | 'Hard' }) {
  const map = { Easy: 'success', Medium: 'warning', Hard: 'error' } as const
  return <Badge variant={map[difficulty]}>{difficulty}</Badge>
}
