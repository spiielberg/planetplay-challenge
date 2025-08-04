import { cn } from '@/lib/utils'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string
  icon?: IconSvgElement
  iconClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      containerClassName,
      className,
      type = 'text',
      icon,
      iconClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          'border-neutral-500n relative w-full border-b',
          containerClassName,
        )}
      >
        <input
          type={type}
          className={cn(
            'placeholder:text-neutral-700n flex h-10 w-full px-3 py-2 text-base focus-visible:outline-none',
            icon && 'pr-12',
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <HugeiconsIcon
            icon={icon}
            className={cn(
              'text-neutral-700n pointer-events-none absolute inset-y-2 right-4 size-6',
              iconClassName,
            )}
          />
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
