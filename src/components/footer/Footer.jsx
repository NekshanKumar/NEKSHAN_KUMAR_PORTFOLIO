import React from 'react';
import './Footer.css';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Nekshan Kumar</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/niks_rajput_7/profilecard/?igsh=MXcwaGIzdWc1YnB3dA==" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/nekshan-kumar-33b61614a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/NekshanKumar" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; NEKSHAN Portfolio. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
