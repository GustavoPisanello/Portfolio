export default function LittleBalls({color}){
    return (
        <>
        <div className="flex gap-x-3 py-6">
                <div className="flex gap-x-4 z-20">
                    <div className={`bg-${color} w-3 h-3 rounded-full`}></div>
                </div>
                <div className="flex gap-x-4 z-20">
                <div className={`bg-${color} w-3 h-3 rounded-full`}></div>
                </div>
                <div className="flex gap-x-4 z-20">
                    <div className={`bg-${color} w-3 h-3 rounded-full`}></div>
                </div>
            </div>
        </>
    )
}