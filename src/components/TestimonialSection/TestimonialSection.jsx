import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TestimonialSection.css'

function TestimonialSection() {
  const [nombre, setNombre] = useState('')
  const [opinion, setOpinion] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (nombre.trim() && opinion.trim()) {
      let opiniones = JSON.parse(localStorage.getItem('opiniones')) || []
      
      const fecha = new Date().toLocaleString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })

      opiniones.push({ nombre, opinion, fecha })
      localStorage.setItem('opiniones', JSON.stringify(opiniones))
      
      navigate('/opiniones')
    } else {
      alert('Por favor completa todos los campos.')
    }
  }

  return (
    <div className="testimonio">
      <div className="imagen">
        <img src="/img/modelo.jpg" alt="Testimonio de cliente" />
      </div>
      
      <div className="formulario_2">
        <h2>Deja tu opinión</h2>
        
        <label htmlFor="nombre">Tu nombre:</label>
        <input 
          id="nombre" 
          type="text" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        
        <label htmlFor="opinion">Tu opinión:</label>
        <textarea 
          id="opinion"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        />
        
        <button id="btnEnviar" type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </div>
  )
}

export default TestimonialSection
