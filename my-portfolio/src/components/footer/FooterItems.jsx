import { Link } from "react-router-dom";

export default function FooterItems({data}){
    return(
        <>
            <div className="flex lg:flex-col gap-y-8 gap-x-5">   
                {
                    data.map((item, index) => (
                        <Link key={index} className="flex items-center z-20 w-fit lg:fill-primary_color" to={item.link}><img src={item.img} alt="" /></Link>
                    ))
                }
            </div>
        </>
    )
}