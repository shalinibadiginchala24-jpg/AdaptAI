import { Badge } from '@/components/common/Badge'
import type { SubmissionRecord } from '@/types'
import { cn } from '@/lib/utils'

const resultVariant = (r: SubmissionRecord['result']) => {
  if (r === 'Accepted') return 'success'
  if (r === 'Time Limit Exceeded') return 'warning'
  return 'error'
}

interface ActivityTableProps {
  submissions: SubmissionRecord[]
  className?: string
}

export function ActivityTable({ submissions, className }: ActivityTableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#26313D]">
            {['Problem', 'Topic', 'Result', 'Attempts', 'Time', 'Date'].map(h => (
              <th
                key={h}
                className="text-left px-3 py-3 text-xs font-medium text-[#66727F] uppercase tracking-wide whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub, i) => (
            <tr
              key={sub.id}
              className={cn(
                'border-b border-[#26313D]/50 hover:bg-[#111820] transition-colors',
                i === submissions.length - 1 && 'border-b-0',
              )}
            >
              <td className="px-3 py-3 font-medium text-[#F5F7FA] whitespace-nowrap">{sub.problem}</td>
              <td className="px-3 py-3 text-[#9AA6B2] whitespace-nowrap">{sub.topic}</td>
              <td className="px-3 py-3">
                <Badge variant={resultVariant(sub.result)}>
                  {sub.result}
                </Badge>
              </td>
              <td className="px-3 py-3 text-[#9AA6B2] text-center">{sub.attempts}</td>
              <td className="px-3 py-3 text-[#9AA6B2] font-mono text-xs whitespace-nowrap">{sub.timeTaken}</td>
              <td className="px-3 py-3 text-[#66727F] text-xs whitespace-nowrap">{sub.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
