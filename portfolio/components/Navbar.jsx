import { assets } from '@/assets/assets'
import React, { useRef } from 'react'
import Image from 'next/image'

const Navbar = () => {

    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
  return (
    <>
     <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
     flex items-center justify-between z-50'>
        <a href="#top">
            <Image src={assets.logo} className="w-28 cursor-pointer mr-14" alt=''></Image>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg-gap-8
        rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a className='font-ovo' href="#top">Home</a></li>
            <li><a className='font-ovo' href="#about">About me</a></li>
            <li><a className='font-ovo' href="#services">Services</a></li>
            <li><a className='font-ovo' href="#work">My Work</a></li>
            <li><a className='font-ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt='' className='w-6'></Image>
            </button>
            <a className='hidden lg:flex items-center gap-3 px-10 py-2.5
            border border-gray-500 rounded-full ml-4 font-ovo' href="#contact">Contact <Image src={assets.arrow_icon} className="w-3" alt='' /></a>

            <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                <Image src={assets.menu_black} alt='' className='w-6'></Image>
            </button>
        </div>

        {/* {mobile menu} */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

            <div onClick={closeMenu} className='absolute top-6 right-6'>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
            </div>

            <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
     </nav>
    </>
  )
}

export default Navbar