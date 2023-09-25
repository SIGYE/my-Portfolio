import React from 'react'
import './Service.css'
import {GiCheckMark} from 'react-icons/gi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I'll offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>UI design Using figma</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>UX Design Using Adobe XD</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>UI Design Prototyping Using Figma</p>
            </li>
          </ul>
        </article>
        {/* ############## */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Web Development Using React</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Mobile Web Development Using React-Native</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Styling Of Web Apps Using Pure CSS</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Styling Using Bootstrap and Tailwind CSS</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Advanced HTML Knowledge</p>
            </li>
          </ul>
        </article>
        {/* ############## */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>HD Photography</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Videography Using Vimeo</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Photo Editing Using Fotor</p>
            </li>
            <li>
            <GiCheckMark className='service__list-icon' />
              <p>Film Production and Video Production</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service