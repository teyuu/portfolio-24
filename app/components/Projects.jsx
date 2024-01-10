import React from "react";
import { containerCenter, h2Title, titleContainer } from "./tailwindClasses";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { getAnimationVariants } from "./FramerMotionVariants";


const projects = [
  {
    id:1,
    imagePath: "/images/project-1.png",
  },
  {
    id:2,
    imagePath: "/images/project-2.png",
  },
  {
    id:3,
    imagePath: "/images/project-3.png",
  },
];



const ProjectCards = ({ imagePath }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative h-auto w-full">
        <Image
          src={imagePath}
          width={300}
          height={0}
          alt="project"
        />
      </div>
      
      <div className="flex gap-3 text-white w-full text-center text-sm">
        <button className="rounded-full bg-black p-3 w-[150px]">Github</button>
        <button className="rounded-full bg-black p-3 w-[150px] ">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export const Projects = () => {
  const animationVariants = getAnimationVariants();
  return (
    <section className={containerCenter}>
      {/* Title */}
      <motion.div className={titleContainer} {...animationVariants}>
        <p>Browse my recent</p>
        <h2 className={h2Title}>Projects</h2>
      </motion.div>

      {/* Cards container */}
      
      <motion.div className="flex flex-col lg:flex-row justify-evenly gap-5 w-full ">
      <AnimatePresence>
        {projects.map((e, index) => (
          <motion.div
            className="w-full lg:w-fit border-2 rounded-3xl p-5 flex flex-col justify-evenly items-center gap-3"
            key={e.id}
            initial={{
              opacity:0,
              y:500
            }}
            whileInView={{
              opacity:1,
              y:0,
              transition: {duration:0.5, delay: index * 0.2}
            }}
            viewport={{once:true}}
          >
            <ProjectCards imagePath={e.imagePath} />
          </motion.div>
        ))}
            </AnimatePresence>
      </motion.div>
    </section>
  );
};
