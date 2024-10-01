import MobileMenuItem from './MobileMenuItem'
import menuLinksData from '../../data/menuLinksData.json'

export default function MobileMenu({isOpen}){

    const menuSt = menuLinksData.filter(item=> item.id === 1);
    const menuNd = menuLinksData.filter(item => item.id === 2);
    
    console.log(menuSt)
        return (
            <>
                <nav
                    className={`bg-secondary_color z-20 w-full px-5 pb-4 fixed right-0 transition-all duration-[1.2s] ${
                        isOpen ? ' opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                    <ul className='flex flex-wrap gap-x-6 justify-evenly mt-2 pl-10'>
                        <MobileMenuItem data={menuSt} isOpen={isOpen} />
                    </ul>
                </nav>
                <nav className={` bg-secondary_color absolute z-20 rotate-[270deg] flex flex-col -ml-[4.5rem] top-28 px-4 rounded-xl transition-all duration-[1.2s]
                     ${isOpen ? ' opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <ul className='justify-evenly flex gap-x-12 px-6'>
                        <MobileMenuItem data={menuNd} isOpen={isOpen} />
                    </ul>
                </nav>
            </>
        );
    }
    