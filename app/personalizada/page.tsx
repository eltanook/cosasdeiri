import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CustomRequestForm />
      </main>
      <Footer />
    </div>
  )
}
