import { Product } from '@/generated/prisma'
import { cn } from '@/lib/utils'
import { TreeIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'
import { FaSteam } from 'react-icons/fa'

interface ProductCardProps {
  product: Product
  className?: string
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <div
      className={cn(
        'from-neutral-200n to-neutral-200n/0 w-[18.25rem] bg-gradient-to-r',
        className,
      )}
    >
      <Image
        src={product.cardImage}
        alt={product.title}
        width={292}
        height={136}
        className="h-[8.5rem] w-[18.25rem] shrink-0 object-cover"
      />
      <div className="from-neutral-300n to-neutral-300n/0 flex items-center gap-x-1 bg-gradient-to-r p-2">
        <p className="text-xl font-extrabold">
          {Number(product.price).toFixed(2)}
        </p>

        <p className="text-neutral-600n text-xs">USD</p>
      </div>

      <div className="flex items-center gap-x-2 px-2 py-1">
        <FaSteam className="text-neutral-600n size-4" />

        <div className="flex gap-x-1">
          <HugeiconsIcon
            icon={TreeIcon}
            className="text-primary size-4 shrink-0"
          />

          <p className="text-neutral-600n text-xs">99</p>
        </div>

        <p className="text-neutral-600n text-xs">Conan Exiles</p>
      </div>

      <div className="p-2">
        <p>{product.title}</p>
      </div>
    </div>
  )
}
