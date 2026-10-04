import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:   'bg-[#7C5CFC] hover:bg-[#8B70FF] text-white border-transparent',
  secondary: 'bg-[#151D26] hover:bg-[#1D2733] text-[#F5F7FA] border-[#26313D]',
  ghost:     'bg-transparent hover:bg-[#151D26] text-[#9AA6B2] hover:text-[#F5F7FA] border-transparent',
  outline:   'bg-transparent hover:bg-[#151D26] text-[#F5F7FA] border-[#26313D] hover:border-[#7C5CFC]',
  danger:    'bg-[#F05D6C]/10 hover:bg-[#F05D6C]/20 text-[#F05D6C] border-[#F05D6C]/30',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm:  'px-3 py-1.5 text-xs h-7',
  md:  'px-4 py-2 text-sm h-9',
  lg:  'px-5 py-2.5 text-sm h-10',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md border font-medium',
        'transition-colors duration-150 cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFC] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0B0F14]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
)
Button.displayName = 'Button'
