import React from 'react'
import './projects.css'
import chess from '../assets/chess.png'

function Projects() {
  return (
    <div className='prj_container'>
      <div className="placeholder">test</div>
      <h1>Projects</h1> 
      <div className="section" id='games'>
          <div className="section_headline">Games</div>
          <div className="showcase" id='chess'>
            <div className="project_headline">Chess</div>
            <div className="project_content">
              <p>Developed in Python using the Pygame library; This is a chess interface that can load infinite positions/states of the game with the Forsyth–Edwards Notation (FEN). 
                The AI and game evaluation are powered by Stockfish engine.</p>
              <img src={chess} alt="chess" />  
            </div>
            <div className="project_btns">
              <a href="">Source code</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects