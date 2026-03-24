'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, ShoppingCart, Star } from 'lucide-react'
import { type Product } from '@/lib/products'
import { useCart } from '@/lib/cart-store'

export function FeaturedProducts({ featuredProducts }: { featuredProducts: Product[] }) {
  const { addItem } = useCart()

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="brutal-border brutal-shadow inline-block bg-accent px-4 py-2 font-mono text-sm font-bold uppercase text-accent-foreground mb-4">
              Lo mas pedido
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black">
              DESTACADOS
            </h2>
          </div>
          <Link href="/tienda">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="brutal-border brutal-shadow-hover inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono font-bold uppercase text-background"
            >
              Ver todo
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="brutal-border brutal-shadow bg-card overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Link href={`/tienda/${product.slug}`}>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="brutal-border bg-background p-4 flex items-center justify-center"
                      >
                        <Eye className="h-6 w-6 text-foreground" />
                      </motion.span>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.images[0],
                          size: product.sizes[0].label,
                        })
                      }
                      className="brutal-border bg-primary p-4 flex items-center justify-center"
                    >
                      <ShoppingCart className="h-6 w-6 text-primary-foreground" />
                    </motion.button>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="brutal-border bg-secondary px-2 py-1 font-mono text-xs font-bold text-secondary-foreground flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      TOP
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-2">
                  <Link href={`/tienda/${product.slug}`}>
                    <h3 className="font-display text-lg font-bold hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-mono text-xs text-muted-foreground uppercase">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-display text-xl font-black text-primary">
                      ${product.price.toLocaleString('es-AR')}
                    </span>
                    <span className="brutal-border bg-muted px-2 py-1 font-mono text-xs">
                      {product.sizes.length} tamaños
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
