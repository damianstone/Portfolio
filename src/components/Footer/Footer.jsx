import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
       <div className='Footer'>
           <div className='Footer-title'>
                <h1>Follow me</h1>
           </div>
           <div className='Footer-social-wrap'>
               <a 
               href='http://www.ultravaper.cl' 
               className='Footer-social' 
               target='_blank' >
                   <i className=" fab fa-instagram"></i>
                </a>
               <a 
               href='https://www.linkedin.com/in/damian-stone-796a0318b/' 
               className='Footer-social' 
               target='_blank' >
                   <i className=" fab fa-linkedin"></i>
                </a>
               <a 
               href='https://www.goodreads.com/damianstone' 
               className='Footer-social' 
               target='_blank' >
                   <i className=" fab fa-goodreads"></i>
                </a>
               <a 
               href='https://github.com/damianstone'  
               className='Footer-social' 
               target='_blank' >
                   <i className=" fab fa-github" ></i>
                </a>
           </div>
      </div>
    );
}

export default Footer;