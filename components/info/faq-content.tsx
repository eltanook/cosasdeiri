'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const faqs = [
  {
    category: 'Pedidos',
    items: [
      {
        question: '¿Cómo hago un pedido?',
        answer: 'Podés elegir una alfombra del catálogo y agregarla al carrito, o contactarnos por WhatsApp para un diseño personalizado. ¡Es super fácil!'
      },
      {
        question: '¿Cuánto tiempo tarda mi pedido?',
        answer: 'Las alfombras del catálogo tardan entre 7-15 días hábiles. Los diseños personalizados pueden tardar entre 15-25 días dependiendo de la complejidad.'
      },
      {
        question: '¿Puedo cancelar o modificar mi pedido?',
        answer: 'Sí, podés modificar o cancelar tu pedido hasta 24 horas después de confirmarlo. Después de ese tiempo, ya empezamos a trabajar en tu alfombra.'
      }
    ]
  },
  {
    category: 'Personalizadas',
    items: [
      {
        question: '¿Puedo pedir cualquier diseño?',
        answer: '¡Casi cualquiera! Podemos hacer logos, personajes, fotos, texto, o lo que se te ocurra. Te asesoramos para que quede perfecto.'
      },
      {
        question: '¿Cómo funciona el proceso de diseño?',
        answer: 'Nos mandás tu idea o imagen por WhatsApp, te hacemos una propuesta de diseño y presupuesto, y una vez que lo aprobás, empezamos a crear tu alfombra.'
      },
      {
        question: '¿Hay límites de tamaño?',
        answer: 'Hacemos alfombras desde 40x40cm hasta 200x300cm. Si necesitás algo más grande, ¡consultanos!'
      }
    ]
  },
  {
    category: 'Pagos',
    items: [
      {
        question: '¿Qué medios de pago aceptan?',
        answer: 'Aceptamos transferencia bancaria, Mercado Pago (tarjetas y efectivo), y efectivo contra entrega en CABA y GBA.'
      },
      {
        question: '¿Puedo pagar en cuotas?',
        answer: '¡Sí! Con Mercado Pago podés pagar en hasta 12 cuotas. Consultanos por las promociones vigentes.'
      },
      {
        question: '¿Necesito dejar una seña?',
        answer: 'Para pedidos personalizados pedimos una seña del 50% para comenzar. El resto lo pagás cuando recibís tu alfombra.'
      }
    ]
  },
  {
    category: 'Envíos',
    items: [
      {
        question: '¿Hacen envíos a todo el país?',
        answer: '¡Sí! Enviamos a toda Argentina. El costo de envío depende de tu ubicación y el tamaño de la alfombra.'
      },
      {
        question: '¿Cuánto cuesta el envío?',
        answer: 'El envío en CABA es gratis para compras mayores a $40.000. Para el resto del país, te cotizamos según tu ubicación.'
      },
      {
        question: '¿Cómo recibo mi alfombra?',
        answer: 'Usamos correo puerta a puerta o lo coordinamos personalmente en CABA y GBA. ¡Siempre bien empaquetada!'
      }
    ]
  }
]

export function FAQContent() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="brutal-border brutal-shadow inline-block bg-secondary px-4 py-2 font-mono text-sm font-bold uppercase text-secondary-foreground mb-4">
            FAQ
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            PREGUNTAS{' '}
            <span className="brutal-border inline-block bg-primary px-2 text-primary-foreground">
              FRECUENTES
            </span>
          </h1>
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tenés dudas? Acá te respondemos las preguntas más comunes. Si no encontrás lo que buscás, ¡escribinos!
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="brutal-border inline-block bg-accent px-3 py-1 font-mono text-sm font-bold uppercase text-accent-foreground mb-4">
                {category.category}
              </h2>

              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const itemId = `${catIndex}-${itemIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <div
                      key={itemId}
                      className="brutal-border brutal-shadow bg-card"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="font-display font-bold text-lg pr-4">
                          {item.question}
                        </span>
                        <span className="brutal-border bg-muted p-2 shrink-0">
                          {isOpen ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pt-0">
                              <div className="brutal-border border-t-0 bg-muted p-4">
                                <p className="font-mono text-sm leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 brutal-border brutal-shadow bg-primary p-8 text-center"
        >
          <Sparkles className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            ¿No encontraste tu respuesta?
          </h3>
          <p className="font-mono text-sm text-primary-foreground/80 mb-4">
            ¡No te preocupes! Escribinos y te ayudamos al toque.
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
    </section>
  )
}
