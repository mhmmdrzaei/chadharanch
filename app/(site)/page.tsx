import { getsettings, getCat, getProjects } from '@/sanity/sanity.utils'
import Header from './components/header/header.component'
import ProjectListing from './components/projectListing/projectListing.component'
import Footer from './components/footer/footer.component'
import HeroImage from './components/heroImg/heroImg.component'

export default async function Home() {
  const settings = await getsettings()
  const categories = await getCat()
  const projects = await getProjects()
  return (
   
    <main>
      <section className="pageSide">
        <Header set={settings} cat={categories}/>

        

      </section>
      <section className="pageMain">
      <HeroImage settings={settings}/>

        <ProjectListing projects={projects} categories={categories}/>

      </section>
      <Footer set={settings} />
    
    </main>
  )
}
