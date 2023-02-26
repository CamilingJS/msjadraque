import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import './Works.scss'
 
const Works = () => {
  return (
    <>
        <h2 style={{marginTop:'1rem', textAlign:'center'}} >There should be no such thing as <br/><span>boring</span><span> mathematics.</span> - Eric Temple Bell</h2>
    </>
  )
}

export default Works