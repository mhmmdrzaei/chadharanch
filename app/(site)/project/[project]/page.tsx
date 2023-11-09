import { getProject, getsettings } from "@/sanity/sanity.utils";
import { Project } from '@/sanity/types/Project'
import { PortableText } from "@portabletext/react";
import { v4 as uuidv4 } from 'uuid';

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
    params: { project: string }
}
type PhotoType = {
    mainImage: string;
    additionalImages: {
        url: string;
        attribution: string;

    }


}
export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug); // Expecting a single project
    const settings = await getsettings();

    const mainImage = {
        src: project.mainimage,
        width: 1200 as number,
        height: 1200 as number,
        key:uuidv4(),
        alt: `${project.title} front image `
      };
      
      const additionalImages = project.projectImages
      .filter((image: {_type: string;}) => image._type === "projectImage")
      .map((image: { url: string; attribution: string;}) => ({
        src: image.url,
        width: 1200 as number,
        height: 1200 as number,
        alt: image.attribution, 
        key: uuidv4()
      }));
      
      const photos: PhotoType[] = [mainImage, ...additionalImages];

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
            <section className="images">
            <>{project.mainimage}</>
            {project.projectImages.map((image: { url: string; })=>{
          return <>{image.url}</>
            })
        }
        


            </section>

            
            
        </>
    )
}
