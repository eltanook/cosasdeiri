'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/lib/cart-store'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart, getWhatsAppLink } = useCart()

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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md brutal-border border-r-0 border-y-0 bg-background shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="brutal-border border-x-0 border-t-0 flex items-center justify-between bg-primary p-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-primary-foreground" />
                  <h2 className="font-display text-xl font-black text-primary-foreground">
                    TU CARRITO
                  </h2>
                </div>
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
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ShoppingBag className="h-20 w-20 text-muted-foreground" />
                    </motion.div>
                    <p className="mt-4 font-mono text-lg text-muted-foreground">
                      Tu carrito esta vacio
                    </p>
                    <p className="font-mono text-sm text-muted-foreground">
                      Agrega algo copado!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="brutal-border brutal-shadow bg-card p-3"
                      >
                        <div className="flex gap-3">
                          <div className="brutal-border relative h-20 w-20 shrink-0 overflow-hidden bg-muted">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display text-sm font-bold truncate">
                              {item.name}
                            </h3>
                            {item.size && (
                              <p className="font-mono text-xs text-muted-foreground">
                                Tamanio: {item.size}
                              </p>
                            )}
                            <p className="font-mono text-sm font-bold text-primary">
                              ${item.price.toLocaleString('es-AR')}
                            </p>

                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center">
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="brutal-border bg-muted p-1"
                                >
                                  <Minus className="h-3 w-3" />
                                </motion.button>
                                <span className="brutal-border border-x-0 bg-background px-3 py-1 font-mono text-sm font-bold">
                                  {item.quantity}
                                </span>
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="brutal-border bg-muted p-1"
                                >
                                  <Plus className="h-3 w-3" />
                                </motion.button>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item.id)}
                                className="brutal-border bg-destructive p-1"
                              >
                                <Trash2 className="h-4 w-4 text-white" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="brutal-border border-x-0 border-b-0 bg-muted p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm">Subtotal:</span>
                    <span className="font-display text-xl font-black">
                      ${totalPrice.toLocaleString('es-AR')}
                    </span>
                  </div>

                  <motion.a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="brutal-border brutal-shadow-hover flex w-full items-center justify-center gap-2 bg-lime py-3 font-mono font-bold uppercase text-black"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Finalizar por WhatsApp
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearCart}
                    className="brutal-border w-full py-2 font-mono text-sm text-muted-foreground hover:bg-destructive hover:text-white transition-colors"
                  >
                    Vaciar carrito
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
