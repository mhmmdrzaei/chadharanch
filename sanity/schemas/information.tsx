

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
        name: 'information',
        title: 'Information',
        type: 'array', 
         of: [{type: 'block'}]
      },

      
    ]
  }