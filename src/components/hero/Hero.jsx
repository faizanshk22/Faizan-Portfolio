import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';
import resume from '../../assets/FaizanCV.pdf';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat: Infinity, 
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>
            FAIZAN SHEIKH
          </motion.h2>
          <motion.h1 variants={textVariants}>Web Developer and SEO Expert</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href={resume} download="resume">
              <motion.button variants={textVariants}>
                Download Resume
              </motion.button>
            </a>
            {/* <a href="/about" target="_blank" rel="noopener noreferrer">
              <motion.button variants={textVariants}>
                About Me
              </motion.button>
            </a> */}
            {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
          </motion.div>
          <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTexContainer" variants={sliderVariants} initial="initial" animate="animate">
        Developer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/Hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
