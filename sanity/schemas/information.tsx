

export default {
    name: 'information',
    title: 'Information',
    type: 'document',
    fields: [
      {
        name:'pageTitle',
        title: 'Page Title',
        type: 'string',
        readOnly: true,
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        readOnly: true,
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
        }
      },
      {
        name: 'information',
        title: 'Information',
        type: 'array', 
         of: [{type: 'block',
         marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  type: 'boolean'
                }
              ]
            },
          ]
        },
        
        }]
      },

      
    ]
  }