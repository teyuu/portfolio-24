"use client";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence, spring } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import ToggleSwitch2 from "../buttons/ToggleSwitch2";
import { navLinks } from "./Navlinks";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="lg:h-[14ch] flex items-center py-8">
        <div className="container mx-auto flex justify-around">
          {/* Titulo */}
          <div>
            <h1 className="text-4xl hover:cursor-pointer ">MT</h1>
          </div>

          {/*NavLinks Items */}
          <div className="hidden lg:flex">
            <ul className="w-full flex flex-col lg:flex-row items-center text-2xl gap-10 ">
              {navLinks.map((e) => (
                <motion.li 
                whileHover={{
                  textShadow:'#FC0 1px 0 10px',
                  cursor:'pointer',
                  scale:1.1
                  
                }} 
                key={e.title}>
                  {e.title}
                </motion.li>
              ))}
              <div>
                <ToggleSwitch2 />
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

export default NavBar;
