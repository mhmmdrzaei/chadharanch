import { getsettings } from '@/sanity/sanity.utils'
import Image from 'next/image'

export default async function Home() {
  const settings = await getsettings()
  return (
   
    <main>
      <section className="pageSide">
        

      </section>
      <section className="pageMain">

      </section>
    
    </main>
  )
}
