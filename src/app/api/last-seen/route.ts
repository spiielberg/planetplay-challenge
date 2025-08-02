import { NextResponse } from 'next/server'

// Mock data for "Last Seen" carousel
const mockLastSeenProducts = [
  {
    id: 'mock_1',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/payday-2.png',
    price: 80.0,
  },
  {
    id: 'mock_2',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/fishing-clash.png',
    price: 80.0,
  },
  {
    id: 'mock_3',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/bug-fables.png',
    price: 80.0,
  },
  {
    id: 'mock_4',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/grabi-toons.png',
    price: 80.0,
  },
]

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 250))

    return NextResponse.json(mockLastSeenProducts)
  } catch (error) {
    console.error('Error fetching last-seen products:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
