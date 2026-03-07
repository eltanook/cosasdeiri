'use client'

import { motion } from 'framer-motion'
import { Truck, CreditCard, Clock, MapPin, Package, Shield, Landmark, Banknote } from 'lucide-react'

const shippingZones = [
  { zone: 'CABA', time: '1-3 días hábiles', cost: 'Gratis en compras +$40.000' },
  { zone: 'GBA', time: '2-4 días hábiles', cost: 'Desde $3.500' },
  { zone: 'Interior (grandes ciudades)', time: '5-7 días hábiles', cost: 'Desde $5.500' },
  { zone: 'Interior (resto del país)', time: '7-12 días hábiles', cost: 'Desde $7.000' },
]

const paymentMethods = [
  { name: 'Transferencia Bancaria', description: '10% de descuento', icon: Landmark },
  { name: 'Mercado Pago', description: 'Hasta 12 cuotas', icon: CreditCard },
  { name: 'Efectivo', description: 'Solo CABA y GBA', icon: Banknote },
]

export function EnviosContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="brutal-border brutal-shadow inline-block bg-primary px-4 py-2 font-mono text-sm font-bold uppercase text-primary-foreground mb-4">
            Info
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            ENVÍOS{' '}
            <span className="brutal-border inline-block bg-secondary px-2 text-secondary-foreground">
              & PAGOS
            </span>
          </h1>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Toda la info que necesitás sobre cómo recibir y pagar tu alfombra.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {/* Shipping Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="brutal-border brutal-shadow bg-accent p-3">
                <Truck className="h-6 w-6 text-accent-foreground" />
              </span>
              <h2 className="font-display text-3xl font-bold">Envíos</h2>
            </div>

            <div className="brutal-border brutal-shadow bg-card overflow-hidden">
              <div className="grid grid-cols-4 bg-foreground text-background p-4 font-mono text-sm font-bold">
                <span>Zona</span>
                <span>Tiempo</span>
                <span className="col-span-2">Costo</span>
              </div>
              {shippingZones.map((zone, i) => (
                <div
                  key={zone.zone}
                  className={`grid grid-cols-4 p-4 font-mono text-sm ${i % 2 === 0 ? 'bg-card' : 'bg-muted'
                    }`}
                >
                  <span className="font-bold">{zone.zone}</span>
                  <span className="text-muted-foreground">{zone.time}</span>
                  <span className="col-span-2 text-primary font-bold">{zone.cost}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="brutal-border bg-muted p-4">
                <Package className="h-5 w-5 mb-2 text-primary" />
                <h4 className="font-mono text-sm font-bold mb-1">Empaque Seguro</h4>
                <p className="font-mono text-xs text-muted-foreground">
                  Tu alfombra va protegida para que llegue perfecta.
                </p>
              </div>
              <div className="brutal-border bg-muted p-4">
                <MapPin className="h-5 w-5 mb-2 text-primary" />
                <h4 className="font-mono text-sm font-bold mb-1">Seguimiento</h4>
                <p className="font-mono text-xs text-muted-foreground">
                  Te mandamos el código de tracking apenas despachamos.
                </p>
              </div>
              <div className="brutal-border bg-muted p-4">
                <Clock className="h-5 w-5 mb-2 text-primary" />
                <h4 className="font-mono text-sm font-bold mb-1">Despacho Rápido</h4>
                <p className="font-mono text-xs text-muted-foreground">
                  Despachamos en 24-48hs después de confirmar el pago.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="brutal-border brutal-shadow bg-secondary p-3">
                <CreditCard className="h-6 w-6 text-secondary-foreground" />
              </span>
              <h2 className="font-display text-3xl font-bold">Medios de Pago</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="brutal-border brutal-shadow bg-card p-6"
                >
                  <div className="brutal-border bg-muted p-3 inline-block mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">{method.name}</h3>
                  <p className="font-mono text-sm text-primary font-bold">{method.description}</p>
                </div>
              ))}
            </div>

            <div className="brutal-border bg-muted p-6 mt-6">
              <h4 className="font-mono text-sm font-bold uppercase mb-4">Proceso de Compra</h4>
              <div className="space-y-3">
                {[
                  'Elegís tu alfombra o nos mandás tu diseño personalizado',
                  'Te confirmamos disponibilidad y precio final con envío',
                  'Realizás el pago (seña del 50% en personalizadas)',
                  'Creamos tu alfombra con todo el amor',
                  '¡Te la enviamos y la disfrutás!'
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="brutal-border bg-primary px-2 py-1 font-mono text-xs font-bold text-primary-foreground shrink-0">
                      {i + 1}
                    </span>
                    <p className="font-mono text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="brutal-border brutal-shadow bg-primary p-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <span className="brutal-border bg-background p-4">
                <Shield className="h-8 w-8 text-primary" />
              </span>
              <div className="text-center sm:text-left">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  Garantía de Satisfacción
                </h3>
                <p className="font-mono text-sm text-primary-foreground/80">
                  Si tu alfombra llega con algún defecto, te la cambiamos sin vueltas.
                  Tu felicidad es nuestra prioridad.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
