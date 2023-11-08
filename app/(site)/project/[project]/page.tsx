import { getProject, getsettings } from "@/sanity/sanity.utils";
import { Project } from '@/sanity/types/Project'
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

type Props = {
    project: Project
    params: { project: string }
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug); // Expecting a single project
    const settings = await getsettings();

    if (!project) {
        return <div>Nothing Found...</div>;
    }

    return (
        <>
            <h3>{project.title}</h3>
            <p>
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
            
            
        </>
    )
}
