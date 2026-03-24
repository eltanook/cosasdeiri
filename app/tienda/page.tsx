import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShopContent } from '@/components/shop/shop-content'
import { CartProvider } from '@/lib/cart-store'
import { getProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Tienda | Alfombras de Diseño',
  description:
    'Explora nuestra coleccion de alfombras de diseño unicas. Estilos abstractos, geometricos, retro Y2K y personalizados. Hechas a mano en Argentina.',
  openGraph: {
    title: 'Tienda | Cosas de Iri',
    description: 'Alfombras de diseño unicas hechas a mano.',
    images: ['/og-tienda.jpg'],
  },
}

export default async function TiendaPage() {
  const products = await getProducts()
  
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={
            <div className="flex h-[50vh] items-center justify-center font-mono text-muted-foreground">
              Cargando tienda...
            </div>
          }>
            <ShopContent initialProducts={products} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
