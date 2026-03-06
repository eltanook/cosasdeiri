import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { DevolucionesContent } from '@/components/info/devoluciones-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Devoluciones y Cambios',
  description: 'Política de devoluciones y cambios de alfombras. Tu satisfacción es nuestra prioridad. Cosas de Iri.',
}

export default function DevolucionesPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <DevolucionesContent />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  )
}
