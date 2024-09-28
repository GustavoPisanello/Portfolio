import { useState } from 'react'
import HamburgerMenuButton from './components/hamburger-menu-button/HamburgerMenuButton'
import MobileMenu from './components/menu/MobileMenu'
import { Outlet } from 'react-router-dom';
import './index.css'
import FooterItems from './components/footer/FooterItems';
import FooterData from '../src/data/footerData.json'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false)

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
			<div className="absolute bottom-3 right-3 w-8">
				<img src="/logo/Sign.svg" class="w-full" alt="" />
			</div>
			<div className="absolute bottom-3 left-3">
				<FooterItems data={FooterData}/>
			</div>

		{/* Normal divs */}
			<HamburgerMenuButton toggleMenu={toggleMenu} isOpen={isOpen}/>
			<MobileMenu isOpen={isOpen}/>

			<div className='w-screen h-screen flex z-10'>
				<Outlet/>
			</div>
    </main>
    </>
  )
}

export default App
