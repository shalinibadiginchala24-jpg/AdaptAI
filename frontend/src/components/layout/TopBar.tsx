import { Search, Bell, Menu, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TopBarProps {
  title: string
  collapsed: boolean
  onMobileMenuOpen: () => void
}

export function TopBar({ title, collapsed, onMobileMenuOpen }: TopBarProps) {
  return (
    <header
      className={cn(
        'fixed top-0 right-0 h-14 bg-[#111820]/95 backdrop-blur border-b border-[#26313D]',
        'flex items-center justify-between px-4 sm:px-6 gap-4 z-30 transition-[left] duration-200',
        'left-0',
        collapsed ? 'lg:left-[56px]' : 'lg:left-[220px]',
      )}
    >
      {/* Left: mobile menu + title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMobileMenuOpen}
          className="lg:hidden text-[#9AA6B2] hover:text-[#F5F7FA] transition-colors p-1"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-sm font-semibold text-[#F5F7FA] truncate">{title}</h1>
      </div>

      {/* Right: search + bells + avatar */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 bg-[#151D26] border border-[#26313D] rounded-md px-3 py-1.5 w-48 lg:w-56">
          <Search className="w-3.5 h-3.5 text-[#66727F] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search problems…"
            className="bg-transparent text-xs text-[#9AA6B2] placeholder-[#66727F] outline-none flex-1 min-w-0"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-8 h-8 flex items-center justify-center rounded-md text-[#9AA6B2] hover:text-[#F5F7FA] hover:bg-[#151D26] transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#7C5CFC] rounded-full" />
        </button>

        {/* User avatar */}
        <button className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-[#151D26] transition-colors">
          <div className="w-7 h-7 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 flex items-center justify-center text-xs font-medium text-[#7C5CFC]">
            AK
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-[#66727F] hidden sm:block" />
        </button>
      </div>
    </header>
  )
}
