import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'

const data = [
  {id: 1,
  image: IMG1,
  title: 'Worker rating app; Akazi Kanoze; dashboards',
  github: 'https://github.com/SIGYE',
  demo: 'https://dribbble.com/Linda_teta'
  },

  {id: 2,
    image: IMG2,
    title: 'Live-stream dashboard for artsit Ariel Wayz',
    github: 'https://github.com/SIGYE',
    demo: 'https://dribbble.com/Linda_teta'
    },

    {id: 3,
      image: IMG3,
      title: 'Artist Ariel wayz website',
      github: 'https://github.com/SIGYE',
      demo: 'https://dribbble.com/Linda_teta'
      },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} height={200} width={250} />
            </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo}className='btn btn-primary'>Live Demo</a>
              </div>
          </article>
          )
         

        })
       }
      </div>
    </section>
  )
}

export default Portfolio