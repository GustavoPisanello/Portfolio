import {Link, useParams} from 'react-router-dom'
import projectData from '../data/projectsData.json'


export default function MyProject(){

    const {id} = useParams()
    const project = projectData.find(project => project.id === Number(id))
    console.log(project.img)

    return (
        <>
        <div className='h-full w-full lg:flex lg:flex-row-reverse relative'>
        <Link className="absolute left-[54.2%] bottom-[5%] px-4 py-3 rounded-xl border-2 border-black text-primary_color_color bg-secondary_color font-medium hover:bg-primary_color hover:text-secondary_color w-fit hover:shadow-sm hover:shadow-[#4a4a4a] transition-all duration-300" to={project.link}>Visit Website</Link>

            <div className="h-1/2 lg:h-full lg:w-1/2 w-full flex flex-col justify-center items-center">
                <div className="max-w-[85%] h-[85%] lg:flex lg:flex-col lg:gap-y-6 lg:justify-center">
                    <div className="h-3/4 lg:h-1/2 relative">
                        <img src={`/${project.img}`} alt="" className="w-full h-full rounded-xl border-4 border-black" />
                        <div className='absolute bottom-4 right-4 w-10'>
                            <Link to={project.gitLink}><img className="w-full" src="/footer/github3.svg" alt="" /></Link>
                        </div>
                    </div>
                    
                    <div className="h-1/4 lg:h-fit w-full flex gap-x-4 gap-y-2 flex-wrap justify-center items-center mt-2">
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
                                    break;
                                case "VITE":
                                    tagStyle = "#3B0153";   
                                    break;        
                                case "GS WINNER":
                                    tagStyle = "#461f24";
                                    break;
                            }

                        return(   
                            
                            <p style={{color: tagStyle, borderColor: tagStyle}} className={`border-2 w-fit px-2 rounded-xl font-[JockeyOne]`}>{tag}</p>
                            )}
                        )
                    }
                    </div>
                </div>
            </div>
            
            <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center lg:items-center">
                <div className="w-[85%] lg:w-full flex flex-col gap-y-8 max-w-[505px] lg:max-w-full">
                    <div className="text-center lg:text-end px-10 mt-4 flex flex-col gap-y-1">
                        <h1 className='font-[JockeyOne] text-white text-4xl'>{project.name}</h1>
                        <p className='font-[JockeyOne] text-white text-base'>{project.subtitle}</p>
                    </div>
                    <div className='lg:w-full flex lg:justify-end'>
                        <p className='text-sm text-secondary_color lg:w-1/2 text-justify font-[Fredoka] lg:mr-10'>{project.description}</p>
                    </div>
                    <div className="lg:w-full flex lg:justify-center lg:-ml-6">
                        <div className='w-8'>
                            <Link to="/Projects" className='w-8'>
                                <img src="/projects/seta.svg" className="w-full" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}