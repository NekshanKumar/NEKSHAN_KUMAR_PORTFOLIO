import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Semantic UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Reactjs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Nextjs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Jquery</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_description">
          <h3>Experience Description</h3>
          <div className="experience_content_description">
            <p>Experienced Frontend Developer with 2 years in building SaaS platforms, ATS systems, and microservices-based products. Proficient in React.js, Next.js, and RESTful APIs, with expertise in creating adaptive and responsive designs for seamless user experiences across devices.</p>
            <p><strong>Key Highlights:</strong></p>
            <p>Built scalable, user-centric web applications using modern frontend technologies.</p>
            <p>Integrated microservices and AI-driven features to enhance product functionality.</p>
            <p>Designed and implemented mobile-first, responsive interfaces for diverse user bases.</p>
            <p>Collaborated with cross-functional teams to deliver high-performance solutions.</p>
            <p>Passionate about crafting innovative, efficient, and impactful digital products with a focus on usability and performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
