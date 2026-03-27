import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { FAQContent } from '@/components/info/faq-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Cosas de Iri',
  description: 'Resolvemos todas tus dudas sobre alfombras personalizadas, envíos, medios de pago y mantenimiento. Todo lo que necesitás saber sobre Cosas de Iri.',
  alternates: {
    canonical: 'https://cosasdeiri.com/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <FAQContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
