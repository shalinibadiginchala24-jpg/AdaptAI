import { Mail, Calendar, ShieldCheck } from 'lucide-react'
import { Card, CardHeader, CardTitle } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { dashboardStats } from '@/data/mockData'

export function ProfilePage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">Learner Profile</h1>
          <Badge variant="ai" className="text-[10px]">Mock Account</Badge>
        </div>
        <p className="text-xs sm:text-sm text-[#9AA6B2]">
          Your account identity and continuous learning passport on AdaptAI.
        </p>
      </div>

      <Card>
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[#7C5CFC]/20 border-2 border-[#7C5CFC] flex items-center justify-center text-xl font-bold text-[#7C5CFC]">
            AK
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-[#F5F7FA]">Alex Kumar</h2>
              <Badge variant="success" className="text-[10px]">Level 4 Apprentice</Badge>
            </div>
            <p className="text-xs text-[#9AA6B2] flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#66727F]" />
              alex.developer@adaptai.io
            </p>
            <p className="text-xs text-[#66727F] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Member since September 2026
            </p>
          </div>
          <div className="sm:ml-auto">
            <Button variant="outline" size="sm" onClick={() => alert('Profile editing is simulated in mock mode.')}>
              Edit Profile
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-xs text-[#9AA6B2]">Primary Focus Domain</p>
          <p className="text-base font-bold text-[#F5F7FA] mt-1">Data Structures & Algos</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs text-[#9AA6B2]">Verified Submissions</p>
          <p className="text-base font-bold text-[#7C5CFC] mt-1">{dashboardStats.problemsSolved} Solved</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs text-[#9AA6B2]">Cognitive Consistency</p>
          <p className="text-base font-bold text-[#35C98B] mt-1">{dashboardStats.streak} Day Streak</p>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#35C98B]" />
            <CardTitle>Continuous Profile Tracing</CardTitle>
          </div>
        </CardHeader>
        <div className="p-4 sm:p-6 pt-0 text-xs text-[#9AA6B2] space-y-2 leading-relaxed">
          <p>
            AdaptAI builds a real-time multidimensional knowledge graph tracing your mastery across each sub-topic. As you solve or fail test cases, your profile updates instantly to guide the AI recommendation algorithm.
          </p>
          <p className="text-[#66727F]">
            Data collected in Phase 2 is stored in local mock state and will connect to PostgreSQL in later phases.
          </p>
        </div>
      </Card>
    </div>
  )
}
