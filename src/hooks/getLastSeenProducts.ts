import { publicAxios } from '@/api/axios'
import { Product } from '@/generated/prisma'

export const getLastSeenProducts = async () => {
  try {
    const response = await publicAxios.get<Product[]>('/last-seen')

    return response.data
  } catch (error) {
    console.error('Error fetching last seen products:', error)

    throw error
  }
}
