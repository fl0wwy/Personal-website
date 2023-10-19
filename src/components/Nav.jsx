import React from 'react'
import './nav.css'

function Nav() {
  return (
    <nav>
        <div className="logo">
            Bar Ben Waiss
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