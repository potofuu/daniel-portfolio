import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-24'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[skyblue] font-bold'>About Me</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-500'>I am currently a first year student at Georgia Tech, studying CS with a focus in people and media.</p>
                <p className='py-2 text-gray-500'>I am most interested in fullstack development, and love learning about all kinds of technologies.</p>
                <p className='py-2 text-gray-500'>In my free time, I enjoy playing tennis, games and chess.</p>
                <p><br></br></p>
                <Link href='/#projects'>
                    <p className='py-2 text-gray-500 hover:underline cursor-pointer'>Check out my projects here!</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media-exp1.licdn.com/dms/image/C5603AQHdlN_aYGlK5A/profile-displayphoto-shrink_400_400/0/1646797508824?e=1664409600&v=beta&t=ApWi1slZtppZuVXyinBy3C9pImU081FVetr11E1XUIo" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About
