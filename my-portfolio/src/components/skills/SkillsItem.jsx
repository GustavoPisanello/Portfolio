export default function SkillsItem({color, img}){
    return (
        <>
         <div className={`w-[75%] p-6 max-w-[430px] border gap-y-4 rounded-2xl flex flex-col`} style={{borderColor: color}}>
                <div className="w-full flex justify-between">
                    <div className="w-10">
                        <img className={`w-full fill-${color}`} src={img} alt="" />
                    </div>
                    <div className={`w-4 h-4 border-4  rounded-full`} style={{borderColor: color}}></div>
                </div>
                <div>
                    <p className={`font-[Fredoka] text-${color} text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio recusandae quisquam repellat maiores impedit ipsum soluta consequuntur facere fugiat, illo hic. Dicta optio ipsa quibusdam nisi ducimus quisquam doloremque?</p>
                </div>
            </div>
        </>
    )
}