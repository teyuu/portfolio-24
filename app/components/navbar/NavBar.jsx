"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { motion, AnimatePresence, spring } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import ToggleSwitch2 from "../buttons/ToggleSwitch2";
import { navLinks } from "./navLinks.js";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="lg:h-[14ch] flex items-center py-8">
        <div className="container mx-auto flex justify-around">
          {/* Titulo */}
          <motion.div whileHover={{
                  textShadow:'#59E4A8 1px 0 10px',
                  cursor:'pointer',
                  scale:1.1
                  
                }} >
            <h1 className="text-4xl  hover:cursor-pointer ">MT</h1>
          </motion.div >

          {/*NavLinks Items */}
          <div className="hidden lg:flex">
            <ul className="w-full flex flex-col lg:flex-row items-center text-2xl gap-10 ">
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
              <div>
                <ThemeToggle/>
              </div>
            </ul>
          </div>

          {/*Boton Menu hamburguesa */}
          <div className="lg:hidden">
            <button className="flex items-center text-4xl" onClick={toggleMenu}>
              <MdMenu />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && <MobileMenu navLinks={navLinks} toggleMenu={toggleMenu} />}
        </AnimatePresence>
      </nav>
    </header>
  );
};
