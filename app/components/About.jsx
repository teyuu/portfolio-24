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
    <div className="w-full flex flex-col items-center gap-3 border-gray-400 border-2 rounded-3xl py-2 text-center">
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
    <motion.section className={containerCenter}>
      <motion.div className={titleContainer} {...animationVariants}>
        <span>Get to know more</span>
        <h2 className={h2Title}>About me</h2>
      </motion.div>

      <div className="h-2/3 flex flex-col lg:flex-row items-center gap-10 ">
        <motion.div className="h-[300px] w-2/4" {...animationVariants}>
          <Image src="/images/computer.png" alt="computer" width={300} height={300} />
        </motion.div>

        <div className="flex flex-col justify-between h-3/5">
          <motion.div className={cardContainer} {...animationVariants}>
            <Card
              icon={<GiAchievement />}
              title="Experience"
              text1="2+ years"
              text2="Frontend Development"
            />
            <Card
              icon={<IoPeopleSharp />}
              title="Education"
              text1="2+ years"
              text2="Frontend Development"
            />
          </motion.div>
          <motion.p className="mt-5" {...animationVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};


