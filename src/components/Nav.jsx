import React from 'react'
import './nav.css'
import logo from '../assets/logo_2.png'

function Nav() {
  const scrollToHome = () => {
    window.scrollTo({top : 0, behavior: 'smooth'}
    )
  }

  const scrollToProjects = () => {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
  }

  const scrollToAbout = () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
  }

  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="buttons">
            <div onClick={scrollToHome}>Home</div>
            <div onClick={scrollToProjects}>Projects</div>
            <div onClick={scrollToAbout}>About</div>
        </div>
        <div className="cv">
            <a href=""><i class="fa-regular fa-file-lines fa-lg"></i></a>
        </div>
    </nav>
  )
}

export default Nav