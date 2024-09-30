import ProjectItem from "../components/projects/ProjectItem";
import projectsData from "../data/projectsData.json"

export default function Projects(){

    const dataProjStStyle = projectsData.filter(project => project.style === 1);
    const dataProjNdStyle = projectsData.filter(project => project.style === 2);

    return (
        <>
            <div className="h-1/2 w-full flex flex-col mt-4 items-center">
                <div className="max-w-[85%] h-[85%] flex gap-x-20 overflow-x-auto">
                    <ProjectItem data={dataProjStStyle}/>
                </div>
            </div>
            <div className="h-1/2 w-full flex flex-col mt-4 items-center">
                <div className="max-w-[85%] h-[85%] flex gap-x-20 overflow-x-auto">
                    <ProjectItem data={dataProjNdStyle}/>
                </div>
            </div>
        </>
    )
}