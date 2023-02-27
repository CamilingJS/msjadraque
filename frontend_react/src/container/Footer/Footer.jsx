import React from 'react'
import { motion } from 'framer-motion';

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer' >
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0,1] }}
      transition={{duration: 0.5}} 

      id="contact"
    >
      <h4>Send any inquiries to:</h4>
      <h4>info@jaycam.dev</h4>
    </motion.div>
    <h5>&copy; All rights reserved | Ms. Jadraque</h5> 
    
    </div>
  )
}

export default Footer