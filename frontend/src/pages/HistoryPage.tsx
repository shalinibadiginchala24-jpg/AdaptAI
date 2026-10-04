import { useState, useMemo } from 'react'
import { Search, History, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'
import { ActivityTable } from '@/components/common/ActivityTable'
import { Card, CardHeader, CardTitle } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { mockSubmissions } from '@/data/mockData'

export function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [resultFilter, setResultFilter] = useState<string>('all')
  const [topicFilter, setTopicFilter] = useState<string>('all')

  const uniqueTopics = useMemo(() => {
    return Array.from(new Set(mockSubmissions.map((s) => s.topic)))
  }, [])

  const filteredSubmissions = useMemo(() => {
    return mockSubmissions.filter((sub) => {
      if (resultFilter !== 'all' && sub.result !== resultFilter) return false
      if (topicFilter !== 'all' && sub.topic !== topicFilter) return false
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        return (
          sub.problem.toLowerCase().includes(query) ||
          sub.topic.toLowerCase().includes(query)
        )
      }
      return true
    })
  }, [searchQuery, resultFilter, topicFilter])

  const acceptedCount = mockSubmissions.filter((s) => s.result === 'Accepted').length
  const wrongCount = mockSubmissions.filter((s) => s.result === 'Wrong Answer').length
  const tleCount = mockSubmissions.filter((s) => s.result === 'Time Limit Exceeded').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">Submission History</h1>
          <Badge variant="default" className="text-[10px]">Audit Log</Badge>
        </div>
        <p className="text-xs sm:text-sm text-[#9AA6B2]">
          Chronological record of code submissions, execution times, and grading results.
        </p>
      </div>

      {/* Summary KPI Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9AA6B2] uppercase font-medium">Total Runs</p>
              <p className="text-xl font-bold text-[#F5F7FA] mt-0.5">{mockSubmissions.length}</p>
            </div>
            <History className="w-5 h-5 text-[#9AA6B2]" />
          </div>
        </Card>

        <Card className="p-4 border-[#35C98B]/20 bg-[#35C98B]/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9AA6B2] uppercase font-medium">Accepted</p>
              <p className="text-xl font-bold text-[#35C98B] mt-0.5">{acceptedCount}</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-[#35C98B]" />
          </div>
        </Card>

        <Card className="p-4 border-[#F05D6C]/20 bg-[#F05D6C]/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9AA6B2] uppercase font-medium">Wrong Answer</p>
              <p className="text-xl font-bold text-[#F05D6C] mt-0.5">{wrongCount}</p>
            </div>
            <XCircle className="w-5 h-5 text-[#F05D6C]" />
          </div>
        </Card>

        <Card className="p-4 border-[#F5B942]/20 bg-[#F5B942]/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9AA6B2] uppercase font-medium">Time Limit (TLE)</p>
              <p className="text-xl font-bold text-[#F5B942] mt-0.5">{tleCount}</p>
            </div>
            <AlertCircle className="w-5 h-5 text-[#F5B942]" />
          </div>
        </Card>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-[#111820] border border-[#26313D] rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-[#66727F] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by problem or topic..."
            className="w-full bg-[#151D26] border border-[#26313D] rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#F5F7FA] placeholder-[#66727F] focus:outline-none focus:border-[#7C5CFC]"
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded-md px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#7C5CFC]"
          >
            <option value="all">All Topics</option>
            {uniqueTopics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select
            value={resultFilter}
            onChange={(e) => setResultFilter(e.target.value)}
            className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded-md px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#7C5CFC]"
          >
            <option value="all">All Results</option>
            <option value="Accepted">Accepted</option>
            <option value="Wrong Answer">Wrong Answer</option>
            <option value="Time Limit Exceeded">Time Limit Exceeded</option>
            <option value="Runtime Error">Runtime Error</option>
          </select>
        </div>
      </div>

      {/* Activity Table Card */}
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Historical Submissions ({filteredSubmissions.length})</CardTitle>
            <p className="text-xs text-[#66727F] mt-0.5">Showing records from current active session</p>
          </div>
        </CardHeader>
        <div className="p-4 pt-0">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#9AA6B2]">
              No submissions match the current query and filters.
            </div>
          ) : (
            <ActivityTable submissions={filteredSubmissions} />
          )}
        </div>
      </Card>
    </div>
  )
}
