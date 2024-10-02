import SkillsItem from "../components/skills/SkillsItem";
import img1 from "/Skills/Code1.svg"
import img2 from "/Skills/Code2.svg"

export default function Skills(){
    return (
        <>
        <div className='absolute left-1/2 bottom-1/2 hidden lg:block -ml-1'>
			<h1 className='rotate-[90deg] text-2xl font-[JockeyOne] text-primary_color'>Skills</h1>		
		</div>
		<div className='absolute right-1/2 bottom-1/2 hidden lg:block mr-1'>
			<h1 className='-rotate-90 font-[JockeyOne] text-2xl text-secondary_color'>My</h1>
		</div>

        <div className="h-full lg:flex flex-row-reverse lg:items-center">
            <div className="h-1/2 w-full flex flex-col justify-center items-center">
                <SkillsItem color="primary-color" img={img2}/>
            </div>
            <div className="h-1/2 w-full flex flex-col justify-center items-center">
                <SkillsItem color="secondary_color" img={img1}/>
            </div>
        </div>
        </>
    )
}