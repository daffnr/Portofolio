import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import { useRouter } from 'next/router'

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    const router = useRouter()

    const handleRedirect = (path:string) => {
        router.push(path)
    }

  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                WEB
                <span className='text-yellow-300'>DEV</span>
            </h1>
            <div className='nav-link' onClick={() => handleRedirect('#home')}>HOME</div>
            <div className='nav-link' onClick={() => handleRedirect("#about")}>ABOUT</div>
            <div className='nav-link' onClick={() => handleRedirect('#services')}>SERVICES</div>
            <div className='nav-link' onClick={() => handleRedirect("#skill")}>SKILL</div>
            <div className='nav-link' onClick={() => handleRedirect("#project")}>PROJECT</div>
            <div className='nav-link' onClick={() => handleRedirect("#contact")}>CONTACT</div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
            </div>
        </div>
    </div>
  )
}

export default Nav