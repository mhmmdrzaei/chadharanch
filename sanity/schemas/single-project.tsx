import projectCategory from "./projectCategory";
export default {
    name: 'singleProject',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Name',
        type: 'string'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        // validation: Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          validation: (Rule: { required: () => any; }) => Rule.required(),
        }
      },
      {
        title: 'Sort Order',
        name: 'sort',
        type: 'number',
      },
      {
        title: 'Visibility',
        name: 'visible',
        type: 'boolean',
        // validation: Rule => Rule.required()
      },
      {
        title: 'Password (if Applicable)',
        name: 'password',
        type: 'string',
        description: 'The password page will appear only if this is filled out. if empty it will go to project as usual.'

      },
      {
        name: 'projectdescription',
        title: 'Project Description',
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
      {
        name:'projectDate',
        title: 'Project Date', 
        type: 'string'
      },
      {
        name:'projectLocation',
        title: 'Project Location', 
        type: 'string'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: {type: 'projectCategory'},
      },
      {
        name:'projectMedium',
        title: 'Project Medium',
        type: 'string', 
      },
      {
        name: 'mainimage',
        title: 'Main Image',
        type: 'image',
              options: {
                hotspot: true // <-- Defaults to false
              },
      },

      {
        title: 'Project Images',
        name: 'projectImages',
        type: 'array',
        of:[
            {
              title: 'Project Image',
              name: 'projectImage',
              type: 'image',
              options: {
                hotspot: true // <-- Defaults to false
              },
              fields: [
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Alt',
                }
              ]
            },
            {
              title: 'Project Video',
              name: 'project_video',
              type: 'file',
              fields: [
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Alt',
                  }
              ]
            }
        ]
      }

      
    ]
  }