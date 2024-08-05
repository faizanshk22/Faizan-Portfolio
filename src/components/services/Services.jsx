import React, { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },  
}

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const scrollToContact = () => {
    scroll.scrollTo(document.getElementById('Contact').offsetTop, {
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={"animate"}>
      <motion.div className='textContainer' variants={variants}>
        <p>I assist you to grow your business <br /> and move forward</p>    
        <hr />
      </motion.div> 
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="people.jpg" alt="" />
          <h1><motion.b whileHover={{ color: "#FF7F50" }}>Quirky </motion.b>Ideas</h1>
        </div>
        <div className="title">
          <h1><motion.b whileHover={{ color: "#FF7F50" }}>For Your </motion.b>Business.</h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            A unique logo, consistent colors, and typography. It includes clear messaging,
            high-quality visuals, and responsive design for a seamless experience. 
          </p>
          <button onClick={scrollToContact}><strong>Let's Connect</strong></button>
        </motion.div>
        <motion.div className="box">
          <h2>Web App Development</h2>
          <p>
            Responsive websites, focusing on functionality, performance, and user experience. 
            Both front-end design and back-end server management, interactive.
          </p>
          <button onClick={scrollToContact}><strong>Let's Connect</strong></button>
        </motion.div>
        <motion.div className="box">
          <h2>Mobile App Development</h2>
          <p>
            Key aspects include optimizing for performance and security, 
            adhering to design guidelines, and employing rigorous 
            testing to ensure compatibility and stability.
          </p>
          <button onClick={scrollToContact}><strong>Let's Connect</strong></button>
        </motion.div>
        <motion.div className="box">
          <h2>Search Engine Optimization</h2>
          <p>
            Search Engine Optimization involves optimizing various
            technical and content-related aspects of a website 
            to improve its ranking and attract organic traffic. 
          </p>
          <button onClick={scrollToContact}><strong>Let's Connect</strong></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
