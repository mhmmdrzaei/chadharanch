import seo from './page-seo'

export default {
    name: 'siteSettings',
    title: 'Site Info',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string'
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string'
      },
      {
        name: 'latlong',
        title: 'Lat. Long.',
        type: 'string'
      },
      {
        title: 'Social Links',
        name: 'social',
        type: 'array',
        of:[
            {
                title: 'Social Links',
                name: 'social',
                type: 'object',
                fields: [{name: 'social_link',title: 'Social Link',type: 'url'},{name:'social_name', title:'Social Name',type:'string'}]
              }
        ]
      },
      {
        name: 'footerText',
        title: 'Footer Text',
        type: 'string'
      },
      {
        name: 'seo',
        title: 'SEO info',
        type: 'seo'
      }

      
    ]
  }