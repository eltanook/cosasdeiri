'use client'

import { motion } from 'framer-motion'
import { Sparkles, Droplets, Sun, Wind, AlertTriangle, Heart } from 'lucide-react'

const careSteps = [
  {
    icon: Wind,
    title: 'Sacudila regularmente',
    description: 'Una vez por semana sacudí tu alfombra afuera para eliminar el polvo y la suciedad acumulada.',
    tip: 'Hacelo del lado del reverso para no dañar las fibras.',
  },
  {
    icon: Sparkles,
    title: 'Aspirá con cuidado',
    description: 'Usá la aspiradora en potencia baja y sin el cepillo rotativo para evitar dañar las fibras.',
    tip: 'Pasala siempre en la dirección del pelo, nunca en contra.',
  },
  {
    icon: Droplets,
    title: 'Limpieza de manchas',
    description: 'Actuá rápido. Absorbé el líquido con un paño limpio sin frotar. Usá agua fría y jabón neutro.',
    tip: '¡Nunca frotes! Siempre con toques suaves.',
  },
  {
    icon: Sun,
    title: 'Evitá el sol directo',
    description: 'La exposición prolongada al sol puede decolorar los colores. Rotá la alfombra cada tanto.',
    tip: 'Si es inevitable, usá cortinas o persianas.',
  },
]

const doAndDonts = {
  dos: [
    'Rotá la alfombra cada 3-6 meses para un desgaste parejo',
    'Usá una base antideslizante debajo',
    'Ventilá el ambiente regularmente',
    'Limpiá las manchas inmediatamente',
    'Guardala enrollada, nunca doblada',
  ],
  donts: [
    'Lavar en lavarropas o secarropas',
    'Usar productos químicos agresivos o blanqueadores',
    'Frotar las manchas (esparcís más)',
    'Exponerla a humedad constante',
    'Pisarla con zapatos sucios o tacones',
  ],
}

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
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Con un poco de amor, tu alfombra va a durar años perfecta. Acá te contamos cómo.
          </p>
        </motion.div>

        {/* Care Steps */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {careSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="brutal-border brutal-shadow bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <span className="brutal-border bg-accent p-3 shrink-0">
                  <step.icon className="h-6 w-6 text-accent-foreground" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <div className="brutal-border bg-secondary/20 px-3 py-2">
                    <p className="font-mono text-xs">
                      <strong className="text-secondary">TIP:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Do's and Don'ts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          {/* Do's */}
          <div className="brutal-border brutal-shadow bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="brutal-border bg-lime px-3 py-1 font-mono text-sm font-bold text-black">
                SÍ
              </span>
              <h3 className="font-display text-xl font-bold">Hacé esto</h3>
            </div>
            <ul className="space-y-3">
              {doAndDonts.dos.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-mono text-sm">
                  <span className="text-lime font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="brutal-border brutal-shadow bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="brutal-border bg-destructive px-3 py-1 font-mono text-sm font-bold text-white">
                NO
              </span>
              <h3 className="font-display text-xl font-bold">Evitá esto</h3>
            </div>
            <ul className="space-y-3">
              {doAndDonts.donts.map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-mono text-sm">
                  <span className="text-destructive font-bold mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Deep Cleaning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="brutal-border brutal-shadow bg-muted p-6 sm:p-8 mb-12"
        >
          <h3 className="font-display text-xl font-bold mb-4">Limpieza Profunda (cada 6-12 meses)</h3>
          <div className="space-y-4 font-mono text-sm">
            <p>
              Para una limpieza más profunda, te recomendamos llevarla a una tintorería especializada en alfombras o seguir estos pasos:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Aspirá bien toda la superficie</li>
              <li>Preparé agua fría con jabón neutro (muy poquito)</li>
              <li>Con un paño húmedo, limpiá suavemente en la dirección del pelo</li>
              <li>Enjuagá con otro paño solo con agua</li>
              <li>Dejá secar al aire libre, a la sombra, sobre una superficie plana</li>
            </ol>
            <div className="brutal-border bg-background p-4 mt-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-secondary shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> Nunca mojes la alfombra completamente. La humedad excesiva puede dañar la base y generar hongos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Love Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
