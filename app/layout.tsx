import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Space_Mono, Anybody } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
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
  title: {
    default: 'Cosas de Iri | Alfombras de Diseno Y2K Argentina',
    template: '%s | Cosas de Iri',
  },
  description:
    'Ponele onda a tus espacios con alfombras de diseno unicas. Decoracion Y2K, alfombras personalizadas hechas a mano en Argentina. Estilos retro y contemporaneos.',
  keywords: [
    'alfombras de diseno',
    'decoracion Y2K',
    'alfombras personalizadas Argentina',
    'alfombras hechas a mano',
    'decoracion retro',
    'Cosas de Iri',
    'alfombras creativas',
    'home decor Argentina',
  ],
  authors: [{ name: 'Cosas de Iri' }],
  creator: 'Cosas de Iri',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://cosasdeiri.com',
    siteName: 'Cosas de Iri',
    title: 'Cosas de Iri | Alfombras de Diseno Y2K',
    description:
      'Ponele onda a tus espacios con alfombras de diseno unicas y personalizadas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosas de Iri - Alfombras de Diseno Y2K',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosas de Iri | Alfombras de Diseno Y2K',
    description: 'Ponele onda a tus espacios con alfombras de diseno unicas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
  return (
    <html lang="es" suppressHydrationWarning>
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
