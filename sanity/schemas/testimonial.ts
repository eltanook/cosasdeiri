import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Calificación',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
