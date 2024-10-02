import socialMediaData from "../data/footerData.json"
import {Link} from "react-router-dom"
export default function Contact(){

    const socialMedia = socialMediaData

    return (
        <>
            <div className="flex w-full h-full relative">
                <div className="absolute font-[JockeyOne] text-5xl top-1/4 left-[48.1%] gap-x-1 hidden lg:flex">
                    <span className="text-secondary_color">o</span><span className="text-primary_color">r</span>
                </div>
                <div className="w-1/2 h-full flex-col hidden lg:flex">
                    <div className="w-[85%] flex flex-col gap-y-2 h-full max-w-[455px] items-end justify-center">
                        <div className="">
                            <p className="font-[JockeyOne] text-secondary_color text-3xl lg:text-4xl mb-12">Reach me via social media</p>
                        </div>
                        <div className="flex flex-col gap-y-8 w-fit">
                            {
                                socialMedia.map((item, index) =>(
                                    <Link to={item.link} className="font-[Fredoka] flex gap-x-8 text-white"><img src={item.img[0]} alt="" />{item.link}</Link>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 h-full flex flex-col items-center gap-y-4">
                    
                    <form className="w-[85%] flex flex-col gap-y-2 h-full max-w-[455px] items-center justify-center" action="">
                    <div className="w-full flex justify-center">
                        <p className="font-[JockeyOne] text-primary_color text-3xl lg:text-4xl mb-12">Leave a message</p>
                    </div>
                        <div className="h-1/2 w-full lg:h-fit flex flex-col gap-y-2 ">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-[JockeyOne] text-primary_color">NAME</label>
                                <input className="text-primary_color px-2 font-[Fredoka] border border-primary_color bg-transparent h-8" type="text" name="name" id="name" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="font-[JockeyOne] text-primary_color">EMAIL</label>
                                <input className="text-primary_color px-2 font-[Fredoka] border border-primary_color bg-transparent h-8" type="text" name="email" id="email" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="subject" className="font-[JockeyOne] text-primary_color">SUBJECT</label>
                                <input className="text-primary_color px-2 font-[Fredoka] border border-primary_color bg-transparent h-8" type="text" name="subject" id="subject" />
                            </div>
                        </div>
                        <div className="h-1/2 lg:h-fit w-full flex flex-col gap-y-6">
                            <div className="flex flex-col w-full">
                                <label className="text-secondary_color lg:text-primary_color font-[JockeyOne]" htmlFor="message">MESSAGE</label>
                                <textarea className="resize-none lg:border-primary_color lg:border text-primary_color font-[Fredoka] h-28 p-2 bg-secondary_color"/>
                            </div>
                            <button className="text-primary_color lg:border lg:border-primary_color bg-secondary_color px-5 py-2 rounded-full font-[JockeyOne] text-xl">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}