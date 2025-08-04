import { Input } from '@/components/ui/input'
import {
  Menu04Icon,
  SearchIcon,
  ShoppingBasket03Icon,
  StoreIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex justify-center bg-black/80 px-4 py-2 md:px-0 md:backdrop-blur-xs">
      <div className="flex w-full max-w-[75rem] items-center justify-between gap-x-4 md:mx-4">
        <Link href="/">
          <Image
            src="/assets/pp-logo-sm.svg"
            alt="Planetplay"
            width={64}
            height={48}
            className="cursor-pointer md:hidden"
          />

          <Image
            src="/assets/pp-logo.svg"
            alt="Planetplay"
            width={264}
            height={48}
            className="hidden cursor-pointer md:block"
          />
        </Link>

        <Input
          placeholder="Search by title, genre or developer"
          containerClassName="max-w-[33rem] hidden md:block"
          icon={SearchIcon}
        />

        <HugeiconsIcon
          icon={Menu04Icon}
          className="size-8 shrink-0 cursor-pointer text-white md:hidden"
        />

        <div className="flex cursor-pointer items-center gap-x-2">
          <HugeiconsIcon
            icon={StoreIcon}
            className="size-8 shrink-0 text-white md:size-6"
          />

          <p className="hidden text-sm text-white md:block">Store</p>
        </div>

        <div className="hidden cursor-pointer items-center gap-x-2 md:flex">
          <HugeiconsIcon
            icon={Menu04Icon}
            className="size-8 shrink-0 text-white md:size-6"
          />

          <p className="text-sm text-white">About</p>
        </div>

        <HugeiconsIcon
          icon={SearchIcon}
          className="size-8 shrink-0 cursor-pointer text-white md:hidden"
        />

        <HugeiconsIcon
          icon={ShoppingBasket03Icon}
          className="size-8 shrink-0 cursor-pointer text-white md:size-6"
        />
      </div>
    </div>
  )
}
