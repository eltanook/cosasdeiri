'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, ShoppingCart, Star } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from '@/lib/cart-store'

interface ProductCardProps {
  product: Product
  compact?: boolean
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0].label,
    })
  }

  return (
    <div className="group brutal-border brutal-shadow bg-card overflow-hidden">
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-muted ${compact ? 'aspect-square' : 'aspect-[4/5]'}`}>
        <Image
          src={product.images[0]}
          alt={`Alfombra ${product.name} - Diseño ${product.category}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover Overlay con botones mejorados */}
        <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
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
            onClick={handleAddToCart}
            className="brutal-border bg-primary p-4 flex items-center justify-center"
          >
            <ShoppingCart className="h-6 w-6 text-primary-foreground" />
          </motion.button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <span className="brutal-border bg-secondary px-2 py-1 font-mono text-xs font-bold text-secondary-foreground flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              TOP
            </span>
          )}
          {!product.inStock && (
            <span className="brutal-border bg-destructive px-2 py-1 font-mono text-xs font-bold text-white">
              AGOTADO
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className={`p-4 space-y-2 ${compact ? 'p-3' : 'p-4'}`}>
        <Link href={`/tienda/${product.slug}`}>
          <h3 className={`font-display font-bold hover:text-primary transition-colors line-clamp-1 ${compact ? 'text-sm' : 'text-lg'}`}>
            {product.name}
          </h3>
        </Link>
        
        {!compact && (
          <p className="font-mono text-xs text-muted-foreground uppercase">
            {product.category}
          </p>
        )}

        <div className="flex items-center justify-between pt-1">
          <span className={`font-display font-black text-primary ${compact ? 'text-base' : 'text-xl'}`}>
            ${product.price.toLocaleString('es-AR')}
          </span>
          {!compact && (
            <span className="brutal-border bg-muted px-2 py-1 font-mono text-xs">
              {product.sizes.length} tamaños
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
