export default function Home(){
    return(
        <>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-[80%] max-w-[350px] font-[Fredoka] flex flex-col gap-y-4 mb-3">
                    <h1 className="text-5xl text-primary_color">Hi,👋</h1>
                    <h3 className="text-3xl text-center text-primary_color flex flex-col gap-3">I'm Gustavo Laur <span className="text-white">Pisanello</span></h3>
                    <p className="text-xl text-center text-white">A full stack developer</p>
                </div>
            </div>
        </>
    )
}