import React from 'react'
import {containerCenter, titleCointaer, h2Title} from "./tailwindClasses"
import {  FaLinkedin  } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


export const Contact = () => {
  return (
    <section className='container mx-auto h-auto lg:h-[80vh] flex flex-col justify-center gap-5 items-center px-3 py-5'>

      {/* Title */}
      <div className={titleCointaer}>
        <p>Get in touch</p>
        <h2 className={h2Title}>Contact me</h2>
      </div>

      {/* Conctact card */}
      <div className='flex justify-around w-full xl:w-2/4 p-5 rounded-full border-2 text-xl '>
        <div className='flex items-center gap-2'>
          <IoMail/>
          <p>tellini.matias@gmail.com</p>
        </div>
        <div className='flex items-center gap-2'>
          <FaLinkedin/>
          <p>Linkedin</p>
        </div>
      </div>
      
    </section>
  )
}
