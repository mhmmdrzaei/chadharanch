import {Settings, HeroVisual} from '@/sanity/types/Settings'
import React from 'react';
import { v4 as uuidv4 } from 'uuid';


type HeaderProps = {
    set: Settings[];
};


export default function Header({ set }: HeaderProps) {

    return (
        <>
             {set.map((setting) => ( 
                <React.Fragment key={uuidv4()}>
                    <img src={setting.logo} alt='Chadha Ranch Logo' />

                        

                </React.Fragment>
          ))}
        </>
    );
}