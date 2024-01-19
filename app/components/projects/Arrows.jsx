// components/Arrows.js
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const NextArrow = ({ onClick, className }) => (
  <FaArrowAltCircleRight
    className={className}
    onClick={onClick}
    color="black"
  />
);

export const PrevArrow = ({ onClick, className }) => (
  <FaArrowAltCircleLeft className={className} onClick={onClick} color="black" />
);
