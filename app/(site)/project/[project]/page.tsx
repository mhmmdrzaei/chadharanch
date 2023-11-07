import { getCat, getProject, getsettings } from "@/sanity/sanity.utils";

type Props = {
    params: {project: string}
}



export default async function Project({params}:Props) {
    const slug = params.project;

    const project = await getProject(slug)
    const allProjects = await getCat()
    const settings = await getsettings()
    if (!project) {
        return <div>Nothing Found...</div>;
    }
    
    return (
       <>
       <h3>test</h3>
       </>
    )
    }