import React from 'react';
import './navbar.scss';
import {motion} from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

function Navbar() {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}>Faizan Sheikh</motion.span>
        <div className="social">
            <a href='https://wwww.facebook.com/faizansh1may/' target="_blank" rel="noopener noreferrer"><img src="/facebook.png" alt="fb" /></a>
            <a href='https://www.instagram.com/faizan__sheikh__/' target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="ig" /></a>
            {/* <a href='#'><img src="/youtube.png" alt="yt" /></a> */}
            <a href='https://www.linkedin.com/in/faizansheikh5/' target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="db" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
{/* <a href='/'><img src="/F.png" alt="F" /><img src="/S.png" alt="S" /></a> */}