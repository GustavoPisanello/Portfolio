import LittleBalls from "./LittleBalls";

export default function TextBlock({bgColor, color}){
    return (
        <>
        <div className={`w-[75%] flex flex-col items-center bg-${bgColor} rounded-xl`}>
            <p className={`text-${color} text-sm pl-6 pr-6 pt-6 text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime quos debitis provident et placeat fugiat temporibus sint, laborum iusto accusamus aperiam aliquam vero cupiditate perferendis, dignissimos, minus tempore delectus.</p>
            <LittleBalls color = {color}/>
        </div>
        </>
    )
}