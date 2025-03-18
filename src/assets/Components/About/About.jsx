import React from 'react'
import './About.css'
import photo from "../../images/photo.jpeg"

const About = () => {
  return (
    <div className='about-section' id="about">
      
      <div className="about">
        <div className="about-img">
          <img src='' alt="Profile" />
        </div>
        <div className="about-content">
        <h2 className='about-heading'>About me</h2>
          <p>
            I am an experienced website Developer with over a decade of professional expertise in the field. I have a strong background in WordPress, Shopify, and custom web development. I've spent years perfecting my skills in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.
            <br /><br />
            Over the years, I've had the chance to work on a variety of exciting projects, which have helped me grow and refine my craft. I'm passionate about creating great digital experiences and always put my heart into delivering results that my clients love.
            <br /><br />
          </p>
          <div className="about-list">
            <ul>
              <li><b className='bold'>Date of birth:</b> 08 December 2001</li>
              <li><b className='bold'>Education:</b> BS Software Engineering</li>
              <li><b className='bold'>Phone:</b> +92 3186582230</li>
              <li><b className='bold'>E-Mail:</b> mishalf673@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About