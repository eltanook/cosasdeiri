'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Heart, Zap, Palette, Smile } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden wavy-checker">
      {/* Wavy Checkerboard Background - rendered via CSS ::before */}

      {/* Floating decorative elements - Hidden on very small screens, responsive positioned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden sm:block">
        {/* Top Left Area */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-4 md:left-10 lg:left-20 brutal-border bg-secondary p-3 md:p-4"
        >
          <Star className="h-6 w-6 md:h-8 md:w-8 fill-secondary-foreground text-secondary-foreground" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -10, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-40 left-12 md:left-32 brutal-border bg-lime p-2 hidden lg:block"
        >
          <Smile className="h-6 w-6 text-black" />
        </motion.div>

        {/* Top Right Area */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-32 right-8 md:right-16 lg:right-24 brutal-border bg-primary p-3"
        >
          <Sparkles className="h-6 w-6 text-primary-foreground" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          className="absolute top-64 right-4 md:right-12 brutal-border bg-accent p-2 rotate-[-5deg] hidden lg:block"
        >
          <Heart className="h-5 w-5 fill-accent-foreground text-accent-foreground" />
        </motion.div>

        {/* Bottom Left Area */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [12, -5, 12] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-40 left-8 md:left-1/4 lg:left-32 brutal-border bg-accent p-2 md:p-3 rotate-12"
        >
          <span className="font-display text-lg md:text-xl font-black">ORIGINAL</span>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [-10, -5, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-20 left-20 md:left-1/3 brutal-border bg-foreground p-2 text-background hidden md:block"
        >
          <Zap className="h-5 w-5 fill-background" />
        </motion.div>

        {/* Bottom Right Area */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-24 md:bottom-32 right-8 md:right-20 lg:right-32 brutal-border bg-lime p-2 md:p-3"
        >
          <span className="font-mono text-sm md:text-lg font-bold text-black">100% handmade</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-12 right-1/4 lg:right-64 brutal-border bg-primary p-2 hidden lg:block"
        >
          <Palette className="h-6 w-6 text-primary-foreground" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="brutal-border brutal-shadow bg-secondary px-4 py-2 font-mono text-sm font-bold uppercase text-secondary-foreground inline-block">
              Alfombras de diseno unicas en Argentina
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
          >
            <span className="block">PONELE</span>
            <span className="block brutal-border inline-block bg-primary px-4 py-2 my-2 text-primary-foreground">
              ONDA
            </span>
            <span className="block">A TUS</span>
            <span className="block brutal-border inline-block bg-accent px-4 py-2 my-2 text-accent-foreground">
              ESPACIOS
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 font-mono text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground"
          >
            Alfombras hechas a mano con mucho amor. Disenos retro, contemporaneos y
            totalmente personalizados. Porque tu piso merece algo diferente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/tienda">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brutal-border brutal-shadow-hover inline-flex items-center gap-2 bg-foreground px-8 py-4 font-mono text-lg font-bold uppercase text-background"
              >
                Ver Catalogo
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
            <Link href="/contacto">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brutal-border brutal-shadow-hover inline-flex items-center gap-2 bg-secondary px-8 py-4 font-mono text-lg font-bold uppercase text-secondary-foreground"
              >
                <Sparkles className="h-5 w-5" />
                Personalizar
              </motion.span>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              'Envios a todo el pais',
              'Hecho a mano',
              '+500 clientes felices',
            ].map((badge, i) => (
              <span
                key={i}
                className="brutal-border bg-muted px-3 py-1 font-mono text-xs uppercase"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
