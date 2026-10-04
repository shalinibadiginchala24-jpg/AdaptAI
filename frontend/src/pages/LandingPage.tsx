import { Link } from 'react-router-dom'
import {
  Brain,
  ArrowRight,
  Sparkles,
  BarChart2,
  Layers,
  Compass,
  Cpu,
  RefreshCw,
  Search,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'

export function LandingPage() {
  const steps = [
    {
      num: '01',
      title: 'Practice',
      icon: Cpu,
      desc: 'Attempt curated DSA problems suited to your current mastery tier.',
      color: '#7C5CFC',
    },
    {
      num: '02',
      title: 'Analyze',
      icon: Search,
      desc: 'System tracks code patterns, execution limits, and exact failure states.',
      color: '#35C98B',
    },
    {
      num: '03',
      title: 'Understand',
      icon: Brain,
      desc: 'Pinpoints boundary misunderstandings, edge-case gaps, and syntax traps.',
      color: '#F5B942',
    },
    {
      num: '04',
      title: 'Personalize',
      icon: Compass,
      desc: 'Dynamic intelligence adjusts recommendations to target known weak spots.',
      color: '#8B70FF',
    },
    {
      num: '05',
      title: 'Improve',
      icon: RefreshCw,
      desc: 'Targeted reinforcement closes gaps systematically without wasted drills.',
      color: '#35C98B',
    },
  ]

  const features = [
    {
      icon: Brain,
      title: 'Continuous Learner Profiling',
      description:
        'AdaptAI maintains an evolving cognitive model of your strengths, blind spots, and error patterns across data structures.',
    },
    {
      icon: Zap,
      title: 'Targeted Recommendation Engine',
      description:
        'Never solve random problems again. Each recommended challenge has a transparent "Why this problem?" pedagogical rationale.',
    },
    {
      icon: BarChart2,
      title: 'Deep Mistake Diagnosis',
      description:
        'Distinguishes conceptual errors from boundary bugs, off-by-one indices, and time-complexity oversights.',
    },
    {
      icon: Layers,
      title: 'Multi-Domain Architecture',
      description:
        'Built starting with Data Structures & Algorithms, expandable to DBMS, Operating Systems, System Design, and Aptitude.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F5F7FA] flex flex-col selection:bg-[#7C5CFC]/30 selection:text-[#F5F7FA]">
      {/* Navigation */}
      <nav className="h-16 border-b border-[#26313D] bg-[#0B0F14]/80 backdrop-blur sticky top-0 z-50 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#7C5CFC] flex items-center justify-center shadow-lg shadow-[#7C5CFC]/20">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#F5F7FA]">
            Adapt<span className="text-[#7C5CFC]">AI</span>
          </span>
          <Badge variant="ai" className="hidden sm:inline-flex text-[10px] ml-2">
            PREVIEW v0.1
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="primary" size="sm" className="gap-1.5 shadow-md shadow-[#7C5CFC]/20">
              Launch App
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 max-w-6xl mx-auto text-center flex-1 flex flex-col items-center justify-center">
        {/* Subtle radial glow background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#7C5CFC]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151D26] border border-[#26313D] mb-8 text-xs font-medium text-[#9AA6B2]">
          <Sparkles className="w-3.5 h-3.5 text-[#7C5CFC]" />
          <span>Next-Generation Personalized Learning Intelligence</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F7FA] max-w-4xl leading-[1.15] mb-6">
          Learn from your past.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFC] via-[#8B70FF] to-[#35C98B]">
            Improve through every attempt.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#9AA6B2] max-w-2xl mx-auto mb-10 leading-relaxed">
          AdaptAI tracks your problem solving history, isolates recurring mistake patterns, and algorithmically selects the exact next challenge to accelerate your mastery.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link to="/dashboard">
            <Button size="lg" className="w-full sm:w-auto gap-2 px-6 h-12 text-sm font-semibold shadow-lg shadow-[#7C5CFC]/25">
              Start Learning Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/practice">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto px-6 h-12 text-sm font-medium">
              Explore Practice Lab
            </Button>
          </Link>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left border-y border-[#26313D] py-6 mb-20 bg-[#111820]/40 rounded-xl px-6">
          <div>
            <div className="text-xl font-bold font-mono text-[#F5F7FA]">DSA First</div>
            <div className="text-xs text-[#66727F] mt-0.5">Arrays, Trees, Graphs, DP</div>
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-[#35C98B]">100% Focused</div>
            <div className="text-xs text-[#66727F] mt-0.5">Targeted Weak-Spot Training</div>
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-[#7C5CFC]">AI Diagnostic</div>
            <div className="text-xs text-[#66727F] mt-0.5">Automated Mistake Tracing</div>
          </div>
          <div>
            <div className="text-xl font-bold font-mono text-[#F5B942]">Zero Fluff</div>
            <div className="text-xs text-[#66727F] mt-0.5">High-Signal Developer UX</div>
          </div>
        </div>

        {/* The Core Learning Loop Section */}
        <div className="w-full max-w-5xl text-left mb-24">
          <div className="text-center mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#7C5CFC] mb-2">
              The Engine
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA]">
              The Closed-Loop Intelligence Cycle
            </h3>
            <p className="text-sm text-[#9AA6B2] mt-2 max-w-lg mx-auto">
              How AdaptAI turns every failed submission into targeted exponential growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.num}
                  className="bg-[#151D26] border border-[#26313D] rounded-xl p-5 hover:border-[#7C5CFC]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#66727F]">{s.num}</span>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${s.color}18` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: s.color }} />
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-[#F5F7FA] mb-2">{s.title}</h4>
                    <p className="text-xs text-[#9AA6B2] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="w-full max-w-5xl text-left">
          <div className="text-center mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#35C98B] mb-2">
              Architecture & Capabilities
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA]">
              Built for Serious Technical Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="bg-[#111820] border border-[#26313D] rounded-xl p-6 hover:border-[#26313D]/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#151D26] border border-[#26313D] flex items-center justify-center text-[#7C5CFC] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-[#F5F7FA] mb-2">{f.title}</h4>
                  <p className="text-xs sm:text-sm text-[#9AA6B2] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full max-w-5xl mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#151D26] to-[#111820] border border-[#26313D] text-center relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] mb-3">
              Ready to experience intelligent practice?
            </h3>
            <p className="text-sm text-[#9AA6B2] mb-6">
              Step directly into the interactive dashboard and explore your personalized DSA learning path.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/dashboard">
                <Button size="lg" className="gap-2 px-6 shadow-lg shadow-[#7C5CFC]/20">
                  Enter Student Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#26313D] bg-[#0B0F14] py-8 px-4 sm:px-8 text-center text-xs text-[#66727F]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#F5F7FA]">AdaptAI</span>
            <span>— Personalized Learning Intelligence Platform</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="hover:text-[#F5F7FA] transition-colors">Dashboard</Link>
            <Link to="/practice" className="hover:text-[#F5F7FA] transition-colors">Practice</Link>
            <Link to="/topics" className="hover:text-[#F5F7FA] transition-colors">Topics</Link>
            <Link to="/insights" className="hover:text-[#F5F7FA] transition-colors">Insights</Link>
          </div>
          <div>© {new Date().getFullYear()} AdaptAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
