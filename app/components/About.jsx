"use client";
import Image from "next/image";
import { GiAchievement } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { getAnimationVariants } from "./FramerMotionVariants";
import {
  containerCenter,
  h2Title,
  titleContainer,
  cardContainer,
} from "./tailwindClasses";

const Card = ({ icon, title, text1, text2 }) => {
  return (
    <div className="w-full flex flex-col items-center gap-3 border-gray-400 border-2 dark:bg-gray-800 dark:text- rounded-3xl py-2 text-center">
      <p className="text-3xl">{icon}</p>
      <p className=" font-bold">{title}</p>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

export const About = () => {
  const animationVariants = getAnimationVariants();

  return (
    <motion.section id="about" className={containerCenter}>
      <motion.div
        className={titleContainer}
        {...animationVariants}
        whileHover={{ scale: 1.2 }}
      >
        <span>Get to know more</span>
        <h2 className={h2Title}>About me</h2>
      </motion.div>

      <div className="h-2/3 flex flex-col lg:flex-row items-center gap-10 ">
        <motion.div className="h-auto w-3/4 md:w-full" {...animationVariants}>
          <Image
            src="/images/computer.png"
            alt="computer"
            width={800}
            height={400}
          />
        </motion.div>

        <div className="flex flex-col justify-between h-3/5">
          <motion.div className={cardContainer} {...animationVariants}>
            <Card
              icon={<GiAchievement />}
              title="Experience"
              text1="+2 years"
              text2="Developing Full Stack Web Projects"
            />
            <Card
              icon={<IoPeopleSharp />}
              title="Education"
              text1="Bootcamp Full Stack en Henry"
              text2="More than 700 hours of theoretical-practical training"
            />
          </motion.div>
          <motion.p
            className="mt-5 leading-relaxed text-md "
            {...animationVariants}
          >
            I am a <span className="font-bold">Full Stack developer</span>. My
            education includes an intensive Bootcamp at Henry, where I gained
            over{" "}
            <span className="font-bold">
              700 hours of theoretical and hands-on training.
            </span>{" "}
            Additionally, I have successfully contributed to multiple projects
            as a Freelance Developer, delivering high-quality solutions and
            collaborating effectively with clients and teams. I have further
            enhanced my skills through various programming courses,
            demonstrating my commitment to continuous learning and staying
            updated with the latest industry trends.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};
