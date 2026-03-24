import { defineField, defineType } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Imagen de Galería (Hall of Fame)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Usuario (ej. @user)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'product',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
