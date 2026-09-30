import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <>
    <div className='Home'>
      <div className='Home-centre'>
    <div className='Left'>
      
      <h1>Hi,I'm Selvi S</h1>
      <h2>Full Stack Developer</h2>
       <p>
            I am a passionate Full Stack Developer who enjoys building
            responsive and user-friendly web applications using React.js,
            Node.js, Express.js and MongoDB.
          </p>
  <div className="home-buttons">

            <Link to="/Project" className="home-btn">
              View My Work
            </Link>

            <Link to="/Contact" className="home-btn outline-btn">
              Contact Me
            </Link>

          </div>

      </div>
    </div>
    </div>
    
    </>
  
)
}
