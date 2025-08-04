# Planetplay Challenge

A Next.js e-commerce application with MongoDB and Stripe integration for digital product sales.

## Features

- Product detail page with responsive design
- Stripe payment integration (test mode)
- Product carousels ("You May Also Like" and "Last Seen")
- MongoDB database with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Prisma ORM
- **Payments**: Stripe Checkout
- **Language**: TypeScript

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/spiielberg/planetplay-challenge
cd planetplay-challenge
pnpm install
```

### 2. Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `DATABASE_URL`: Your MongoDB connection string
- `STRIPE_SECRET_KEY`: Your Stripe secret key (test mode)
- `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key (test mode)
- `NEXT_PUBLIC_BASE_URL`: Your app URL (http://localhost:3000 for development)

### 3. Database Setup

Generate Prisma client:
```bash
npx prisma generate
```

Seed the database with sample products:
```bash
pnpm run db:seed
```

### 4. Run the Application

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## API Endpoints

### Products
- `GET /api/products/[id]` - Get a specific product by ID

### Orders
- `POST /api/orders` - Create a new order and initiate Stripe checkout
  - Body: `{ productId: string }`
  - Returns: `{ checkoutUrl: string, orderId: string }`

### Mock Data
- `GET /api/you-may-also-like` - Get recommended products
- `GET /api/last-seen` - Get recently viewed products

### Success Page
- `GET /order/success?session_id=...` - Order confirmation page

## Database Schema

### Product Model
- `id`: Unique identifier (ObjectId)
- `title`: Product name
- `description`: Product description
- `image`: Product image URL
- `price`: Product price (Float)

### Order Model
- `id`: Unique identifier (ObjectId)
- `productId`: Reference to Product
- `userEmail`: Customer email
- `stripeSessionId`: Stripe session ID
- `status`: Order status (pending/paid)
- `redeemCode`: Generated redeem code

## Development Notes

### Database
- Uses MongoDB with Prisma ORM
- Models are defined in `prisma/schema.prisma`
- Seed script creates sample products for testing

### Mock APIs
The "You May Also Like" and "Last Seen" endpoints return mock data for demonstration purposes.

## Testing

Use Stripe test cards for payment testing:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
