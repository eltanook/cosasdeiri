'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Grid, Sparkles, Triangle, Heart, Star, Palette } from 'lucide-react'

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

interface FilterDrawerProps {
  open: boolean
  onClose: () => void
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterDrawer({
  open,
  onClose,
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterDrawerProps) {
  const handleCategorySelect = (categoryId: string) => {
    onCategoryChange(categoryId)
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 brutal-border border-b-0 border-x-0 bg-background max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="brutal-border border-x-0 border-t-0 flex items-center justify-between bg-primary p-4 sticky top-0">
              <h2 className="font-display text-xl font-black text-primary-foreground">
                FILTROS
              </h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="brutal-border bg-background p-2"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Categories */}
              <div>
                <h3 className="brutal-border inline-block bg-secondary px-3 py-1 font-mono text-sm font-bold uppercase text-secondary-foreground mb-4">
                  Categorias
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => {
                    const Icon = iconMap[category.icon] || Grid
                    const isActive = selectedCategory === category.id

                    return (
                      <motion.button
                        key={category.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`brutal-border flex items-center gap-3 px-4 py-4 font-mono text-sm font-bold transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {category.name}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Promo */}
              <div className="brutal-border bg-accent p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-accent-foreground shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-accent-foreground">
                      Diseño a medida?
                    </h4>
                    <p className="font-mono text-sm text-accent-foreground/80">
                      Hacemos tu alfombra personalizada!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="p-4 brutal-border border-x-0 border-b-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="brutal-border brutal-shadow-hover w-full bg-foreground py-4 font-mono font-bold text-background"
              >
                Ver productos
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
