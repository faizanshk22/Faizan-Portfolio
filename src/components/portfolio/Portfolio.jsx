import React, { useRef } from 'react';
import './portfolio.scss'; 
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const items = [
  {
    id: 1,
    title: "React Business Website",
    img: "dv.png",
    desc: "This Company Project was built on pure react with using of different libraries.",
  },
  {
    id: 2,
    title: "Realtime Chatting App",
    img: "fiv5.png",
    desc: "This Application was built on ROR using websockets for realtime experience.",
  },
  {
    id: 3,
    title: "Learnify - Book Store",
    img: "L2.png",
    desc: "This app was built on MERN with Authorization to protect paid courses.",
  },
  {
    id: 4,
    title: "Banking Application",
    img: "bk.png",
    desc: "This is a fullstack(React & ROR) application with user and admin interfaces",
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  }); 
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const isLive = item.id === 1;
  const buttonClass = isLive ? 'live' : 'disabled';

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {isLive ? (
              <a href='https://dev-coders.vercel.app' target="_blank" rel="noopener noreferrer">
                <button className={buttonClass}>
                  <FaCircle className='mini-circle' />
                  Live
                </button>
              </a>
            ) : (
              <button className={buttonClass}>
                <FaCircle className='mini-circle' />
                Disabled
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  }); 
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Latest Works</h1>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
