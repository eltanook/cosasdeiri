import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AboutStory } from '@/components/nosotros/about-story'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Nosotros | Nuestra Historia',
  description:
    'Conoce la historia detras de Cosas de Iri. Como nacio esta pasion por crear alfombras unicas hechas a mano en Argentina.',
  openGraph: {
    title: 'Nuestra Historia | Cosas de Iri',
    description: 'De la pandemia a tu piso. Conoce como nacio Cosas de Iri.',
    images: ['/og-nosotros.jpg'],
  },
}

export default function NosotrosPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AboutStory />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
