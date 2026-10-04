import { ReactNode } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/common/Card'
import { cn } from '@/lib/utils'

interface ChartCardProps {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  action?: ReactNode
}

export function ChartCard({ title, subtitle, children, className, action }: ChartCardProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <div>
          <CardTitle>{title}</CardTitle>
          {subtitle && <p className="text-xs text-[#66727F] mt-0.5">{subtitle}</p>}
        </div>
        {action}
      </CardHeader>
      {children}
    </Card>
  )
}
