'use client'

import { getOrderBySessionId } from '@/app/actions/getOrderBySessionId'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { MainContentSection } from '@/components/home/main-content-section'
import { Button } from '@/components/ui/button'
import { Order } from '@/generated/prisma'
import { CopyIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function OrderSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  const [orderData, setOrderData] = useState<Order | null>(null)

  const fetchOrderData = useCallback(async () => {
    if (!sessionId) {
      return
    }

    const data = await getOrderBySessionId({ sessionId })

    setOrderData(data)
  }, [sessionId])

  useEffect(() => {
    if (sessionId) {
      fetchOrderData()
    }
  }, [fetchOrderData, sessionId])

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="flex w-full flex-col items-center pt-16">
        <div className="flex w-full max-w-[75rem] flex-col gap-y-8 px-4 py-[3.25rem]">
          {orderData ? (
            <div className="flex w-full flex-col items-center gap-y-8 md:items-start">
              <p className="font-rubik text-center text-2xl font-extrabold text-white md:text-left">
                Order Successful
              </p>

              <p className="text-neutral-600n text-center text-lg md:text-left">
                Thank you for your purchase! Your order details are below.
              </p>

              <div className="from-neutral-200n to-neutral-200n/0 flex items-center gap-x-4 bg-gradient-to-r p-4">
                <p className="text-nowrap">{orderData.redeemCode}</p>

                <Button
                  className="w-auto p-2"
                  onClick={() => {
                    if (!orderData.redeemCode) {
                      return
                    }

                    navigator.clipboard.writeText(orderData.redeemCode)
                  }}
                >
                  <HugeiconsIcon icon={CopyIcon} className="size-5" />
                </Button>
              </div>

              <MainContentSection />

              <Footer />
            </div>
          ) : (
            <p className="text-neutral-600n text-lg">Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}
