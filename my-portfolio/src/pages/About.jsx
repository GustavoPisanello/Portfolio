import TextBlock from "../components/about/TextBlock";
import aboutData from "../data/aboutMeData.json"

export default function About(){

    const data = aboutData;

    return (
        <>
            <div className="h-full w-full lg:flex flex-row-reverse lg:items-center lg:justify-center lg:gap-x-1">
                    <TextBlock data={data}/>
            </div>
        </>
    )
}