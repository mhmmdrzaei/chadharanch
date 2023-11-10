"use client"
import { Project } from '@/sanity/types/Project';
import { ProjectCategory } from '@/sanity/types/ProjectCategory';
import Link from 'next/link';
import Image from 'next/image';
type HeaderProps = {
  projects: Project[];
  categories: ProjectCategory[];
};

export default function ProjectListing({ projects, categories }: HeaderProps) {
  return (
    <>
      {categories
       .sort((a, b) => (a.sort || Infinity) - (b.sort || Infinity))
      .map((category) => (
        <div key={category._id}>
          <h2 id={`${category.slug}`}>{category.name}</h2>
          <ul>
            {projects
              .filter(
                (project) =>
                  project.categorySlug === category.slug && project.visible === true
              )
              .sort((a, b) => (a.sort || Infinity) - (b.sort || Infinity)) // Sort based on the 'sort' field
              .map((project) => (
                <li key={project._id}>
                  <Link href={`/project/${project.slug}`}>
                    <section className="projectEach">
                    {project.mainimage && (
                      <figure><Image src={project.mainimage} width={700} height={700}className="homeImg" loading="eager"  alt={`${project.title} designed by Chadha Ranch`} /></figure>
                      

                    )}
                    <section className="singleProjDetails">
                    <h3>{project.title}</h3>
                    <p className='dateLoc'>
                      {project.projectDate && (
                          
                          <>{project.projectDate} </>
                      )}
                      {project.projectLocation && (
                          
                        <> • {project.projectLocation}</>
                      )}
                    </p>
                    
                    </section>
                    
                    
                    </section>
                   
                    
                    </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
}

