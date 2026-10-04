import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { TrendingUp, BarChart3, Award, Calendar } from 'lucide-react'
import { ChartCard } from '@/components/charts/ChartCard'
import { Badge } from '@/components/common/Badge'
import { ProgressBar } from '@/components/common/ProgressBar'
import { Card } from '@/components/common/Card'
import {
  mockTopics,
  problemsSolvedOverTime,
  accuracyTrend,
  dashboardStats,
} from '@/data/mockData'

const CustomTooltip = ({ active, payload, label, unit = '' }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#151D26] border border-[#26313D] p-2.5 rounded-lg shadow-xl text-xs">
        <p className="text-[#9AA6B2] mb-1 font-mono">{label}</p>
        <p className="font-semibold text-[#F5F7FA]">
          {payload[0].value} {unit}
        </p>
      </div>
    )
  }
  return null
}

export function ProgressPage() {
  const topicChartData = mockTopics.map((t) => ({
    name: t.name.length > 10 ? t.name.slice(0, 10) + '...' : t.name,
    mastery: t.mastery,
    solved: t.problemsSolved,
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
            Learning Analytics & Progress
          </h1>
          <Badge variant="ai" className="text-[10px]">Real-time Telemetry</Badge>
        </div>
        <p className="text-xs sm:text-sm text-[#9AA6B2]">
          Continuous quantitative feedback on your algorithmic growth and consistency.
        </p>
      </div>

      {/* Top Level Metric Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#7C5CFC]/10 border border-[#7C5CFC]/20 flex items-center justify-center text-[#7C5CFC]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9AA6B2] font-medium">Platform Mastery</p>
              <p className="text-xl font-bold text-[#F5F7FA]">{dashboardStats.skillScore}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#35C98B]/10 border border-[#35C98B]/20 flex items-center justify-center text-[#35C98B]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9AA6B2] font-medium">Historical Accuracy</p>
              <p className="text-xl font-bold text-[#35C98B]">{dashboardStats.accuracy}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5B942]/10 border border-[#F5B942]/20 flex items-center justify-center text-[#F5B942]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9AA6B2] font-medium">Active Practice Streak</p>
              <p className="text-xl font-bold text-[#F5F7FA]">{dashboardStats.streak} Days</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#151D26] border border-[#26313D] flex items-center justify-center text-[#9AA6B2]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#9AA6B2] font-medium">Total Solved</p>
              <p className="text-xl font-bold text-[#F5F7FA]">{dashboardStats.problemsSolved}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Charts: Accuracy Trend & Problems Solved */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Accuracy Trend Chart */}
        <ChartCard
          title="Accuracy Trend"
          subtitle="Percentage of submissions accepted on first or second try"
        >
          <div className="h-64 p-4 pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={accuracyTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="accuracyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#35C98B" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#35C98B" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#26313D" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="label" stroke="#66727F" fontSize={11} tickLine={false} />
                <YAxis domain={[40, 100]} stroke="#66727F" fontSize={11} tickLine={false} unit="%" />
                <Tooltip content={<CustomTooltip unit="%" />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#35C98B"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#accuracyGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Problems Solved Over Time */}
        <ChartCard
          title="Problems Solved Over Time"
          subtitle="Daily solved submissions across all DSA topics"
        >
          <div className="h-64 p-4 pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={problemsSolvedOverTime} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="#26313D" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="label" stroke="#66727F" fontSize={11} tickLine={false} />
                <YAxis stroke="#66727F" fontSize={11} tickLine={false} allowDecimals={false} />
                <Tooltip content={<CustomTooltip unit="problems" />} />
                <Bar dataKey="value" fill="#7C5CFC" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Domain Mastery Breakdown Chart */}
      <ChartCard
        title="Skill Mastery by Topic"
        subtitle="Estimated mastery percentage per DSA domain"
      >
        <div className="h-72 p-4 pt-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topicChartData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid stroke="#26313D" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" stroke="#66727F" fontSize={11} tickLine={false} angle={-25} textAnchor="end" />
              <YAxis domain={[0, 100]} stroke="#66727F" fontSize={11} tickLine={false} unit="%" />
              <Tooltip content={<CustomTooltip unit="%" />} />
              <Bar dataKey="mastery" fill="#8B70FF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {/* Topic-wise Performance Detailed Breakdown */}
      <Card>
        <div className="p-4 border-b border-[#26313D]">
          <h3 className="text-sm font-semibold text-[#F5F7FA]">Topic Performance Matrix</h3>
          <p className="text-xs text-[#66727F] mt-0.5">Comprehensive view of solved ratio and mastery index</p>
        </div>
        <div className="p-4 divide-y divide-[#26313D]/60 space-y-3">
          {mockTopics.map((topic) => (
            <div key={topic.id} className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="w-48">
                <span className="text-sm font-medium text-[#F5F7FA]">{topic.name}</span>
                <p className="text-xs text-[#66727F]">{topic.problemsSolved} of {topic.problemsTotal} solved</p>
              </div>
              <div className="flex-1 max-w-md">
                <ProgressBar value={topic.mastery} color={topic.color} size="md" showLabel={false} />
              </div>
              <div className="sm:w-24 text-right">
                <span className="font-mono text-xs font-semibold" style={{ color: topic.color }}>
                  {topic.mastery}%
                </span>
                <span className="text-[11px] text-[#66727F] block">
                  {topic.mastery >= 70 ? 'Proficient' : topic.mastery >= 40 ? 'Developing' : 'Novice'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
