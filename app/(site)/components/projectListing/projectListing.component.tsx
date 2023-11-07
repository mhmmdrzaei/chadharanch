"use client"
import {Project} from '@/sanity/types/Project'
import {ProjectCategory} from '@/sanity/types/ProjectCategory'
import Link from 'next/link';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Menu from '../headerInteractive/headerInteractive.component';


type HeaderProps = {
    projects: Project[];
    categories: ProjectCategory[]
   
};


export default function ProjectListing({ projects, categories }: HeaderProps) {
 

    return (
        <>
         {categories.map((category) => (
          <div key={category._id}>
            <h2 id={`${category.slug}`}>{category.name}</h2>
            <ul>
              {projects
                .filter((project) => project.categorySlug === category.slug &&
                project.visible === true)
                .map((project) => (
                  <li key={project._id}>
                    <Link href={`/project/${project.slug}`}>{project.title}</Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        </>
    );
}