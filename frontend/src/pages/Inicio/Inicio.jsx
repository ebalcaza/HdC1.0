import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function Inicio() {
  const [usuario, setUsuario] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Leer los datos del usuario guardados en el localStorage durante el Login
    const datosSesion = localStorage.getItem('usuario')

    if (datosSesion) {
      setUsuario(JSON.parse(datosSesion))
    } else {
      // Si no hay sesión iniciada, redirigir al login
      navigate('/Login')
    }
  }, [navigate])

  const cerrarSesion = () => {
    localStorage.removeItem('usuario')
    navigate('/Home')
  }

  if (!usuario) {
    return <p>Cargando sesión...</p>
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>¡Bienvenido, {usuario.nombre}! 👋</h1>
      <p>Has iniciado sesión correctamente en la aplicación.</p>

      <div style={{ marginTop: '1.5rem' }}>
        <button onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </div>
    </main>
  )
}