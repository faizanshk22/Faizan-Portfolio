import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/navbar/Navbar';
import './about.scss';
import Footer from '../../components/Footer/Footer';

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function About() {
  return (
    <>
      <Navbar />
      <div className='about'>
        <motion.div 
          className='intro' 
          variants={slideIn} 
          initial='hidden' 
          animate='visible'
        >
          <h3>About Me</h3>
          <p>Hello! I'm Faizan Sheikh, a Full Stack MERN Developer with a passion for creating dynamic and responsive web applications. With a strong background in both front-end and back-end development, I specialize in building full-fledged applications that are not only functional but also user-friendly.</p>
          <h3>My Journey</h3>
          <p>I started my journey into web development with a keen interest in solving real-world problems through technology. Over the years, I've honed my skills in MongoDB, Express, React, and Node.js, allowing me to develop comprehensive applications from scratch</p>
          <h3>What I Do</h3>
          <p><strong>As a MERN stack developer, I work on:</strong></p>
          <p><strong>Front-End Development:</strong> Crafting interactive and visually appealing user interfaces using React, HTML, CSS, and JavaScript.</p>
          <p><strong>Back-End Development:</strong> Building robust APIs and server-side logic with Node.js and Express, ensuring efficient data management and seamless communication between client and server.</p>
          <p><strong>Database Management:</strong> Designing and managing databases using MongoDB, optimizing data retrieval and storage processes.</p>
          <p><strong>Deployment & Maintenance:</strong> Deploying applications on cloud platforms, maintaining and updating them to ensure optimal performance.</p>
          <hr />
          <h2>Let's Connect!</h2>
          <p>I'm always open to new opportunities and collaborations. If you're looking for a passionate developer to bring your ideas to life, feel free to reach out. Let's build something amazing together!</p>
         
        </motion.div>

        {/* <motion.div 
          className='team' 
          variants={slideIn} 
          initial='hidden' 
          animate='visible'
        >
          <div className='team-member'>
            <img src='/' alt='Team Member 1' />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
        </motion.div> */}

        {/* <motion.div 
          className='contact' 
          variants={slideIn} 
          initial='hidden' 
          animate='visible'
        >
        
        </motion.div> */}
      </div>
      <Footer isAbout={true} />
    </>
  );
}

export default About;
