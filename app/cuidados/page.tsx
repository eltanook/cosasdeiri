import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { CuidadosContent } from '@/components/info/cuidados-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Cuidados de tu Alfombra',
  description: 'Guía completa para el cuidado y mantenimiento de tu alfombra artesanal. Consejos para que dure siempre perfecta.',
}

export default function CuidadosPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <CuidadosContent />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  )
}
