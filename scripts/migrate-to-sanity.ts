import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { products, userGallery } from '../lib/products'

// Configuración del cliente para el script de migración
// Necesita el token con permisos de escritura.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error("Faltan las variables de entorno NEXT_PUBLIC_SANITY_PROJECT_ID o SANITY_API_TOKEN")
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  token,
  apiVersion: '2024-03-24',
})

async function uploadImage(imagePath: string) {
  const fullPath = path.join(process.cwd(), 'public', imagePath)
  if (!fs.existsSync(fullPath)) {
    console.warn(`No se encontró la imagen: ${fullPath}`)
    return null
  }
  
  const buffer = fs.readFileSync(fullPath)
  const filename = path.basename(imagePath)
  console.log(`Subiendo imagen ${filename}...`)
  
  const asset = await client.assets.upload('image', buffer, {
    filename,
  })
  return asset._id
}

async function migrateProducts() {
  console.log('--- Iniciando migración de Productos ---')
  for (const product of products) {
    console.log(`Migrando producto: ${product.name}`)
    const imageRefs = []
    
    for (const imgPath of product.images) {
      const assetId = await uploadImage(imgPath)
      if (assetId) {
        imageRefs.push({
          _key: crypto.randomUUID(),
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId,
          },
        })
      }
    }
    
    const doc = {
      _type: 'product',
      _id: `product-${product.id}`,
      name: product.name,
      slug: { _type: 'slug', current: product.slug },
      price: product.price,
      description: product.description,
      category: product.category,
      material: product.material,
      sizes: product.sizes.map(s => ({
        _key: crypto.randomUUID(),
        label: s.label,
        dimensions: s.dimensions,
        price: s.price
      })),
      images: imageRefs,
      featured: product.featured,
      inStock: product.inStock,
      tags: product.tags,
    }
    
    await client.createOrReplace(doc)
    console.log(`✓ Producto ${product.name} migrado.`)
  }
}

async function migrateGallery() {
  console.log('\n--- Iniciando migración de Hall of Fame ---')
  for (const item of userGallery) {
    console.log(`Migrando imagen de: ${item.name}`)
    const assetId = await uploadImage(item.image)
    
    if (assetId) {
      const doc = {
        _type: 'galleryImage',
        _id: `gallery-${item.id}`,
        name: item.name,
        product: item.product,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetId,
          },
        },
      }
      await client.createOrReplace(doc)
      console.log(`✓ Imagen de ${item.name} migrada.`)
    }
  }
}

async function main() {
  try {
    await migrateProducts()
    await migrateGallery()
    console.log('\n¡Migración Completada Exitosamente!')
  } catch (error) {
    console.error('Error durante la migración:', error)
  }
}

main()
