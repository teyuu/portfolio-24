"use client";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";



const fadeInImageAnimationVariant ={
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration:0.5,
      delay:0.5,
      ease: 'easeOut',
    }
  },
}
const fadeInTitleAnimationVariant ={
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration:0.5,
      delay:0.05,
      ease: 'easeOut',
    }
  },
}

export const Hero = () => {
  return (
    <section className="h-[80vh] flex items-center">
      <div className="container mx-auto h-fit w-[80%] flex  justify-center items-center lg:gap-20">
        <motion.div  variants={fadeInImageAnimationVariant} initial="initial" animate="animate" viewport={{once:true}} >
          <Image
            src="/images/profilepic.png"
            alt=""
            className="hidden lg:flex"
            width={400}
            height={0}
          
          />
        </motion.div>

        <div className="h-2/5 w-fit flex flex-col text-center justify-between gap-4">
          <div className="flex flex-col gap-5">
            <span className="text-lg">Hello, I&apos;m</span>
            <motion.span
              variants={fadeInTitleAnimationVariant} initial="initial" animate="animate" viewport={{once:true}} 
              className="text-4xl lg:text-5xl font-semibold "
            >
              Matías Tellini
            </motion.span>
            <span className="text-2xl font-semibold text-gray-500">
              Full Stack Developer
            </span>
          </div>

          <div className="flex flex-col items-center gap-5">
            <button className="rounded-full bg-black p-3 w-[150px] text-white">
              Contact Info
            </button>
            <div className="text-4xl space-x-2">
              <Link href='https://github.com/teyuu' target="_blank">
              <button>
                <FaGithub />
              </button>
              </Link>
              <Link href='https://www.linkedin.com/in/matias-tellini-12a705232/'target="_blank">
              <button>
                <FaLinkedin />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
