import { Breadcrumb } from '@/components/breadcrumb'
import { ProductData } from '@/components/home/product-data'
import { Product } from '@/generated/prisma'
import Image from 'next/image'

interface HeroSectionProps {
  product: Product
}

export const HeroSection = ({ product }: HeroSectionProps) => {
  return (
    <>
      <div className="absolute inset-0 hidden md:block">
        <div className="flex justify-center">
          <div className="ml-[max(1rem,calc(50vw-37.5rem))] w-full max-w-none">
            <Image
              src={product.backgroundImage}
              alt={product.title}
              width={1336}
              height={616}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[75rem]">
        <div>
          <Breadcrumb product={product} />

          <ProductData product={product} />

          <Image
            src={product.image}
            alt={product.title}
            width={360}
            height={360}
            className="mx-auto mt-8 shrink-0 md:m-0"
          />
        </div>
      </div>
    </>
  )
}
