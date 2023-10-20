import React, { useRef } from 'react'
import './about.css'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <div className="about_container">
        <div className="placeholder">placeholder</div>
        <h1 className="section_headline">About me</h1>
        <p>Motivated self-taught programmer with a strong passion for front-end development, web design, and Python programming. 
          Currently expanding skills in Django for back-end development. 
          I am seeking an opportunity to contribute and learn in a dynamic software development environment.</p> 
      <Footer></Footer>    
      </div>
    </>  
  )
}

export default About