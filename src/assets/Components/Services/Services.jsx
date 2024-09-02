import React from "react";
import "./Services.css";
import html from "../../images/html.png";
import css from "../../images/CSS.png";
import seo from '../../images/seo.png'

const Services = () => {
  return (
    <div>
      <h2 className="about-heading">My Services</h2>
      <div className="Services">
        <div className="card">
          <img src={html} alt="" />
          <h2>HTML</h2>
        </div>
        <div className="card">
          <img
            src={css}
            alt=""
          />

          <h2>CSS</h2>
        </div>
        <div className="card">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            alt=""
          />

          <h2>Bootstrap</h2>
        </div>
   
      </div>
      <div className="Services">
      
     
        <div className="card">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs><script xmlns=""/></svg>

          <h2>Tailwind CSS</h2>
        </div>
        <div className="card">
          <img
            src="https://gerold.themejunction.net/wp-content/uploads/2024/05/react.png"
            alt=""
          />

          <h2>React</h2>
        </div>
        <div className="card">
          <img
            src="https://gerold.themejunction.net/wp-content/uploads/2024/05/js.png"
            alt=""
          />

          <h2>Javascript</h2>
        </div>
      </div>
      <div className="Services">
     
        <div className="card">
          <img
            src="https://gerold.themejunction.net/wp-content/uploads/2024/05/wp.png"
            alt=""
          />

          <h2>Wordpress</h2>
        </div>
        <div className="card">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-1024.png"
            alt=""
          />

          <h2>Shopify</h2>
        </div>
        <div className="card">
          <img
            src={seo}
            alt=""
          />

          <h2>Search Engine Optimization</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
