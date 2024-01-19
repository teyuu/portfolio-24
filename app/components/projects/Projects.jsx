import React from "react";
import { h2Title, titleContainer } from "../tailwindClasses";
import { motion } from "framer-motion";
import { getAnimationVariants } from "../FramerMotionVariants";
import { ProjectsSlider } from "./ProjectSlider";

const projects = [
  {
    id: 1,
    imagePath: "/images/project-1.png",
    projectName: "Clinica Kinessfe",
    link: "https://www.clinicakinessfe.com.ar/",
    githubLink: "https://github.com/teyuu/clinica-nov-kinessfe"
  },
  {
    id: 2,
    imagePath: "/images/project-2.png",
    projectName: "CineFilm",
    link: "https://movies-nextjs13.vercel.app/",
    githubLink: "https://github.com/teyuu/movies_nextjs13"
  },
  {
    id: 3,
    imagePath: "/images/project-3.png",
    projectName: "Todos App",
    link: "https://todos-nextjs14-typescript-tailwind.vercel.app/",
    githubLink: "https://github.com/teyuu/todos-nextjs14-typescript-tailwind"
  },
  {
    id: 4,
    imagePath: "/images/project-4.png",
    projectName: "CoinPlus",
    link: "https://coin-plus.vercel.app/",
    githubLink: "https://github.com/teyuu/CoinPlus"
  },
];

export const Projects = () => {
  const animationVariants = getAnimationVariants();

  return (
    <section
      id="projects"
      className=" container mx-auto h-auto lg:h-[80vh] flex flex-col justify-around p-5"
    >
      {/* Title */}
      <motion.div className={titleContainer} {...animationVariants}>
        <p>Browse my recent</p>
        <h2 className={h2Title}>Projects</h2>
      </motion.div>

      {/* Cards container */}
      <motion.div {...animationVariants}>
        <ProjectsSlider projects={projects} />
      </motion.div>
    </section>
  );
};
