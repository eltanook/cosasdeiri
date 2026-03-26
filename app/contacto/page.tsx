import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactContent } from '@/components/contacto/contact-content'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Contacto | Alfombras Personalizadas',
  description:
    'Contactanos para encargar tu alfombra personalizada. Diseños únicos hechos a mano en Argentina. Pedidos especiales, ventas mayoristas y consultas generales.',
  alternates: {
    canonical: 'https://cosasdeiri.com/contacto',
  },
  openGraph: {
    title: 'Contacto | Cosas de Iri',
    description: 'Hagamos tu alfombra soñada realidad. ¡Escribinos!',
    images: ['/og-contacto.jpg'],
    url: 'https://cosasdeiri.com/contacto',
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
