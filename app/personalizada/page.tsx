import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartProvider } from '@/lib/cart-store'
import { CustomRequestForm } from '@/components/personalizada/custom-request-form'

export const metadata: Metadata = {
  title: 'Alfombras Personalizadas | Tu Diseño, Tu Alfombra',
  description:
    '¿Querés una alfombra única? Nosotros la hacemos realidad. Subí tu diseño o idea y te enviamos un presupuesto personalizado. Técnica de tufting profesional.',
  alternates: {
    canonical: 'https://cosasdeiri.com/personalizada',
  },
  openGraph: {
    title: 'Alfombras Personalizadas | Cosas de Iri',
    description: 'Pedí tu alfombra personalizada. Nosotros la tejemos por vos.',
    images: ['/og-personalizada.jpg'],
    url: 'https://cosasdeiri.com/personalizada',
  },
}

export default function PersonalizadaPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <CustomRequestForm />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
