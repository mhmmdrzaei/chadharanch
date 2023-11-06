
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
        name: 'presslistings',
        title: 'Press Listings',
        type: 'array', 
         of: [{type: 'block'}]
      },
      
    ]
  }