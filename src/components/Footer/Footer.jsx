import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MWESIGYE</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer