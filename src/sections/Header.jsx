import React from 'react'
import './header.css'
import Nav from '../components/Nav'

function Header() {
  return (
    <div className='container'>
        <Nav></Nav>
        <div className="placeholder">placeholder</div>
        <div className="content">
        <div className="introduction">
          <p>Hello, I'm</p>
          <p className='header_large'>Bar Ben Waiss</p>
        </div>
        <div className="links">
          <p className='header_small'>and this is my portfolio</p>
          <div className="link_box">
            <a href="https://github.com/fl0wwy"><i class="fa-brands fa-github fa-lg"></i></a>   
            <a href="https://www.linkedin.com/in/bar-ben-waiss-a15153276/"><i class="fa-brands fa-linkedin fa-lg"></i></a>
            <a href="mailto:barbenwaiss@outlook.com"><i class="fa-solid fa-envelope fa-lg"></i></a>
            <a href="https://www.fiverr.com/bar_ben_waiss"><i class="fa-solid fa-shop fa-lg"></i></a>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Header