import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/home/hero-section'
import { LastSeenSection } from '@/components/home/last-seen-section'
import { MainContentSection } from '@/components/home/main-content-section'
import { YouMayAlsoLikeSection } from '@/components/home/you-may-also-like-section'
import { productData } from '@/lib/mock-data'
import { notFound } from 'next/navigation'

export default async function Home() {
  const featuredProduct = productData

  if (!featuredProduct) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="flex w-full flex-col items-center gap-y-8 md:gap-y-20 md:px-4 md:pt-16">
        <HeroSection product={featuredProduct} />

        <MainContentSection />

        <YouMayAlsoLikeSection />

        <LastSeenSection />

        <Footer />
      </div>
    </div>
  )
}
