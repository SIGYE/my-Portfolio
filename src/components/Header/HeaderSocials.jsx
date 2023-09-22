import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/feed/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/SIGYE" target='_blank'><BsGithub/></a>
        <a href="https://github.com/SIGYE" target='_blank'></a>
        <a href="https://www.instagram.com/li.te.m/" target='_blank'><FaInstagramSquare/></a>

    </div>
  )
}

export default HeaderSocials