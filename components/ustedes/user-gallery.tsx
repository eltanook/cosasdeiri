'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera, Heart, Star, FolderOpen, ArrowRight, Instagram } from 'lucide-react'
import { userGallery } from '@/lib/products'

export function UserGallery() {
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
            User Generated Content
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black">
            Hall of fame
          </h1>
          <p className="mt-4 font-mono text-lg text-muted-foreground max-w-xl mx-auto">
            Gracias a ustedes, cada espacio cobra vida. Descubrí nuestra comunidad e inspírate con sus fotos.
          </p>
        </motion.div>

        {/* Folder Window Style Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="brutal-border brutal-shadow bg-card mb-12"
        >
          {/* Window Title Bar */}
          <div className="brutal-border border-x-0 border-t-0 flex items-center justify-between bg-primary px-4 py-2">
            <div className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4 text-primary-foreground" />
              <span className="font-mono text-sm font-bold text-primary-foreground">
                C:\Cosas_de_Iri\Clientes_Felices\
              </span>
            </div>
            <div className="flex gap-1">
              <div className="brutal-border h-3 w-3 bg-secondary" />
              <div className="brutal-border h-3 w-3 bg-accent" />
              <div className="brutal-border h-3 w-3 bg-destructive" />
            </div>
          </div>

          {/* Toolbar */}
          <div className="brutal-border border-x-0 border-t-0 bg-muted px-4 py-2 flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              {userGallery.length} archivos
            </span>
            <span className="font-mono text-xs text-muted-foreground">|</span>
            <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
              <Heart className="h-3 w-3 fill-destructive text-destructive" />
              +500 likes
            </span>
          </div>

          {/* Asymmetric Grid - Collage Style */}
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {userGallery.map((item, index) => {
                // Create asymmetric layout
                const isLarge = index === 0 || index === 4
                const isRotated = index % 3 === 0

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8, rotate: isRotated ? -3 : 3 }}
                    animate={{ opacity: 1, scale: 1, rotate: isRotated ? -2 : 2 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                    className={`relative group ${
                      isLarge ? 'col-span-2 row-span-2' : ''
                    }`}
                  >
                    {/* Polaroid-style frame */}
                    <div className="brutal-border brutal-shadow bg-background p-2 pb-4">
                      <div className={`relative overflow-hidden bg-muted ${
                        isLarge ? 'aspect-square' : 'aspect-[4/5]'
                      }`}>
                        <Image
                          src={item.image}
                          alt={`Alfombra ${item.product} de ${item.name}`}
                          fill
                          className="object-cover"
                          sizes={isLarge ? '50vw' : '25vw'}
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                          <Heart className="h-8 w-8 text-white mb-2" />
                          <span className="font-mono text-sm text-white">
                            {item.product}
                          </span>
                        </div>
                      </div>

                      {/* Caption */}
                      <div className="pt-2 flex items-center justify-between">
                        <span className="font-mono text-xs font-bold truncate">
                          {item.name}
                        </span>
                        <Star className="h-3 w-3 fill-secondary text-secondary shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Share Your Photo */}
          <div className="brutal-border brutal-shadow bg-accent p-6">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="h-8 w-8 text-accent-foreground" />
              <h3 className="font-display text-2xl font-black text-accent-foreground">
                SUBI TU FOTO
              </h3>
            </div>
            <p className="font-mono text-sm text-accent-foreground/80 mb-4">
              Etiquetanos en Instagram con #CosasDeIri y aparece en nuestro muro de la fama!
            </p>
            <motion.a
              href="https://instagram.com/cosasdeiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="brutal-border flex items-center justify-center gap-2 bg-foreground py-3 font-mono font-bold text-background"
            >
              <Instagram className="h-5 w-5" />
              @cosasdeiri
            </motion.a>
          </div>

          {/* Get Your Rug */}
          <div className="brutal-border brutal-shadow bg-secondary p-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-8 w-8 fill-secondary-foreground text-secondary-foreground" />
              <h3 className="font-display text-2xl font-black text-secondary-foreground">
                QUERES LA TUYA?
              </h3>
            </div>
            <p className="font-mono text-sm text-secondary-foreground/80 mb-4">
              Unite al club de los espacios con onda. Encontra tu alfombra perfecta en nuestra tienda.
            </p>
            <Link href="/tienda">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="brutal-border flex items-center justify-center gap-2 bg-foreground py-3 font-mono font-bold text-background"
              >
                Ir a la tienda
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
