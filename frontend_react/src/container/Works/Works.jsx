import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import './Works.scss'
 
const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data)=>{
        setWorks(data)
        setFilterWork(data)
      })
  }, [])
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(()=>{
      setAnimateCard([{y:0, opacity: 1}]);
    }, 500)

    if(item === 'All'){
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work)=> work.tags.includes(item)))
    }
  }

  return (
    <div className='worksPreContainer' >
      <h1>Blogs</h1>
      <div className='worksContainer' >
      <div id="blogs" className='app__work-filter' >
        <h4 className='categories' >CATEGORIES</h4>
        {['Classroom Management', 'Classroom Systems & Organization', 'Lessons', 'Intervention', 'All'].map((item, index)=>(
          <div 
            key={index}
            onClick={()=> handleWorkFilter(item)}
            className={`app__work-filter-item app_flex p-text ${activeFilter === item ? 'item-active': ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index)=>(
          <div className='app__work-item app__flex' key={index} >
            <div className='app__work-img app__flex' >
              <img src={urlFor(work.imgUrl)} alt={work.name} ></img>

              <motion.div
                whileHover={{opacity:[0,1]}}
                transition={{duration: 0.25, ease:'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover app__flex"
              >
              </motion.div>
            </div>

            <div className='app__work-content app_flex' >
              <h4 className="bold-text" >{work.title}</h4>
              <p className='p-text' style={{marginTop: 10}}>{work.blog}</p>
              <div className='app__work-tag app__flex' >
                <p className='p-text' >{work.tags[0]}</p>
              </div>
            </div>

          </div>
        ))}

      </motion.div>

      </div>
    </div>
  )
    
}

export default Works