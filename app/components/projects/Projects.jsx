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
    githubLink: "https://github.com/teyuu/clinica-nov-kinessfe",
    techs:"React, Tailwind CSS, NextJS"
  },
  {
    id: 2,
    imagePath: "/images/project-2.png",
    projectName: "CineFilm",
    link: "https://movies-nextjs13.vercel.app/",
    githubLink: "https://github.com/teyuu/movies_nextjs13",
    techs:"React, NextJS, Tailwind CSS"
  },
  {
    id: 3,
    imagePath: "/images/project-3.png",
    projectName: "Todos App",
    link: "https://todos-nextjs14-typescript-tailwind.vercel.app/",
    githubLink: "https://github.com/teyuu/todos-nextjs14-typescript-tailwind",
    techs:"React, NextJS, Tailwind CSS, Typescript, Framer-motion"
  },
  {
    id: 4,
    imagePath: "/images/project-4.png",
    projectName: "CoinPlus",
    link: "https://coin-plus.vercel.app/",
    githubLink: "https://github.com/teyuu/CoinPlus",
    techs:"React, Redux ToolKit, Bootstrap, Auth0, Node, Express, Typescript, MongoDB, Solidity"
  },
  {
    id: 5,
    imagePath: "/images/promptopia.png",
    projectName: "Promptopia - Share Prompts",
    link: "https://project-promptopia-one-opal.vercel.app/",
    githubLink: "https://github.com/teyuu/project_promptopia",
    techs:"Javascript, NextJS, NextAuth, Tailwind CSS, MongoDB"
  },
  {
    id: 6,
    imagePath: "/images/modern-web.png",
    projectName: "Travel App - Modern UI/UX Website",
    link: "https://travel-app-wine-psi.vercel.app/",
    githubLink: "https://github.com/teyuu/travel_app",
    techs:"NextJS, Tailwind CSS, Typescript"
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
      <motion.div className={titleContainer} {...animationVariants}  whileHover={{ scale: 1.2 }}>
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
