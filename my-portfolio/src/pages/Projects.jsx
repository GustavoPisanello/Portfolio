import ProjectItem from "../components/projects/ProjectItem";
import projectsData from "../data/projectsData.json"

export default function Projects(){

    const dataProjStStyle = projectsData.filter(project => project.style === 1);
    const dataProjNdStyle = projectsData.filter(project => project.style === 2);

    return (
        <>
        <div className='absolute left-1/2 bottom-1/2 hidden lg:block -ml-4'>
			<h1 className='rotate-[90deg] text-2xl font-[JockeyOne] text-primary_color'>Projects</h1>		
		</div>
		<div className='absolute right-1/2 bottom-1/2 hidden lg:block mr-1'>
			<h1 className='-rotate-90 font-[JockeyOne] text-2xl text-secondary_color'>My</h1>
		</div>

        <div className="h-full lg:flex lg:flex-row-reverse justify-center">
            <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex lg:flex-col justify-center items-center">
                <div className="max-w-[85%] h-[85%] flex lg:flex-col gap-y-12 gap-x-12 overflow-x-auto">
                    <ProjectItem data={dataProjStStyle}/>
                </div>
            </div>
            <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex lg:flex-col justify-center items-center pl-6">
                <div className="max-w-[85%] h-[85%] flex lg:flex-col gap-y-12 gap-x-12 overflow-x-auto">
                    <ProjectItem data={dataProjNdStyle}/>
                </div>
            </div>
        </div>
        </>
    )
}