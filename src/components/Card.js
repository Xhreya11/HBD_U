// src/components/Card.js
import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';
import './AnimatedGIF';


const Card = () => {
  const rand = ["#940B92"	,
    "#FF0080",
    "#FFE5AD",
    "#D80032",
    "#241468"]

  let no1 = Math.floor((Math.random() * 5));
  let no2 = Math.floor((Math.random() * 5));
  console.log(no1)
  console.log(no2)

  return (
    <div className='card'>
      <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10}}
      >
      <h1>Happy Birthday Umika!</h1>
      </motion.div>
      <p>I <span className='rand' style={{color:rand[no1]}}> wish </span> you all the <span className='rand' style={{color:rand[no2]}}> happy moments</span> and growth in your life.</p>
        {/* <AnimatedGIF className='gif' src={cakegif} alt="GIF"/> */}       
    </div>
  );
};

export default Card;