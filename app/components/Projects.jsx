import React from 'react'
import {containerCenter, h2Title, titleCointaer} from "./tailwindClasses"
import Image from 'next/image'


const projects = [
  {
    imagePath:'/images/project-1.png'
  },
  {
    imagePath:'/images/project-2.png'
  },
  {
    imagePath:'/images/project-3.png'
  }

]

const ProjectCards = ({imagePath}) =>{
  return(
    <div className='w-full lg:w-[33%] border-2 rounded-3xl p-5 flex flex-col justify-evenly items-center gap-3'>
      <div className='relative h-[40vh] w-full'>
        <Image src={imagePath} fill style={{objectFit:'contain'}} alt='project'/>
      </div>
      <p></p>
      <div className='space-x-3 text-white w-full text-center text-sm'>
        <button className='rounded-full bg-black p-3 w-[150px]'>Github</button>
        <button className='rounded-full bg-black p-3 w-[150px] '>Live Demo</button>
      </div>
    </div>
  )
}

export const Projects = () => {
  return (
    <section className={containerCenter}>

      {/* Title */}
      <div className={titleCointaer}>
        <p>Browse my recent</p>
        <h2 className={h2Title}>Projects</h2>
      </div>

      {/* Cards container */}
      <div className='flex flex-col lg:flex-row gap-5 w-full '>
        {
          projects.map((e,index)=>(
            <ProjectCards key={index} imagePath={e.imagePath}/>
          ))
        }
      </div>
    </section>
  )
}
