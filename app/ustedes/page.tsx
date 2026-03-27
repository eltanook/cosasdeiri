import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { UserGallery } from '@/components/ustedes/user-gallery'
import { CartProvider } from '@/lib/cart-store'
import { getUserGallery } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Ustedes | Galería de Clientes',
  description:
    'Mirá cómo nuestros clientes decoran sus espacios con las alfombras de Cosas de Iri. Inspirate con fotos reales y testimonios de nuestra comunidad.',
  alternates: {
    canonical: 'https://cosasdeiri.com/ustedes',
  },
  openGraph: {
    title: 'Galería de Clientes | Cosas de Iri',
    description: 'Espacios con mucha onda. Mirá cómo quedan nuestras alfombras en casas reales.',
    images: ['/og-ustedes.jpg'],
    url: 'https://cosasdeiri.com/ustedes',
  },
}

export default async function UstedesPage() {
  const gallery = await getUserGallery()
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <UserGallery initialGallery={gallery} />
      </main>
      <Footer />
    </div>
  )
}
