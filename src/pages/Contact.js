import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <ul className="contact-list">
          <li>
            <a href="https://www.linkedin.com/in/sofiamejiamuro/" target="_blank"><i class="fab fa-linkedin-in fa-5x icon-linkedin"></i></a>
          </li>
          <li >
            <a href="https://github.com/sofiamejiamuro" target="_blank" ><i class="fab fa-github fa-5x icon-github"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/sofia_mejiamuro/" target="_blank"><i class="fab fa-instagram fa-5x icon-instagram"></i></a>
          </li>
          <li>
            <a href="mailto:sofiamejiamuro@gmail.com.com"><i class="far fa-envelope fa-5x icon-email"></i></a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact
