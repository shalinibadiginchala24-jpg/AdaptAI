import { Sliders, Code2 } from 'lucide-react'
import { Card, CardHeader, CardTitle } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'

export function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">Platform Settings</h1>
          <Badge variant="default" className="text-[10px]">Preferences</Badge>
        </div>
        <p className="text-xs sm:text-sm text-[#9AA6B2]">
          Manage your code editor settings, diagnostic telemetry, and interface preferences.
        </p>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#7C5CFC]" />
              <CardTitle>Code Execution Preferences</CardTitle>
            </div>
          </CardHeader>
          <div className="p-4 sm:p-6 pt-0 space-y-4 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#F5F7FA]">Default Language</p>
                <p className="text-[#66727F]">Programming language selected when opening problems</p>
              </div>
              <select className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded px-3 py-1.5 focus:outline-none">
                <option>TypeScript / JavaScript</option>
                <option>Python 3.12</option>
                <option>C++ 20</option>
                <option>Java 21</option>
              </select>
            </div>

            <div className="flex items-center justify-between border-t border-[#26313D] pt-4">
              <div>
                <p className="font-semibold text-[#F5F7FA]">Editor Keybindings</p>
                <p className="text-[#66727F]">Keyboard shortcuts configuration</p>
              </div>
              <select className="bg-[#151D26] border border-[#26313D] text-[#F5F7FA] rounded px-3 py-1.5 focus:outline-none">
                <option>Standard VS Code</option>
                <option>Vim Mode</option>
                <option>Emacs</option>
              </select>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#35C98B]" />
              <CardTitle>AI Diagnostic Sensitivity</CardTitle>
            </div>
          </CardHeader>
          <div className="p-4 sm:p-6 pt-0 space-y-4 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#F5F7FA]">Adaptive Recommendation Strictness</p>
                <p className="text-[#66727F]">Target gaps aggressively vs balanced variety</p>
              </div>
              <span className="text-[#7C5CFC] font-semibold">Aggressive Reinforcement</span>
            </div>

            <div className="flex items-center justify-between border-t border-[#26313D] pt-4">
              <div>
                <p className="font-semibold text-[#F5F7FA]">Diagnostic Logging</p>
                <p className="text-[#66727F]">Record micro-attempts and failed test runs for intelligence profile</p>
              </div>
              <span className="text-[#35C98B] font-semibold">Enabled</span>
            </div>
          </div>
        </Card>

        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" size="sm">Reset Defaults</Button>
          <Button variant="primary" size="sm" onClick={() => alert('Settings saved (Mock)')}>Save Changes</Button>
        </div>
      </div>
    </div>
  )
}
