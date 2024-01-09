import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { containerCenter, titleCointaer } from "./tailwindClasses";

const frontEndTechologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Typescript",
  "NextJS",
];

const TechCard = ({ title }) => {
  return (
    <div className="w-full border-2 p-5 rounded-3xl space-y-3">
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
    </div>
  );
};

export const Technologies = () => {
  return (
    <section className={containerCenter}>
      
        {/* Title */}
        <div className={titleCointaer}>
          <span>Explore my</span>
          <h2 className="text-4xl lg:text-5xl font-semibold">Experience</h2>
        </div>

        {/* Cards  */}
        <div className="flex flex-col lg:flex-row gap-5 w-full justify-evenly">
          <TechCard title="Frontend Technologies" />
          <TechCard title="Backend Technologies" />
        </div>
     
    </section>
  );
};
