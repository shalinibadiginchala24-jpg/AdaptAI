import { useNavigate } from 'react-router-dom'
import {
  Target,
  CheckCircle,
  Flame,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { StatCard } from '@/components/cards/StatCard'
import { RecommendationCard } from '@/components/cards/RecommendationCard'
import { ActivityTable } from '@/components/common/ActivityTable'
import { ProgressBar } from '@/components/common/ProgressBar'
import { Badge } from '@/components/common/Badge'
import { Card, CardHeader, CardTitle } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import {
  mockTopics,
  mockSubmissions,
  dashboardStats,
} from '@/data/mockData'

export function DashboardPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      {/* Welcome & Simulation Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111820] border border-[#26313D] rounded-xl p-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
              Good morning, Alex
            </h1>
            <Badge variant="ai" className="text-[10px]">
              Active Learner
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-[#9AA6B2]">
            AdaptAI analyzed your last 12 attempts. 2 key algorithmic patterns need reinforcement today.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/progress')}
            className="text-xs gap-1.5"
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#35C98B]" />
            Full Analytics
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/practice')}
            className="text-xs gap-1.5"
          >
            Practice Lab
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Core AI Recommendation Hero Banner */}
      <div className="relative">
        <div className="absolute -top-2.5 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#151D26] border border-[#7C5CFC]/40 text-[#7C5CFC]">
            <Sparkles className="w-3 h-3 text-[#7C5CFC]" />
            Simulated AI Engine Output
          </span>
        </div>
        <RecommendationCard
          title="Your next best step"
          insight="Your recent submissions show repeated difficulty with binary-search boundary handling (e.g. low <= high vs low < high off-by-one errors)."
          action="Start targeted practice"
          onAction={() => navigate('/practice')}
          className="border-[#7C5CFC]/40 bg-[#7C5CFC]/10 shadow-lg shadow-[#7C5CFC]/5"
        />
      </div>

      {/* Primary KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        <StatCard
          label="Skill Score"
          value={`${dashboardStats.skillScore}/100`}
          delta="+4% this week"
          positive={true}
          icon={<Target className="w-4 h-4 text-[#7C5CFC]" />}
        />
        <StatCard
          label="Problems Solved"
          value={dashboardStats.problemsSolved}
          delta="+12 problems"
          positive={true}
          icon={<CheckCircle className="w-4 h-4 text-[#35C98B]" />}
        />
        <StatCard
          label="Accuracy"
          value={`${dashboardStats.accuracy}%`}
          delta="+2.4% avg"
          positive={true}
          icon={<TrendingUp className="w-4 h-4 text-[#35C98B]" />}
        />
        <StatCard
          label="Current Streak"
          value={`${dashboardStats.streak} Days`}
          delta="Personal best!"
          positive={true}
          icon={<Flame className="w-4 h-4 text-[#F5B942]" />}
        />
        <StatCard
          label="Avg Solving Time"
          value={dashboardStats.avgSolveTime}
          delta="-1m 15s faster"
          positive={true}
          icon={<Clock className="w-4 h-4 text-[#9AA6B2]" />}
        />
      </div>

      {/* Main Grid: Topic Mastery Overview + Quick Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: DSA Topic Mastery Summary */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>DSA Domain Mastery</CardTitle>
                <p className="text-xs text-[#66727F] mt-0.5">
                  Real-time cognitive mastery breakdown across DSA topics
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/topics')}
                className="text-xs text-[#7C5CFC] hover:text-[#8B70FF]"
              >
                View all 10 topics →
              </Button>
            </CardHeader>

            <div className="p-4 sm:p-6 pt-0 space-y-4">
              {mockTopics.slice(0, 6).map((topic) => (
                <div key={topic.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#F5F7FA]">{topic.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#66727F]">
                        {topic.problemsSolved}/{topic.problemsTotal} solved
                      </span>
                      <span
                        className="font-mono font-medium"
                        style={{ color: topic.color }}
                      >
                        {topic.mastery}%
                      </span>
                    </div>
                  </div>
                  <ProgressBar value={topic.mastery} color={topic.color} size="sm" />
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Submissions */}
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Recent Activity & Submissions</CardTitle>
                <p className="text-xs text-[#66727F] mt-0.5">
                  Last recorded practice runs and automated grading results
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/history')}
                className="text-xs text-[#7C5CFC] hover:text-[#8B70FF]"
              >
                Full History →
              </Button>
            </CardHeader>
            <div className="p-4 sm:p-6 pt-0">
              <ActivityTable submissions={mockSubmissions.slice(0, 5)} />
            </div>
          </Card>
        </div>

        {/* Right Col: AI Quick Insights & Target Focus */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Target Focus Areas</CardTitle>
            </CardHeader>
            <div className="p-4 sm:p-6 pt-0 space-y-3">
              <div className="p-3 rounded-lg bg-[#111820] border border-[#26313D] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#F05D6C]">Priority 1: Binary Search</span>
                  <Badge variant="error" className="text-[10px]">38% Mastery</Badge>
                </div>
                <p className="text-xs text-[#9AA6B2]">
                  Recurrent failures on rotated array boundary conditions.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#111820] border border-[#26313D] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#F5B942]">Priority 2: Dynamic Programming</span>
                  <Badge variant="warning" className="text-[10px]">22% Mastery</Badge>
                </div>
                <p className="text-xs text-[#9AA6B2]">
                  Struggling with bottom-up table initialization and state dimensions.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#111820] border border-[#26313D] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#35C98B]">Top Strength: Arrays</span>
                  <Badge variant="success" className="text-[10px]">78% Mastery</Badge>
                </div>
                <p className="text-xs text-[#9AA6B2]">
                  Solid two-pointer and sliding-window mental models.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-[#7C5CFC]/30 bg-gradient-to-b from-[#151D26] to-[#111820]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7C5CFC]" />
                Learning Tip
              </CardTitle>
            </CardHeader>
            <div className="p-4 sm:p-6 pt-0 space-y-3">
              <p className="text-xs text-[#9AA6B2] leading-relaxed">
                When working on <strong className="text-[#F5F7FA]">Binary Search</strong>, always write your loop invariants explicitly:
              </p>
              <div className="bg-[#0B0F14] border border-[#26313D] p-2.5 rounded font-mono text-[11px] text-[#7C5CFC]">
                while (low &lt;= high) &#123;<br />
                &nbsp;&nbsp;mid = low + ((high - low) &gt;&gt; 1);<br />
                &#125;
              </div>
              <p className="text-[11px] text-[#66727F]">
                Mock tip generated by AdaptAI diagnostic heuristics.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
