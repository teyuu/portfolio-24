"use client";
import Image from "next/image";
import { GiAchievement } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { containerCenter, h2Title, titleCointaer } from "./tailwindClasses";
import { motion } from "framer-motion";



const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration:0.5,
      delay:0.5,
      ease: 'easeOut',
    }
  },
};

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
  return (
    <motion.section className={containerCenter} >
      <motion.div
        className={titleCointaer}
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
      >
        <span>Get to know more</span>
        <h2 className={h2Title}>About me</h2>
      </motion.div>

      {/* Image,cards and text container */}
      <div className="h-2/3 flex flex-col lg:flex-row items-center gap-10 ">
        {/* Image Container */}
      <motion.div 
      className="h-[300px] w-2/4" 
      variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
      >
        <Image
          src="/images/computer.png"
          alt="computer"
          width={300}
          height={0}
          
        />
      </motion.div>

        {/* Cards and text container */}
        <div className="flex flex-col justify-between  h-3/5" >
          <motion.div className="cardConainters flex flex-col md:flex-row gap-4 " variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate">
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
          <motion.p className="mt-5" variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate">
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

{
  /* <div className="h-full w-full  flex items-center">
            variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
            <div className="flex justify-center w-[30%]">
              <Image
                src="/images/computer.png"
                alt="computer"
                width={300}
                height={500}
              />
            </div>

            <div className="flex flex-col border-4  w-[70%]">
              <div className="flex  items-center gap-10">
                <div className="flex flex-col  gap-3 border-2 rounded-3xl w-1/2 h-fit text-center py-4">
                  <div className="flex justify-center">
                    <SlBadge />
                  </div>
                  <p>Experience</p>
                  <p>+2years experience</p>
                  <p>FullStack Developer</p>
                </div>
                <div className="flex flex-col gap-3 border-2 rounded-3xl w-1/2 h-fit text-center py-4">
                  <div className="flex justify-center">
                    <SlBadge />
                  </div>
                  <p>Education</p>
                  <p>Bsc bachaelos degres</p>
                  <p>cs master degree</p>
                </div>
              </div>
              <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus
                sint delectus velit in eos quo officiis explicabo deleniti
                dignissimos. Eligendi illum libero dolorum cum laboriosam
                corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>*/
}
