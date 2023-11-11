import { getCat, getProject, getsettings } from "@/sanity/sanity.utils";
import { Project } from '@/sanity/types/Project'
import Header from "../../components/header/header.component";
import PasswordProtectedProject from "../../components/passwordProtected/passwordProtected.component";
import ProjectPage from "../../components/singleProjectListing/singleProjectListing.component";
type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug); // Expecting a single project
    const settings = await getsettings();
    const categories= await getCat()


    if (!project) {
        return (

        <main>
        <section className="pageSide">
          <Header set={settings} cat={categories}/>
        </section>
        <section className="pageMain">
        <div className="404">Nothing found...</div>

        </section>
      </main>
    )
    }

    return (
        <main>
        <section className="pageSide">
          <Header set={settings} cat={categories}/>
        </section>
        <section className="pageMain projectPage">
          <ProjectPage project={project} />

        </section>
        
      </main>
    )
    
}
