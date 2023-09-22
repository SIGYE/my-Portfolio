import React from 'react'
import Header from '../src/components/Header/Header'
import Nav from '../src/components/Nav/Nav'
import About from '../src/components/About/About'
import Experience from '../src/components/Experience/Experience'
import Service from '../src/components/Services/Service'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Testimonials from '../src/components/Testimonials/Testimonials'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App