import React from 'react'
import image from "../image/profile.jpeg"

export default function About() {
  return (
   <>
   <div className='about'>
   <div className='about-right'>
   <h1>About Me</h1>
   {/* <p className='typewriter'> */}
    <p> Hello! I'm  <strong className='context'>Selvi Saravanakumar</strong>, an aspiring Full Stack Developer.<br/>
        I have completed Computer Science Engineering and enjoy developing<br/>
        modern web applications using React, Node.js, Express.js, and MongoDB.<br/>
   </p>
   </div>
   <div className='about-left'>
    <img src={image} alt ="about"></img>
    </div>
   
   </div>
   </>
  )
}
