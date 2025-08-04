import { LoadingPage } from '@/components/loading-page'
import { ReactNode, Suspense } from 'react'

interface OrderLayoutProps {
  children: ReactNode
}

const OrderLayout = ({ children }: OrderLayoutProps) => {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>
}

export default OrderLayout
