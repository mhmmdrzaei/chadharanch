import { getsettings, getCat, getProjects } from '@/sanity/sanity.utils'
import Image from 'next/image'
import Header from './components/header/header.component'

export default async function Home() {
  const settings = await getsettings()
  const categories = await getCat()
  const projects = await getProjects()
  return (
   
    <main>
      <section className="pageSide">
        <Header set={settings} />

        

      </section>
      <section className="pageMain">

      </section>
    
    </main>
  )
}
