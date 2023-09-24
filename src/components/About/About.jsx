import React from 'react'
import './About.css'
import Linda from '../../assets/Linda.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi' 
import {GoProjectSymlink} from 'react-icons/go'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know me</h5>
      <h2>About Me </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Linda} alt="About me" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+Worldwide</small>
            </article>

            <article className='about__card'>
              <GoProjectSymlink className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div> <br />
            <p>
              I am a young and determined programmer in both backend and frontend 
              in several programming languages such as Javascrit and its frameworks as 
              well as python. I am also a UX/UI designer of web apps and more.  My 
              engagement in graphic design also strengthens my computer skills. I tend 
              to also be quite interested in sports and entertaining activities. 
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About