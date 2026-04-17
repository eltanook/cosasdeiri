'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Sparkles, Droplets, Heart, ShieldCheck, Shirt, Footprints, Layers, Leaf } from 'lucide-react'

const careSteps = [
  {
    icon: AlertTriangle,
    title: 'NO USAR LAVARROPAS',
    description: 'El lavado en lavarropas o de forma brusca puede deformar la alfombra o dañar sus fibras.',
  },
  {
    icon: Sparkles,
    title: 'CUIDADO DE TODOS LOS DIAS',
    description: 'Aspirá o barré con frecuencia para evitar la acumulación de polvo.',
  },
  {
    icon: Droplets,
    title: 'MANCHAS O DERRAMES',
    description: 'Usá agua tibia con un poco de detergente y limpiá suavemente con un cepillo de cerdas blandas o una esponja.',
  },
]

export function CuidadosContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="brutal-border brutal-shadow inline-block bg-lime px-4 py-2 font-mono text-sm font-bold uppercase text-black mb-4">
            Guía
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            CUIDADOS{' '}
            <span className="brutal-border inline-block bg-primary px-2 text-primary-foreground">
              DE TU ALFOMBRA
            </span>
          </h1>
        </motion.div>

        {/* Care Steps */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {careSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="brutal-border brutal-shadow bg-card p-6"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <span className="brutal-border bg-accent p-3 shrink-0">
                  <step.icon className="h-8 w-8 text-accent-foreground" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Materiales Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="brutal-border brutal-shadow bg-secondary p-6 md:p-8 mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <Sparkles className="h-6 w-6 text-secondary-foreground" />
            <h2 className="font-display text-2xl md:text-3xl font-black text-secondary-foreground text-center">
              MATERIALES PREMIUM
            </h2>
            <Sparkles className="h-6 w-6 text-secondary-foreground" />
          </div>
          
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
            {/* Lana */}
            <div className="brutal-border brutal-shadow-sm bg-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="brutal-border bg-primary p-2 shrink-0">
                <ShieldCheck className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                Lana acrílica (apto alérgicos)
              </span>
            </div>

            {/* Tela panama */}
            <div className="brutal-border brutal-shadow-sm bg-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="brutal-border bg-accent p-2 shrink-0">
                <Shirt className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                Tela panamá (100% algodón)
              </span>
            </div>

            {/* Antideslizante */}
            <div className="brutal-border brutal-shadow-sm bg-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="brutal-border bg-lime p-2 shrink-0">
                <Footprints className="h-5 w-5 text-black" />
              </div>
              <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                Tela antideslizante en alfombras
              </span>
            </div>

            {/* Cuerina */}
            <div className="brutal-border brutal-shadow-sm bg-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="brutal-border bg-background p-2 shrink-0">
                <Layers className="h-5 w-5 text-foreground" />
              </div>
              <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                Cuerina en tapices
              </span>
            </div>

            {/* Adhesivo */}
            <div className="brutal-border brutal-shadow-sm bg-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="brutal-border bg-primary p-2 shrink-0">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                Adhesivo a base de agua (más seguros para el medio ambiente y para nosotros)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Love Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="brutal-border brutal-shadow bg-primary p-8 text-center"
        >
          <Heart className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            Hecha con amor, cuidala con amor
          </h3>
          <p className="font-mono text-sm text-primary-foreground/80 max-w-lg mx-auto">
            Cada alfombra de Cosas de Iri está hecha a mano con mucha dedicación. Con estos cuidados simples, va a acompañarte por muchos años. ¡Gracias por elegirnos!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
