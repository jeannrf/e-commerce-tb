import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Portada (Hero)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen Destacada (Camiseta)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Texto del Botón',
      type: 'string',
      initialValue: 'Ver Colección',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Enlace del Botón',
      type: 'string',
      initialValue: '/tienda',
    }),
    defineField({
      name: 'badgeText',
      title: 'Texto del Badge (Etiqueta superior)',
      type: 'string',
      description: 'Ej: Nueva Colección 2026',
    }),
  ],
})
