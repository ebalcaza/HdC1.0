// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import heroImg2 from './assets/elemn1.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import element2 from './assets/element2.jpg'

import './App.css'

function App() {

  
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1>Proyecto Medicion de huella de carbono</h1>
        <div className="hero">

          <img src={element2} className="base" width="400" height="220" alt="" />
         
   
        <br />

        <p>Utilizando:</p>
          <img src={reactLogo} alt="React logo" />
          <img src={viteLogo}alt="Vite logo" />
        </div>
        <div>
          <button className="buttonA">ingresar</button>
        </div>
        
      </section>

{/*       
      <div className="ticks"></div> */}

   

    </>
  )
}

export default App
