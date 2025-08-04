import { ProductCard } from '@/components/product-card'
import { Carousel } from '@/components/ui/carousel'
import { mockLastSeenProducts } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export const LastSeenSection = async () => {
  const products = mockLastSeenProducts

  return (
    <div className="flex w-full max-w-[75rem] flex-col gap-y-4">
      <div className="flex flex-row gap-x-8 px-4 md:px-0">
        <p className="font-rubik text-2xl font-extrabold md:text-[2rem]">
          Last seen
        </p>

        <button
          type="button"
          className="hidden cursor-pointer px-4 py-2 md:block"
        >
          <p className="text-sm">View all</p>
        </button>
      </div>

      <Carousel>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            className={cn('ml-4 md:mr-4 md:ml-0', {
              'md:mr-0': index === products.length - 1,
            })}
          />
        ))}
      </Carousel>

      <div className="px-4 md:hidden">
        <button
          type="button"
          className="w-full cursor-pointer border border-white px-4 py-1.5"
        >
          <p className="text-sm">View all</p>
        </button>
      </div>
    </div>
  )
}
