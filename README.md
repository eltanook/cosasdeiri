# Cosas de Iri 🎨

**Alfombras de diseño Y2K hechas a mano en Argentina.**  
Tienda online completa con catálogo, carrito, solicitud personalizada y más.

---

## 🛠 Stack Tecnológico

| Tech | Uso |
|------|-----|
| **Next.js 16** | Framework React (App Router) |
| **TypeScript** | Tipado estático |
| **Tailwind CSS v4** | Estilos utilitarios |
| **Framer Motion** | Animaciones |
| **Radix UI** | Componentes accesibles |
| **next-themes** | Dark/Light mode |
| **Vercel Analytics** | Analítica |
| **pnpm** | Gestión de paquetes |

---

## 🎨 Identidad de Marca

**Estilo**: Y2K Neubrutalism — bordes duros, sombras sólidas, colores vibrantes, tipografías display.

**Colores primarios:**
- Cyan: `#3fbfe2`
- Amarillo: `#edda07`
- Lima: `#c6e4a8`

**Tipografías:**
- `Space Grotesk` — cuerpo de texto
- `Space Mono` — monoespaciado / badges
- `Anybody` — display / headlines

**Modo claro:** fondo rosa clarito (`#fde8f0`)  
**Modo oscuro:** fondo violeta oscuro azulado (`#1a1035`)

---

## 📁 Estructura del Proyecto

```
cosas_de_iri/
├── app/                      # App Router de Next.js
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Layout raíz (fonts, ThemeProvider, Analytics)
│   ├── globals.css           # Variables CSS + Tailwind v4
│   ├── tienda/               # Catálogo + detalle de producto
│   ├── contacto/             # Formulario de contacto
│   ├── nosotros/             # Historia de la marca
│   ├── personalizada/        # Solicitud de alfombra personalizada
│   ├── ustedes/              # Galería de clientes
│   ├── envios/               # Info de envíos
│   ├── devoluciones/         # Política de devoluciones
│   ├── cuidados/             # Cuidado del producto
│   └── faq/                  # Preguntas frecuentes
│
├── components/
│   ├── home/                 # HeroSection, FeaturedProducts, About, Testimonials
│   ├── shop/                 # ProductCard, ProductDetail, FilterSidebar
│   ├── contacto/             # ContactContent
│   ├── nosotros/             # AboutStory
│   ├── personalizada/        # CustomRequestForm
│   ├── ustedes/              # UserGallery
│   ├── info/                 # Envios, Devoluciones, Cuidados, FAQ
│   ├── ui/                   # Componentes Radix UI (shadcn)
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── cart-drawer.tsx
│   ├── theme-toggle.tsx
│   └── whatsapp-float.tsx
│
├── lib/
│   ├── products.ts           # Datos de productos y testimonios
│   ├── cart-store.tsx        # Estado global del carrito (React Context)
│   └── utils.ts              # Helpers (cn, etc.)
│
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
│
├── public/
│   ├── products/             # Imágenes de productos
│   └── gallery/              # Fotos de clientes
│
├── vercel.json               # Config de deploy en Vercel
└── next.config.mjs
```

---

## 🚀 Instalación Local

### Prerrequisitos
- Node.js ≥ 18
- pnpm (`npm install -g pnpm`)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/eltanook/cosasdeiri.git
cd cosasdeiri

# 2. Instalar dependencias
pnpm install

# 3. Correr en modo desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ☁️ Deploy en Vercel

### Opción A — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Opción B — Dashboard

1. Ir a [vercel.com](https://vercel.com) → **Add New Project**
2. Importar el repo `https://github.com/eltanook/cosasdeiri`
3. Framework: **Next.js** (detectado automáticamente)
4. Install Command: `pnpm install`
5. Click **Deploy**

> No se requieren variables de entorno. El proyecto usa datos estáticos en `lib/products.ts`.

---

## 📄 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con Hero, Productos Destacados, Sobre Iri, Testimonios |
| `/tienda` | Catálogo completo con filtros |
| `/tienda/[slug]` | Detalle de producto |
| `/contacto` | Formulario de contacto |
| `/nosotros` | Historia de la marca |
| `/personalizada` | Solicitar alfombra personalizada |
| `/ustedes` | Galería de fotos de clientes |
| `/envios` | Información de envíos |
| `/devoluciones` | Política de devoluciones |
| `/cuidados` | Cuidado del producto |
| `/faq` | Preguntas frecuentes |

---

## 🛒 Carrito

El carrito usa **React Context** (`lib/cart-store.tsx`) — estado en memoria del lado del cliente. No persiste entre sesiones (sin backend ni localStorage por diseño actual).

---

## 📱 Responsive

Diseño mobile-first. Breakpoints de Tailwind:
- **sm** (640px+): grid de 2 columnas
- **md** (768px+): navbar expandido
- **lg** (1024px+): grid de 3–4 columnas

---

## 🌙 Dark / Light Mode

Manejado con `next-themes`. El usuario puede cambiar con el toggle en la navbar o respeta la preferencia del sistema.

- **Light**: fondo rosa clarito (`#fde8f0`), hero damero cyan + rosa
- **Dark**: fondo violeta oscuro (`#1a1035`), hero damero violeta + lavanda

---

*Hecho con 💜 por [Zevetix](https://zevetix.com) para Cosas de Iri*
