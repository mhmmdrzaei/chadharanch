"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { PortableText } from "@portabletext/react";
import {Settings} from '@/sanity/types/Settings'
import {ProjectCategory} from '@/sanity/types/ProjectCategory'
import { PortableTextBlock } from 'sanity';

type HeaderProps = {
    setting: Settings;
    cat: ProjectCategory[]
};


export default function Menu({ setting, cat }: HeaderProps) {

    const [activeMenu, setActiveMenu] = useState(false);

    // New function to explicitly open the menu


const openMenu = () => {
    setActiveMenu(prevState => !prevState);
};
// New function to explicitly close the menu
const closeMenu = () => {
    setActiveMenu(false);
};

    return (
        <>
            <button className={`menuButton ${activeMenu ? 'menuButtonActive' : ''}`}  onClick={openMenu}>
                Menu
            </button>
            <ul className='categoryLinks'>
                {cat.map((category) => (
                    <li key={category._id}>
                    <Link href={`/#${category.slug}`}>
                        {category.name}
                    </Link>
                    </li>
                ))}
            </ul>
            <section className="menuLinks">
            <Link href={`/press`}>Press</Link>
            <Link href={`/information`}>Information</Link>
            <Link href={`mailto:${setting.email}`}>{setting.email}</Link>
            </section>
            <section className="latlong">
                {setting.latlong}
            </section>
        
        </>
        
    );
}
