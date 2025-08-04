import { publicAxios } from '@/api/axios'

export const createOrder = async ({ productId }: { productId: string }) => {
  try {
    const response = await publicAxios.post<{
      checkoutUrl: string
      orderId: string
    }>('/orders', { productId })

    return response.data
  } catch (error) {
    console.error('Error creating order:', error)

    throw error
  }
}
