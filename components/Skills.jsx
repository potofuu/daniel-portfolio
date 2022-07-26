import React from 'react'
import Image from 'next/image';
import css from '../public/assets/img/css.png'
import html from '../public/assets/img/html.png'
import java from '../public/assets/img/java.png'
import javascript from '../public/assets/img/javascript.png'
import python from '../public/assets/img/python.png'
import react from '../public/assets/img/react.png'
import nextjs from '../public/assets/img/nextjs.png'
import git from '../public/assets/img/github.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[skyblue] font-bold'>Skills</p>
            <h2 className='py-4'>What I've Used</h2>
            <div className='grid md:grid-cols2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={css} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={java} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={python} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={git} alt='/' width='64px' height='64px'/>
                        </div>
                        <div className=''>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills