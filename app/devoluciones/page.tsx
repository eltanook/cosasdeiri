import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { DevolucionesContent } from '@/components/info/devoluciones-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Devoluciones y Cambios | Políticas de Compra',
  description: 'Conocé nuestras políticas de devoluciones y cambios. Tu satisfacción y la calidad de nuestras alfombras son nuestra prioridad.',
  alternates: {
    canonical: 'https://cosasdeiri.com/devoluciones',
  },
}

export default function DevolucionesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <DevolucionesContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
