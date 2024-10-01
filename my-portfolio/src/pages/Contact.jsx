export default function Contact(){
    return (
        <>
            <div className="w-full h-full flex flex-col items-center gap-y-4">
                <div>
                    <p className="font-[JockeyOne] text-primary_color text-3xl">Leave a message</p>
                </div>
                <form className="w-[85%] flex flex-col gap-y-2 h-full max-w-[455px]" action="">
                    <div className="h-1/2 flex flex-col gap-y-2 ">
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
                    <div className="h-1/2 flex flex-col gap-y-6">
                        <div className="flex flex-col">
                            <label className="text-secondary_color font-[JockeyOne]" htmlFor="message">MESSAGE</label>
                            <textarea className=" resize-none text-primary_color font-[Fredoka] h-28 p-2 bg-secondary_color"/>
                        </div>
                        <button className="text-primary_color bg-secondary_color px-5 py-2 rounded-full font-[JockeyOne] text-xl">SUBMIT</button>
                    </div>
                </form>
            </div>
        </>
    )
}