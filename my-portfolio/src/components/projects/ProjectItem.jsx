import { Link } from "react-router-dom"

export default function ProjectItem({data}){

    return (
        <>
            { data.map((project, index) => {

                let style = project.style === 1 ? {
                    "color": "white",
                    "bgColor": "primary_color"
                }: 
                {"color": "black", 
                "bgColor": "secondary_color"}

                return (

                <Link to={`/MyProject/${project.id}`} key={index} className="flex flex-col relative bg-primary_color w-96 max-w-[280px] min-w-[18rem] h-full  border-4 border-black">
                    <div className={`bg-${style.bgColor} absolute w-fit py-1 px-5 border-r-4 border-b-4 border-black`}>
                        <p className={`font-[JockeyOne] text-${style.color} text-xl font-bold`}>{project.tag}</p>
                    </div>
                    <div className={`h-2/3 w-full border-b-4 border-black`}>
                        <img className="h-full w-full object-cover" src={project.img} alt="" />
                    </div>
                    <div className={`h-1/3 w-full p-2 bg-${style.bgColor} text-${style.color}`}>
                        <p className="text-xl font-[JockeyOne] ">{project.name}</p>
                        <p className="text-sm font-[Fredoka] pl-2">{project.subtitle}</p>
                    </div>
                </Link>

            )})}
        </>
    )
}