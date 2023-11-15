import { Settings } from "@/sanity/types/Settings";
import Image from 'next/image';
type HeaderProps = {
    settings: Settings[];
   
};

export const dynamic = 'force-dynamic'


export default function HeroImage({ settings }: HeaderProps) {

    return (
        <>
            {settings.map((siteSetting) => (
            <>
            {siteSetting.herovisual.length > 0 && (
              <section key={siteSetting._id} className="heroSection">
              {siteSetting.herovisual.map((hero) => (
                <div key={hero._key} className='heroContainer' >
                  {hero._type === 'hero_image' && (
                    <Image src={hero.heroImgUrl} alt={`Hero Image ${hero._key}`} width={800} height={800} loading="eager" />
                  )}
                  {hero._type === 'hero_video' && (
                    <video controls src={hero.heroImgUrl} />
                  )}
                </div>
              ))}
            </section>
            )}
            
            
            </>
    
          ))}
        
        
        </>

    )

}