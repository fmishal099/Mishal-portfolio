import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className="about-heading">Get in Touch</h2>
      <div className="contact-info">
        <div className="contact-column">
          <p className="contact-label">Email:</p>
          <a className="contact-link" href="mailto:mishalf673@gmail.com">mishalf673@gmail.com</a>
        </div>
        <div className="contact-column">
          <p className="contact-label">Phone:</p>
          <a className="contact-link" href="tel:+923186582230">+92 3186582230</a>
        </div>
        <div className="contact-column">
          <p className="contact-label">Location:</p>
          <span className="contact-info-text">Faisalabad, PK</span>
        </div>
        <div className="contact-column">
          <p className="contact-label">LinkedIn:</p>
          <a className="contact-link" href="https://www.linkedin.com/in/mishal-fatima-106930247/" target="_blank" rel="noopener noreferrer">
            Mishal Fatima
          </a>
        </div>
        <div className="contact-column">
          <p className="contact-label">Github:</p>
          <a className="contact-link" href="https://github.com/fmishal099" target="_blank" rel="noopener noreferrer">
            Mishal Fatima
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
