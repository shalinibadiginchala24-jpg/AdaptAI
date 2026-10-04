import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Bug,
  Compass,
} from 'lucide-react'
import { Card, CardHeader, CardTitle } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { Link } from 'react-router-dom'

export function InsightsPage() {
  const strengths = [
    {
      title: 'Two-Pointer Technique (Arrays & Strings)',
      detail: '88% accuracy across 18 problems. Consistently identifies symmetric pointers and in-place transformations.',
      domain: 'Arrays',
    },
    {
      title: 'Monotonic Stack Fundamentals',
      detail: 'Solved 100% of Easy and 75% of Medium stack-based bracket/expression problems without hints.',
      domain: 'Stack & Queue',
    },
    {
      title: 'Fast Execution Time Optimization',
      detail: 'Average solution runs in the 82nd percentile of runtime complexity on accepted submissions.',
      domain: 'Performance',
    },
  ]

  const attentionAreas = [
    {
      title: 'Rotated & Scaled Binary Search',
      detail: '3 consecutive failures on boundary pivot identification and off-by-one index selection.',
      severity: 'High',
      suggestedAction: 'Practice 3 boundary-heavy binary search problems',
    },
    {
      title: 'Multi-Dimensional Dynamic Programming',
      detail: 'Frequent difficulties initializing 2D memoization grids and formulating state recurrence.',
      severity: 'Medium',
      suggestedAction: 'Review grid-based DP state transitions',
    },
    {
      title: 'Graph Cycle Detection (Directed)',
      detail: 'Mixed up BFS visited sets with DFS active-recursion stack states during 2 attempts.',
      severity: 'Medium',
      suggestedAction: 'Reinforce 3-color DFS cycle detection algorithm',
    },
  ]

  const recurringMistakes = [
    {
      pattern: 'Off-by-One Loop Bounds (low <= high vs low < high)',
      count: '4 occurrences',
      context: 'Occurred in Binary Search and Array interval merges.',
      recommendation: 'Adopt strict invariant templates: low <= high when searching values, low < high when shrinking range.',
    },
    {
      pattern: 'Missing Recursion Base Case for Null/Empty Subtrees',
      count: '3 occurrences',
      context: 'Occurred in Tree traversals and DFS depth checks.',
      recommendation: 'Always guard `if (!root) return baseValue;` as the absolute first line of recursive handlers.',
    },
    {
      pattern: 'Memory Leak / Inefficient Allocation inside Inner Loops',
      count: '2 occurrences',
      context: 'Occurred in Graph BFS neighbor queue constructions.',
      recommendation: 'Pre-allocate adjacency arrays or re-use buffers instead of recreating new slice references inside loops.',
    },
  ]

  const learningTrends = [
    {
      metric: 'Error Recovery Rate',
      value: '72%',
      trend: '+14% this month',
      description: 'You now successfully self-correct after a wrong answer on attempt 2 without giving up.',
    },
    {
      metric: 'First-Attempt Acceptance',
      value: '61%',
      trend: '+8% vs baseline',
      description: 'Fewer syntax errors and runtime crashes before first test execution.',
    },
    {
      metric: 'Time-to-Solution Velocity',
      value: '14m 20s',
      trend: '-3m 40s faster',
      description: 'Faster ideation and code translation on medium difficulty algorithmic problems.',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
            AI Learning Intelligence Insights
          </h1>
          <Badge variant="ai" className="text-[10px]">Cognitive Diagnostic Model</Badge>
        </div>
        <p className="text-xs sm:text-sm text-[#9AA6B2]">
          Deep algorithmic telemetry diagnosing behavioral patterns, blind spots, and error modes.
        </p>
      </div>

      {/* AI Diagnostic Summary Card */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-[#7C5CFC]/15 via-[#151D26] to-[#111820] border border-[#7C5CFC]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 flex items-center justify-center text-[#7C5CFC] flex-shrink-0">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7C5CFC]">
                Diagnostic Evaluation
              </span>
              <span className="text-xs text-[#66727F]">• Updated 2 hours ago</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-[#F5F7FA]">
              Strong algorithmic intuition with localized boundary edge-case vulnerabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#9AA6B2] mt-1 max-w-2xl leading-relaxed">
              You excel at selecting the right data structure initially (84% choice accuracy), but frequently miss edge cases (empty collections, single-item arrays, or boundary searches).
            </p>
          </div>
        </div>
        <Link to="/practice" className="flex-shrink-0">
          <Button variant="primary" size="sm" className="gap-1.5 shadow-md shadow-[#7C5CFC]/20">
            Target Weaknesses
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>

      {/* 2-Column Grid: Strengths & Areas Needing Attention */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#35C98B]" />
              <CardTitle>Demonstrated Strengths</CardTitle>
            </div>
            <Badge variant="success" className="text-[10px]">Verified</Badge>
          </CardHeader>
          <div className="p-4 sm:p-6 pt-0 space-y-4">
            {strengths.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-[#111820] border border-[#26313D] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#F5F7FA]">{item.title}</h4>
                  <Badge variant="default" className="text-[10px]">{item.domain}</Badge>
                </div>
                <p className="text-xs text-[#9AA6B2] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Areas Needing Attention */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#F5B942]" />
              <CardTitle>Areas Needing Attention</CardTitle>
            </div>
            <Badge variant="warning" className="text-[10px]">Actionable</Badge>
          </CardHeader>
          <div className="p-4 sm:p-6 pt-0 space-y-4">
            {attentionAreas.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-[#111820] border border-[#26313D] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#F5F7FA]">{item.title}</h4>
                  <Badge variant={item.severity === 'High' ? 'error' : 'warning'} className="text-[10px]">
                    {item.severity} Priority
                  </Badge>
                </div>
                <p className="text-xs text-[#9AA6B2] leading-relaxed">{item.detail}</p>
                <div className="flex items-center gap-2 pt-1 text-xs text-[#7C5CFC]">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{item.suggestedAction}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recurring Mistakes Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bug className="w-4 h-4 text-[#F05D6C]" />
            <CardTitle>Recurring Mistake Patterns</CardTitle>
          </div>
          <span className="text-xs text-[#66727F]">Extracted across all wrong attempts</span>
        </CardHeader>
        <div className="p-4 sm:p-6 pt-0 space-y-4">
          {recurringMistakes.map((mistake, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#111820] border border-[#26313D] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-mono text-xs font-semibold text-[#F05D6C]">{mistake.pattern}</span>
                <Badge variant="error" className="text-[10px] w-fit">{mistake.count}</Badge>
              </div>
              <p className="text-xs text-[#66727F]">{mistake.context}</p>
              <div className="bg-[#151D26] border border-[#26313D] rounded p-2.5 text-xs text-[#9AA6B2]">
                <strong className="text-[#35C98B] font-semibold">AdaptAI Recommendation: </strong>
                {mistake.recommendation}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Learning Trends Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#7C5CFC]" />
            <CardTitle>Cognitive Learning Trends</CardTitle>
          </div>
          <span className="text-xs text-[#66727F]">Trajectory over the last 30 days</span>
        </CardHeader>
        <div className="p-4 sm:p-6 pt-0 grid grid-cols-1 md:grid-cols-3 gap-4">
          {learningTrends.map((trend, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#111820] border border-[#26313D] space-y-2">
              <p className="text-xs text-[#9AA6B2] font-medium">{trend.metric}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-mono text-[#F5F7FA]">{trend.value}</span>
                <span className="text-xs font-medium text-[#35C98B]">{trend.trend}</span>
              </div>
              <p className="text-xs text-[#66727F] leading-relaxed">{trend.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
