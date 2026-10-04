import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string | number
  icon?: ReactNode
  delta?: string
  positive?: boolean
  className?: string
}

export function StatCard({ label, value, icon, delta, positive, className }: StatCardProps) {
  return (
    <div className={cn('rounded-lg border border-[#26313D] bg-[#151D26] p-4', className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs text-[#9AA6B2] font-medium mb-1 uppercase tracking-wide">{label}</p>
          <p className="text-2xl font-semibold text-[#F5F7FA] leading-none">{value}</p>
          {delta && (
            <p className={cn('text-xs mt-1.5 font-medium', positive ? 'text-[#35C98B]' : 'text-[#F05D6C]')}>
              {delta}
            </p>
          )}
        </div>
        {icon && (
          <div className="w-9 h-9 rounded-md bg-[#111820] border border-[#26313D] flex items-center justify-center text-[#9AA6B2] flex-shrink-0">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
