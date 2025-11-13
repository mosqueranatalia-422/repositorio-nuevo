import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Promociones from './pages/Promociones/Promociones'
import Opiniones from './pages/Opiniones/Opiniones'

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iniciarsesion" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/opiniones" element={<Opiniones />} />
        </Routes>
      </Router>
    </CarritoProvider>
  )
}

export default App
