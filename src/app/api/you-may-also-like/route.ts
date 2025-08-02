import { NextResponse } from 'next/server'

// Mock data for "You May Also Like" carousel
const mockYouMayAlsoLikeProducts = [
  {
    id: 'mock_1',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/conan-exiles.png',
    price: 80.0,
  },
  {
    id: 'mock_2',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/detroit-become-human.png',
    price: 80.0,
  },
  {
    id: 'mock_3',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/mutant-year-zero.png',
    price: 80.0,
  },
  {
    id: 'mock_4',
    title: 'Conan Exiles',
    description: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    image: '',
    backgroundImage: '',
    cardImage: '/images/backgrounds/this-war-of-mine.png',
    price: 80.0,
  },
]

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 250))

    return NextResponse.json(mockYouMayAlsoLikeProducts)
  } catch (error) {
    console.error('Error fetching you-may-also-like products:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
