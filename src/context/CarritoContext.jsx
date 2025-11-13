import { createContext, useState, useContext } from 'react'

const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const [carritoItems, setCarritoItems] = useState([])
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  const agregarAlCarrito = (producto) => {
    setCarritoItems(prevItems => {
      // Verificar si el producto ya existe en el carrito
      const itemExistente = prevItems.find(item => item.id === producto.id)
      
      if (itemExistente) {
        // Si existe, aumentar la cantidad
        return prevItems.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      } else {
        // Si no existe, agregarlo con cantidad 1
        return [...prevItems, { ...producto, cantidad: 1 }]
      }
    })
    setCarritoAbierto(true) // Abrir el carrito al agregar un producto
  }

  const eliminarDelCarrito = (index) => {
    setCarritoItems(prevItems => prevItems.filter((_, i) => i !== index))
  }

  const actualizarCantidad = (index, nuevaCantidad) => {
    if (nuevaCantidad < 1) return
    setCarritoItems(prevItems => {
      const nuevosItems = [...prevItems]
      nuevosItems[index].cantidad = nuevaCantidad
      return nuevosItems
    })
  }

  const calcularTotal = () => {
    return carritoItems.reduce((total, item) => total + (item.precio * item.cantidad), 0)
  }

  const vaciarCarrito = () => {
    setCarritoItems([])
  }

  return (
    <CarritoContext.Provider value={{
      carritoItems,
      carritoAbierto,
      setCarritoAbierto,
      agregarAlCarrito,
      eliminarDelCarrito,
      actualizarCantidad,
      calcularTotal,
      vaciarCarrito
    }}>
      {children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  const context = useContext(CarritoContext)
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider')
  }
  return context
}
