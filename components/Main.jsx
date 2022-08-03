import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center pb-16'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-600'>
                    Hi, I'm <span className='text-[#add8e6]'>Daniel</span>
                </h1>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/dlduan/">
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href="https://github.com/potofuu">
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:ed3c7401-aa39-4826-b038-f10a8f780522'>
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </a>
                    <a href="mailto:dduan6@gatech.edu">
                        <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main