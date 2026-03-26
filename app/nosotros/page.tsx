import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AboutStory } from '@/components/nosotros/about-story'
import { CartProvider } from '@/lib/cart-store'

export const metadata: Metadata = {
  title: 'Nosotros | Nuestra Historia',
  description:
    'Conocé la historia detrás de Cosas de Iri. De un hobby en pandemia a crear alfombras de diseño únicas hechas a mano con técnica de tufting en Argentina.',
  alternates: {
    canonical: 'https://cosasdeiri.com/nosotros',
  },
  openGraph: {
    title: 'Nuestra Historia | Cosas de Iri',
    description: 'De la pandemia a tu piso. Conocé cómo nació la pasión por el tufting en Cosas de Iri.',
    images: ['/og-nosotros.jpg'],
    url: 'https://cosasdeiri.com/nosotros',
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
