import { Link } from "react-router-dom"

export default function PageNotFound(){
    return (
        <>
            <div className="w-full h-full flex flex-col lg:flex-row">
                <div className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col items-center justify-center">
                    <h1 className="font-[JockeyOne] text-9xl lg:text-[450px] text-primary_color lg:text-secondary_color lg:-rotate-90">404</h1>
                </div>
                <div className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col items-center justify-center">
                    <p className="text-xl font-[Fredoka] w-1/2 text-secondary_color lg:text-black">I don't found this page that you're looking for. Does it really exists?<Link className="italic lg:text-primary_color" to="/">Return to Home</Link></p>
                </div>
            </div>
        </>
    )
}