import { publicAxios } from '@/api/axios'
import { Product } from '@/generated/prisma'

export const getYouMayAlsoLikeProducts = async () => {
  try {
    const response = await publicAxios.get<Product[]>('/you-may-also-like')

    return response.data
  } catch (error) {
    console.error('Error fetching you may also like products:', error)

    throw error
  }
}
