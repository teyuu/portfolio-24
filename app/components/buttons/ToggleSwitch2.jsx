"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";



const ToggleSwitch2 = () => {

    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = ()=>{
        setIsOn(!isOn)
    }
 
  return (
    <div className="container" onClick={toggleSwitch}>
      <div className={`w-14 h-8 p-1 text-lg rounded-full ${isOn ?' bg-green-500' : 'bg-gray-400' } ` }>
        <motion.div 
        className="w-6 h-6 rounded-full bg-white flex items-center justify-center" 
        initial={false}
        animate={{x: isOn ? '100%' : '0'}}
        transition={{type:'spring', stiffness:300, damping:20}}
        >
        {isOn ? <FaMoon/> : <GoSun/>}
        </motion.div> 
      </div>
    </div>
  );
};

export default ToggleSwitch2;
