import React, { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

function Parallax({ type }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]); 
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 


  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background: type === 'services'
          ? 'background: linear-gradient(180deg, #111132, #111132)'
          : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>{type === 'services' ? 'Work I do?' : 'My Recent Work?'}</motion.h1>
      {/* <motion.div className="mountains" /> */}
      {/* <motion.div  className="planets" style={{ y:yBg, backgroundImage: `url(${type==='services' ? '/planets.png' : "/sun.png"})`}} /> */}
      <motion.div style={{x:yBg}} className="stars" />
    </div>
  );
}

export default Parallax;
