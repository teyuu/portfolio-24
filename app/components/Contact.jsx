import React from 'react'
import {containerCenter, titleContainer, h2Title} from "./tailwindClasses"
import {  FaLinkedin  } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { getAnimationVariants } from './FramerMotionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';


export const Contact = () => {
  const animationVariants = getAnimationVariants();
  return (
    <section id='contact' className={`${containerCenter} `} >
    
    <motion.div className='w-full flex flex-col items-center gap-5' {...animationVariants}>

      {/* Title */}
      <div className={titleContainer}>
        <p>Get in touch</p>
        <h2 className={h2Title}>Contact me</h2>
      </div>

      {/* Conctact card */}
      <div className='flex flex-col lg:flex-row justify-around items-center gap-3 w-full xl:w-2/4 p-5 rounded-full border-2 text-xl'>
        <div className='flex items-center gap-2'>
          <IoMail/>
          <p>tellini.matias@gmail.com</p>
        </div>
          <Link href='https://www.linkedin.com/in/matias-tellini-12a705232/' target="_blank">
        <div className='flex items-center gap-2'>
          <FaLinkedin/>
          <p>Linkedin</p>
        </div>
          </Link>
      </div>
    </motion.div>
      
    </section>
  )
}
