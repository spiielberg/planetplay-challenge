import { publicAxios } from '@/api/axios'
import { Order } from '@/generated/prisma'

export const getOrderBySessionId = async (sessionId: string) => {
  try {
    const response = await publicAxios.get<Order>(
      `/orders?session_id=${sessionId}`,
    )

    return response.data
  } catch (error) {
    console.error('Error fetching order:', error)
    throw error
  }
}
