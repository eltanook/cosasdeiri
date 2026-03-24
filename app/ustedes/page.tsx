import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { UserGallery } from '@/components/ustedes/user-gallery'
import { CartProvider } from '@/lib/cart-store'
import { getUserGallery } from '@/lib/products'

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

export default async function UstedesPage() {
  const gallery = await getUserGallery()
  
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <UserGallery initialGallery={gallery} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
