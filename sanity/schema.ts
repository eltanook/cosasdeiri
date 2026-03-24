import { type SchemaTypeDefinition } from 'sanity'

import { product } from './schemas/product'
import { galleryImage } from './schemas/galleryImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, galleryImage],
}
