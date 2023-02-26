import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div style={{backgroundColor:'red'}} className='app__navigation' >
        {['home', 'blog', 'about', 'skills', 'contact'].map((item, index)=>(
            <a 
            href={`#${item}`} 
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#3131BAC'} : {}}
            onClick={()=>setToggle(false)}
            />
        ))}
    </div>
  )
}

export default NavigationDots