import React from 'react'
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <h3>This is a portfolio item list</h3>
            <a href="https://github.com/SIGYE" className='btn-primary'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio