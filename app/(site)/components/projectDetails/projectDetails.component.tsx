import { Project } from '@/sanity/types/Project';
import ProjectImages from "../../components/projectImages/projectImages.compoent";
import { PortableText } from "@portabletext/react";
type LinkMark = {
    blank?: boolean;
    href: string;
  };
  
  type Components = {
    marks: {
      link: (props: { value: LinkMark; children: React.ReactNode }) => React.ReactNode;
    };
  };

type HeaderProps = {
    project: Project;
    password?: string | null; // Accept a password prop
}
  
  
  const components: Components = {
    marks: {
      link: ({ value, children }) => {
        const { blank, href } = value;
        return blank ? (
          <a href={href} target="_blank" rel="noopener">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
  };


export default function ProjectDetails({ project, password }: HeaderProps) {


    return (
        <>
        <h3>{project.title}</h3>
        <p className='dateLoc'>
        {project.projectDate && (
            
            <>{project.projectDate} </>
        )}
         {project.projectLocation && (
            
           <> • {project.projectLocation}</>
         )}
        </p>
        {project.projectdescription && (
        <section className="projectDescription">
            <PortableText value={project.projectdescription} components={components as any} />
        </section>
        )}
        {project.projectMedium && (
        <p><span>Medium: </span>{project.projectMedium}</p>
        )}
        <section className="images">
        
        <ProjectImages project={project} />
        


        </section>

        
        
    </>


    )
}