import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './Register.css'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
    
    if (username === 'admin' && password === 'admin') {
      navigate('/')
    } else {
      console.log('Credenciales incorrectas...')
      alert('Credenciales incorrectas')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h1 className="logo">MardeSoles</h1>

          <form onSubmit={handleLogin}>
            <div className="inputBox">
              <input 
                id="Username" 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="Username">Usuario</label>
            </div>

            <div className="inputBox">
              <input 
                id="password" 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Contraseña</label>
            </div>

            <button type="submit" className="enter">
              Iniciar sesión
            </button>
          </form>

          <div className="extra-links">
            <a href="#">¿Olvidaste tu contraseña?</a>
            <Link to="/iniciarsesion">Crear una cuenta</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Register
