'use client'

import { motion } from 'framer-motion'
import { Grid, Sparkles, Triangle, Heart, Star, Palette } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Grid,
  Sparkles,
  Triangle,
  Heart,
  Star,
  Palette,
}

interface Category {
  id: string
  name: string
  icon: string
}

interface FilterSidebarProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterSidebarProps) {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Categories */}
      <div className="brutal-border brutal-shadow bg-card p-4">
        <h2 className="brutal-border inline-block bg-secondary px-3 py-1 font-mono text-sm font-bold uppercase text-secondary-foreground mb-4">
          Categorias
        </h2>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Grid
            const isActive = selectedCategory === category.id

            return (
              <motion.button
                key={category.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full brutal-border flex items-center gap-3 px-4 py-3 font-mono text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-muted'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Promo Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="brutal-border brutal-shadow bg-accent p-4"
      >
        <Sparkles className="h-8 w-8 text-accent-foreground mb-3" />
        <h4 className="font-display text-lg font-bold text-accent-foreground mb-2">
          ¿Diseño a medida?
        </h4>
        <p className="font-mono text-sm text-accent-foreground/80 mb-4">
          ¡Hacemos tu alfombra personalizada con el diseño que quieras!
        </p>
        <motion.a
          href="/personalizada"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="brutal-border block w-full bg-foreground py-2 text-center font-mono text-sm font-bold text-background"
        >
          Consultar
        </motion.a>
      </motion.div>

      {/* Material Info */}
      <div className="brutal-border bg-muted p-4">
        <h4 className="font-mono text-xs font-bold uppercase text-muted-foreground mb-3">
          Materiales Premium
        </h4>
        <ul className="space-y-2 font-mono text-sm">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-primary" />
            Lana sintetica premium
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-secondary" />
            Algodon reciclado
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-accent" />
            Lana merino
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-lime" />
            Poliester soft touch
          </li>
        </ul>
      </div>
    </div>
  )
}
