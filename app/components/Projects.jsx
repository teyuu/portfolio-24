import React from "react";
import { containerCenter, h2Title, titleContainer } from "./tailwindClasses";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <div>
      <div className="relative h-[40vh] w-full">
        <Image
          src={imagePath}
          fill
          style={{ objectFit: "contain" }}
          alt="project"
        />
      </div>
      <p></p>
      <div className="space-x-3 text-white w-full text-center text-sm">
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
      <motion.div className="flex flex-col lg:flex-row gap-5 w-full ">
        {projects.map((e, index) => (
          <motion.div
            className="w-full lg:w-[33%] border-2 rounded-3xl p-5 flex flex-col justify-evenly items-center gap-3"
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
      </motion.div>
    </section>
  );
};
