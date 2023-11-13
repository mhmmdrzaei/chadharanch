import { getsettings, getInformation, getCat } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import InfoContent from '../components/infoContent/infoContent.component';

import type { Metadata } from 'next'
 
export async function generateMetadata(
): Promise<Metadata> {
  const settings = await getsettings()
  const url= settings[0].seoImageUrl.toString()

  return {
    title: `${settings[0].seoTitle} | Information` ,
    description: settings[0].seoDescription,
  
    // metadataBase: new URL('https://chadharanch.com'),

    openGraph: {
      title: `${settings[0].seoTitle}` ,
      description: settings[0].seoDescription,
      
      url: 'https://chadharanch.com',
      siteName: 'CHADHA RANCH',

      images: [
        {
          url: `${url}`,
          width: 1200,
          height: 627,
        },
        
        
      ],
      locale: 'en_US',
    type: 'website',
    },
  }
}

export default async function Information() {
  const settings = await getsettings()
  const categories = await getCat()
  const info = await getInformation();

    return (
      
     
      <main className='infoPage'>
        <section className="pageSide ">
          <Header set={settings} cat={categories}/>
        </section>
        <InfoContent info={info} />

        
      </main>
    )
  }
  