'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Star, 
  Heart, 
  Sparkles, 
  ArrowRight,
  Zap,
  Palette,
  Package,
  Users
} from 'lucide-react'

const timeline = [
  {
    year: '2020',
    title: 'El comienzo',
    description: 'En plena pandemia, Iri descubre el tufting. Lo que empezo como un hobby se convirtio en pasion.',
    icon: Zap,
    color: 'bg-primary',
  },
  {
    year: '2021',
    title: 'Primeras ventas',
    description: 'Las primeras alfombras salen al mundo. Amigos, familia y despues... desconocidos que se volvieron amigos.',
    icon: Heart,
    color: 'bg-secondary',
  },
  {
    year: '2022',
    title: 'Cosas de Iri nace',
    description: 'La marca toma forma. Identidad visual, redes sociales y un proposito claro: ponele onda a tus espacios.',
    icon: Sparkles,
    color: 'bg-accent',
  },
  {
    year: '2023',
    title: 'Comunidad',
    description: '+500 clientes felices. Cada alfombra cuenta una historia. Cada espacio tiene su onda unica.',
    icon: Users,
    color: 'bg-lime',
  },
  {
    year: '2024',
    title: 'El futuro',
    description: 'Nuevos disenos, nuevos materiales, nuevas formas de crear. La aventura sigue...',
    icon: Star,
    color: 'bg-primary',
  },
]

const values = [
  {
    icon: Palette,
    title: 'Creatividad',
    description: 'Cada alfombra es una obra de arte. No seguimos tendencias, las creamos.',
  },
  {
    icon: Heart,
    title: 'Amor',
    description: 'Hacemos las cosas con el corazon. Se nota en cada puntada.',
  },
  {
    icon: Package,
    title: 'Calidad',
    description: 'Materiales premium y atencion al detalle. Tu alfombra dura para siempre.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Somos mas que una marca. Somos un grupo de gente con onda.',
  },
]

export function AboutStory() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 fill-secondary text-secondary" />
            <span className="brutal-border bg-secondary px-3 py-1 font-mono text-sm font-bold uppercase text-secondary-foreground">
              Nuestra Historia
            </span>
            <Star className="h-6 w-6 fill-secondary text-secondary" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            DE LA{' '}
            <span className="brutal-border inline-block bg-primary px-3 text-primary-foreground">
              PANDEMIA
            </span>
            <br />
            A TU{' '}
            <span className="brutal-border inline-block bg-accent px-3 text-accent-foreground">
              PISO
            </span>
          </h1>
        </motion.div>

        {/* Intro Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Text */}
          <div className="brutal-border brutal-shadow bg-card p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-8 w-8 text-primary" />
              </motion.div>
              <h2 className="font-display text-3xl font-black">HOLA, SOY IRI</h2>
            </div>
            
            <div className="space-y-4 font-mono text-muted-foreground leading-relaxed">
              <p>
                Todo empezo en 2020, cuando el mundo se puso raro y yo necesitaba 
                algo para no volverme loca. Descubri el tufting por casualidad 
                viendo videos en internet y dije <span className="brutal-border bg-secondary px-1 text-secondary-foreground">"por que no?"</span>
              </p>
              <p>
                Mi primera alfombra fue horrible (en serio, horrible). Pero habia 
                algo magico en el proceso. Ver como la lana iba formando disenos, 
                como algo abstracto se convertia en algo tangible...
              </p>
              <p>
                Hoy, cada alfombra que hago lleva un pedacito de esa magia inicial. 
                La misma emocion, pero con mas tecnica y menos desastres.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <Heart className="h-5 w-5 fill-destructive text-destructive" />
              <span className="font-mono text-sm">Iri, fundadora</span>
            </div>
          </div>

          {/* Image with stickers */}
          <div className="relative">
            <div className="brutal-border brutal-shadow bg-muted p-2">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src="/about-workshop.jpg"
                  alt="Taller de Cosas de Iri donde se crean alfombras artesanales"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Decorative stickers */}
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 brutal-border bg-secondary p-3 rotate-12"
            >
              <span className="font-display text-lg font-black text-secondary-foreground">
                HANDMADE
              </span>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 brutal-border bg-lime p-2 -rotate-6"
            >
              <span className="font-mono text-sm font-bold text-black">
                Buenos Aires, AR
              </span>
            </motion.div>
            <div className="absolute top-1/2 -right-2 brutal-border bg-primary p-2">
              <Star className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-12">
            <span className="brutal-border inline-block bg-accent px-3 text-accent-foreground">
              TIMELINE
            </span>
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="brutal-border brutal-shadow bg-card p-6 ml-8 md:ml-0">
                        <span className="brutal-border inline-block bg-muted px-3 py-1 font-display text-2xl font-black mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-display text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="font-mono text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className={`brutal-border ${item.color} p-3`}
                      >
                        <Icon className="h-5 w-5 text-foreground" />
                      </motion.div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-12">
            NUESTROS{' '}
            <span className="brutal-border inline-block bg-secondary px-3 text-secondary-foreground">
              VALORES
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="brutal-border brutal-shadow bg-card p-6"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="brutal-border inline-block bg-primary p-3 mb-4"
                  >
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brutal-border brutal-shadow bg-primary p-8 md:p-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-black text-primary-foreground mb-4">
            QUERES SER PARTE?
          </h2>
          <p className="font-mono text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Encontra tu alfombra perfecta o contanos tu idea y la hacemos realidad juntos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tienda">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brutal-border inline-flex items-center gap-2 bg-background px-8 py-4 font-mono text-lg font-bold"
              >
                Ver tienda
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
            <Link href="/contacto">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brutal-border inline-flex items-center gap-2 bg-secondary px-8 py-4 font-mono text-lg font-bold text-secondary-foreground"
              >
                <Sparkles className="h-5 w-5" />
                Personalizar
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
