import { useCarrito } from '../../context/CarritoContext'
import './Carrito.css'

function Carrito() {
  const { 
    carritoItems, 
    carritoAbierto, 
    setCarritoAbierto,
    eliminarDelCarrito,
    actualizarCantidad,
    calcularTotal
  } = useCarrito()

  if (!carritoAbierto) return null

  return (
    <div className="carrito-overlay" onClick={() => setCarritoAbierto(false)}>
      <div className="carrito-contenedor" onClick={(e) => e.stopPropagation()}>
        <div className="carrito-header">
          <h2>Mi Carrito</h2>
          <button className="carrito-cerrar" onClick={() => setCarritoAbierto(false)}>✕</button>
        </div>

        <div className="carrito-body">
          {carritoItems.length === 0 ? (
            <div className="carrito-vacio">
              <p>Tu carrito está vacío</p>
              <p className="carrito-vacio-texto">Agrega productos para comenzar tu compra</p>
            </div>
          ) : (
            <div className="carrito-items">
              {carritoItems.map((item, index) => (
                <div key={index} className="carrito-item">
                  <img src={item.imagen} alt={item.nombre} className="carrito-item-img" />
                  <div className="carrito-item-info">
                    <h4>{item.nombre}</h4>
                    <p className="carrito-item-precio">${item.precio}</p>
                    <div className="carrito-item-cantidad">
                      <button onClick={() => actualizarCantidad(index, item.cantidad - 1)}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => actualizarCantidad(index, item.cantidad + 1)}>+</button>
                    </div>
                  </div>
                  <button className="carrito-item-eliminar" onClick={() => eliminarDelCarrito(index)}>
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {carritoItems.length > 0 && (
          <div className="carrito-footer">
            <div className="carrito-total">
              <span>Total:</span>
              <span className="carrito-total-precio">${calcularTotal().toFixed(2)}</span>
            </div>
            <button className="carrito-btn-comprar">Proceder al Pago</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carrito
