import { Navigate } from 'react-router'

export default function RutaProtegida({ children }) {
  // Verificar si hay una sesión activa en localStorage
  const usuarioGuardado = localStorage.getItem('usuario')

  // Si no hay datos de usuario, redirigir a /Login inmediatamente
  if (!usuarioGuardado) {
    return <Navigate to="/Login" replace />
  }

  // Si hay usuario, renderizar la página solicitada (children)
  return children
}