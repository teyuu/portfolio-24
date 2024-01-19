// ProjectsSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSlider = ({ projects }) => {
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
        autoplay: true,
      
        className: "mx-3",
  };

  return (
    <Slider {...settings}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          imagePath={project.imagePath}
          name={project.projectName}
          link={project.link}
          githubLink={project.githubLink}
        />
      ))}
    </Slider>
  );
};
