import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Dumbbell, BookOpen, TrendingUp,
  Brain, History, Settings, User, ChevronLeft, ChevronRight, Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/dashboard',  icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/practice',   icon: Dumbbell,         label: 'Practice' },
  { to: '/topics',     icon: BookOpen,          label: 'Topics' },
  { to: '/progress',   icon: TrendingUp,        label: 'Progress' },
  { to: '/insights',   icon: Brain,             label: 'AI Insights' },
  { to: '/history',    icon: History,           label: 'History' },
]

const bottomItems = [
  { to: '/settings', icon: Settings, label: 'Settings' },
  { to: '/profile',  icon: User,     label: 'Profile' },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  const location = useLocation()

  const NavItem = ({ to, icon: Icon, label }: { to: string; icon: typeof LayoutDashboard; label: string }) => {
    const active = location.pathname === to
    return (
      <NavLink
        to={to}
        onClick={onMobileClose}
        className={cn(
          'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 group',
          active
            ? 'bg-[#7C5CFC]/15 text-[#7C5CFC] border border-[#7C5CFC]/20'
            : 'text-[#9AA6B2] hover:text-[#F5F7FA] hover:bg-[#151D26]',
          collapsed && 'justify-center px-2',
        )}
        title={collapsed ? label : undefined}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        {!collapsed && <span className="truncate">{label}</span>}
      </NavLink>
    )
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full bg-[#111820] border-r border-[#26313D] flex flex-col z-50',
          'transition-[width] duration-200 ease-in-out',
          collapsed ? 'w-[56px]' : 'w-[220px]',
          // Mobile
          'lg:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        {/* Logo */}
        <div className={cn('flex items-center h-14 px-3 border-b border-[#26313D]', collapsed && 'justify-center px-2')}>
          <div className="w-7 h-7 rounded-md bg-[#7C5CFC] flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span className="ml-2.5 text-sm font-bold text-[#F5F7FA] tracking-tight">
              Adapt<span className="text-[#7C5CFC]">AI</span>
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
          {navItems.map(item => <NavItem key={item.to} {...item} />)}
          <div className="my-2 border-t border-[#26313D]" />
          {bottomItems.map(item => <NavItem key={item.to} {...item} />)}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={onToggle}
          className="hidden lg:flex items-center justify-center h-10 border-t border-[#26313D] text-[#66727F] hover:text-[#F5F7FA] hover:bg-[#151D26] transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </aside>
    </>
  )
}
