'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Sparkles, ArrowRight, Upload, Palette, Ruler, MessageSquare } from 'lucide-react'
import { toast } from 'sonner'

const shapes = [
  { id: 'rectangular', name: 'Rectangular', icon: '▬' },
  { id: 'circular', name: 'Circular', icon: '●' },
  { id: 'irregular', name: 'Irregular', icon: '◇' },
  { id: 'custom', name: 'Forma Custom', icon: '✦' },
]

const sizes = [
  { id: 'small', name: 'Chica', desc: '40x60 cm' },
  { id: 'medium', name: 'Mediana', desc: '60x90 cm' },
  { id: 'large', name: 'Grande', desc: '90x120 cm' },
  { id: 'xl', name: 'Extra Grande', desc: '120x180 cm' },
  { id: 'custom', name: 'Medida Custom', desc: 'Vos elegis' },
]

export function CustomRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shape: '',
    size: '',
    customSize: '',
    colors: '',
    design: '',
    reference: '',
    budget: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Build WhatsApp message
    const message = `Hola! Quiero solicitar una alfombra personalizada:

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Telefono:* ${formData.phone}

*Forma:* ${shapes.find(s => s.id === formData.shape)?.name || 'No especificado'}
*Tamaño:* ${sizes.find(s => s.id === formData.size)?.name || 'No especificado'} ${formData.customSize ? `(${formData.customSize})` : ''}
*Colores:* ${formData.colors || 'No especificado'}
*Diseño/Idea:* ${formData.design || 'No especificado'}
*Referencia:* ${formData.reference || 'Sin referencia'}
*Presupuesto:* ${formData.budget || 'A definir'}

Gracias!`

    const whatsappUrl = `https://wa.me/5491157246994?text=${encodeURIComponent(message)}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Redirigiendo a WhatsApp...', {
        description: 'Tu solicitud esta lista para enviar',
      })
      window.open(whatsappUrl, '_blank')
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 brutal-border brutal-shadow mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-mono text-sm font-bold uppercase">Crea Tu Propia Alfombra</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            ALFOMBRA
            <br />
            <span className="text-primary">PERSONALIZADA</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Contanos tu idea y la hacemos realidad. Elegís forma, tamaño, colores y diseño.
            Cada alfombra es única como vos.
          </p>
        </motion.div>

        {/* Decorative Stars */}
        <div className="flex justify-center gap-4 mb-12">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Star className="w-8 h-8 text-secondary fill-secondary" />
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Info */}
          <div className="bg-card brutal-border brutal-shadow p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              TUS DATOS
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background brutal-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-mono"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background brutal-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-mono"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Telefono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background brutal-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-mono"
                  placeholder="+54 11 0000-0000"
                />
              </div>
            </div>
          </div>

          {/* Shape Selection */}
          <div className="bg-card brutal-border brutal-shadow p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              FORMA
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {shapes.map((shape) => (
                <motion.button
                  key={shape.id}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({ ...formData, shape: shape.id })}
                  className={`p-4 brutal-border transition-all ${
                    formData.shape === shape.id
                      ? 'bg-primary text-primary-foreground brutal-shadow'
                      : 'bg-background hover:bg-muted'
                  }`}
                >
                  <span className="text-3xl block mb-2">{shape.icon}</span>
                  <span className="font-mono text-sm font-bold">{shape.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="bg-card brutal-border brutal-shadow p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Ruler className="w-6 h-6 text-primary" />
              TAMAÑO
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              {sizes.map((size) => (
                <motion.button
                  key={size.id}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({ ...formData, size: size.id })}
                  className={`p-4 brutal-border transition-all ${
                    formData.size === size.id
                      ? 'bg-secondary text-secondary-foreground brutal-shadow'
                      : 'bg-background hover:bg-muted'
                  }`}
                >
                  <span className="font-bold block">{size.name}</span>
                  <span className="font-mono text-xs">{size.desc}</span>
                </motion.button>
              ))}
            </div>

            {formData.size === 'custom' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Medida Custom
                </label>
                <input
                  type="text"
                  value={formData.customSize}
                  onChange={(e) => setFormData({ ...formData, customSize: e.target.value })}
                  className="w-full px-4 py-3 bg-background brutal-border focus:border-primary transition-colors font-mono"
                  placeholder="Ej: 100x150 cm"
                />
              </motion.div>
            )}
          </div>

          {/* Design Details */}
          <div className="bg-card brutal-border brutal-shadow p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Palette className="w-6 h-6 text-primary" />
              DISEÑO
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Colores que te gustan
                </label>
                <input
                  type="text"
                  value={formData.colors}
                  onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                  className="w-full px-4 py-3 bg-background brutal-border focus:border-primary transition-colors font-mono"
                  placeholder="Ej: Azul, amarillo y verde"
                />
              </div>

              <div>
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Contanos tu idea / diseño *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.design}
                  onChange={(e) => setFormData({ ...formData, design: e.target.value })}
                  className="w-full px-4 py-3 bg-background brutal-border focus:border-primary transition-colors font-mono resize-none"
                  placeholder="Describinos que tenes en mente: una carita feliz, tu mascota, un patron geometrico, algo abstracto..."
                />
              </div>

              <div>
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Link de referencia (opcional)
                </label>
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="url"
                    value={formData.reference}
                    onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                    className="flex-1 px-4 py-3 bg-background brutal-border focus:border-primary transition-colors font-mono"
                    placeholder="Link a imagen de Pinterest, Instagram, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-sm font-bold mb-2 uppercase">
                  Presupuesto aproximado
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-background brutal-border focus:border-primary transition-colors font-mono"
                  placeholder="Ej: $50.000 - $80.000"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent text-accent-foreground py-4 px-8 brutal-border brutal-shadow-hover font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
                ENVIANDO...
              </>
            ) : (
              <>
                ENVIAR SOLICITUD POR WHATSAPP
                <ArrowRight className="w-6 h-6" />
              </>
            )}
          </motion.button>

          <p className="text-center text-sm text-muted-foreground mt-4 font-mono">
            Te responderemos en menos de 24 horas con un presupuesto detallado
          </p>
        </motion.form>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 gap-2">
          <span className="text-4xl">★</span>
          <span className="text-4xl text-primary">★</span>
          <span className="text-4xl text-secondary">★</span>
          <span className="text-4xl text-accent">★</span>
          <span className="text-4xl">★</span>
        </div>
      </div>
    </section>
  )
}
