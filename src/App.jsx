import './App.css'
import Typed from 'typed.js';
import React from 'react';
import GlareHover from './assets/GlareHover/GlareHover';

function App() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I\'m YagaSalami', 'I\'m a <i>Minecraft Dev</i>','I\'m a <i>Discord Server Builder</i>'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false,
      cursorChar: '|',
      autoInsertCss: true,
      contentType: 'html'
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <>
    <main>
      <div className="home" id="home">
        <div className="leftSection">
          <div className="center">
            <div className='tag'>Yearning for the mines</div>
            <div className="writing">
              <h1 className='heading' ref={el}></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, libero adipisci? Molestiae dolore fugiat molestias quia mollitia debitis repellat ratione, ullam modi et! Eius repellat sint repellendus nobis amet veritatis.</p>
              <button className='ContcBtn'>View my work</button>
              <button className='btn'>Contact Me</button>
            </div>
          </div>  
        </div>
        <div className="rightSection">
          <GlareHover
            width='80%'
          >
            <img className='fP' src="../firstPic.png" alt="" />
          </GlareHover>
        </div>
      </div>

      <div className="aboutMe" id="aboutMe"></div>

    </main>
    </>
  )
}

export default App