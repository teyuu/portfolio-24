import React from "react";
import { navLinks } from "./Navbar/Navlinks";

export const Footer = () => {
  return (
    <section className="w-full lg:h-[20vh] flex flex-col justify-center items-center gap-3">
  
        <ul className="flex flex-col lg:flex-row w-fit gap-5 text-2xl py-5">
          {navLinks.map((e) => (
            <li key={e.title}>{e.title}</li>
          ))}
        </ul>
  
    
        <p className="text-center ">
        Copyright © 2023 Matías Tellini. All Rights Reserved.
        </p>
   
    </section>
  );
};
