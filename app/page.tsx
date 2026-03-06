import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CartProvider } from '@/lib/cart-store'

export default function HomePage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <FeaturedProducts />
          <AboutSection />
          <TestimonialsSection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  )
}
