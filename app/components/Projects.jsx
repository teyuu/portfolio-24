import React from "react";
import { h2Title, titleContainer } from "./tailwindClasses";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAnimationVariants } from "./FramerMotionVariants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// Componentes personalizados para las flechas
const NextArrow = ({ onClick, className }) => (
  <FaArrowAltCircleRight
    className={className}
    onClick={onClick}
    color="black"
  />
);

const PrevArrow = ({ onClick, className }) => (
  <FaArrowAltCircleLeft className={className} onClick={onClick} color="black" />
);

const projects = [
  {
    id: 1,
    imagePath: "/images/project-1.png",
    projectName: "Clinica Kinessfe",
  },
  {
    id: 2,
    imagePath: "/images/project-2.png",
    projectName: "CineFilm",
  },
  {
    id: 3,
    imagePath: "/images/project-3.png",
    projectName: "Todos App",
  },
  {
    id: 4,
    imagePath: "/images/project-4.png",
    projectName: "CoinPlus",
  },
];

const ProjectCards = ({ imagePath, name }) => {
  return (
    <div className="flex flex-col gap-5 w-fit text-center xl:mx-auto mx-5">
      <h2 className="text-xl uppercase font-bold border-b-2 bg-slate-400 text-white shadow-lg">
        {name}
      </h2>

      <div className="relative h-auto w-[450px]">
        <Image
          src={imagePath}
          width={400}
          height={300}
          alt="Imagen de un proyecto"
          className="rounded-xl"
          layout="responsive"
          
        />
      </div>

      <div className="flex justify-center gap-3 text-white w-full text-center text-sm">
        <button className="rounded-full bg-black p-3 w-[150px] ">Visit</button>
        <button className="rounded-full bg-black p-3 w-[150px]">Github</button>
      </div>
    </div>
  );
};

export const Projects = () => {
  const animationVariants = getAnimationVariants();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de tarjetas visibles a la vez
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Flecha derecha personalizada
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="container mx-auto h-auto lg:h-[80vh] flex flex-col justify-around"
    >
      {/* Title */}
      <motion.div className={titleContainer} {...animationVariants}>
        <p>Browse my recent</p>
        <h2 className={h2Title}>Projects</h2>
      </motion.div>

      {/* Cards container */}

      <Slider {...settings}>
        {projects.map((e, index) => (
          <motion.div key={e.id}>
            <ProjectCards imagePath={e.imagePath} name={e.projectName} />
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};
