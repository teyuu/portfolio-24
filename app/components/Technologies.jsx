import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { containerCenter, titleContainer } from "./tailwindClasses";
import { getAnimationVariants } from "./FramerMotionVariants";
import { motion } from "framer-motion";

const frontEndTechologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Typescript",
  "NextJS",
];

const TechCard = ({ title }) => {
  const animationVariants = getAnimationVariants();
  return (
    <motion.div className="w-full border-2 p-5 rounded-3xl space-y-3" {...animationVariants}>
      <p className="text-center text-2xl font-semibold text-gray-600">
        {title}
      </p>

      <div className=" flex justify-center flex-wrap">
        {frontEndTechologies.map((e, index) => (
          <div
            key={index}
            className="flex items-center justify-start w-[50%] lg:w-[25%] h-14 gap-5"
          >
            <PiSealCheckFill size={25} />
            <p> {e}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const Technologies = () => {
  const animationVariants = getAnimationVariants();
  return (
    <section className={containerCenter}>
      
        {/* Title */}
        <motion.div className={titleContainer} {...animationVariants}>
          <span>Explore my</span>
          <h2 className="text-4xl lg:text-5xl font-semibold">Experience</h2>
        </motion.div>

        {/* Cards  */}
        <motion.div className="flex flex-col lg:flex-row gap-5 w-full justify-evenly" >
          <TechCard title="Frontend Technologies" />
          <TechCard title="Backend Technologies" />
        </motion.div>
     
    </section>
  );
};
