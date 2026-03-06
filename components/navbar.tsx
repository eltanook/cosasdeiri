'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart, Sparkles } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { CartDrawer } from './cart-drawer'
import { useCart } from '@/lib/cart-store'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/ustedes', label: 'Ustedes' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

const marqueeMessages = [
  'PONELE ONDA A TUS ESPACIOS',
  'ALFOMBRAS HECHAS A MANO EN ARGENTINA',
  'DISEÑOS ÚNICOS Y PERSONALIZADOS',
  '¡PEDÍ TU ALFOMBRA CUSTOM!',
  'ENVÍOS A TODO EL PAÍS',
  'CALIDAD PREMIUM GARANTIZADA',
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { totalItems } = useCart()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="brutal-border border-x-0 border-t-0 bg-background sticky top-0 z-50">
        {/* Marquee Banner */}
        <div className="bg-secondary overflow-hidden py-1">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(4)].map((_, setIndex) => (
              marqueeMessages.map((message, i) => (
                <span key={`${setIndex}-${i}`} className="mx-8 font-mono text-sm text-secondary-foreground">
                  <Sparkles className="inline h-4 w-4 mr-1" />
                  {message}
                  <Sparkles className="inline h-4 w-4 ml-1" />
                </span>
              ))
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="brutal-border brutal-shadow bg-primary px-3 py-1"
              >
                <span className="font-display text-xl font-black text-primary-foreground">
                  COSAS DE IRI
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 font-mono text-sm font-bold uppercase tracking-wide"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Underline animation de izquierda a derecha */}
                  <span
                    className={`absolute bottom-1 left-2 right-2 h-1 bg-primary origin-left transition-transform duration-300 ease-out ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="/personalizada"
                className="hidden sm:block brutal-border brutal-shadow-hover bg-accent px-4 py-2 font-mono text-sm font-bold uppercase text-accent-foreground"
              >
                Personalizar
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCartOpen(true)}
                className="brutal-border brutal-shadow-hover bg-lime relative p-2"
                aria-label="Abrir carrito"
              >
                <ShoppingCart className="h-5 w-5 text-black" />
                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 brutal-border bg-secondary flex h-5 w-5 items-center justify-center font-mono text-xs font-bold text-secondary-foreground">
                    {totalItems}
                  </span>
                )}
              </motion.button>

              <ThemeToggle />

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="brutal-border brutal-shadow-hover bg-primary p-2 md:hidden"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-primary-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-primary-foreground" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="brutal-border border-x-0 border-t-0 bg-background md:hidden overflow-hidden"
            >
              <div className="space-y-1 px-4 pb-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`brutal-border brutal-shadow block px-4 py-3 font-mono text-lg font-bold uppercase ${
                        isActive(link.href) ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/personalizada"
                    onClick={() => setMobileMenuOpen(false)}
                    className="brutal-border brutal-shadow block bg-accent px-4 py-3 text-center font-mono text-lg font-bold uppercase text-accent-foreground"
                  >
                    Personalizar Alfombra
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
