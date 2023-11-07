
export default {
    name: 'press',
    title: 'Press',
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
        name: 'presslistings',
        title: 'Press Listings',
        type: 'array', 
         of: [{type: 'block'}]
      },
      
    ]
  }