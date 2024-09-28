import { Link } from "react-router-dom";

export default function FooterItems({data}){
    return(
        <>
            <div className="flex gap-x-5">   
                {
                    data.map(item => (
                        <Link className=" flex items-center" to={item.link}><img src={item.img} alt="" /></Link>
                    ))
                }
            </div>
        </>
    )
}