import { getsettings, getCat, getProjects } from '@/sanity/sanity.utils'
import Header from './components/header/header.component'
import ProjectListing from './components/projectListing/projectListing.component'

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
        <ProjectListing projects={projects} categories={categories}/>

      </section>
    
    </main>
  )
}
