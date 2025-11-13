import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    
    if (email.trim() !== '') {
      alert('Registro exitoso')
      navigate('/registro')
    } else {
      alert('Por favor ingresa tu correo')
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <img src="/img/logo.jpeg" alt="Logo" className="logo-img" />
          
          <form onSubmit={handleRegister}>

            <div className="inputBox">
              <input 
                id="Username2" 
                type="text" 
                placeholder="Introduce tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="enter">
              Registrarse
            </button>
          </form>

          <p className="condiciones">
            Al registrarme, acepto las Condiciones del servicio y la 
            Política de privacidad.
          </p>

          <hr className="linea" />

          <p className="continuar">O continúa con:</p>

          <button type="button" className="btn-social google">
            <img src="/img/google.png" alt="Google" /> Google
          </button>
          <button type="button" className="btn-social microsoft">
            <img src="/img/microsoft.png" alt="Microsoft" /> Microsoft
          </button>
          <button type="button" className="btn-social apple">
            <img src="/img/apple.png" alt="Apple" /> Apple
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
