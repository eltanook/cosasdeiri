import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductDetail } from '@/components/shop/product-detail'
import { CartProvider } from '@/lib/cart-store'
import { getProducts } from '@/lib/products'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const allProducts = await getProducts()
  const product = allProducts.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: 'Producto no encontrado',
    }
  }

  return {
    title: `${product.name} | Alfombra de Diseño`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Cosas de Iri`,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export async function generateStaticParams() {
  const allProducts = await getProducts()
  return allProducts.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const allProducts = await getProducts()
  const product = allProducts.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <ProductDetail product={product} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
