'use server'

import { prisma } from '@/lib/prisma'

export const getOrderBySessionId = async ({
  sessionId,
}: {
  sessionId: string
}) => {
  try {
    const order = await prisma.order.findFirst({
      where: {
        stripeSessionId: sessionId,
      },
    })

    return order
  } catch (error) {
    console.error('Error fetching featured order:', error)
    return null
  }
}
