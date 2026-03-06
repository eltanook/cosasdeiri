'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '5491123456789' // Reemplazar con el numero real
const WHATSAPP_MESSAGE = '¡Hola! Quiero consultar sobre las alfombras de Cosas de Iri'

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 brutal-border brutal-shadow-hover bg-[#25D366] p-4 text-white"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </motion.a>
  )
}
