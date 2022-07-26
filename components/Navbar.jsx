import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
// import use

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect( () => {
        const checkShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        } 
        window.addEventListener('scroll', checkShadow)
    }, [])

  return (
    <div className={shadow ? 'sticky top-0 w-full h-20 shadow-xl z-[2] justify-between bg-[#ecf0f3] ease-in duration-200' : 'sticky top-0 w-full h-20 z-[2] justify-between bg-[#ecf0f3] ease-in duration-200'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 z-[2]'>
            <Link href='/'>
                <Image className='cursor-pointer' src="/../public/assets/name3.png" alt="/" width='125' height='50'/>
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:opacity-60'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:opacity-60'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:opacity-60'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:opacity-60'>Projects</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar