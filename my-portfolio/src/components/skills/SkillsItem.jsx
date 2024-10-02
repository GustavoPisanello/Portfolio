export default function SkillsItem({data}){
    return (
        <>
        {
            data.map((item, index) => (
            <div className="h-1/2 w-full flex flex-col justify-center items-center">
                <div className={`w-[75%] text-base font-medium p-6  max-w-[430px] border-2 border-${item.color} gap-y-4 rounded-2xl flex flex-col`} style={{borderColor: item.color}}>
                        <div className="w-full flex justify-between">
                            <div className="w-10">
                                <img className={`w-full fill-${item.color}`} src={item.img} alt="" />
                            </div>
                            <div className={`w-4 h-4 border-4 border-${item.color} rounded-full`} style={{borderColor: item.color}}></div>
                        </div>
                        <div className="max-h-[200px] overflow-y-auto lg:max-h-[600px]">
                            <p className={`font-[Fredoka] text-xs lg:text-base text-${item.color} text-justify`}>{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}