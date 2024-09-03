import ParticlesBackground from './components/ParticlesBackground';

import htmllogo from "./logos/HTML5_Badge.svg"
import csslogo from "./logos/css-icon.svg"
import jslogo from "./logos/JS.svg"
import cpp from "./logos/CPlusPlus.svg"
import python from "./logos/python.svg"
import photoshop from "./logos/Adobe_Photoshop_CC_icon.svg"
import lightroom from "./logos/Adobe_Photoshop_Lightroom_CC_logo.svg"
import premiere from "./logos/Adobe_Premiere_Pro_CC_icon.svg"
import illustrator from "./logos/Adobe_Illustrator_CC_icon.svg"
import pfp from "./logos/pfp.png"
import pdf from "./resume.pdf"
import download from './logos/download.png'
import email from './logos/email.png'
import github from './logos/github.png'
import button from './logos/button.png'
import mongodb from './logos/mongodb.svg'
import express from './logos/express.svg'
import react from './logos/react.svg'
import nodejs from './logos/nodejs.svg'
import map from './logos/map.png'
import mario from './logos/mario.gif'
import youtube from './logos/youtube.gif'
import wordle from './logos/wordle.gif'

function App() {
  return (
    <div className="grain">
        <div className='main-container'>
          <div className='grid'>
            <div className='row1'>
              <div className='aboutme'>
                <div className='name'>
                  <img src={pfp} className='pfp'/>
                  <h1>Brian Chiem</h1>
                </div>
                <p>
                  Hi, I'm Brian. I am currently studying Computer Science at UCLA. I am interested in web development, UI/UX design, game development, and graphic design.
                </p>
              </div>
              <div className='map-resume-email'>
              <div className='map'>
                <img src={map}/>
              </div>
              <div className='resume-and-email'>
                <div className='resume'>
                <div className='words'>
                  <p>
                    2024 CV
                  </p>
                  <h2>
                    RESUME
                  </h2>
                </div>
                <a href='https://brianchiem.github.io/react-personal-website/resume.pdf' target='_blank'>
                  <img className='resume-image' src={download}/>
                </a>
                {/* <a href={pdf} download>
                  <img src={download}/>    
                </a> */}
                </div>
                <div className='email'>
                <a href='mailto: brianchiem101@gmail.com'>
                  <img className='resume-image' src={email}/>
                </a>
                </div>
              </div>
              </div>
              
            </div>
            <div className='row2'>
              <div className='socials1-container'>
                <div className='github'>
                  <a href='https://github.com/brianchiem' target='_blank'>
                    <img src={github}/>
                  </a>
                </div>
                <div className='social'>
                  <a href='https://linkedin.com/in/brianchiem101' target='_blank'>
                    <img src={button}/>
                  </a>
                </div>
              </div>
              <div className='scroller-container'>
                <div className='logos'>
                  <div className='logos-slide'>
                    <img src={htmllogo}/>
                    <img src={csslogo}/>
                    <img src={jslogo}/>
                    <img src={cpp}/>
                    <img src={python}/>
                    <img src={mongodb}/>
                    <img src={express}/>
                    <img src={react}/>
                    <img src={nodejs}/>
                    <img src={photoshop}/>
                    <img src={lightroom}/>
                    <img src={premiere}/>
                    <img src={illustrator}/>
                  </div>
                  <div className='logos-slide'>
                    <img src={htmllogo}/>
                    <img src={csslogo}/>
                    <img src={jslogo}/>
                    <img src={cpp}/>
                    <img src={python}/>
                    <img src={mongodb}/>
                    <img src={express}/>
                    <img src={react}/>
                    <img src={nodejs}/>
                    <img src={photoshop}/>
                    <img src={lightroom}/>
                    <img src={premiere}/>
                    <img src={illustrator}/>
                  </div>
                </div>
                <div className='techstack'>
                  <h2>TECHNOLOGIES</h2>
                </div>
              </div>
            </div>
            <div className='row3'>
              <div className='column1'>
                <div className='project1'>
                  <img src={wordle}/>
                  <p>PERSONAL PROJECT</p>
                  <h2>WORDLE CLONE w/ SOCIAL FEATURES</h2>
                  <div className='tags'>
                    <div className='tag'>
                      React
                    </div>
                    <div className='tag'>
                      Node.js
                    </div>
                    <div className='tag'>
                      Express.js
                    </div>
                    <div className='tag'>
                      MongoDB
                    </div>
                  </div>
                  <div className='tags'>
                    <div className='tag'>
                      Frontend
                    </div>
                    <div className='tag'>
                      Backend
                    </div>
                  </div>
                </div>
              </div>
              <div className='column2'>
                <div className='project2'>
                  <a href='https://brianchiem.com/pages/youtube' target='_blank'>
                    <img src={youtube}/>
                  </a>
                  <p>PERSONAL PROJECT</p>
                  <h2>YOUTUBE CLONE</h2>
                  <div className='tags'>
                    <div className='tag'>
                      CSS
                    </div>
                    <div className='tag'>
                      HTML
                    </div>
                    <div className='tag'>
                      Design
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row4'>
              <div className='column1'>
                <div className='project3'>
                  <img src={mario}/>
                  <p>PERSONAL PROJECT</p>
                  <h2>SUPER MARIO BROS. IN GODOT</h2>
                  <div className='tags'>
                    <div className='tag'>
                      GameDev
                    </div>
                    <div className='tag'>
                      GDScript
                    </div>
                  </div>
                </div>
              </div>
              <div className='column2'>
                <div className='project4'>
                  <img src={youtube}/>
                  <p>PERSONAL PROJECT</p>
                  <h2>YOUTUBE CLONE</h2>
                  <div className='tags'>
                    <div className='tag'>
                      CSS
                    </div>
                    <div className='tag'>
                      HTML
                    </div>
                    <div className='tag'>
                      Design
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ParticlesBackground className="glass grain"/>
    </div>
  );
}

export default App;
