'use client'

import { Button } from '@/components/ui/button'
import { createOrder } from '@/hooks/createOrder'
import { ButtonHTMLAttributes, useTransition } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface BuyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  productId: string
}

export const BuyButton = ({
  productId,
  disabled,
  ...props
}: BuyButtonProps) => {
  const [isPending, startTransition] = useTransition()

  const handleBuyClick = () => {
    startTransition(async () => {
      if (isPending) {
        return
      }

      try {
        const order = await createOrder({ productId })

        window.open(order.checkoutUrl, '_blank')
      } catch (error) {
        console.error('Error creating order:', error)
        alert('Failed to create order. Please try again.')
      }
    })
  }

  return (
    <Button
      onClick={handleBuyClick}
      disabled={isPending || disabled}
      {...props}
    >
      {isPending ? (
        <AiOutlineLoading3Quarters className="mx-auto size-6 animate-spin fill-white" />
      ) : (
        <p className="text-white">Buy Gift Card</p>
      )}
    </Button>
  )
}
