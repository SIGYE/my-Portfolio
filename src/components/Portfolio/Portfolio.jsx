import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item list</h3>
            <a href="https://github.com/SIGYE" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Linda_teta" className='btn btn-primary'>Live Demo</a>
          
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item list</h3>
            <a href="https://github.com/SIGYE" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Linda_teta" className='btn btn-primary'>Live Demo</a>
          
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item list</h3>
            <a href="https://github.com/SIGYE" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/Linda_teta" className='btn btn-primary'>Live Demo</a>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio