import TextBlock from "../components/about/TextBlock";


export default function About(){
    return (
        <>
        	<div className="h-1/2 w-full flex flex-col justify-center items-center">
                <TextBlock bgColor="primary_color" color="white"/>
            </div>
            <div className="h-1/2 w-full flex fle-col justify-center items-center">
                <TextBlock bgColor="secondary_color" color="primary_color"/>
            </div>
        </>
    )
}