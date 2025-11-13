import { Link, useNavigate } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext'
import Carrito from '../Carrito/Carrito'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const { setCarritoAbierto, carritoItems } = useCarrito()

  return (
    <>
      <header className="encabezado">
        <img className="img" src="/img/logo.jpeg" alt="logo empresa" />
        
        <div className="slogan">
          Realza tu belleza <br /> natural de tu piel
        </div>
        
        <p className="DESCUBRE">Descubre productos de skincare que nutren y revitalizan</p>
        
        <nav className="titulo">
          <Link className="titu" to="/">Inicio</Link>
          <Link className="titu" to="/promociones">Promociones</Link>
          <Link className="titu" to="/opiniones">Opiniones</Link>
        </nav>
        
        <div className="carrito-icono-contenedor" onClick={() => setCarritoAbierto(true)}>
          <img 
            className="cart" 
            src="/img/bolsa-2.png" 
            alt="Carrito"
          />
          {carritoItems.length > 0 && (
            <span className="carrito-badge">{carritoItems.length}</span>
          )}
        </div>
        
        <img 
          onClick={() => navigate('/registro')} 
          className="cart_2" 
          src="/img/usuario.png" 
          alt="Usuario"
        />
        
        <div className="botones-contenedor">
          <a href="/img/Catalogo mar de soles_20250815_110306_0000.pdf" className="btn btn-ver">
            VER PRODUCTOS
          </a>
          <a 
            href="https://www.instagram.com/mardesoles_skin?igsh=MWw5cHN3N3g0YThmMw%3D%3D&utm_source=qr"
            className="btn btn-compra"
          >
            COMPRAR AHORA
          </a>
        </div>
      </header>

      <Carrito />
    </>
  )
}

export default Header
