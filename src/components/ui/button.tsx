import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

export const Button = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={cn(
        'border-primary relative w-full cursor-pointer border py-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#49DF8C] to-[#49DF8C00] opacity-50" />

      <span className="absolute inset-0 bg-[#2F2F2F] opacity-20" />

      <div className="relative">{children}</div>
    </button>
  )
}
