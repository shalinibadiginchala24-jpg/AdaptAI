import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  noPad?: boolean
}

export function Card({ hover, noPad, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[#26313D] bg-[#151D26]',
        !noPad && 'p-5',
        hover && 'hover:border-[#7C5CFC]/40 transition-colors duration-200 cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-sm font-semibold text-[#F5F7FA]', className)} {...props}>
      {children}
    </h3>
  )
}
