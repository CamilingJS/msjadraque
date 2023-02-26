import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import './Blog.scss'
import { urlFor, client } from '../../client';
import PortableText from 'react-portable-text';

const Blog = ({portableTextContent}) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const query = '*[_type == "featuredBlog"]';
    client.fetch(query)
      .then((data)=> setBlog(data))
    }, []);

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >

      
      
      {blog.map((blog, index)=>(
        <div key={blog + index} id="blog" className="featuredBlog" >
          <motion.div 
          whileInView={{ y: [100, 0], opacity: [0,1] }}
          transition={{duration: 0.5}}  
          className='imagesContainer' >
            <div className='image1' >
              <img src={urlFor(blog.imgUrl)} alt={blog.title} />
            </div>
            <div className='image2' >
            <img src={urlFor(blog.imgUrl2)} alt={blog.title} />
            </div>
            <div className='image3' >
            <img src={urlFor(blog.imgUrl3)} alt={blog.title} />
            </div>
          </motion.div>
          <motion.div
          whileInView={{ y: [100, 0], opacity: [0,1] }}
          transition={{duration: 0.5}}  
          className="titleBlogContainer"
          >
            <h1>{blog.title}</h1>
            <p>{blog.blog}</p>
            {console.log(blog)}
           
            
            <motion.div
            whileInView={{ y: [100, 0], opacity: [0,1] }}
            transition={{duration: 0.5}}  
            className="featuredBlogCTA"
            >
              <h2>Read More ⤴</h2>
            </motion.div>

          </motion.div>
          
        </div>
        
      ))}
      
    </div>
  )
}

export default Blog