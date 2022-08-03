import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import twitterProj from '../public/assets/img/twitter-project.png'
import Project from './Project';
import personalWebProj from '../public/assets/img/personalwebsite.png'
import mapProj from '../public/assets/img/socioeconomicmap.png'
import chessProj from '../public/assets/img/chess-project.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-24'>
            <p className='text-xl tracking-widest uppercase text-[skyblue] font-bold'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <Project title='Chess Webapp' backgroundImg={chessProj} tool='Work in Progess' projectUrl='/#projects'/>
            <Project title='Twitter Clone' backgroundImg={twitterProj} tool='Next.js' projectUrl='https://twitter-clone-chi-orcin.vercel.app/'/>
            <Project title='Personal Website' backgroundImg={personalWebProj} tool='Next.js' projectUrl='https://twitter-clone-chi-orcin.vercel.app/'/>
            <Project title='Regional Socioeconomic Prediction Map' backgroundImg={mapProj} tool='React + D3.js' projectUrl='https://github.com/gt-big-data/regional-socioeconomic'/>

            </div>
        </div>
    </div>
  );
};

export default Projects