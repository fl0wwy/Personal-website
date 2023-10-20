import React from 'react'
import './nav.css'
import logo from '../assets/logo_2.png'

function Nav() {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="buttons">
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="">About</a>
        </div>
        <div className="cv">
            <a href=""><i class="fa-regular fa-file-lines fa-lg"></i></a>
        </div>
    </nav>
  )
}

export default Nav