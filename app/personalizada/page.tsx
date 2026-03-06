'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/lib/cart-store'
import { CustomRequestForm } from '@/components/personalizada/custom-request-form'

export default function PersonalizadaPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <CustomRequestForm />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
