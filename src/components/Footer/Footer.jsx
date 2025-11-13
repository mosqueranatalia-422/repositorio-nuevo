import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <article className="footer-2">
        <a href="https://www.facebook.com/">
          <img className="imagenes" src="/img/facebook (2).png" alt="Facebook" />
        </a>
        
        <a href="https://x.com/?lang=es">
          <img className="imagenes" src="/img/twiter (2).png" alt="Twitter" />
        </a>
        
        <a href="https://workspace.google.com/intl/es-419/gmail/">
          <img className="imagenes" src="/img/gmail (2).png" alt="Gmail" />
        </a>
        
        <a href="https://www.instagram.com/mardesoles_skin/?igsh=MWw5cHN3N3g0YThmMw%3D%3D&utm_source=qr">
          <img className="imagenes" src="/img/intagram.png" alt="Instagram" />
        </a>
      </article>
      <p className="copyright">© 2025 Mar De Soles | Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer
