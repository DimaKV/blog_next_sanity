export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        {
            name: 'meta_title',
            type: 'string',
            title: 'Meta title',
            validation: Rule => Rule.required().warning('Обязательно к заполнению'),
            group: 'seo'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required().warning('Обязательно к заполнению'),
            group: 'content'
        },
        {
            name: 'published_date',
            type: 'date',
            title: 'Published Date',
            validation: Rule => Rule.required().error('Обязательно к заполнению'),
            group: 'content'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            group: 'content',
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    options: {
                        isHighlighted: true // <-- make this field easily accessible
                    }
                },
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            group: 'content'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            group: 'content',
            of: [{type: 'block'}, {type: 'image'}]
        }
    ]
}