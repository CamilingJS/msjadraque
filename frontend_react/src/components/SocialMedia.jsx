import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div style={{position: 'absolute', transform: 'translate(8px, 600%)'}} className='app__social' >
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia