import React from 'react'
import './projects.css'
import chess from '../assets/chess.png'
import tic_tac_toe from '../assets/tic_tac_toe.png'
import personal_website from '../assets/personal_website.png'
import lambo from '../assets/lambo_original.jpg'
import ascii from '../assets/lmabo_processed.png'

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
          <div className="showcase" id='tic_tac_toe'>
            <div className="project_headline">Tic Tac Toe</div>
            <div className="project_content">
              <p>Developed in JavaScript; This is a simple Tic-Tac-Toe game yet with a not so simple AI to defeat.</p>
              <img src={tic_tac_toe} alt="tic_tac_toe" />  
            </div>
            <div className="project_btns">
              <a href="">Source code</a>
              <a href="">Play game</a>
            </div>
          </div>
      </div>
      <div className="section" id='websites'>
        <div className="section_headline">Websites</div>
        <div className="showcase" id='personal_website'>
          <div className="project_headline">Personal Webites</div>
          <div className="project_content">
            <p>Developed in React; The very website you are browsing on right now.</p>
            <img src={personal_website} alt="personal_website" />  
          </div>
          <div className="project_btns">
            <a href="">Source code</a>
          </div>
        </div>
      </div>
      <div className="section" id='art'>
        <div className="section_headline">Art</div>
        <div className="showcase" id='ascii'>
          <div className="project_headline">ASCII Art</div>
          <div className="project_content">
            <p>Developed in Python using PIL and OpenCV libraries; Transforms images/videos to ASCII characters.</p>
            <img src={lambo} alt="lambo" />  
            <img src={ascii} alt="ascii_lambo" />
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