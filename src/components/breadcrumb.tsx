import { Separator } from '@/components/ui/separator'
import { Product } from '@/generated/prisma'

interface BreadcrumbProps {
  product: Product
}

export const Breadcrumb = ({ product }: BreadcrumbProps) => {
  return (
    <div className="hidden px-[7.5rem] py-4 md:block">
      <div className="flex items-center gap-x-1">
        <div className="cursor-pointer p-2">
          <p className="text-sm text-white">Home</p>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="cursor-pointer p-2">
          <p className="text-sm text-white">Store</p>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="cursor-pointer p-2">
          <p className="text-sm text-white">{product.title}</p>
        </div>
      </div>
    </div>
  )
}
