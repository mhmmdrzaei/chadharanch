import { getsettings, getInformation, getCat } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import { PortableText } from "@portabletext/react";
export default async function Information() {
  const settings = await getsettings()
  const categories = await getCat()
  const info = await getInformation();
    return (
      
     
      <main>
        <section className="pageSide">
          <Header set={settings} cat={categories}/>
        </section>
        {info.map((infopage) => ( 
        <section className="pageMain" key={infopage._id}>
            <h2>{infopage.title}</h2>
            <PortableText value={infopage.information}/>

        </section>
          ))}
        
      </main>
    )
  }
  