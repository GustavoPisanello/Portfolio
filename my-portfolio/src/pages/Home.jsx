export default function Home(){
    return(
        <>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-[80%] max-w-[400px] font-[Fredoka] flex flex-col gap-y-4 mb-3">
                    <h1 className="text-5xl text-primary_color lg:text-secondary_color">Hi,👋</h1>
                        <h3 className="text-3xl text-center lg:text-start text-primary_color flex flex-col gap-3 lg:gap-1 lg:flex-row lg:text-secondary_color"><span>I'm Gustavo La<span className="text-primary_color lg:hidden">ur</span></span><span className="text-white lg:text-primary_color"><span className="flex gap-x-2 justify-center"><span className="hidden lg:block">ur </span> Pisanello</span></span></h3>
                        <p className="text-xl text-center text-white"><span className="lg:mr-2">A full stack </span> <span className="lg:pr-4 lg:text-primary_color">developer</span></p>
                </div>
            </div>
        </>
    )
}