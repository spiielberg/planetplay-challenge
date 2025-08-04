import { BuyButton } from '@/components/home/buy-button'
import { Product } from '@/generated/prisma'
import { InformationCircleIcon, TreeIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

interface ProductDataProps {
  product: Product
}

export const ProductData = ({ product }: ProductDataProps) => {
  return (
    <>
      <div
        className="flex flex-col gap-y-8 bg-cover bg-center bg-no-repeat px-4 pt-16 md:hidden"
        style={{
          backgroundImage: `url(${product.backgroundImage})`,
        }}
      >
        <div className="mt-24">
          <p className="font-rubik mt-8 text-[2rem] font-extrabold">
            {product.title}
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="py-2.5">
            <p className="text-xl font-extrabold text-slate-200">
              {Number(product.price).toFixed(2)}
            </p>
          </div>
        </div>

        <BuyButton productId={product.id} />

        <div className="border-neutral-700n flex items-center gap-x-2 border-t py-2">
          <p className="text-neutral-700n text-xs">Impact:</p>

          <div className="flex gap-x-2">
            <HugeiconsIcon
              icon={TreeIcon}
              className="text-primary size-4 shrink-0"
            />

            <p className="text-neutral-700n text-xs">6 Trees saved</p>

            <HugeiconsIcon
              icon={InformationCircleIcon}
              className="text-neutral-700n size-4 shrink-0"
            />
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-between py-[3.25rem] md:flex">
        <p className="font-rubik text-[3.5rem] font-extrabold">
          {product.title}
        </p>

        <div className="flex min-w-96 flex-col gap-y-4 bg-gradient-to-r from-black from-30% to-black/0 p-4">
          <div className="py-2.5">
            <p className="text-xl font-extrabold">
              {Number(product.price).toFixed(2)}
            </p>
          </div>

          <BuyButton productId={product.id} />

          <div className="border-neutral-700n flex items-center gap-x-2 border-t py-2">
            <p className="text-neutral-700n text-xs">Impact:</p>

            <div className="flex gap-x-2">
              <HugeiconsIcon
                icon={TreeIcon}
                className="text-primary size-4 shrink-0"
              />

              <p className="text-neutral-700n text-xs">6 Trees saved</p>

              <HugeiconsIcon
                icon={InformationCircleIcon}
                className="text-neutral-700n size-4 shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
