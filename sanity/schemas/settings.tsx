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
        title: 'Hero Image / Video',
        name: 'herovisual',
        description: 'for the love of god some file that is a normal size, nothing bigger than 5mb for video',
        type: 'array',
        of:[
            {
              title: 'Hero Image',
              name: 'hero_image',
              type: 'image',
              options: {
                hotspot: true // <-- Defaults to false
              },
              fields: [
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                }
              ]
            },
            {
              title: 'Hero Video',
              name: 'hero_video',
              type: 'file',
  
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