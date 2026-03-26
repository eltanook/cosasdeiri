import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Space_Mono, Anybody } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const anybody = Anybody({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cosasdeiri.com'),
  title: {
    default: 'Cosas de Iri | Alfombras de Diseño hechas a mano',
    template: '%s | Cosas de Iri',
  },
  description:
    'Viste tus pisos con alfombras de diseño únicas y personalizadas. Alfombras hechas a mano con técnica de tufting en Argentina. Estilos retro, Y2K, abstractos y personalizados.',
  keywords: [
    'alfombras de diseño',
    'tufting argentina',
    'decoracion original',
    'alfombras personalizadas',
    'alfombras hechas a mano',
    'decoracion retro',
    'Cosas de Iri',
    'alfombras creativas',
    'home decor Argentina',
    'handmade rugs argentina',
  ],
  authors: [{ name: 'Cosas de Iri' }],
  creator: 'Cosas de Iri',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://cosasdeiri.com',
    siteName: 'Cosas de Iri',
    title: 'Cosas de Iri | Alfombras de Diseño Unicas',
    description:
      'Transformá tus espacios con alfombras de diseño hechas a mano. Diseños exclusivos y personalizados con técnica de tufting.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosas de Iri - Alfombras de Diseño',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosas de Iri | Alfombras de Diseño',
    description: 'Alfombras de diseño únicas hechas a mano en Argentina.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Cosas de Iri',
      url: 'https://cosasdeiri.com',
      logo: 'https://cosasdeiri.com/favicon.png',
      description: 'Alfombras de diseño únicas hechas a mano en Argentina mediante técnica de tufting.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'AR',
      },
      sameAs: [
        'https://www.instagram.com/cosasdeiri',
        'https://www.tiktok.com/@cosasdeiri',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Cosas de Iri',
      url: 'https://cosasdeiri.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://cosasdeiri.com/tienda?search={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} ${anybody.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '3px solid var(--foreground)',
                borderRadius: '0',
                boxShadow: 'var(--brutal-shadow)',
              },
            }}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
