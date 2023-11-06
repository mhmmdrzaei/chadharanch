
import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './sanity/schemas'
import { myStructure } from "./sanity/deskstructure";
import {visionTool} from '@sanity/vision';
import {media} from 'sanity-plugin-media'



const config =  defineConfig({
      projectId: 'k6c4sqei',
      dataset: 'production',
      title: 'Chadha Ranch',
      useCdn: false,
      apiVersion: '2023-11-06',
      basePath:'/admin',
      plugins: [deskTool({structure: myStructure,}),media(),visionTool],
      schema: {
        types: schemaTypes,
      },
})

export default config;