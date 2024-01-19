import React from "react";

import { motion } from "framer-motion";
import Link  from "next/link";

const navLinks = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

export const Footer = () => {
  return (
    <section className="w-full lg:h-[20vh] flex flex-col justify-center items-center gap-3">
      <ul className="flex flex-col lg:flex-row w-fit gap-5 text-2xl py-5">
        {navLinks.map((e) => (
           <Link key={e.title} href={e.link}>
           <motion.li 
           whileHover={{
             textShadow:'#59E4A8 1px 0 10px',
             cursor:'pointer',
             scale:1.1
             
           }} 
           >
             {e.title}
           </motion.li>
           </Link>
        ))}
      </ul>

      <p className="text-center ">
        Copyright © 2024 Matías Tellini. All Rights Reserved.
      </p>
    </section>
  );
};
