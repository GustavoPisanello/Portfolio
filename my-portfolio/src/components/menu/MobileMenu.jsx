import MobileMenuItem from './MobileMenuItem'
import menuLinksData from '../../data/menuLinksData.json'

export default function MobileMenu({isOpen}){

    const menuData = menuLinksData
    
        return (
            <>
                <nav
                    className={`bg-secondary_color z-10 mt-3 w-full px-5 pb-4 fixed right-0 transition-all duration-[1.2s] ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                    <ul className='flex flex-wrap gap-x-6 justify-between pl-10'>
                        <MobileMenuItem data={menuData} isOpen={isOpen} />
                    </ul>
                </nav>
            </>
        );
    }
    