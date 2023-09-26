import React from 'react'
import './Testimonials.css'
import lisa from '../../assets/lisa.png'
import aggy from '../../assets/aggy.jpg'
import Bikeshya from '../../assets/Bikeshya.jpg'
import Dzebraaa from '../../assets/Dzebraaa.jpeg'
import Kelly  from '../../assets/Kelly.jpg'
import liza from '../../assets/liza.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={lisa} alt="pic one" width={70} height={80} />
            </div>
            <h5 className='client__name'>Lisa TESI MWESIGYE</h5>
            <small className='client__review'>
              Linda is quite a talented programmer basing on not only her speed but also the warmth she 
              does her work with. Linda's main motive when working on a project is not to earn money from
               it but to make it successfull and viable. She's kind, entertaining and a social person. This boosts
               her markatability which priviledges her and the project she is working on. I look forward to work
               on many more projects with her. 
            </small>
          
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={Kelly} alt="pic one" width={70} height={80} />
            </div>
            <h5 className='client__name'>Kelly MWESIGYE</h5>
            <small className='client__review'>
              Linda is quite a talented programmer basing on not only her speed but also the warmth she 
              does her work with. Linda's main motive when working on a project is not to earn money from
               it but to make it successfull and viable. She's kind, entertaining and a social person. This boosts
               her markatability which priviledges her and the project she is working on. I look forward to work
               on many more projects with her. 
            </small>
          
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={Bikeshya} alt="pic one" width={70} height={80} />
            </div>
            <h5 className='client__name'>Accarie DAVINE CYUZUZO</h5>
            <small className='client__review'>
              Linda is quite a talented programmer basing on not only her speed but also the warmth she 
              does her work with. Linda's main motive when working on a project is not to earn money from
               it but to make it successfull and viable. She's kind, entertaining and a social person. This boosts
               her markatability which priviledges her and the project she is working on. I look forward to work
               on many more projects with her. 
            </small>
          
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={liza} alt="pic one" width={70} height={80} />
            </div>
            <h5 className='client__name'>Liza LOUNGE MBABAZI</h5>
            <small className='client__review'>
              Linda is quite a talented programmer basing on not only her speed but also the warmth she 
              does her work with. Linda's main motive when working on a project is not to earn money from
               it but to make it successfull and viable. She's kind, entertaining and a social person. This boosts
               her markatability which priviledges her and the project she is working on. I look forward to work
               on many more projects with her. 
            </small>
          
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={Dzebraaa} alt="pic one" width={70} height={80} />
            </div>
            <h5 className='client__name'>Deborah RUTAGENGWA</h5>
            <small className='client__review'>
              Linda is quite a talented programmer basing on not only her speed but also the warmth she 
              does her work with. Linda's main motive when working on a project is not to earn money from
               it but to make it successfull and viable. She's kind, entertaining and a social person. This boosts
               her markatability which priviledges her and the project she is working on. I look forward to work
               on many more projects with her. 
            </small>
          
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={aggy} alt="pic one" width={70} height={80} />
            </div>
            <h5 className='client__name'>Agnes UWASE</h5>
            <small className='client__review'>
              Linda is quite a talented programmer basing on not only her speed but also the warmth she 
              does her work with. Linda's main motive when working on a project is not to earn money from
               it but to make it successfull and viable. She's kind, entertaining and a social person. This boosts
               her markatability which priviledges her and the project she is working on. I look forward to work
               on many more projects with her. 
            </small>
          
        </article>
      </div>
    </section>
  )
}

export default Testimonials