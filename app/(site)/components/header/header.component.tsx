
import {Settings} from '@/sanity/types/Settings'
import {ProjectCategory} from '@/sanity/types/ProjectCategory'
import Link from 'next/link';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../headerInteractive/headerInteractive.component';


type HeaderProps = {
    set: Settings[];
    cat: ProjectCategory[]
   
};


export default function Header({ set, cat }: HeaderProps) {

    return (
        <>
             {set.map((setting) => ( 
                <React.Fragment key={uuidv4()}>
                    <img src={setting.logo} alt='Chadha Ranch Logo' />

                    <Link href={`/`}>
                    <h1>{setting.title}</h1>
                    </Link>
                    <Menu setting={setting} cat={cat}/>


                        

                </React.Fragment>
          ))}
        </>
    );
}