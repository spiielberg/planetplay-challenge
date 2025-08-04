import { publicAxios } from '@/api/axios'
import { Product } from '@/generated/prisma'

export const getProduct = async (id: string) => {
  try {
    const response = await publicAxios.get<Product>(`/products/${id}`)

    return response.data
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}
