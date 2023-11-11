import { Settings } from "@/sanity/types/Settings";

type HeaderProps = {
    settings: Settings[];
   
};


export default function HeroImage({ settings }: HeaderProps) {

    return (
        <>
            {settings.map((siteSetting) => (
            <>
            {siteSetting.herovisual.length > 0 && (
              <section key={siteSetting._id}>
              {siteSetting.herovisual.map((hero) => (
                <div key={hero._key} className='heroContainer' >
                  {hero._type === 'hero_image' && (
                    <img src={hero.heroImgUrl} alt={`Hero Image ${hero._key}`} />
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