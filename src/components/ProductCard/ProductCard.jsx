import { useCarrito } from '../../context/CarritoContext'
import './ProductCard.css'

function ProductCard({ id, image, title, description, price, precioAnterior, precioAhora }) {
  const { agregarAlCarrito } = useCarrito()
  
  // Determinar si es producto con descuento
  const esPromocion = precioAnterior && precioAhora
  const precioFinal = esPromocion ? precioAhora : price

  const handleAgregarCarrito = () => {
    agregarAlCarrito({
      id: id || Date.now(),
      imagen: image,
      nombre: title,
      descripcion: description || '',
      precio: parseFloat(precioFinal.replace('$', '').replace(',', '')) || 0
    })
  }

  return (
    <div className="producto-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      
      {esPromocion ? (
        <>
          <p className="precio-anterior">Antes: <span>{precioAnterior}</span></p>
          <p className="precio-ahora">Ahora: {precioAhora}</p>
        </>
      ) : (
        <>
          {description && <h4>{description}</h4>}
          <p className="precio-normal">{price}</p>
        </>
      )}
      
      <button className="btn-agregar-carrito" onClick={handleAgregarCarrito}>
        {esPromocion ? 'Comprar ahora' : 'Agregar al Carrito'}
      </button>
    </div>
  )
}

export default ProductCard
