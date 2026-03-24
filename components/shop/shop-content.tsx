'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, X, Grid, LayoutGrid } from 'lucide-react'
import { categories, type Product } from '@/lib/products'
import { ProductCard } from './product-card'
import { FilterSidebar } from './filter-sidebar'
import { FilterDrawer } from './filter-drawer'

export function ShopContent({ initialProducts }: { initialProducts: Product[] }) {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get('category') ?? 'all')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [gridSize, setGridSize] = useState<'small' | 'large'>('large')

  // Sync category when URL param changes (e.g. browser back/forward)
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = [...initialProducts]

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSortBy('name')
  }

  const hasActiveFilters = searchQuery || selectedCategory !== 'all'

  return (
    <div className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black">
              NUESTRA{' '}
              <span className="brutal-border inline-block bg-primary px-3 text-primary-foreground">
                TIENDA
              </span>
            </h1>
            <p className="mt-4 font-mono text-muted-foreground max-w-xl mx-auto">
              Encuentra la alfombra perfecta para tu espacio. Cada pieza es unica y hecha a mano con amor.
            </p>
          </motion.div>
        </div>

        {/* Search and Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="brutal-border brutal-shadow bg-card p-4 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar alfombras..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full brutal-border bg-background pl-10 pr-4 py-3 font-mono text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="brutal-border bg-background px-4 py-3 font-mono text-sm cursor-pointer"
            >
              <option value="name">Nombre A-Z</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>

            {/* Grid Toggle */}
            <div className="hidden md:flex brutal-border bg-background">
              <button
                onClick={() => setGridSize('large')}
                className={`p-3 ${gridSize === 'large' ? 'bg-primary text-primary-foreground' : ''}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setGridSize('small')}
                className={`p-3 ${gridSize === 'small' ? 'bg-primary text-primary-foreground' : ''}`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Filter Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setMobileFiltersOpen(true)}
              className="brutal-border brutal-shadow-hover flex items-center justify-center gap-2 bg-secondary px-4 py-3 font-mono font-bold md:hidden"
            >
              <SlidersHorizontal className="h-5 w-5" />
              Filtros
            </motion.button>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 brutal-border border-x-0 border-b-0">
              <span className="font-mono text-xs text-muted-foreground">Filtros activos:</span>
              {selectedCategory !== 'all' && (
                <span className="brutal-border bg-accent px-2 py-1 font-mono text-xs font-bold text-accent-foreground flex items-center gap-1">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                  <button onClick={() => setSelectedCategory('all')}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="brutal-border bg-primary px-2 py-1 font-mono text-xs font-bold text-primary-foreground flex items-center gap-1">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="font-mono text-xs text-muted-foreground underline ml-2"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-sm text-muted-foreground">
                {filteredProducts.length} productos encontrados
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="brutal-border brutal-shadow bg-card p-12 text-center"
              >
                <p className="font-display text-2xl font-bold mb-2">
                  No encontramos nada
                </p>
                <p className="font-mono text-muted-foreground mb-4">
                  Intenta con otros filtros o busqueda
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearFilters}
                  className="brutal-border brutal-shadow-hover bg-primary px-6 py-3 font-mono font-bold text-primary-foreground"
                >
                  Ver todas las alfombras
                </motion.button>
              </motion.div>
            ) : (
              <div
                className={`grid gap-6 ${gridSize === 'large'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                  }`}
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                      layout
                    >
                      <ProductCard product={product} compact={gridSize === 'small'} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  )
}
