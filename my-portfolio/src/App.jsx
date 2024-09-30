import { useState } from 'react'
import HamburgerMenuButton from './components/hamburger-menu-button/HamburgerMenuButton'
import MobileMenu from './components/menu/MobileMenu'
import { Outlet, useLocation } from 'react-router-dom';
import './index.css'
import FooterItems from './components/footer/FooterItems';
import FooterData from '../src/data/footerData.json'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false)

  // Usar useLocation para pegar a rota atual
  const location = useLocation();

  // Função que retorna o título com base na rota
  const getPageTitle = () => {
    switch (location.pathname) {
    case '/About':
        return 'About';
    case '/Contact':
        return 'Contact';
	case '/Projects':
		return "Projects";
	case "/MyProject/:id":
		return "My project"
	default:
		return "Home"
    }
  }

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const toggleColors = () => {
    setIsPrimary(prev => !prev)
  }

  return (
    <>
    <main className="flex flex-col w-screen h-screen relative">
		{/* Fixed and absolute divs */}
			<div className="w-full h-1/2 bg-secondary_color fixed"></div>
			<div className="w-full h-1 bg-black z-10 absolute bottom-[50%]"></div>
    		<div className="w-full h-1/2  bg-primary_color fixed bottom-0 z-0"></div>
			<div className="absolute bottom-5 right-3 w-8">
				<img src="/logo/Sign.svg" className="w-full" alt="" />
			</div>
			<div className="absolute bottom-5 left-5">
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

			<div className='w-screen h-screen flex z-10'>
				<div className="w-full h-full pb-[68px]">
					<Outlet/>
				</div>
			</div>
    </main>
    </>
  )
}

export default App;
