import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Let's Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
      <article className='contact__options'>
        <MdOutlineEmail/>
        <h4>Email</h4>
        <h5>lindamwesigye2@gmail.com</h5>
        <a href="mailto:lindamwesigye2@gmail.com">Send a message</a>
      </article>
        </div>
        {/* ############# */}

        <form action="">
          
        </form>
      </div>
    </section>
  )
}

export default Contact