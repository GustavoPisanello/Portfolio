import SkillsItem from "../components/skills/SkillsItem";
import img1 from "/Skills/Code1.svg"
import img2 from "/Skills/Code2.svg"

export default function Skills(){
    return (
        <>
        <div className="h-1/2 w-full flex flex-col justify-center items-center">
           <SkillsItem color="primary-color" img={img2}/>
        </div>
        <div className="h-1/2 w-full flex flex-col justify-center items-center">
           <SkillsItem color="secondary_color" img={img1}/>
        </div>
        </>
    )
}