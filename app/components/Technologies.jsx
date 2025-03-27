import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { containerCenter, titleContainer } from "./tailwindClasses";
import { getAnimationVariants } from "./FramerMotionVariants";
import { motion } from "framer-motion";

const technologyList = [
  {
    title: "Frontend Technologies",
    technologies: [
      "React",
      "React Native",
      "Typescript",
      "NextJS 15",
      "Redux / Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Technologies",
    technologies: [
      "JavaScript (ES6+)",
      "Node",
      "Express",
      "NestJS",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
];

const TechCard = ({ title, technologies, index }) => {
  return (
    <motion.div
      className="w-full border-2 p-5 rounded-3xl space-y-3"
      initial={{
        opacity: 0,
        y: "100%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.5 },
      }}
      viewport={{ once: true }}
    >
      <p className="text-center text-2xl font-semibold text-gray-600 dark:bg-gray-800 dark:text-white rounded-lg">
        {title}
      </p>

      <div className="flex justify-center flex-wrap">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-start w-[50%] lg:w-[25%] h-14 gap-3"
          >
            {/* Fixed-width container for the icon */}
            <motion.div
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:zoom-out-50"
              whileHover={{
                scale: 1.1,
              }}
            >
              <PiSealCheckFill size={25} color="#4ade80" />
            </motion.div>
            <p className=" text-gray-600 dark:text-white">{tech}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const Technologies = () => {
  const animationVariants = getAnimationVariants();
  return (
    <section id="experience" className={containerCenter}>
      {/* Title */}
      <motion.div
        className={titleContainer}
        {...animationVariants}
        whileHover={{ scale: 1.2 }}
      >
        <span>Explore my</span>
        <h2 className="text-4xl lg:text-5xl font-semibold">Experience</h2>
      </motion.div>

      {/* Cards */}
      <motion.div className="flex flex-col lg:flex-row gap-5 w-full justify-evenly">
        {technologyList.map((e, index) => (
          <TechCard
            key={index}
            title={e.title}
            index={index}
            technologies={e.technologies}
          />
        ))}
      </motion.div>
    </section>
  );
};
