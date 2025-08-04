import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="w-full max-w-[75rem]">
      <div className="py-10 md:pb-4">
        <div className="border-neutral-550n flex flex-col gap-y-4 border-t py-4 pt-1">
          <div className="md:border-neutral-550n flex flex-col md:flex-row md:items-center md:gap-x-6 md:border-b md:pb-1">
            <Image
              src="/assets/pp-logo.svg"
              alt="Planetplay"
              width={164}
              height={32}
            />

            <div className="flex items-center gap-x-2 md:mr-auto">
              <Link href="#" className="text-neutral-700n text-xs">
                Privacy Policy
              </Link>

              <Separator
                orientation="vertical"
                className="bg-neutral-700n h-2"
              />

              <Link href="#" className="text-neutral-700n text-xs">
                Cookie Policy
              </Link>

              <Separator
                orientation="vertical"
                className="bg-neutral-700n h-2"
              />

              <Link href="#" className="text-neutral-700n text-xs">
                Terms of Service
              </Link>
            </div>

            <Link href="#" className="flex items-center gap-x-1">
              <p className="text-neutral-700n text-xs">powered by:</p>

              <Image
                src="/assets/google-translate.svg"
                alt="Google Translate"
                width={80}
                height={12}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-y-4 md:flex-row-reverse md:justify-between">
            <div className="flex items-center gap-x-2">
              <p className="text-neutral-700n text-xs">Follow us:</p>

              <Link href="#">
                <Image
                  src="/assets/bluesky.svg"
                  alt="BlueSky"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/assets/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="#">
                <Image src="/assets/X.svg" alt="X" width={24} height={24} />
              </Link>

              <Link href="#">
                <Image
                  src="/assets/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>

            <p className="text-neutral-700n text-xs">
              © 2025 Planet Play • All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
