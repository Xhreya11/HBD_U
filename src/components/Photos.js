// src/components/Photos.js
import React from 'react';
import './Photos.css';
import { motion } from 'framer-motion';
import { useState } from "react";
import Memo1 from '../assets/memo1.jpeg';
import Memo2 from '../assets/memo2.jpeg';
import Memo3 from '../assets/memo3.jpeg';
import Memo4 from '../assets/memo4.jpeg';
import Memo5 from '../assets/memo5.jpeg';

const Photos = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [Memo1, Memo2, Memo3, Memo4, Memo5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="full-screen-center">
      <h1> OUR MEMORIES</h1>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="slider-image"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        />
      ))}
      <div className="button-container">
        <button className="custom-button" onClick={handleBack}>
          Back
        </button>
        <button className="custom-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Photos;