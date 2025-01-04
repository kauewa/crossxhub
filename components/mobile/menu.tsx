"use client"
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react'; 

import Logo from '@/assets/logo.png';

import Image from 'next/image';
import Link from 'next/link';



export default function MenuMobile(){ 
    const [menuLateral, setMenuLateral] = useState(false);
    
    const toggleMenu = () => { setMenuLateral(prevState => !prevState);}

    return(
        <>
            <SuperiorMenu toggleMenu={toggleMenu}/>
            <MenuLateralMobile menuLateral={menuLateral} toggleMenu={toggleMenu}/>
        </>
    )
}

interface MenuLateralMobileProps { 
    menuLateral: boolean;
    toggleMenu: () => void
}

interface SuperiorMenuProps { 
    toggleMenu: () => void;
}

const MenuLateralMobile: React.FC<MenuLateralMobileProps> = ({ menuLateral, toggleMenu }) => {
  return (
    <div
      className={`
        z-10
        flex
        flex-col
        justify-around
        items-center
        w-3/4
        h-full
        p-5
        fixed
        top-0
        bg-green
        shadow-lg
        backdrop-blur-sm
        transform
        transition-transform
        duration-600
        ease-in-out
        ${menuLateral ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}
    >
      <FaBars size={25} onClick={toggleMenu} />
      <Link href={'/home'} ><strong className='text-2xl'>Home</strong></Link>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <Image src={Logo} alt="Logo" width={100} height={100}/>
        <h1>BETA</h1>
      </div>
    </div>
  );

};




const SuperiorMenu: React.FC<SuperiorMenuProps> = ({ toggleMenu }) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => { 
        const handleScroll = () => { 
            setIsScrolled(window.scrollY > 0); 
        }; 
        window.addEventListener('scroll', handleScroll); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className={` z-1 bg-green px-4 flex justify-between items-center fixed top-0 left-0 w-full h-16 ${isScrolled ? 'backdrop-blur-sm' : 'backdrop-blur-none'} shadow-md md:hidden`}>
        <FaBars size={25} onClick={toggleMenu}/>
        <Image src={Logo} alt="Logo" width={100} height={100}/>
        <h1>
        </h1>
        </div>
    )
}