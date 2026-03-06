export interface Product {
  id: string
  name: string
  slug: string
  price: number
  description: string
  category: string
  material: string
  sizes: { label: string; dimensions: string; price: number }[]
  images: string[]
  featured: boolean
  inStock: boolean
  tags: string[]
}

export const categories = [
  { id: 'all', name: 'Todas', icon: 'Grid' },
  { id: 'abstracto', name: 'Abstracto', icon: 'Sparkles' },
  { id: 'geometrico', name: 'Geométrico', icon: 'Triangle' },
  { id: 'personajes', name: 'Personajes', icon: 'Heart' },
  { id: 'pokemon', name: 'Pokémon', icon: 'Star' },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Ola Cósmica',
    slug: 'ola-cosmica',
    price: 45000,
    description: 'Una explosión de colores que trae el cosmos a tu piso. Perfecta para espacios que necesitan esa energía extra.',
    category: 'abstracto',
    material: 'Lana sintética premium',
    sizes: [
      { label: 'S', dimensions: '60x90cm', price: 45000 },
      { label: 'M', dimensions: '90x120cm', price: 65000 },
      { label: 'L', dimensions: '120x180cm', price: 95000 },
    ],
    images: ['/products/ola-cosmica-1.jpg', '/products/ola-cosmica-2.jpg'],
    featured: true,
    inStock: true,
    tags: ['colorido', 'abstracto', 'vibrante'],
  },
  {
    id: '2',
    name: 'Pikachu Pixel',
    slug: 'pikachu-pixel',
    price: 52000,
    description: 'El Pokémon más querido en formato pixel art. Cada pixel cuenta una historia de nostalgia y diversión.',
    category: 'pokemon',
    material: 'Algodón reciclado',
    sizes: [
      { label: 'S', dimensions: '60x90cm', price: 52000 },
      { label: 'M', dimensions: '90x120cm', price: 72000 },
      { label: 'L', dimensions: '120x180cm', price: 105000 },
    ],
    images: ['/products/pixel-dreams-1.jpg', '/products/pixel-dreams-2.jpg'],
    featured: true,
    inStock: true,
    tags: ['pokemon', 'pixel', 'gamer'],
  },
  {
    id: '3',
    name: 'Zigzag Ácido',
    slug: 'zigzag-acid',
    price: 48000,
    description: 'Patrones geométricos que desafían la gravedad. El ácido visual que tu espacio necesita.',
    category: 'geometrico',
    material: 'Lana merino',
    sizes: [
      { label: 'S', dimensions: '60x90cm', price: 48000 },
      { label: 'M', dimensions: '90x120cm', price: 68000 },
      { label: 'L', dimensions: '120x180cm', price: 98000 },
    ],
    images: ['/products/zigzag-acid-1.jpg', '/products/zigzag-acid-2.jpg'],
    featured: false,
    inStock: true,
    tags: ['geométrico', 'bold', 'moderno'],
  },
  {
    id: '4',
    name: 'Carita Feliz',
    slug: 'carita-feliz',
    price: 38000,
    description: 'La clásica carita feliz pero con flow. Para los que quieren empezar el día con buena onda.',
    category: 'personajes',
    material: 'Poliéster soft touch',
    sizes: [
      { label: 'S', dimensions: '60x60cm', price: 38000 },
      { label: 'M', dimensions: '90x90cm', price: 55000 },
      { label: 'L', dimensions: '120x120cm', price: 78000 },
    ],
    images: ['/products/carita-feliz-1.jpg', '/products/carita-feliz-2.jpg'],
    featured: true,
    inStock: true,
    tags: ['emoji', 'divertido', 'amarillo'],
  },
  {
    id: '5',
    name: 'Nube Fluffy',
    slug: 'nube-fluffy',
    price: 42000,
    description: 'Suave como una nube, literalmente. Ideal para esos rincones donde solo querés relajar.',
    category: 'abstracto',
    material: 'Pelo largo sintético',
    sizes: [
      { label: 'S', dimensions: '70x100cm', price: 42000 },
      { label: 'M', dimensions: '100x140cm', price: 62000 },
      { label: 'L', dimensions: '140x200cm', price: 92000 },
    ],
    images: ['/products/nube-fluffy-1.jpg', '/products/nube-fluffy-2.jpg'],
    featured: false,
    inStock: true,
    tags: ['suave', 'nube', 'blanco'],
  },
  {
    id: '6',
    name: 'Pokéball Classic',
    slug: 'pokeball-classic',
    price: 55000,
    description: '¡Atrápalos ya! La icónica Pokéball para los verdaderos entrenadores Pokémon.',
    category: 'pokemon',
    material: 'Lana sintética premium',
    sizes: [
      { label: 'S', dimensions: '60x60cm', price: 55000 },
      { label: 'M', dimensions: '90x90cm', price: 75000 },
      { label: 'L', dimensions: '120x120cm', price: 110000 },
    ],
    images: ['/products/matrix-verde-1.jpg', '/products/matrix-verde-2.jpg'],
    featured: false,
    inStock: true,
    tags: ['pokemon', 'pokeball', 'gamer'],
  },
  {
    id: '7',
    name: 'Corazón Chunky',
    slug: 'corazon-chunky',
    price: 35000,
    description: 'Amor en forma de alfombra. Gruesa, suave y llena de buenas vibras.',
    category: 'personajes',
    material: 'Algodón orgánico',
    sizes: [
      { label: 'S', dimensions: '50x60cm', price: 35000 },
      { label: 'M', dimensions: '70x80cm', price: 50000 },
      { label: 'L', dimensions: '90x100cm', price: 70000 },
    ],
    images: ['/products/corazon-chunky-1.jpg', '/products/corazon-chunky-2.jpg'],
    featured: true,
    inStock: true,
    tags: ['corazón', 'amor', 'rojo'],
  },
  {
    id: '8',
    name: 'Cuadrados Locos',
    slug: 'cuadrados-locos',
    price: 47000,
    description: 'Cuadrados que se rebelan contra las líneas rectas. Geometría con actitud.',
    category: 'geometrico',
    material: 'Mezcla lana/sintético',
    sizes: [
      { label: 'S', dimensions: '60x90cm', price: 47000 },
      { label: 'M', dimensions: '90x120cm', price: 67000 },
      { label: 'L', dimensions: '120x180cm', price: 97000 },
    ],
    images: ['/products/cuadrados-locos-1.jpg', '/products/cuadrados-locos-2.jpg'],
    featured: false,
    inStock: true,
    tags: ['cuadrados', 'colorido', 'bold'],
  },
  {
    id: '9',
    name: 'Arcoíris Flow',
    slug: 'arcoiris-flow',
    price: 58000,
    description: 'Todos los colores del arcoíris fluyendo en armonía. Pride energy todo el año.',
    category: 'abstracto',
    material: 'Lana merino premium',
    sizes: [
      { label: 'S', dimensions: '60x90cm', price: 58000 },
      { label: 'M', dimensions: '90x120cm', price: 78000 },
      { label: 'L', dimensions: '120x180cm', price: 115000 },
    ],
    images: ['/products/arcoiris-flow-1.jpg', '/products/arcoiris-flow-2.jpg'],
    featured: true,
    inStock: true,
    tags: ['arcoíris', 'pride', 'colorido'],
  },
  {
    id: '10',
    name: 'Eevee Fluffy',
    slug: 'eevee-fluffy',
    price: 44000,
    description: 'El adorable Eevee para los fans de las evoluciones. Nostalgia con estilo.',
    category: 'pokemon',
    material: 'Poliéster reciclado',
    sizes: [
      { label: 'S', dimensions: '70x70cm', price: 44000 },
      { label: 'M', dimensions: '100x100cm', price: 64000 },
      { label: 'L', dimensions: '130x130cm', price: 90000 },
    ],
    images: ['/products/estrella-retro-1.jpg', '/products/estrella-retro-2.jpg'],
    featured: false,
    inStock: true,
    tags: ['pokemon', 'eevee', 'cute'],
  },
]

export const testimonials = [
  {
    id: '1',
    name: 'Lucía M.',
    location: 'Buenos Aires',
    rating: 5,
    text: '¡Me compré la Carita Feliz y literal me alegra cada vez que la veo. La calidad es increíble!',
    image: '/testimonials/lucia.jpg',
  },
  {
    id: '2',
    name: 'Tomás R.',
    location: 'Córdoba',
    rating: 5,
    text: 'Pedí una alfombra personalizada con el logo de mi banda y quedó PERFECTA. Iri es una genia.',
    image: '/testimonials/tomas.jpg',
  },
  {
    id: '3',
    name: 'Valentina S.',
    location: 'Rosario',
    rating: 5,
    text: 'La Pikachu Pixel es todo lo que soñé. Mi setup gamer ahora está completo.',
    image: '/testimonials/valentina.jpg',
  },
  {
    id: '4',
    name: 'Martín G.',
    location: 'Mendoza',
    rating: 5,
    text: '¡Compré para regalar y fue un éxito total! El empaque también re cuidado.',
    image: '/testimonials/martin.jpg',
  },
  {
    id: '5',
    name: 'Camila F.',
    location: 'La Plata',
    rating: 5,
    text: 'Ya tengo 3 alfombras de Cosas de Iri. ¡Son adictivas jaja! La atención es 10/10.',
    image: '/testimonials/camila.jpg',
  },
]

export const userGallery = [
  { id: '1', image: '/gallery/user-1.jpg', name: '@luciadesign', product: 'Ola Cósmica' },
  { id: '2', image: '/gallery/user-2.jpg', name: '@tomasrocks', product: 'Personalizada' },
  { id: '3', image: '/gallery/user-3.jpg', name: '@valen.gamer', product: 'Pikachu Pixel' },
  { id: '4', image: '/gallery/user-4.jpg', name: '@martinspace', product: 'Pokéball Classic' },
  { id: '5', image: '/gallery/user-5.jpg', name: '@cami.deco', product: 'Carita Feliz' },
  { id: '6', image: '/gallery/user-6.jpg', name: '@sofi.home', product: 'Nube Fluffy' },
  { id: '7', image: '/gallery/user-7.jpg', name: '@juansetup', product: 'Eevee Fluffy' },
  { id: '8', image: '/gallery/user-8.jpg', name: '@ana.creative', product: 'Arcoíris Flow' },
]
