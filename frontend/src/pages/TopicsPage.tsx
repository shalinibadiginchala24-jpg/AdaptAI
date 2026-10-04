import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, CheckCircle, AlertTriangle, ArrowUpDown, Dumbbell } from 'lucide-react'
import { TopicCard } from '@/components/cards/TopicCard'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { Card } from '@/components/common/Card'
import { mockTopics } from '@/data/mockData'

export function TopicsPage() {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState<'default' | 'mastery-asc' | 'mastery-desc' | 'name'>('default')

  const sortedTopics = [...mockTopics].sort((a, b) => {
    if (sortBy === 'mastery-asc') return a.mastery - b.mastery
    if (sortBy === 'mastery-desc') return b.mastery - a.mastery
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  const masteredCount = mockTopics.filter((t) => t.mastery >= 70).length
  const inProgressCount = mockTopics.filter((t) => t.mastery >= 40 && t.mastery < 70).length
  const needsFocusCount = mockTopics.filter((t) => t.mastery < 40).length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">DSA Topics</h1>
          <Badge variant="info" className="text-[10px]">10 Core Domains</Badge>
        </div>
        <p className="text-xs sm:text-sm text-[#9AA6B2]">
          Cognitive mastery assessments based on submission history and edge case resilience.
        </p>
      </div>

      {/* Summary Category Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 border-[#35C98B]/20 bg-[#35C98B]/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9AA6B2] uppercase font-medium">Mastered (≥70%)</p>
              <p className="text-2xl font-bold text-[#35C98B] mt-1">{masteredCount} Topics</p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#35C98B]/20 flex items-center justify-center text-[#35C98B]">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-[#F5B942]/20 bg-[#F5B942]/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9AA6B2] uppercase font-medium">In Progress (40–69%)</p>
              <p className="text-2xl font-bold text-[#F5B942] mt-1">{inProgressCount} Topics</p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#F5B942]/20 flex items-center justify-center text-[#F5B942]">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border-[#F05D6C]/20 bg-[#F05D6C]/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9AA6B2] uppercase font-medium">Needs Attention (&lt;40%)</p>
              <p className="text-2xl font-bold text-[#F05D6C] mt-1">{needsFocusCount} Topics</p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#F05D6C]/20 flex items-center justify-center text-[#F05D6C]">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
        </Card>
      </div>

      {/* Sort controls */}
      <div className="flex items-center justify-between bg-[#111820] border border-[#26313D] rounded-lg px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-[#9AA6B2]">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#66727F]" />
          <span>Sort topics:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded px-2 py-1 text-xs focus:outline-none focus:border-[#7C5CFC]"
          >
            <option value="default">Default Order</option>
            <option value="mastery-asc">Mastery (Lowest First)</option>
            <option value="mastery-desc">Mastery (Highest First)</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/practice')}
          className="text-xs gap-1.5"
        >
          <Dumbbell className="w-3.5 h-3.5 text-[#7C5CFC]" />
          Practice Any Topic
        </Button>
      </div>

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            onClick={() => navigate('/practice')}
          />
        ))}
      </div>
    </div>
  )
}
