import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Zap, ArrowRight, ShieldCheck, Lock, Mail } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'

export function LoginPage() {
  const [email, setEmail] = useState('alex.developer@adaptai.io')
  const [password, setPassword] = useState('••••••••••••')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/dashboard')
    }, 400)
  }

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F5F7FA] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#7C5CFC]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Brand header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-9 h-9 rounded-lg bg-[#7C5CFC] flex items-center justify-center shadow-lg shadow-[#7C5CFC]/20 group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#F5F7FA]">
              Adapt<span className="text-[#7C5CFC]">AI</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-[#F5F7FA]">
            Welcome to AdaptAI
          </h1>
          <p className="text-xs text-[#9AA6B2] mt-1.5">
            Sign in to access your continuous learning profile & recommendations
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-[#111820] border border-[#26313D] rounded-xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#26313D]">
            <span className="text-xs font-medium text-[#9AA6B2]">Learner Authentication</span>
            <Badge variant="ai" className="text-[10px]">Mock Demo Mode</Badge>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#9AA6B2] mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#66727F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@domain.com"
                  className="w-full bg-[#151D26] border border-[#26313D] rounded-lg pl-9 pr-3 py-2 text-sm text-[#F5F7FA] placeholder-[#66727F] focus:outline-none focus:border-[#7C5CFC] transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-[#9AA6B2]">Password</label>
                <button
                  type="button"
                  className="text-xs text-[#7C5CFC] hover:underline"
                  onClick={() => alert('Password reset is simulated in mock mode.')}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#66727F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  className="w-full bg-[#151D26] border border-[#26313D] rounded-lg pl-9 pr-3 py-2 text-sm text-[#F5F7FA] placeholder-[#66727F] focus:outline-none focus:border-[#7C5CFC] transition-colors"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                className="w-full h-10 font-semibold gap-2 justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Authenticating...' : 'Sign In to Dashboard'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Quick Demo Switcher */}
          <div className="mt-6 pt-5 border-t border-[#26313D] text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#66727F] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#35C98B]" />
              <span>Phase 2 frontend sandbox mode: No credentials stored</span>
            </div>
            <p className="text-xs text-[#9AA6B2]">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="text-[#7C5CFC] hover:underline font-medium"
              >
                Sign up as Demo Student
              </button>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-xs text-[#66727F] hover:text-[#9AA6B2] transition-colors">
            ← Back to AdaptAI Home
          </Link>
        </div>
      </div>
    </div>
  )
}
