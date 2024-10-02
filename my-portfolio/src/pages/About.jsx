import TextBlock from "../components/about/TextBlock";


export default function About(){
    return (
        <>
            <div className="h-full w-full lg:flex flex-row-reverse lg:items-center lg:justify-center lg:gap-x-1">
                <div className="h-1/2 w-full flex flex-col justify-center items-center lg:items-start -mr-[4px]">
                    <TextBlock bgColor="primary_color" color="white"/>
                </div>
                <div className="h-1/2 w-full flex flex-col justify-center items-center lg:items-end">
                    <TextBlock bgColor="secondary_color" color="primary_color"/>
                </div>
            </div>
        </>
    )
}