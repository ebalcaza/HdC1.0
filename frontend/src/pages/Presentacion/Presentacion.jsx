// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import heroImg2 from './assets/elemn1.jpg'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '../assets/vite.svg'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'

import element2 from '../../assets/logos/logo2-1100x600.webp'




import './Presentacion.css'

import { Link } from 'react-router'


export default function Presentacion() {

  
  // const [count, setCount] = useState(0)

  return (
  
    
                    


      <section id="center">

          

        
        <h3>Proyecto Medicion de huella de carbono</h3>
        <div className="hero">

          <img src={element2} className="base" width="400" height="220" alt="" />
         

        <br />

        <p>Utilizando:</p>
          <img src={reactLogo} alt="React logo" />
          <img src={viteLogo}alt="Vite logo" />
        </div>
        <div>
  <p>Lista de integrantes</p>
          <div className="listaEquipo">

         
                <p>Emilio</p>
                <p>Dario</p>
                <p>Kevin</p>
                <p>Lucia</p>
                <p>Matias</p>
          </div>
          

            <Link to="./home">
            
              <button className='buttonA'>
        
                INGRESAR 
            
            </button>
              
        </Link>
       
        </div>
       
  

         </section>
    
  

  
  )
}


