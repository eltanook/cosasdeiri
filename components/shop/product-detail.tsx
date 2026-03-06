'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Ruler, 
  Package,
  Sparkles,
  Check
} from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from '@/lib/cart-store'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const currentSize = product.sizes[selectedSize]

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${currentSize.label}`,
      name: product.name,
      price: currentSize.price,
      image: product.images[0],
      size: currentSize.label,
    })
  }

  return (
    <div className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/tienda"
            className="brutal-border brutal-shadow-hover inline-flex items-center gap-2 bg-muted px-4 py-2 font-mono text-sm font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la tienda
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="brutal-border brutal-shadow bg-muted relative aspect-square overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <span className="brutal-border bg-secondary px-3 py-1 font-mono text-sm font-bold text-secondary-foreground flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    DESTACADO
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`brutal-border relative h-20 w-20 overflow-hidden ${
                    selectedImage === index ? 'ring-4 ring-primary ring-offset-2' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} vista ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <span className="brutal-border inline-block bg-accent px-3 py-1 font-mono text-xs font-bold uppercase text-accent-foreground mb-3">
                {product.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-black">
                {product.name}
              </h1>
              <p className="mt-4 font-mono text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="brutal-border brutal-shadow bg-primary p-4">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl font-black text-primary-foreground">
                  ${currentSize.price.toLocaleString('es-AR')}
                </span>
                <span className="font-mono text-sm text-primary-foreground/80">
                  Tamanio {currentSize.label}
                </span>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <h3 className="brutal-border inline-block bg-secondary px-3 py-1 font-mono text-sm font-bold uppercase text-secondary-foreground mb-4">
                Tamanio
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <motion.button
                    key={size.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(index)}
                    className={`brutal-border px-6 py-3 font-mono text-sm font-bold transition-colors ${
                      selectedSize === index
                        ? 'bg-foreground text-background'
                        : 'bg-muted hover:bg-accent'
                    }`}
                  >
                    <span className="block">{size.label}</span>
                    <span className="block text-xs opacity-70">{size.dimensions}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="brutal-border brutal-shadow-hover flex-1 flex items-center justify-center gap-2 bg-lime py-4 font-mono text-lg font-bold text-black disabled:opacity-50"
              >
                <ShoppingCart className="h-5 w-5" />
                {product.inStock ? 'Agregar al carrito' : 'Agotado'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`brutal-border brutal-shadow-hover p-4 ${
                  isWishlisted ? 'bg-destructive' : 'bg-muted'
                }`}
              >
                <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-white text-white' : ''}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brutal-border brutal-shadow-hover bg-muted p-4"
              >
                <Share2 className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Specs Table - Retro Style */}
            <div className="brutal-border bg-card">
              {/* Table Header */}
              <div className="brutal-border border-x-0 border-t-0 flex items-center justify-between bg-secondary px-4 py-2">
                <span className="font-mono text-xs font-bold text-secondary-foreground">
                  especificaciones.txt
                </span>
                <div className="flex gap-1">
                  <div className="h-2 w-2 bg-primary" />
                  <div className="h-2 w-2 bg-accent" />
                  <div className="h-2 w-2 bg-lime" />
                </div>
              </div>
              
              {/* Table Content */}
              <div className="divide-y divide-border">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <Ruler className="h-4 w-4" />
                    Dimensiones
                  </span>
                  <span className="font-mono text-sm font-bold">{currentSize.dimensions}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <Package className="h-4 w-4" />
                    Material
                  </span>
                  <span className="font-mono text-sm font-bold">{product.material}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4" />
                    Estilo
                  </span>
                  <span className="font-mono text-sm font-bold capitalize">{product.category}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <Check className="h-4 w-4" />
                    Stock
                  </span>
                  <span className={`brutal-border px-2 py-1 font-mono text-xs font-bold ${
                    product.inStock ? 'bg-lime text-black' : 'bg-destructive text-white'
                  }`}>
                    {product.inStock ? 'Disponible' : 'Agotado'}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="brutal-border bg-muted px-3 py-1 font-mono text-xs uppercase"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
