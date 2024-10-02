import {NavLink} from 'react-router-dom'

export default function DesktopMenu(){
    return (
        <>
            <nav className="h-full">
                <ul className='h-full flex flex-col justify-between py-32 gap-y-16 font-[JockeyOne] text-xl text-secondary_color'>
                    <NavLink className="rotate-[-90deg] flex justify-center" to="/">Home</NavLink>
                    <NavLink className="rotate-[-90deg] flex justify-center" to="/Skills">Skills</NavLink>
                    <NavLink className="rotate-[-90deg] flex justify-center" to="/Projects">Projects</NavLink>
                    <NavLink className="rotate-[-90deg] flex justify-center" to="/About">About</NavLink>
                    <NavLink className="rotate-[-90deg] flex justify-center" to="/Contact">Contact</NavLink>
                </ul>
            </nav>
        </>
    )
}