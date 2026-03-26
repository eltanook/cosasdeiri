'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Sparkles, Star } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="brutal-border bg-secondary px-3 py-1 font-mono text-sm font-bold uppercase text-secondary-foreground">
                Sobre mi
              </span>
              <Star className="h-5 w-5 fill-secondary text-secondary" />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              HOLA, SOY{' '}
              <span className="brutal-border inline-block bg-primary px-2 text-primary-foreground">
                IRI
              </span>
            </h2>

            <div className="space-y-4 font-mono text-lg leading-relaxed text-muted-foreground">
              <p>
                Hola, soy Iri. Me dedico al cine de animación, y lo que más me emociona es la posibilidad de dar vida a lo que imagino, transformar ideas en algo visible y real. Con las alfombras, encontré esa misma pasión: la posibilidad de hacer tangible lo que uno imagina, y tenerlo en tu espacio cada día.
              </p>
              <p>
                Cada alfombra que hago es única. Aunque el diseño se pueda repetir, cada paso se dibuja, se crea, se recorta y se pega a mano. Es un trabajo artesanal. No son solo alfombras, son arte, para poner en tu piso o en tu pared. 
              </p>
              <p className="flex items-center gap-2">
                <Heart className="h-5 w-5 fill-destructive text-destructive" />
                Si tenés una idea loca, la hacemos realidad juntos.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/nosotros">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="brutal-border brutal-shadow-hover inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono font-bold uppercase text-background"
                >
                  Conoce mas
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
              <Link href="/contacto">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="brutal-border brutal-shadow-hover inline-flex items-center gap-2 bg-secondary px-6 py-3 font-mono font-bold uppercase text-secondary-foreground"
                >
                  <Sparkles className="h-4 w-4" />
                  Hacer pedido
                </motion.span>
              </Link>
            </div>
          </motion.div>

          {/* Image Column - Windows 98 Style Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="brutal-border bg-muted p-1">
              {/* Windows 98 Title Bar */}
              <div className="brutal-border border-b-0 flex items-center justify-between bg-primary px-2 py-1">
                <span className="font-mono text-xs font-bold text-primary-foreground">
                  iri_trabajando.jpg
                </span>
                <div className="flex gap-1">
                  <div className="brutal-border h-3 w-3 bg-secondary" />
                  <div className="brutal-border h-3 w-3 bg-accent" />
                  <div className="brutal-border h-3 w-3 bg-destructive" />
                </div>
              </div>
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-muted">
                <Image
                  src="/about-iri.jpg"
                  alt="Iri trabajando en una alfombra artesanal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay stickers */}
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-4 -top-4 brutal-border bg-secondary p-2 rotate-12"
                >
                  <span className="font-display text-sm font-black text-secondary-foreground">
                    HANDMADE
                  </span>
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-3 -left-3 brutal-border bg-lime p-2 -rotate-6"
                >
                  <span className="font-mono text-xs font-bold text-black">
                    Argentina
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-4 -right-4 h-full w-full brutal-border bg-primary opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
