import { useState, useMemo } from 'react'
import { Search, Sparkles, Filter, RotateCcw } from 'lucide-react'
import { ProblemCard } from '@/components/cards/ProblemCard'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { mockProblems, mockTopics } from '@/data/mockData'

export function PracticePage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Recommended problems (those with reasons targeting learner weaknesses)
  const recommendedProblems = useMemo(() => {
    return mockProblems.filter((p) => p.reason && (p.topicId === 'bsearch' || p.topicId === 'dp' || p.topicId === 'hashing')).slice(0, 3)
  }, [])

  // Filtered problems list
  const filteredProblems = useMemo(() => {
    return mockProblems.filter((problem) => {
      if (selectedTopic !== 'all' && problem.topicId !== selectedTopic) return false
      if (selectedDifficulty !== 'all' && problem.difficulty !== selectedDifficulty) return false
      if (selectedStatus !== 'all' && problem.status !== selectedStatus) return false
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        const matchesTitle = problem.title.toLowerCase().includes(query)
        const matchesTopic = problem.topic.toLowerCase().includes(query)
        const matchesTags = problem.tags.some((t) => t.toLowerCase().includes(query))
        if (!matchesTitle && !matchesTopic && !matchesTags) return false
      }
      return true
    })
  }, [selectedTopic, selectedDifficulty, selectedStatus, searchQuery])

  const resetFilters = () => {
    setSelectedTopic('all')
    setSelectedDifficulty('all')
    setSelectedStatus('all')
    setSearchQuery('')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">Practice Lab</h1>
          <Badge variant="ai" className="text-[10px]">Curated By AI</Badge>
        </div>
        <p className="text-xs sm:text-sm text-[#9AA6B2]">
          Targeted algorithmic problem solving calibrated to your ongoing learning profile.
        </p>
      </div>

      {/* Recommended for You Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#7C5CFC]/20 flex items-center justify-center text-[#7C5CFC]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-sm font-semibold text-[#F5F7FA]">
              Recommended for You
            </h2>
            <span className="text-xs text-[#66727F]">
              (High Priority Gaps)
            </span>
          </div>
          <span className="text-xs text-[#7C5CFC] font-medium hidden sm:inline-block">
            Updated based on recent mistakes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedProblems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              showReason={true}
              className="border-[#7C5CFC]/30 bg-gradient-to-b from-[#151D26] to-[#111820]"
            />
          ))}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#111820] border border-[#26313D] rounded-xl p-4 space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#66727F] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problems, topics, or tags..."
              className="w-full bg-[#151D26] border border-[#26313D] rounded-lg pl-9 pr-3 py-2 text-xs text-[#F5F7FA] placeholder-[#66727F] focus:outline-none focus:border-[#7C5CFC] transition-colors"
            />
          </div>

          {/* Quick Clear */}
          {(selectedTopic !== 'all' || selectedDifficulty !== 'all' || selectedStatus !== 'all' || searchQuery !== '') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="text-xs text-[#9AA6B2] hover:text-[#F5F7FA] gap-1 self-end md:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset filters
            </Button>
          )}
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#26313D]/60 text-xs">
          <div className="flex items-center gap-1.5 text-[#66727F]">
            <Filter className="w-3.5 h-3.5" />
            <span>Filters:</span>
          </div>

          {/* Topic Dropdown */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded-md px-2.5 py-1 text-xs focus:outline-none focus:border-[#7C5CFC]"
          >
            <option value="all">All Topics (10)</option>
            {mockTopics.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

          {/* Difficulty Dropdown */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded-md px-2.5 py-1 text-xs focus:outline-none focus:border-[#7C5CFC]"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded-md px-2.5 py-1 text-xs focus:outline-none focus:border-[#7C5CFC]"
          >
            <option value="all">All Statuses</option>
            <option value="Solved">Solved</option>
            <option value="Attempted">Attempted</option>
            <option value="Unsolved">Unsolved</option>
          </select>

          <span className="ml-auto text-[#66727F]">
            Showing <strong className="text-[#F5F7FA]">{filteredProblems.length}</strong> of{' '}
            {mockProblems.length} problems
          </span>
        </div>
      </div>

      {/* All Problems Grid */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-[#F5F7FA]">All Problems</h2>

        {filteredProblems.length === 0 ? (
          <div className="text-center py-12 bg-[#111820] border border-[#26313D] rounded-xl">
            <p className="text-sm text-[#9AA6B2] mb-2">No problems match your current filters.</p>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProblems.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                showReason={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
