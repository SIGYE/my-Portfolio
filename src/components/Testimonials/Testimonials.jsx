import React from 'react'
import './Testimonials.css'
import lisa from '../../assets/lisa.png'
import aggy from '../../assets/aggy.jpg'
import Bikeshya from '../../assets/Bikeshya.jpg'
import Dzebraaa from '../../assets/Dzebraaa.jpeg'
import Kelly  from '../../assets/Kelly.jpg'
import liza from '../../assets/liza.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
  // Import Swiper styles
  import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  avatar:lisa,
  name: 'Lisa Tesi MWESIGYE',
  review: 'Linda is quite a talented programmer basing on not only her speed but also the warmth she does her work with. Her main motive when working on a project is not to earn money from it but to make it successfull and viable. She is kind, entertaining and a social person. This boosts her markatability which priviledges her and the project she is working on. I look forward to work on many more projects with her'
  },
  {
    avatar: Kelly,
    name: 'Kelly MWESIGYE',
    review: 'Linda is quite a talented programmer basing on not only her speed but also the warmth she does her work with. Her main motive when working on a project is not to earn money from it but to make it successfull and viable. She is kind, entertaining and a social person. This boosts her markatability which priviledges her and the project she is working on. I look forward to work on many more projects with her'
    },
    {
      avatar: Bikeshya,
      name: 'Accarie Davine Cyuzuzo',
      review: 'Linda is quite a talented programmer basing on not only her speed but also the warmth she does her work with. Her main motive when working on a project is not to earn money from it but to make it successfull and viable. She is kind, entertaining and a social person. This boosts her markatability which priviledges her and the project she is working on. I look forward to work on many more projects with her'
      },
      {
        avatar: liza,
        name: 'Liza Lounge MBABAZI',
        review: 'Linda is quite a talented programmer basing on not only her speed but also the warmth she does her work with. Her main motive when working on a project is not to earn money from it but to make it successfull and viable. She is kind, entertaining and a social person. This boosts her markatability which priviledges her and the project she is working on. I look forward to work on many more projects with her'
        },
        {
          avatar: Dzebraaa,
          name: 'Deborah Isimbi RUTAGENGWA',
          review: 'Linda is quite a talented programmer basing on not only her speed but also the warmth she does her work with. Her main motive when working on a project is not to earn money from it but to make it successfull and viable. She is kind, entertaining and a social person. This boosts her markatability which priviledges her and the project she is working on. I look forward to work on many more projects with her'
          },
          {
            avatar: aggy,
            name: 'Agnes UWASE',
            review: 'Linda is quite a talented programmer basing on not only her speed but also the warmth she does her work with. Her main motive when working on a project is not to earn money from it but to make it successfull and viable. She is kind, entertaining and a social person. This boosts her markatability which priviledges her and the project she is working on. I look forward to work on many more projects with her'
            },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        
      <Swiper className='container testimonials__container'
        modules={[Pagination]} spacebetween={40}
        slidesPerView={1}
        pagination={{clickable : true}}>
    {
      data.map(({avatar, name, review}, index)=>{
        return(
        <SwiperSlide key={index} className='testimonial'>
        <div className="client__avatar">
          <img src={avatar} width={70} height={80} />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
          {review}
          </small>
        
      </SwiperSlide>
        )
      })
    }
      </Swiper>
    </section>
  )
}

export default Testimonials