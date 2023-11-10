import { Project } from '@/sanity/types/Project';
import { ProjectCategory } from '@/sanity/types/ProjectCategory';
import Link from 'next/link';

type HeaderProps = {
  projects: Project[];
  categories: ProjectCategory[];
};

export default function ProjectListing({ projects, categories }: HeaderProps) {
  return (
    <>
      {categories.map((category) => (
        <div key={category._id}>
          <h2 id={`${category.slug}`}>{category.name}</h2>
          <ul>
            {projects
              .filter(
                (project) =>
                  project.categorySlug === category.slug && project.visible === true
              )
              .sort((a, b) => (a.sort || 0) - (b.sort || 0)) // Sort based on the 'sort' field
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
