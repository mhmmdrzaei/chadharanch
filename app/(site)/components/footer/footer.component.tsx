
import {Settings} from '@/sanity/types/Settings'
import React from 'react';
import { v4 as uuidv4 } from 'uuid';



type HeaderProps = {
    set: Settings[];

};


export default function Footer({ set }: HeaderProps) {

    return (
        <>
             {set.map((setting) => ( 
                <React.Fragment key={uuidv4()}>
                <footer>
                    <p> {setting.footerText}</p>
                </footer>

                
                </React.Fragment>
          ))}
        </>
    );
}