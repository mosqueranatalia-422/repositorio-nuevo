import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Promociones.css'
import { Link } from 'react-router-dom'

function Promociones() {
  const productos = [
    {
      id: 101,
      image: '/img/gel.jpeg',
      title: 'RUTINA DE DUCHA',
      precioAnterior: '$110.000',
      precioAhora: '$90.900'
    },
    {
      id: 102,
      image: '/img/bases.jpeg',
      title: 'BASE TIMEWISE',
      precioAnterior: '$50.000',
      precioAhora: '$39.900'
    },
    {
      id: 103,
      image: '/img/pestañina.jpeg',
      title: 'PESTAÑINA',
      precioAnterior: '$55.400',
      precioAhora: '$49.500'
    }
  ]

  return (
    <>
      <Header />

      <main>
        <section className="img-principal">
          <img className="img-modelo" src="/img/modelo2.jpeg" alt="Modelo" />
          <div>
            <h2 className="text">¡Promociones exclusivas para ti!</h2>
            <p className="texto-1">¡CALIDAD!</p>
          </div>
        </section>

        <section className="promociones">
          <div className="promo">
            <img src="/img/icono descuento.png" alt="Descuento" />
            <p>10% DE DESCUENTO EN TU PRIMERA COMPRA</p>
          </div>
          <div className="promo">
            <img src="/img/icono candado.png" alt="Registro" />
            <p>10% DE DESCUENTO POR REGISTRARTE EN NUESTRA TIENDA</p> <br />
            <Link to="/registro" className="btn-descuento">¡QUIERO MI DESCUENTO!</Link>
          </div>
        </section>

        <section className="productos">
          {productos.map((producto) => (
            <ProductCard 
              key={producto.id}
              id={producto.id}
              image={producto.image}
              title={producto.title}
              precioAnterior={producto.precioAnterior}
              precioAhora={producto.precioAhora}
            />
          ))}
        </section>

        <div className="contenedor-boton">
          <button 
            onClick={() => window.location.href = '/img/Catalogo mar de soles_20250815_110306_0000.pdf'} 
            className="boton"
          >
            Ver más
          </button>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Promociones
