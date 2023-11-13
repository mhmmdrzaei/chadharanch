import { getsettings, getCat, getPress } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import PressContent from '../components/pressContent/pressContent.component';
import type { Metadata } from 'next'

export async function generateMetadata(
): Promise<Metadata> {
  const settings = await getsettings()
  return {
    title: `${settings[0].seoTitle} | Press` ,
    description: settings[0].seoDescription,
    metadataBase: new URL('https://cdn.sanity.io'),

    openGraph: {
      title: `${settings[0].seoTitle}` ,
      description: settings[0].seoDescription,
      url: 'https://chadharanch.com',
      siteName: 'CHADHA RANCH',

      images: [
        {
          url: `${settings[0].seoImageUrl}`,
          width: 1200,
          height: 627,
        },
        
        
      ],
      locale: 'en_US',
    type: 'website',
    },
  }
}


export default async function Press() {
  const settings = await getsettings()
  const categories = await getCat()
  const press = await getPress();

    return (
      
     <>


      <main className='pressPage'>
        <section className="pageSide">
          <Header set={settings} cat={categories}/>
        </section>
        <PressContent press={press} />
      </main>
      </>
    )
  }
  