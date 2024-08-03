import React, { useRef } from 'react';
import './portfolio.scss'; 
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';


const items = [
{
    id: 1,
    title: "React Business Website",
    img:"dv.png",
    desc:"This Company Project was built on pure react with using of different libraries.",
},
{
    id: 2,
    title: "Realtime Chatting App",
    img:"fiv5.png",
    desc:"This Application was built on Ruby on Rails using web-sockets and turbo stream for realtime experience. ",
},
{
    id: 3,
    title: "VidTube(Youtube Clone)",
    img:"yt-clone.png",
    desc:"This app was built on Next.js using youtube api to get data. ",
},
{
    id: 4,
    title: "Banking Application",
    img:"bk.png",
    desc:"This is a fullstack(React & ROR) application with user and admin interfaces",
}
]

const Single = ({item}) =>{
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start","end start"]
      }); 
      const y = useTransform(scrollYProgress,[0,1],[-300, 300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}} >
                    <h2> {item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio() {
    const ref=useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
      }); 
      const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,
      })
      
      return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Latest Works</h1>
            <motion.div style={{ scaleX }} className="progressBar">

            </motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
