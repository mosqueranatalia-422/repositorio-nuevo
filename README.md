# Mar de Soles - Aplicación React

Esta es la versión React del sitio web Mar de Soles, una tienda de productos de skincare.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida
- **React Router DOM** - Navegación entre páginas
- **CSS Modules** - Estilos organizados por componente

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header/         # Navegación y logo
│   ├── Footer/         # Pie de página con redes sociales
│   ├── WhatsAppButton/ # Botón flotante de WhatsApp
│   ├── ProductCard/    # Tarjeta de producto
│   ├── IconList/       # Lista de iconos de características
│   └── TestimonialSection/ # Sección de testimonios y opiniones
├── pages/              # Páginas principales
│   ├── Home/          # Página de inicio
│   ├── Login/         # Página de inicio de sesión
│   ├── Register/      # Página de registro
│   ├── Promociones/   # Página de promociones
│   └── Opiniones/     # Página de opiniones de clientes
├── App.jsx            # Configuración de rutas
└── main.jsx           # Punto de entrada de la aplicación
```

## 🎨 Componentes Principales

### Componentes Comunes
- **Header**: Barra de navegación con logo y enlaces
- **Footer**: Pie de página con redes sociales
- **WhatsAppButton**: Botón flotante para contacto por WhatsApp

### Componentes Específicos
- **ProductCard**: Tarjeta para mostrar productos
- **IconList**: Lista de características (envíos, productos naturales, pago seguro)
- **TestimonialSection**: Formulario para dejar opiniones

### Páginas
- **Home**: Página principal con productos destacados
- **Login**: Inicio de sesión (usuario: admin, contraseña: admin)
- **Register**: Registro de nuevos usuarios
- **Promociones**: Productos en oferta
- **Opiniones**: Listado de opiniones de clientes (guardadas en localStorage)

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

## 🔑 Características

- ✅ Navegación con React Router
- ✅ Componentes modulares y reutilizables
- ✅ Estilos CSS organizados por componente
- ✅ Sistema de opiniones con localStorage
- ✅ Validación de formularios
- ✅ Diseño responsive
- ✅ Botón de WhatsApp flotante

## 📝 Notas

- Las credenciales de prueba para login son: **usuario: admin**, **contraseña: admin**
- Las opiniones se guardan en localStorage del navegador
- Todas las imágenes deben estar en la carpeta `/public/img/`

## 🎯 Rutas Disponibles

- `/` - Página de inicio
- `/registro` - Login
- `/iniciarsesion` - Registro
- `/promociones` - Promociones
- `/opiniones` - Opiniones de clientes
