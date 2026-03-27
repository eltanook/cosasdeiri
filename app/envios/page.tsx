import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { EnviosContent } from '@/components/info/envios-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Envíos y Pagos | Información Detallada',
  description: 'Información sobre envíos a todo Argentina, métodos de pago, cuotas y tiempos de producción de nuestras alfombras artesanales.',
  alternates: {
    canonical: 'https://cosasdeiri.com/envios',
  },
}

export default function EnviosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <EnviosContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
