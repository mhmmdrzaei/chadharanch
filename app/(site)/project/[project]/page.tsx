import { getProject, getsettings } from "@/sanity/sanity.utils";
import { Project } from '@/sanity/types/Project'

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const projects: Project[] = await getProject(slug); // Expecting an array of projects
    const settings = await getsettings();

    if (projects.length === 0) {
        return <div>Nothing Found...</div>;
    }


    return (
        <>
            {/* <h3>{projects.title}</h3> */}
        </>
    )
}
