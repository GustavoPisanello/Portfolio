import {Link, useParams} from 'react-router-dom'
import projectData from '../data/projectsData.json'

export default function MyProject(){

    const {id} = useParams()
    const project = projectData.find(project => project.id === Number(id))
    console.log(project.img)

    return (
        <>
            <div className="h-1/2 w-full flex flex-col justify-center items-center">
                <div className="max-w-[85%] h-[85%]">
                    <div className="h-3/4">
                        <img src={`/${project.img}`} alt="" className="w-full h-full rounded-xl border border-black" />
                    </div>
                    <div className="h-1/4 flex gap-x-4 gap-y-2 flex-wrap justify-center items-center mt-2">
                    {
                        project.tags.map((tag, index) => {
                            tag = tag.toUpperCase();
                            let tagStyle = "";

                            switch(tag) {
                                case "HTML":
                                    tagStyle = "#FF5050";
                                    break;
                                case "CSS":
                                    tagStyle = "#0C0585";
                                    break;
                                case "VANILLA":
                                    tagStyle = "#FFCFC4";
                                    break;
                                case "JS":
                                    tagStyle = "#FDE55F";
                                    break;
                                case "REACT":
                                    tagStyle = "#2785FF";
                                    break;
                                case "TAILWIND":
                                    tagStyle = "#83B9FF";             
                            }

                        return(   
                            
                            <p style={{color: tagStyle, borderColor: tagStyle}} className={`border-2 w-fit px-2 rounded-xl font-[JockeyOne]`}>{tag}</p>
                            )}
                        )
                    }
                    </div>
                </div>
            </div>
            <div className="h-1/2 flex justify-center">
                <div className="w-[85%] flex flex-col gap-y-8">
                    <div className="text-center mt-4 flex flex-col gap-y-1">
                        <h1 className='font-[JockeyOne] text-white text-4xl'>{project.name}</h1>
                        <p className='font-[JockeyOne] text-white text-base'>{project.subtitle}</p>
                    </div>
                    <div>
                        <p className='text-sm text-secondary_color text-justify font-[Fredoka]'>{project.description}</p>
                    </div>
                    <Link to="/Projects" className='w-8'>
                        <img src="/projects/seta.svg" className="w-full" alt="" />
                    </Link>
                </div>
            </div>

        </>
    )
}