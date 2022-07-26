import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = ({title, backgroundImg, tool, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[lightblue] to-[skyblue] ease-in duration-200'>
    <Image src={backgroundImg} alt='/' className='rounded-xl group-hover:opacity-5 ease-in duration-200' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in duration-200'>
        <h3 className='text-2xl text-[aliceblue] tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-[aliceblue] text-center'>{tool}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-[aliceblue] text-gray-700 font-bold text-lg cursor-pointer hover:opacity-70 ease-in duration-200'>See Project</p>
        </Link>
    </div>
</div>
  )
}

export default Project