import './IconList.css'

function IconList() {
  const icons = [
    { image: '/img/icons8-entrega.gif', text: 'Envios a todo el pais' },
    { image: '/img/icons8-planta-50.png', text: 'Productos naturales' },
    { image: '/img/metodo de pago.png', text: 'Pago seguro' }
  ]

  return (
    <div className="iconos-lista">
      {icons.map((icon, index) => (
        <div className="icono-item" key={index}>
          <img src={icon.image} alt={icon.text} />
          <p>{icon.text}</p>
        </div>
      ))}
    </div>
  )
}

export default IconList
