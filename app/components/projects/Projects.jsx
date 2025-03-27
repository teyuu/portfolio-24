import React from "react";
import { h2Title, titleContainer } from "../tailwindClasses";
import { motion } from "framer-motion";
import { getAnimationVariants } from "../FramerMotionVariants";
import { ProjectsSlider } from "./ProjectSlider";

const projects = [
  {
    imagePath: "/images/blog-app.png",
    projectName: "DevBlog - CRUD",
    link: "https://blog-app-nextjs15.vercel.app",
    githubLink: "https://github.com/teyuu/blog-app-nextjs15",
    techs:
      "Next.js, React, Typescript, Prisma, Kinde Auth, Tailwind CSS, Shadcn UI",
    mobileApp: false,
  },
  {
    imagePath: "/images/nexcommerce.png",
    projectName: "Nexcommerce - Shop",
    link: "https://ecommerce-nextjs15-ruby.vercel.app",
    githubLink: "https://github.com/teyuu/ecommerce-nextjs15",
    techs: "Next.js, Sanity.io, Stripe, Tailwind CSS , Shadcn UI",
    mobileApp: false,
  },
  {
    imagePath: "/images/movies.png",
    projectName: "MoviesApp - React Native",
    link: "https://ecommerce-nextjs15-ruby.vercel.app",
    githubLink: "https://github.com/teyuu/ecommerce-nextjs15",
    techs: "Next.js, Sanity.io, Stripe, Tailwind CSS , Shadcn UI",
    mobileApp: true,
  },
  {
    imagePath: "/images/todo-mobile.png",
    projectName: "Todos App - React Native",
    link: "https://ecommerce-nextjs15-ruby.vercel.app",
    githubLink: "https://github.com/teyuu/ecommerce-nextjs15",
    techs: "Next.js, Sanity.io, Stripe, Tailwind CSS , Shadcn UI",
    mobileApp: true,
  },
  {
    imagePath: "/images/project-1.png",
    projectName: "Clinica Kinessfe",
    link: "https://clinicakinessfe.vercel.app",
    githubLink: "https://github.com/teyuu/clinica-nov-kinessfe",
    techs: "React, Tailwind CSS, NextJS",
    mobileApp: false,
  },
  {
    imagePath: "/images/project-2.png",
    projectName: "CineFilm",
    link: "https://movies-nextjs13.vercel.app/",
    githubLink: "https://github.com/teyuu/movies_nextjs13",
    techs: "React, NextJS, Tailwind CSS",
    mobileApp: false,
  },
  {
    imagePath: "/images/project-3.png",
    projectName: "Todos App",
    link: "https://todos-nextjs14-typescript-tailwind.vercel.app/",
    githubLink: "https://github.com/teyuu/todos-nextjs14-typescript-tailwind",
    techs: "React, NextJS, Tailwind CSS, Typescript, Framer-motion",
    mobileApp: false,
  },
  {
    imagePath: "/images/project-4.png",
    projectName: "CoinPlus",
    link: "https://coin-plus.vercel.app/",
    githubLink: "https://github.com/teyuu/CoinPlus",
    techs:"React, Redux ToolKit, Bootstrap, Auth0, Node, Express, Typescript, MongoDB, Solidity",
    mobileApp: false,
  },
  {
    imagePath: "/images/promptopia.png",
    projectName: "Promptopia - Share Prompts",
    link: "https://project-promptopia-one-opal.vercel.app/",
    githubLink: "https://github.com/teyuu/project_promptopia",
    techs: "Javascript, NextJS, NextAuth, Tailwind CSS, MongoDB",
    mobileApp: false
  },
  {
    imagePath: "/images/modern-web.png",
    projectName: "Travel App - Modern UI/UX",
    link: "https://travel-app-wine-psi.vercel.app/",
    githubLink: "https://github.com/teyuu/travel_app",
    techs: "NextJS, Tailwind CSS, Typescript",
    mobileApp: false
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
      <motion.div
        className={titleContainer}
        {...animationVariants}
        whileHover={{ scale: 1.2 }}
      >
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
