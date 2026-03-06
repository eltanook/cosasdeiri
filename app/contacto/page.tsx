import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactContent } from '@/components/contacto/contact-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Contacto | Alfombras Personalizadas',
  description:
    'Contactanos para hacer tu alfombra personalizada. Diseños unicos hechos a mano en Argentina. Pedidos especiales y consultas.',
  openGraph: {
    title: 'Contacto | Cosas de Iri',
    description: 'Hagamos tu alfombra soñada realidad.',
    images: ['/og-contacto.jpg'],
  },
}

export default function ContactoPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <ContactContent />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
