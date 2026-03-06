import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { UserGallery } from '@/components/ustedes/user-gallery'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Ustedes | Galeria de Clientes',
  description:
    'Mira como nuestros clientes le dan onda a sus espacios con alfombras de Cosas de Iri. Galeria de fotos y testimonios reales.',
  openGraph: {
    title: 'Galeria de Clientes | Cosas de Iri',
    description: 'Espacios con onda gracias a nuestras alfombras.',
    images: ['/og-ustedes.jpg'],
  },
}

export default function UstedesPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <UserGallery />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
