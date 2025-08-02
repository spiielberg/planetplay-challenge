export const PRODUCT_IDS = {
  GOOGLE_PLAY_GIFT_CARD: '60f1b2b5c8d4a1b2c3d4e5f6',
} as const

export type ProductId = (typeof PRODUCT_IDS)[keyof typeof PRODUCT_IDS]
