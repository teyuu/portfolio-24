import React from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import ToggleSwitch2 from "../buttons/ToggleSwitch2";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};


export const MobileMenu = ({ navLinks, toggleMenu }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className=" lg:hidden h-screen w-full top-0  fixed bg-black text-white uppercase z-50 overflow-hidden"
    >
      <div className="container mx-auto w-full flex items-center py-8 justify-around">
        <div className="opacity-0">
          <h1 className="text-3xl">MT</h1>
        </div>
        <motion.button whileTap={{ scale: 1.2}} className="text-4xl border-2 rounded-full" onClick={toggleMenu}>
          <MdClose />
        </motion.button >
      </div>
      <motion.div
        variants={mobileLinkVars}
        initial="initial"
        animate="open"
        className="h-3/4 flex justify-beetween items-center"
      >
        <ul className="w-full flex flex-col lg:flex-row items-center text-2xl gap-10">
          {navLinks.map((e) => (
            <Link  key={e.title} href={e.link}>
            <motion.li onClick={toggleMenu} whileTap={{ scale: 1.2}}>{e.title}</motion.li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
