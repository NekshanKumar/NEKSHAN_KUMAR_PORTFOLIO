import React from 'react';
import './About.css';
import ME from '../../assets/niks.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        {/* About Me Image Section */}
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Nekshan Kumar" />
          </div>
        </div>

        {/* About Content Section */}
        <div className="about_content">
          {/* About Cards */}
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>7 Clients</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>12 Projects Completed</small>
            </article>
          </div>

          {/* About Description */}
          <p>
            Hi, I’m <b>Nekshan Kumar</b>, a dedicated Frontend Developer with 2 years of experience in building 
            intuitive, high-performance web applications. I’ve worked extensively on SaaS-based projects such as 
            <b> Field Force</b>, <b>EVA</b>, <b>Hire Central</b>, <b>Reimbursement</b>, a <b>Car Selling App</b>, and a 
            <b> No-Code Chatbot Builder</b>, delivering innovative solutions tailored to user needs.
          </p>

          <ul>
            <li>Developed scalable and user-friendly interfaces using <b>React.js</b> and <b>Next.js</b>.</li>
            <li>Integrated microservices and <b>RESTful APIs</b> for efficient data handling and real-time updates.</li>
            <li>Implemented adaptive and responsive designs, ensuring seamless functionality across devices.</li>
            <li>Incorporated AI-driven features into products to enhance user experience and automation.</li>
            <li>Collaborated with cross-functional teams to deliver projects aligning with business goals.</li>
          </ul>

          <p>
            I am passionate about creating impactful digital experiences, combining modern technologies with 
            innovative ideas to solve complex challenges.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
