import { type SchemaTypeDefinition } from 'sanity'

import { product } from './schemas/product'
import { galleryImage } from './schemas/galleryImage'
import { category } from './schemas/category'
import { testimonial } from './schemas/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, galleryImage, category, testimonial],
}
