import { NextResponse } from 'next/server'

const mockLastSeenProducts = [
  {
    id: 'mock_1',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/payday-2.png',
    price: 80.0,
  },
  {
    id: 'mock_2',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/fishing-clash.png',
    price: 80.0,
  },
  {
    id: 'mock_3',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/bug-fables.png',
    price: 80.0,
  },
  {
    id: 'mock_4',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/grabi-toons.png',
    price: 80.0,
  },
  {
    id: 'mock_5',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/conan-exiles.png',
    price: 80.0,
  },
  {
    id: 'mock_6',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/detroit-become-human.png',
    price: 80.0,
  },
  {
    id: 'mock_7',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/mutant-year-zero.png',
    price: 80.0,
  },
  {
    id: 'mock_8',
    title: 'Conan Exiles: The Riddle of Steel Ultimate Deluxe Collection',
    description: '',
    image: '',
    backgroundImage: '',
    cardImage: '/images/cards/this-war-of-mine.png',
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
