// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import heroImg2 from './assets/elemn1.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import element2 from './assets/logos/logo2-1100x600.webp'

import { BrowserRouter, Routes, Route } from "react-router"


import Home from './pages/Home/Home'
import Presentacion from './pages/Presentacion/Presentacion'


import './App.css'
//import './App.css'

function App() {

  
  return (
  
    
                    
  <BrowserRouter>

      
       
  
      <Routes>
       
          
            
        <Route path="/" element={<Presentacion/>}>

        </Route>

        <Route path="/home" element={<Home/>}>

        </Route>
       

            
          </Routes>

    

     </BrowserRouter>

  
  )
}

export default App
