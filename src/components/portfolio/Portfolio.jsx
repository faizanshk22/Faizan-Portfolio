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
    link: "https://dev-coders.vercel.app"
  },
  {
    id: 2,
    title: "Fitness Mania GMS",
    img: "gym.png",
    desc: "This Gym Management System is completely build on MERN stack with authentications.",
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
    desc: "This is a fullstack(React & ROR) application with user and admin interfaces.",
  },
  {
    id: 5,
    title: "Realtime Chatting App",
    img: "fiv5.png",
    desc: "This Application was built on ROR using websockets for realtime experience.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  }); 
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const isLive = item.id === 1;
  const buttonClass = isLive ? 'live' : 'disabled';

  const content = (
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
              <motion.button  variants={bounce}
        initial='hidden'
        animate='visible' className={buttonClass}>
                <FaCircle className='mini-circle' />
                Live
              </motion.button>
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

  return isLive ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    content
  );
};

const bounce = {
  hidden: { scale: 1 },
  visible: { 
    scale: [1, 0.8, 1], 
    transition: { 
      duration: 1, 
      ease: 'easeOut', 
      repeat: Infinity,
      repeatType: 'loop'
    }
  },
};
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
