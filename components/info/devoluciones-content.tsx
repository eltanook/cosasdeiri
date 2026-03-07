'use client'

import { motion } from 'framer-motion'
import { RefreshCw, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const acceptedReasons = [
  'La alfombra llegó con defectos de fabricación',
  'El color es significativamente diferente a las fotos',
  'Recibiste un producto diferente al que pediste',
  'La alfombra llegó dañada por el transporte',
]

const notAcceptedReasons = [
  'Cambio de opinión después de 7 días',
  'Daños causados por mal uso o lavado incorrecto',
  'Alfombras personalizadas (salvo defectos)',
  'Productos sin empaque original',
]

export function DevolucionesContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="brutal-border brutal-shadow inline-block bg-accent px-4 py-2 font-mono text-sm font-bold uppercase text-accent-foreground mb-4">
            Políticas
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            DEVOLUCIONES{' '}
            <span className="brutal-border inline-block bg-primary px-2 text-primary-foreground">
              & CAMBIOS
            </span>
          </h1>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu felicidad es lo primero. Si algo no salió como esperabas, lo solucionamos.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Main Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="brutal-border brutal-shadow bg-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="brutal-border bg-secondary p-3">
                <RefreshCw className="h-6 w-6 text-secondary-foreground" />
              </span>
              <h2 className="font-display text-2xl font-bold">Nuestra Política</h2>
            </div>

            <div className="space-y-4 font-mono text-sm leading-relaxed">
              <p>
                Tenés <strong className="text-primary">7 días corridos</strong> desde que recibís tu alfombra para solicitar un cambio o devolución.
              </p>
              <p>
                Para iniciar el proceso, escribinos por WhatsApp o email con tu número de pedido y fotos del producto. Te respondemos en menos de 24 horas.
              </p>
              <p>
                Si el cambio es por un defecto nuestro, <strong className="text-primary">nosotros cubrimos el envío</strong>. Si es por cambio de opinión, el costo del envío corre por tu cuenta.
              </p>
            </div>
          </motion.div>

          {/* Accepted / Not Accepted */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="brutal-border brutal-shadow bg-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-lime" />
                <h3 className="font-display text-lg font-bold">Aceptamos cambios por</h3>
              </div>
              <ul className="space-y-3">
                {acceptedReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 font-mono text-sm">
                    <span className="text-lime mt-0.5">✓</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="brutal-border brutal-shadow bg-card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-display text-lg font-bold">No aceptamos cambios por</h3>
              </div>
              <ul className="space-y-3">
                {notAcceptedReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 font-mono text-sm">
                    <span className="text-destructive mt-0.5">✗</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="brutal-border brutal-shadow bg-muted p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold mb-6">¿Cómo hacer un cambio o devolución?</h3>

            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { step: '1', title: 'Contactanos', desc: 'Escribinos por WhatsApp o email' },
                { step: '2', title: 'Mandanos fotos', desc: 'Del producto y el empaque' },
                { step: '3', title: 'Coordinamos', desc: 'Te indicamos cómo enviar' },
                { step: '4', title: 'Resuelto', desc: 'Cambio o reembolso en 48hs' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="brutal-border brutal-shadow inline-block bg-primary px-4 py-2 font-display text-2xl font-bold text-primary-foreground mb-3">
                    {item.step}
                  </span>
                  <h4 className="font-mono text-sm font-bold mb-1">{item.title}</h4>
                  <p className="font-mono text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="brutal-border bg-secondary/20 p-6"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono text-sm font-bold mb-2">Importante sobre personalizadas</h4>
                <p className="font-mono text-sm text-muted-foreground">
                  Las alfombras personalizadas se hacen especialmente para vos, por eso solo aceptamos devoluciones si tienen defectos de fabricación. ¡Por eso te mandamos el diseño para aprobar antes de empezar!
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="brutal-border brutal-shadow bg-primary p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
              ¿Tenés algún problema con tu pedido?
            </h3>
            <p className="font-mono text-sm text-primary-foreground/80 mb-4">
              Escribinos y lo resolvemos juntos. Tu satisfacción es nuestra prioridad.
            </p>
            <Link
              href="/contacto"
              className="brutal-border inline-flex items-center gap-2 bg-background px-6 py-3 font-mono font-bold text-foreground"
            >
              <FaWhatsapp className="h-5 w-5" />
              Contactanos
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
