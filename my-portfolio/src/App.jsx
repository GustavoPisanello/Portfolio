import { useState } from 'react'
import HamburgerMenuButton from './components/hamburger-menu-button/HamburgerMenuButton'
import MobileMenu from './components/menu/MobileMenu'
import { Outlet, useLocation } from 'react-router-dom';
import './index.css'
import FooterItems from './components/footer/FooterItems';
import FooterData from '../src/data/footerData.json'
import DesktopMenu from './components/menu/DesktopMenu';
import { GoArrowDown } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
	case "/":
		return "Home"
    case '/About':
        return 'About';
    case '/Contact':
        return 'Contact';
	case '/Projects':
		return "Projects";
	case "/MyProject/:id":
		return "Home";
	case "/Skills":
		return "Skills";
	default:
		return "My project"
    }
  }

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
    <main className="flex flex-col w-screen h-screen relative">
		{/* Fixed and absolute divs */}
			<div className="w-full lg:w-1/2 lg:h-full h-1/2 right-0 z-0 bg-secondary_color fixed"></div>
			<div className="w-full h-1 lg:w-1 lg:h-full bg-black lg:left-1/2 z-10 absolute bottom-[50%] lg:bottom-0"></div>
    		<div className="w-full lg:w-1/2 lg:h-full h-1/2  bg-primary_color fixed bottom-0 z-0"></div>

			{/* Desktop Menu */}
			<div className='h-full hidden lg:flex  items-center z-20 absolute left-6'>
				<DesktopMenu/>
				<div className='h-[60%] border border-secondary_color ml-4'></div>
			</div>

			{/* Signments */}
			
			<div className="absolute bottom-5 right-3 w-8">
				<img src="/logo/Sign.svg" className="w-full" alt="" />
			</div>
			<div className="absolute top-4 right-4 w-24 hidden lg:block">
				<img src="/footer/Sign2.svg" className="w-full" alt="" />
			</div>

			{/* Footers */}
			<div className="absolute bottom-5 flex items-center gap-x-6 left-5 lg:hidden">
				<FooterItems data={FooterData}/>
				<GoArrowLeft className="arrow" size={20} style={{color: "#F9F6EE"}}/>
			</div>
			<div className="absolute bottom-5 flex-col items-center right-5 gap-y-6 hidden z-20 lg:flex arrow-container">
  				<GoArrowDown className="arrow" style={{color: "#2B3B52"}} size={35}/>
  				<FooterItems data={FooterData}/>
			</div>


		{/* Normal divs */}
			<div className="flex z-20 items-center py-4 lg:hidden">
				<HamburgerMenuButton toggleMenu={toggleMenu} isOpen={isOpen}/>
				<MobileMenu isOpen={isOpen}/>
				<div className='w-full'>
					<h1 className='text-3xl text-center font-bold font-[Fredoka] text-primary_color lg:hidden'>
						{getPageTitle()}
					</h1>
				</div>
			</div>

			<div className='w-screen h-screen flex lg:justify-center z-10 overflow-hidden'>
				<div className="w-full lg:w-[80%] h-full lg:pb-0 pb-[68px] ">
					<Outlet/>
				</div>
			</div>
    </main>
    </>
  )
}

export default App;
