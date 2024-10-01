import { useState } from 'react'
import HamburgerMenuButton from './components/hamburger-menu-button/HamburgerMenuButton'
import MobileMenu from './components/menu/MobileMenu'
import { Outlet, useLocation } from 'react-router-dom';
import './index.css'
import FooterItems from './components/footer/FooterItems';
import FooterData from '../src/data/footerData.json'

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
			<div className="w-full lg:w-1/2 lg:h-full h-1/2 right-0 bg-secondary_color fixed"></div>
			<div className="w-full h-1 lg:w-1 lg:h-full lg:hidden bg-black z-10 absolute bottom-[50%] lg:bottom-0"></div>
    		<div className="w-full lg:w-1/2 lg:h-full h-1/2  bg-primary_color fixed bottom-0 z-0 border-r-4 border-black"></div>
			<div className="absolute bottom-5 right-3 w-8">
				<img src="/logo/Sign.svg" className="w-full" alt="" />
			</div>
			<div className="absolute bottom-5 left-5 lg:right-5">
				<FooterItems data={FooterData}/>
			</div>

		{/* Normal divs */}
			<div className="flex z-20 items-center py-4">
				<HamburgerMenuButton toggleMenu={toggleMenu} isOpen={isOpen}/>
				<MobileMenu isOpen={isOpen}/>
				<div className='w-full'>
					<h1 className='text-3xl text-center font-bold font-[Fredoka] text-primary_color'>
						{getPageTitle()}
					</h1>
				</div>
			</div>

			<div className='w-screen h-screen flex z-10 overflow-hidden'>
				<div className="w-full h-full pb-[68px] ">
					<Outlet/>
				</div>
			</div>
    </main>
    </>
  )
}

export default App;
