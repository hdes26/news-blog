'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const navBarCloseImg = navbar
    ? (<Image src='/close.svg' width={30} height={30} alt='logo' />)
    : (<Image src='/hamburger-menu.svg' width={30} height={30} alt='logo' className='focus:border-none active:border-none' />)
  const navBarClosePhoneMenu = navbar ? 'p-12 md:p-0 block' : 'hidden'
  const handleNavbar = () => {
    setNavbar(!navbar)
  }
  return (
    <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between md:py-2 md:block'>
            <Link href='/'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-8 h-8 text-white hover:scale-[150%] hover:rotate-180 transition duration-300'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' />
              </svg>

            </Link>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={handleNavbar}
              >
                {navBarCloseImg}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navBarClosePhoneMenu}`}
          />
        </div>
      </div>
    </nav>

  )
}
