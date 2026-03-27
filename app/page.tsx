import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CartProvider } from '@/lib/cart-store'
import { getProducts, getTestimonials } from '@/lib/products'

export default async function HomePage() {
  const [allProducts, testimonials] = await Promise.all([
    getProducts(),
    getTestimonials()
  ])
  const featured = allProducts.filter((p) => p.featured).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts featuredProducts={featured} />
        <AboutSection />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
