"use client";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "./FramerMotionVariants";

export const Hero = () => {
  return (
    <section className="h-[80vh] flex items-center">
      <div className="container mx-auto h-fit w-[80%] flex  justify-center items-center gap-20">
        <motion.div variants={fadeInAnimationVariant} initial="initial" whileInView="animate"  viewport={{once:true}} >
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
              variants={fadeInAnimationVariant} initial="initial" whileInView="animate" viewport={{once:true}}
              className="text-4xl lg:text-5xl font-semibold "
            >
              Matías Tellini
            </motion.span>
            <span className="text-2xl font-semibold text-gray-500">
              Full Stack Developer
            </span>
          </div>

          <div className="flex flex-col items-center gap-5">
            <button className="rounded-full w-fit border p-4 bg-black  text-white text-sm">
              Contact Info
            </button>
            <div className="text-4xl space-x-2">
              <button>
                <FaGithub />
              </button>
              <button>
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
