import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShopContent } from '@/components/shop/shop-content'
import { CartProvider } from '@/lib/cart-store'
import { getProducts, getCategories } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Tienda | Alfombras de Diseño hechas a mano',
  description:
    'Explora nuestra colección de alfombras de diseño únicas. Estilos abstractos, geométricos, retro Y2K y personajes. Hechas a mano en Argentina con técnica de tufting.',
  keywords: ['tienda alfombras', 'comprar alfombras diseño', 'alfombras tufting argentina', 'decoracion de interiores'],
  alternates: {
    canonical: 'https://cosasdeiri.com/tienda',
  },
  openGraph: {
    title: 'Tienda | Cosas de Iri',
    description: 'Alfombras de diseño únicas hechas a mano mediante tufting.',
    images: ['/og-tienda.jpg'],
    url: 'https://cosasdeiri.com/tienda',
  },
}

export default async function TiendaPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={
          <div className="flex h-[50vh] items-center justify-center font-mono text-muted-foreground">
            Cargando tienda...
          </div>
        }>
          <ShopContent initialProducts={products} initialCategories={categories} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
