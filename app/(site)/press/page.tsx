import { getsettings, getCat, getPress } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import PressContent from '../components/pressContent/pressContent.component';
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const settings = await getsettings()
  return {
    title: `${settings[0].seoTitle} | Press` ,
    description: settings[0].seoDescription,
    openGraph: {
      images: [`${settings[0].seoImageUrl}`],
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
  