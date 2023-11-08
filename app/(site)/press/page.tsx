import { getsettings, getCat, getPress } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import { PortableText } from "@portabletext/react";
import PressContent from '../components/pressContent/pressContent.component';


export default async function Press() {
  const settings = await getsettings()
  const categories = await getCat()
  const press = await getPress();
    return (
      
     
      <main>
        <section className="pageSide">
          <Header set={settings} cat={categories}/>
        </section>
        <PressContent press={press} />
        
      </main>
    )
  }
  