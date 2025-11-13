import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import IconList from '../../components/IconList/IconList'
import ProductCard from '../../components/ProductCard/ProductCard'
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection'
import './Home.css'

function Home() {
  const productos = [
    {
      id: 1,
      image: '/img/bases.jpeg',
      title: 'Base TimeWise',
      description: 'Base ligera para una piel luminosa',
      price: '$50.000'
    },
    {
      id: 2,
      image: '/img/spray.jpeg',
      title: 'Spray corporal',
      description: 'Fragancias qué envuelven',
      price: '$68.900'
    },
    {
      id: 3,
      image: '/img/arrugas.jpeg',
      title: 'Reductor de arrugas',
      description: 'Adiós lineas de expresión',
      price: '$88.000'
    },
    {
      id: 4,
      image: '/img/gel.jpeg',
      title: 'Rutina de noche',
      description: 'Un olor fresco y floral todo el día',
      price: '$168.000'
    }
  ]

  const productosSecundarios = [
    {
      id: 5,
      image: '/img/crema.jpeg',
      title: 'Crema corporal reafirmante',
      description: 'Dale ese glow a tu piel',
      price: '$94.900'
    },
    {
      id: 6,
      image: '/img/serum.jpeg',
      title: 'Suero hidratante',
      description: 'Adios arrugas y manchas',
      price: '$89.900'
    },
    {
      id: 7,
      image: '/img/perfume.jpeg',
      title: 'Fragancia única que realza la personalidad',
      description: 'Tus dias magicos con excelentes aromas',
      price: '$104.000'
    },
    {
      id: 8,
      image: '/img/pestañina.jpeg',
      title: 'Alarga y define tus pestañas de forma natural y elegante.',
      description: 'Mirada de impacto',
      price: '$55.400'
    }
  ]

  return (
    <>
      <Header />

      <IconList />

      <div className="productos-lista">
        {productos.map((producto) => (
          <ProductCard 
            key={producto.id}
            id={producto.id}
            image={producto.image}
            title={producto.title}
            description={producto.description}
            price={producto.price}
          />
        ))}
      </div>

      <div className="productos-lista">
        {productosSecundarios.map((producto) => (
          <ProductCard 
            key={producto.id}
            id={producto.id}
            image={producto.image}
            title={producto.title}
            description={producto.description}
            price={producto.price}
          />
        ))}
      </div>

      <TestimonialSection />

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Home
