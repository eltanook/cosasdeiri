'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import {
  Send,
  Sparkles,
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
  Star,
  Heart
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const requestTypes = [
  { id: 'personalizada', label: 'Alfombra personalizada', icon: Sparkles },
  { id: 'consulta', label: 'Consulta sobre producto', icon: MessageCircle },
  { id: 'mayorista', label: 'Pedido mayorista', icon: Star },
  { id: 'otro', label: 'Otro', icon: Heart },
]

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success('Mensaje enviado correctamente! Te respondemos pronto.')
    setFormData({ name: '', email: '', phone: '', type: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="brutal-border brutal-shadow inline-block bg-secondary px-4 py-2 font-mono text-sm font-bold uppercase text-secondary-foreground mb-4">
            Contacto
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black">
            HAGAMOS{' '}
            <span className="brutal-border inline-block bg-primary px-3 text-primary-foreground">
              MAGIA
            </span>
            {' '}JUNTOS
          </h1>
          <p className="mt-4 font-mono text-lg text-muted-foreground max-w-xl mx-auto">
            Tenes una idea loca? Queres algo unico? Contanos y lo hacemos realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/irinamena98@gmail.com"
              method="POST"
              className="brutal-border brutal-shadow bg-card p-6 md:p-8"
            >
              <h2 className="font-display text-2xl font-black mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                ENVIANOS UN MENSAJE
              </h2>

              {/* Request Type */}
              <div className="mb-6">
                <label className="brutal-border inline-block bg-muted px-3 py-1 font-mono text-sm font-bold mb-3">
                  Tipo de consulta
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {requestTypes.map((type) => {
                    const Icon = type.icon
                    const isSelected = formData.type === type.id
                    return (
                      <motion.button
                        key={type.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, type: type.id }))
                        }
                        className={`brutal-border flex items-center gap-2 px-4 py-3 font-mono text-sm font-bold transition-colors ${isSelected
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted hover:bg-accent'
                          }`}
                      >
                        <Icon className="h-4 w-4" />
                        {type.label}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="brutal-border inline-block bg-muted px-3 py-1 font-mono text-sm font-bold mb-2"
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full brutal-border bg-background px-4 py-3 font-mono transition-colors ${focusedField === 'name'
                      ? 'border-primary ring-2 ring-primary ring-offset-2'
                      : ''
                    }`}
                  placeholder="Como te llamas?"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="brutal-border inline-block bg-muted px-3 py-1 font-mono text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full brutal-border bg-background px-4 py-3 font-mono transition-colors ${focusedField === 'email'
                      ? 'border-primary ring-2 ring-primary ring-offset-2'
                      : ''
                    }`}
                  placeholder="tu@email.com"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="brutal-border inline-block bg-muted px-3 py-1 font-mono text-sm font-bold mb-2"
                >
                  WhatsApp (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full brutal-border bg-background px-4 py-3 font-mono transition-colors ${focusedField === 'phone'
                      ? 'border-primary ring-2 ring-primary ring-offset-2'
                      : ''
                    }`}
                  placeholder="+54 9 11 5724-6994"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="brutal-border inline-block bg-muted px-3 py-1 font-mono text-sm font-bold mb-2"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full brutal-border bg-background px-4 py-3 font-mono resize-none transition-colors ${focusedField === 'message'
                      ? 'border-primary ring-2 ring-primary ring-offset-2'
                      : ''
                    }`}
                  placeholder="Contanos tu idea, consulta o lo que necesites..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full brutal-border brutal-shadow-hover flex items-center justify-center gap-2 bg-lime py-4 font-mono text-lg font-bold text-black disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="h-5 w-5" />
                    </motion.div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                href="https://wa.me/5491157246994"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="brutal-border brutal-shadow bg-lime p-4 flex items-center gap-3"
              >
                <div className="brutal-border bg-background p-3">
                  <FaWhatsapp className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-xs text-black/70">WhatsApp</p>
                  <p className="font-display font-bold text-black">
                    +54 9 11 5724-6994
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:irinamena98@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="brutal-border brutal-shadow bg-secondary p-4 flex items-center gap-3"
              >
                <div className="brutal-border bg-background p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-xs text-secondary-foreground/70">
                    Email
                  </p>
                  <p className="font-display font-bold text-secondary-foreground">
                    irinamena98@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/cosasdeiri/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="brutal-border brutal-shadow bg-primary p-4 flex items-center gap-3"
              >
                <div className="brutal-border bg-background p-3">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-xs text-primary-foreground/70">
                    Instagram
                  </p>
                  <p className="font-display font-bold text-primary-foreground">
                    @cosasdeiri
                  </p>
                </div>
              </motion.a>

              <div className="brutal-border brutal-shadow bg-accent p-4 flex items-center gap-3">
                <div className="brutal-border bg-background p-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-mono text-xs text-accent-foreground/70">
                    Ubicacion
                  </p>
                  <p className="font-display font-bold text-accent-foreground">
                    Buenos Aires, AR
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="brutal-border brutal-shadow bg-card">
              <div className="brutal-border border-x-0 border-t-0 flex items-center justify-between bg-primary px-4 py-2">
                <span className="font-mono text-sm font-bold text-primary-foreground">
                  ubicacion.map
                </span>
                <div className="flex gap-1">
                  <div className="h-2 w-2 bg-secondary" />
                  <div className="h-2 w-2 bg-accent" />
                  <div className="h-2 w-2 bg-lime" />
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210200.95476063844!2d-58.59847219999999!3d-34.6158527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'grayscale(100%) contrast(1.2)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicacion de Cosas de Iri en Buenos Aires"
                />
                {/* Map overlay for style */}
                <div className="absolute inset-0 pointer-events-none mix-blend-color bg-primary/20" />
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="brutal-border bg-muted p-6">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 fill-secondary text-secondary" />
                PREGUNTAS RAPIDAS
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div>
                  <p className="font-bold">¿Cuánto tarda una alfombra personalizada?</p>
                  <p className="text-muted-foreground">
                    Entre 2 y 4 semanas, dependiendo del diseño. Sin embargo, este tiempo puede variar según la disponibilidad y la complejidad del diseño, pudiendo ser más rápido o algo más extenso.
                  </p>
                </div>
                <div>
                  <p className="font-bold">¿Hacen envíos a todo el país?</p>
                  <p className="text-muted-foreground">
                    Sí, enviamos a todo Argentina.
                  </p>
                </div>
                <div>
                  <p className="font-bold">¿Puedo elegir los colores? y el tamaño?</p>
                  <p className="text-muted-foreground">
                    ¡Claro! Personalizamos a tu gusto, podés elegir los colores que quieras y las medidas que imagines.
                  </p>
                </div>
                <div>
                  <p className="font-bold">¿Las alfombras son lavables?</p>
                  <p className="text-muted-foreground">
                    Sí, se pueden limpiar con cuidado en casa. No se pueden meter en el lavarropas. Son lavables a mano, y si querés que te duren más, deberías seguir nuestra guía de limpieza
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
