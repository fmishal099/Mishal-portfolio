import React from 'react';
import './Projects.css';
import plan from '../../images/plan.jpg';
import create from '../../images/creat.jpg';
import digital from '../../images/diigital.jpg';
import flex from '../../images/flex.jpg';
import natural from '../../images/natural.jpg';
import restu from '../../images/restu.jpg';

const Projects = () => {
  return (
    <div className='projects'>
      <h2 className="about-heading">My Projects</h2>
      <div className="img">
        <a href="https://www.planandspec.com/" target='_blank' rel="noopener noreferrer">
          <img src={plan} alt="Plan and Spec" />
        </a>
        <a href="https://start-up-kappa.vercel.app/" target='_blank' rel="noopener noreferrer">
          <img src={create} alt="Create Project" />
        </a>
        <a href="https://digital-services-smoky.vercel.app/" target='_blank' rel="noopener noreferrer">
          <img src={digital} alt="Digital Project" />
        </a>
        <a href="https://flex-it-87fa-git-main-mishals-projects-ef21a3a1.vercel.app/" target='_blank' rel="noopener noreferrer">
          <img src={flex} alt="Flex Project" />
        </a>
        <a href="https://naturylextensions.com/" target='_blank' rel="noopener noreferrer">
          <img src={natural} alt="Natural Extensions" />
        </a>
        <a href="https://fillinx.site/comptoir/" target='_blank' rel="noopener noreferrer">
          <img src={restu} alt="Restaurant Project" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
