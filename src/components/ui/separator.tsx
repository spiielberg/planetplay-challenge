import { cn } from '@/lib/utils'

interface SeparatorProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export const Separator = ({
  className,
  orientation = 'horizontal',
  ...rest
}: SeparatorProps) => {
  const baseClass = orientation === 'vertical' ? 'h-full w-px' : 'w-full h-px'

  return <div className={cn('bg-white', baseClass, className)} {...rest} />
}
