/* eslint-disable react/no-unescaped-entities */
import { Bars3Icon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleRedirect = (path:string) => {
        router.push(path)
    }

  return (
    <div 
        className={`fixed z-[10000] top-0 left-0 right-0 md:left-1/2 md:-translate-x-1/2 md:w-[85%] lg:w-[900px] transition-all duration-500 flex items-center px-6 md:px-10 h-[10vh] md:h-[80px] md:rounded-full
        ${scrolled 
            ? 'bg-black/40 backdrop-blur-md border-b md:border border-white/10 shadow-2xl md:top-4' 
            : 'bg-transparent md:bg-[#141c27]/80 md:backdrop-blur-sm md:top-6'}`}
    >
        <div className='flex items-center justify-between w-full h-full'>
            {/* Logo */}
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold tracking-wide'>
                DNR
                <span className='text-[#facc15]'>.</span>
            </h1>
            
            {/* Nav Links */}
            <div className='hidden md:flex flex-1 items-center justify-center space-x-10'>
                <div className='nav-link text-sm' onClick={() => handleRedirect('#home')}>HOME</div>
                <div className='nav-link text-sm' onClick={() => handleRedirect("#about")}>ABOUT</div>
                <div className='nav-link text-sm' onClick={() => handleRedirect('#services')}>SERVICES</div>
                <div className='nav-link text-sm' onClick={() => handleRedirect('#skills')}>SKILLS</div>
                <div className='nav-link text-sm' onClick={() => handleRedirect("#project")}>PROJECTS</div>
            </div>

            {/* Let's Talk Button / Hamburger */}
            <div className='flex-[0.6] flex justify-end items-center'>
                <button 
                    onClick={() => handleRedirect("#contact")}
                    className="hidden md:block px-6 py-2.5 text-sm font-bold text-black bg-[#facc15] hover:bg-yellow-400 transition-colors duration-300 rounded-full"
                >
                    LET'S TALK
                </button>
                <div onClick={openNav} className="md:hidden">
                    <Bars3Icon className='w-[2rem] h-[2rem] cursor-pointer text-[#facc15]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav