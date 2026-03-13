'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { toast } from 'sonner'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  getWhatsAppLink: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const WHATSAPP_NUMBER = '5491157246994' // Replace with actual number

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id)
      if (existingItem) {
        toast.success(`${item.name} actualizado en el carrito`)
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      toast.success(`${item.name} agregado al carrito`)
      return [...prev, { ...item, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === id)
      if (item) {
        toast.info(`${item.name} eliminado del carrito`)
      }
      return prev.filter((i) => i.id !== id)
    })
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
    toast.info('Carrito vaciado')
  }, [])

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const getWhatsAppLink = useCallback(() => {
    const itemsList = items
      .map((item) => `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString('es-AR')}`)
      .join('%0A')
    
    const message = `Hola! Queria comprar:%0A%0A${itemsList}%0A%0ATotal: $${totalPrice.toLocaleString('es-AR')}`
    
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }, [items, totalPrice])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        getWhatsAppLink,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
