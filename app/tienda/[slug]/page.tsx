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

  const images = product.images.length > 0 ? product.images : ['/og-image.jpg']

  return {
    title: `${product.name} | Alfombra de Diseño`,
    description: product.description,
    keywords: [...(product.tags || []), 'alfombra de diseño', 'hecho a mano', 'tufting argentina'],
    openGraph: {
      title: `${product.name} | Cosas de Iri`,
      description: product.description,
      images: images,
      type: 'article',
      url: `https://cosasdeiri.com/tienda/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Cosas de Iri`,
      description: product.description,
      images: images,
    },
    alternates: {
      canonical: `https://cosasdeiri.com/tienda/${slug}`,
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

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.images,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'ARS',
        availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        url: `https://cosasdeiri.com/tienda/${slug}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://cosasdeiri.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Tienda',
          item: 'https://cosasdeiri.com/tienda',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.name,
          item: `https://cosasdeiri.com/tienda/${slug}`,
        },
      ],
    },
  ]

  return (
    <CartProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
