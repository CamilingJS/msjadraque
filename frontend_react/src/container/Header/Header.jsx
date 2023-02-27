import React from 'react';
import { motion } from 'framer-motion'; 

import { images } from '../../constants';  
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0,1] }}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex ">
              <span>✌🏽</span>
              <div style={{marginLeft: 20}} >
                <p className="p-text" >Hello & welcome! My name is...</p>
                <h1 className="head-text" >Ms. Jadraque</h1>
              </div> 
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text" >I am a...</p>
              <h3 className="p-text" >RESEARCHER</h3>
              <h3 className="p-text" >ORGANIZER</h3> 
              <h3 className="p-text" >FACILITATOR</h3> 
              <p className="p-text" >of knowledge</p>
            </div>
          </div>
        
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile picture" />
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
          className='overlay_circle'
        />

      </motion.div>

      <motion.div
      whileInView={{ x: [100, 0], opacity: [0,1] }}
      transition={{duration: 0.5}}
      className='app__header-circles'>
        <div className="circle" ><img src={images.math6}  ></img></div>
        <div className="circle"><img src={images.prealgebra} ></img></div>
        <div className="circle"><img src={images.algebra} ></img></div>
      </motion.div>

      
    </div>
  )
}

export default Header