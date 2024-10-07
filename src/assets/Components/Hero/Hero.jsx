import React from 'react';
import './Hero.css';
import photo from "../../images/photo.jpeg"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-img">
        {/* <img src={photo} alt="Profile" className=''/> */}
        <h1 className='hero-h1'><span className='color-text'>I'm Mishal</span>, a Shopify & Wordpress developer.</h1>
        <p>Over the years, I've honed my skills in WordPress, Shopify, Wix, and custom development using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.</p>
        <div className="butoon">
          <button className='btn'><a href="https://github.com/fmishal099" target="_blank">Github</a></button>
          <button className='btn '><a href="https://www.linkedin.com/in/mishal-fatima-106930247/" target="_blank">LinkedIn</a></button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
