import { getsettings, getInformation, getCat } from '@/sanity/sanity.utils'
import Header from '../components/header/header.component';
import InfoContent from '../components/infoContent/infoContent.component';
import Footer from '../components/footer/footer.component';
export default async function Information() {
  const settings = await getsettings()
  const categories = await getCat()
  const info = await getInformation();

    return (
      
     
      <main>
        <section className="pageSide">
          <Header set={settings} cat={categories}/>
        </section>
        <InfoContent info={info} />
        <Footer set={settings} />

        
      </main>
    )
  }
  