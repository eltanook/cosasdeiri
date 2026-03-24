import { client } from '../sanity/lib/client'
import { urlForImage } from '../sanity/lib/image'

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

export async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    price,
    description,
    category,
    material,
    sizes,
    images,
    featured,
    inStock,
    tags
  }`
  const sanityProducts = await client.fetch(query)

  return sanityProducts.map((p: any) => ({
    id: p._id.replace('product-', ''),
    name: p.name,
    slug: p.slug,
    price: p.price,
    description: p.description,
    category: p.category,
    material: p.material,
    sizes: p.sizes || [],
    images: p.images ? p.images.map((img: any) => urlForImage(img)?.url() || '') : [],
    featured: p.featured,
    inStock: p.inStock,
    tags: p.tags || []
  }))
}

export async function getUserGallery() {
  const query = `*[_type == "galleryImage"] {
    _id,
    name,
    product,
    image
  }`
  const gallery = await client.fetch(query)

  return gallery.map((item: any) => ({
    id: item._id.replace('gallery-', ''),
    name: item.name,
    product: item.product,
    image: urlForImage(item.image)?.url() || ''
  }))
}
