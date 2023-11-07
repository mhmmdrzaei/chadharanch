import { getsettings, getCat, getPress } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import { PortableText } from "@portabletext/react";
export default async function Press() {
  const settings = await getsettings()
  const categories = await getCat()
  const press = await getPress();
    return (
      
     
      <main>
        <section className="pageSide">
          <Header set={settings} cat={categories}/>
        </section>
        {press.map((pressPage) => ( 
        <section className="pageMain" key={pressPage._id}>
            <h2>{pressPage.title}</h2>
            <PortableText value={pressPage.Presslistings}/>

        </section>
          ))}
        
      </main>
    )
  }
  