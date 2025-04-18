import React from "react";
import { navLinks } from "./navbar/navLinks.js"
import { motion } from "framer-motion";
import Link  from "next/link";

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
        Copyright © 2025 Matías Tellini. All Rights Reserved.
      </p>
    </section>
  );
};
