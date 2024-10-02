import SkillsItem from "../components/skills/SkillsItem";
import skillsData from "../data/skillsData.json"

export default function Skills(){

    const data = skillsData;

    return (
        <>
        <div className='absolute left-1/2 bottom-1/2 hidden lg:block -ml-1'>
			<h1 className='rotate-[90deg] text-2xl font-[JockeyOne] text-primary_color'>Skills</h1>		
		</div>
		<div className='absolute right-1/2 bottom-1/2 hidden lg:block mr-1'>
			<h1 className='-rotate-90 font-[JockeyOne] text-2xl text-secondary_color'>My</h1>
		</div>

        <div className="h-full lg:flex flex-row-reverse lg:items-center">
            <SkillsItem data={data}/>
        </div>
        </>
    )
}