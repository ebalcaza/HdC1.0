// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import heroImg2 from './assets/elemn1.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import element2 from './assets/logos/logo2-1100x600.webp'

import { BrowserRouter, Routes, Route } from "react-router"

import Home from './pages/Home/Home'
import Presentacion from './pages/Presentacion/Presentacion'
import Login from './pages/Login/Login'
import Inicio from './pages/Inicio/Inicio' // pagina de inicio
import RutaProtegida from './components/RutaProtegida' // para evitar que ingresen usuarios no logueados

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route 
          path="/inicio" 
          element={
            <RutaProtegida>
              <Inicio />
            </RutaProtegida>
          } 
        />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App