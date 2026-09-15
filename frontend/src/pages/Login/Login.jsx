import { useState } from 'react'
import { useNavigate } from 'react-router' // Para redirigir de página

export default function Login() {
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  const navigate = useNavigate() // Hook de navegación

const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  setCargando(true)

  try {
    const respuesta = await fetch('http://localhost:5298/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        contrasena: contrasena,
      }),
    })

    // Leer respuesta de manera segura evitando el error de JSON vacío
    const textoRespuesta = await respuesta.text()
    const data = textoRespuesta ? JSON.parse(textoRespuesta) : {}

    if (!respuesta.ok) {
      throw new Error(data.mensaje || 'Error al iniciar sesión')
    }

    // 'data' contiene { id, nombre, rol } devueltos por C#
    localStorage.setItem('usuario', JSON.stringify(data))

    navigate('/Inicio')

  } catch (err) {
    setError(err.message)
  } finally {
    setCargando(false)
  }
}

  return (
    <main>
      <h1>Iniciar sesión</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email de usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button type="submit" disabled={cargando}>
          {cargando ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </main>
  )
}