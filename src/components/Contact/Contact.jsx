import React, { useEffect, useState } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {RiTwitterXFill} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_fh1jz4e', 'template_4l6owsn', form.current, 'o8jOuGUIrIrNZSkRQ')
   
  e.target.reset()
};




  return (
    <section id='contact'>
      <h5>Let's Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
      <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>lindamwesigye2@gmail.com</h5>
        <a href="mailto:lindamwesigye2@gmail.com" target={'_blank'}>Send a message</a>
      </article>

      <article className='contact__option'>
        <BsInstagram className='contact__option-icon'/>
        <h4>Instagram</h4>
        <h5>li.te.m</h5>
        <a href="https://www.instagram.com/li.te.m/" target={'_blank'}>Send a message</a>
      </article>

      <article className='contact__option'>
        <RiTwitterXFill className='contact__option-icon'l/>
        <h4>Twitter</h4>
        <h5>MwesigyeLinda</h5>
        <a href="https://twitter.com/home" target={'_blank'}>Send a message</a>
      </article>

      <article className='contact__option'>
        <FaWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+250-791-847-917</h5>
        <a href="https://api.whatsapp.com/send?phone=0791847917">Send a message</a>
      </article>
        </div>
        {/* ############# */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact