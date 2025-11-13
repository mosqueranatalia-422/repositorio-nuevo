import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import OpinionCard from '../../components/OpinionCard/OpinionCard'
import './Opiniones.css'

function Opiniones() {
  const [opiniones, setOpiniones] = useState([
    {
      nombre: 'Laura González',
      fecha: '07/10/2025',
      opinion: '"El serum hidratante dejó mi piel súper suave. Lo uso antes del maquillaje y me encanta el brillo natural que deja."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Camila Rojas',
      fecha: '07/10/2025',
      opinion: '"Me sorprendió el olor tan rico de las cremas. Además, no me irritan la piel y eso me pasa con casi todos los productos."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Valentina Pérez',
      fecha: '07/10/2025',
      opinion: '"La base ligera es perfecta para el día a día. Cubre sin verse pesada, ¡10/10!"',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'María Fernanda Díaz',
      fecha: '07/10/2025',
      opinion: '"Me llegó rápido el pedido y bien empacado. Se nota el amor con el que preparan todo 😊."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Andrea Castro',
      fecha: '07/10/2025',
      opinion: '"Llevo una semana usando el tónico facial y ya noto mi piel más luminosa. Súper recomendado."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Sara Morales',
      fecha: '07/10/2025',
      opinion: '"El labial mate me duró todo el día sin resecarme los labios. ¡Por fin encontré uno así!"',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Daniela Lozano',
      fecha: '07/10/2025',
      opinion: '"Compré el kit de skincare y fue la mejor inversión. Mi piel cambió completamente."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Isabela Ramírez',
      fecha: '07/10/2025',
      opinion: '"Lo que más me gusta es que son productos naturales, sin ese olor químico fuerte. Se sienten suaves."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Juliana Torres',
      fecha: '07/10/2025',
      opinion: '"Probé el exfoliante y deja la piel increíble, con sensación fresca. Ya es parte de mi rutina semanal."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Paula Suárez',
      fecha: '07/10/2025',
      opinion: '"Amo los empaques, se ven tan lindos en mi tocador 😍. Pero lo mejor es que sí funcionan."',
      likes: 0,
      dislikes: 0
    },
    {
      nombre: 'Manuela',
      fecha: '07/10/2025',
      opinion: '"Me encantan los productos de mar de soles, son súper buenos"',
      likes: 0,
      dislikes: 0
    }
  ])

  useEffect(() => {
    // Opcional: puedes cargar opiniones adicionales del localStorage si lo deseas
    const opinionesGuardadas = JSON.parse(localStorage.getItem('opiniones')) || []
    if (opinionesGuardadas.length > 0) {
      setOpiniones([...opiniones, ...opinionesGuardadas])
    }
  }, [])

  return (
    <>
      <Header />

      <main className="opiniones-main">
        <h2>Opiniones de nuestros clientes</h2>
        <div id="lista-opiniones">
          {opiniones.map((op, index) => (
            <OpinionCard
              key={index}
              nombre={op.nombre}
              fecha={op.fecha}
              opinion={op.opinion}
              initialLikes={op.likes}
              initialDislikes={op.dislikes}
            />
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Opiniones
