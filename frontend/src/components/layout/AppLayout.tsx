import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { cn } from '@/lib/utils'

const routeTitles: Record<string, string> = {
  '/dashboard': 'Student Dashboard',
  '/practice': 'Practice Lab',
  '/topics': 'DSA Topics & Mastery',
  '/progress': 'Learning Analytics & Progress',
  '/insights': 'AI Learning Intelligence Insights',
  '/history': 'Submission History',
  '/settings': 'Settings',
  '/profile': 'Learner Profile',
}

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const currentTitle = routeTitles[location.pathname] || 'AdaptAI Platform'

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F5F7FA] flex flex-col">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <TopBar
        title={currentTitle}
        collapsed={collapsed}
        onMobileMenuOpen={() => setMobileOpen(true)}
      />
      <main
        className={cn(
          'flex-1 pt-14 transition-[padding-left] duration-200',
          collapsed ? 'lg:pl-[56px]' : 'lg:pl-[220px]',
        )}
      >
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
