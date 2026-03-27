import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { CuidadosContent } from '@/components/info/cuidados-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Cuidados de tu Alfombra | Tips de Mantenimiento',
  description: 'Guía completa para el cuidado y mantenimiento de tu alfombra artesanal de tufting. Consejos para que tu pieza dure siempre perfecta.',
  alternates: {
    canonical: 'https://cosasdeiri.com/cuidados',
  },
}

export default function CuidadosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CuidadosContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
