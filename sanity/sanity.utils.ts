// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Settings } from "./types/Settings";
import { Information } from "./types/Information";
import { Press } from "./types/Press";
import { Project } from "./types/Project"



export async function getsettings(): Promise<Settings[]> {
    return createClient(clientConfig).fetch(
      `*[_type == "siteSettings"]{
        _id,
       email,
       latlong,
       title,
       footerText, 
       "herovisual": herovisual.asset->url,
       "social": social[]{
          social_name,
          social_link,
          _key
       },
      "seoTitle": page_seo.title,
      "seoDescription": page_seo.description,
      "seoImageUrl": page_seo.seo_image.asset->url,
       
       
 }`,       {
  cache: 'no-store'
  
}
    )
  }

  export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "singleProject"]{
        _id,
        title,
        "slug": slug.current,
        visibility,
        projectdescription,
        projectDate,
        projectLocation,
        "categoryName": category->name, // Include the category name
        "categorySlug": category->slug.current, 
        projectMedium,
        "mainimage": mainimage[]{
          "url": asset->url,
        },
        "projectImages": projectImages[]{
          "url": asset->url,
          attribution
        }


        
        
    }`,
    {
      cache: 'no-store'
      
    }
    )
  }
  export async function getInformation( slug: string): Promise<Information>{
    return createClient(clientConfig).fetch(
      groq`*[_type == "information" && slug.current == $slug][0]{
        _id,
        title,
        pageTitle,
        information,
        
    }`,
    {slug,   
     cache: 'no-store'
        
        
      
    }
    )
  }
  export async function getPress( slug: string): Promise<Press>{
    return createClient(clientConfig).fetch(
      groq`*[_type == "press" && slug.current == $slug][0]{
        _id,
        title,
        pageTitle,
        presslistings,
        
    }`,
    {slug,   
     cache: 'no-store'
        
        
      
    }
    )
  }

