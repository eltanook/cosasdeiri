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

export interface Category {
  id: string
  name: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  image: string
}

export async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    price,
    description,
    "category": coalesce(category->slug.current, category),
    material,
    sizes,
    images,
    featured,
    inStock,
    tags
  }`
  const sanityProducts = await client.fetch(query, {}, { next: { revalidate: 0 } })

  return sanityProducts.map((p: any) => ({
    id: p._id,
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

export async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "category"] | order(name asc) {
    "id": slug.current,
    name,
    icon
  }`
  const sanityCategories = await client.fetch(query, {}, { next: { revalidate: 0 } })
  
  const defaultCategories = [
    { id: 'all', name: 'Todas', icon: 'Grid' },
  ]

  // If no categories in Sanity, return defaults for backward compatibility
  if (sanityCategories.length === 0) {
    return [
      ...defaultCategories,
      { id: 'abstracto', name: 'Abstracto', icon: 'Sparkles' },
      { id: 'geometrico', name: 'Geométrico', icon: 'Triangle' },
      { id: 'personajes', name: 'Personajes', icon: 'Heart' },
      { id: 'pokemon', name: 'Pokémon', icon: 'Star' },
    ]
  }

  return [...defaultCategories, ...sanityCategories]
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    location,
    rating,
    text,
    image
  }`
  const sanityTestimonials = await client.fetch(query, {}, { next: { revalidate: 0 } })

  if (sanityTestimonials.length === 0) {
    return [
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
    ]
  }

  return sanityTestimonials.map((t: any) => ({
    id: t._id,
    name: t.name,
    location: t.location,
    rating: t.rating,
    text: t.text,
    image: t.image ? urlForImage(t.image)?.url() || '' : ''
  }))
}

export async function getUserGallery() {
  const query = `*[_type == "galleryImage"] {
    _id,
    name,
    product,
    image
  }`
  const gallery = await client.fetch(query, {}, { next: { revalidate: 0 } })

  return gallery.map((item: any) => ({
    id: item._id,
    name: item.name,
    product: item.product,
    image: urlForImage(item.image)?.url() || ''
  }))
}
