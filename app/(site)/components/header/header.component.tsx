
import {Settings} from '@/sanity/types/Settings'
import {ProjectCategory} from '@/sanity/types/ProjectCategory'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../headerInteractive/headerInteractive.component';

export const dynamic = 'force-dynamic'

type HeaderProps = {
    set: Settings[];
    cat: ProjectCategory[]
   
};


export default function Header({ set, cat }: HeaderProps) {

    return (
        <>
             {set.map((setting) => ( 
                <section className='headingContainer' key={uuidv4()}>
                    <Link href={`/`} className='logoLink'>
                    <img src={setting.logo} alt='Chadha Ranch Logo' />
                    </Link>

                    <Link href={`/`} className='webTitle'>
                    <h1>{setting.title}</h1>
                    </Link>
                    <Menu setting={setting} cat={cat}/>


                        

                </section>
          ))}
        </>
    );
}