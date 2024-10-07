import React from 'react';
import './Projects.css';
import shirt from '../../images/shirt.png';
import ruth from '../../images/ruth.png';
import soap from '../../images/soap.png';
import amino from '../../images/amino.png';
import beauty from '../../images/beauty.png';
import pet from '../../images/pet2.png';
import batch from '../../images/bach.png';
import juices from '../../images/ju.png';
import care from '../../images/care.png';

const Projects = () => {
  return (
    <div className='projects' id="projects">
      <h2 className="services-heading project-heading">My Projects</h2>
      <div className="gallery-row">
      <div className="gallery-column">
        <img src={ruth} alt="Snow" style={{ width: "100%" }} />
      </div>
      <div className="gallery-column">
        <img src={care} alt="Forest" style={{ width: "100%" }} />
      </div>
      <div className="gallery-column">
        <img src={batch} alt="Forest" style={{ width: "100%" }} />
      </div>
    </div>
      <div className="gallery-row">
      <div className="gallery-column">
        <img src={juices} alt="Snow" style={{ width: "100%" }} />
      </div>
    
      <div className="gallery-column">
        <img src={shirt} alt="Forest" style={{ width: "100%" }} />
      </div>
      <div className="gallery-column">
        <img src={pet} alt="Forest" style={{ width: "100%" }} />
      </div>
    </div>

    <div className="gallery-row">
      <div className="gallery-column">
        <img src={beauty} alt="Snow" style={{ width: "100%" }} />
      </div>
      <div className="gallery-column">
        <img src={amino} alt="Forest" style={{ width: "100%" }} />
      </div>
      <div className="gallery-column">
        <img src={soap} alt="Forest" style={{ width: "100%" }} />
      </div>
    </div>
  

    </div>
  );
}

export default Projects;
