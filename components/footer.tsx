'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, MapPin, Star, ArrowUpRight } from 'lucide-react'
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const footerLinks = {
  shop: [
    { label: 'Todas las Alfombras', href: '/tienda' },
    { label: 'Abstractas', href: '/tienda?category=abstracto' },
    { label: 'Geométricas', href: '/tienda?category=geometrico' },
    { label: 'Pokémon', href: '/tienda?category=pokemon' },
    { label: 'Personalizadas', href: '/personalizada' },
  ],
  info: [
    { label: 'Sobre Nosotros', href: '/nosotros' },
    { label: 'Galería de Clientes', href: '/ustedes' },
    { label: 'Cuidados', href: '/cuidados' },
    { label: 'Contacto', href: '/contacto' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/cosasdeiri/', icon: FaInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/5491176329579', icon: FaWhatsapp },
]

export function Footer() {
  return (
    <footer className="brutal-border border-x-0 border-b-0 bg-background mt-auto">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="brutal-border brutal-shadow inline-block bg-primary px-4 py-2"
            >
              <span className="font-display text-2xl font-black text-primary-foreground">
                COSAS DE IRI
              </span>
            </motion.div>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground max-w-xs">
              Ponele onda a tus espacios con alfombras únicas hechas a mano en Argentina.
            </p>
            <div className="flex items-center gap-1 font-mono text-xs">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="ml-2 text-muted-foreground">+500 clientes felices</span>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="brutal-border inline-block bg-secondary px-3 py-1 font-mono text-sm font-bold uppercase text-secondary-foreground mb-4">
              Tienda
            </h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="brutal-border inline-block bg-accent px-3 py-1 font-mono text-sm font-bold uppercase text-accent-foreground mb-4">
              Info
            </h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="brutal-border inline-block bg-primary px-3 py-1 font-mono text-sm font-bold uppercase text-primary-foreground mb-4">
              Seguinos
            </h3>
            <div className="flex gap-2 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="brutal-border brutal-shadow-hover bg-muted p-3"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 font-mono text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Buenos Aires, Argentina
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                irinamena98@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="brutal-border border-x-0 border-b-0 bg-foreground py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-mono text-xs text-background">
              © {new Date().getFullYear()} Cosas de Iri. Hecho con mucho amor en Argentina.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="https://zevetix.site"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-background/70 hover:text-background transition-colors"
              >
                Desarrollado y diseñado por <span className="underline">Zevetix</span>
              </a>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacidad"
                  className="font-mono text-xs text-background/70 hover:text-background transition-colors"
                >
                  Privacidad
                </Link>
                <Link
                  href="/terminos"
                  className="font-mono text-xs text-background/70 hover:text-background transition-colors"
                >
                  Términos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
