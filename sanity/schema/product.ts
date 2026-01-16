import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'product',
    title: 'Producto',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre del Producto',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Precio (S/.)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'oldPrice',
            title: 'Precio Anterior (Opcional)',
            type: 'number',
        }),
        defineField({
            name: 'image',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'string',
            options: {
                list: [
                    { title: 'Camisetas', value: 'Camisetas' },
                    { title: 'Accesorios', value: 'Accesorios' },
                    { title: 'Retro', value: 'Retro' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isNew',
            title: '¿Es Nuevo?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
        }),
    ],
})
