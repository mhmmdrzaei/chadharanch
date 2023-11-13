import { getsettings, getInformation, getCat } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import InfoContent from '../components/infoContent/infoContent.component';

import type { Metadata, ResolvingMetadata } from 'next'

 
export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const settings = await getsettings()
  return {
    title: `${settings[0].seoTitle} | Information` ,
    description: settings[0].seoDescription,
    openGraph: {
      images: [`${settings[0].seoImageUrl}`],
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
  