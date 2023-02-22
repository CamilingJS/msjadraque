import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import {images} from '../../constants';
import './About.scss';
import { urlFor, client } from '../../../client';

// const abouts = [
//  {title: 'Strong subject knowledge', 
//   description: 'A math teacher should have a deep understanding of the subject matter and be able to explain complex mathematical concepts in a way that is easily understandable for students. They should also stay up-to-date with new developments and trends in the field of mathematics.', 
//   imgUrl: images.about01}, 
//  {title: 'Effective communication skills',
//   description: 'Broken down mathematical concepts into smaller, understandable parts and use various teaching strategies to make the subject engaging and interesting.',
//   imgUrl: images.about02}, 
//  {title: 'Patience and empathy',
//   description: "Empathy for students' different learning styles and adjust to their teaching methods to meet each student's unique needs.",
//   imgUrl: images.about03}, 
//  {title: 'Organizational skills', 
//   description: 'Organized and prepared for each lesson. Clear plans for the content covered, and ability to manage time effectively, leading to timely feedback on student assignments and assessments crucial for tracking student progress and identifying areas for improvement.',
//   imgUrl: images.about04}, 
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data)=> setAbouts(data))
    }, []);
  

  return (
    <>
    <div className='aboutContainer' >
      <h2 style={{marginTop:'1rem', textAlign:'center'}} >There should be no such thing as <br/><span>boring</span><span> mathematics.</span> - Eric Temple Bell
    </h2>
    <div className='app__profiles' >
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginTop:20}} >{about.title}</h2>
          <p className='p-text' style={{marginTop:10}} >{about.description}</p>
        </motion.div>
      ))}
    </div>
    </div>  
    </>
  )
}

export default About