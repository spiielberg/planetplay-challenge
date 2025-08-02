import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  await prisma.order.deleteMany()
  await prisma.product.deleteMany()

  const products = await prisma.product.createMany({
    data: [
      {
        id: '60f1b2b5c8d4a1b2c3d4e5f6',
        title: 'Google Play Gift Card',
        description:
          'A Google Play gift card is a prepaid credit that can be used to make purchases within the Google Play Store. It allows users to add credit to their Google Play balance, which can be used to buy apps, games, music, books, and other items available on the platform.',
        image: '/images/products/google-play-gift-card.png',
        backgroundImage: '/images/backgrounds/google-play-gift-card.png',
        cardImage: '',
        price: 35.0,
      },
    ],
  })

  console.log(`Created ${products.count} products`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
