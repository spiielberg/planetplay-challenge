import { cn } from '@/lib/utils'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface LoadingPageProps {
  className?: string
}

export const LoadingPage = ({ className }: LoadingPageProps) => {
  return (
    <div
      className={cn(
        'flex min-h-screen items-center justify-center bg-black',
        className,
      )}
    >
      <div className="flex flex-col gap-y-4 p-4 md:gap-y-8">
        <AiOutlineLoading3Quarters className="mx-auto size-10 animate-spin fill-white md:size-20" />

        <h1 className="font-rubik text-neutral-600n text-center text-xl font-extrabold md:text-2xl">
          Loading...
        </h1>
      </div>
    </div>
  )
}
