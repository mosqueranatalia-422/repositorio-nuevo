# Instrucciones de Instalación y Ejecución

## 📋 Prerrequisitos

Asegúrate de tener instalado:
- Node.js (versión 16 o superior)
- npm (viene con Node.js)

## 🚀 Pasos para Ejecutar el Proyecto

### 1. Instalar Node.js
Si no tienes Node.js instalado, descárgalo desde: https://nodejs.org/

### 2. Abrir Terminal en el Proyecto
En Windows PowerShell, navega a la carpeta del proyecto:
```powershell
cd "c:\Users\Damian\OneDrive\Escritorio\repositorio-nuevo"
```

### 3. Instalar Dependencias
Ejecuta el siguiente comando:
```powershell
npm install
```

### 4. Iniciar el Servidor de Desarrollo
```powershell
npm run dev
```

### 5. Abrir en el Navegador
El proyecto se abrirá automáticamente en: http://localhost:5173

## 🎯 Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la versión de producción

## ✅ Verificación

Si todo está correcto, deberías ver:
```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## 🔧 Solución de Problemas

### Error: "npm no se reconoce..."
- Instala Node.js desde https://nodejs.org/

### Puerto 5173 ocupado
- Vite automáticamente usará otro puerto (5174, 5175, etc.)

### Errores de dependencias
- Elimina la carpeta `node_modules` y el archivo `package-lock.json`
- Ejecuta nuevamente `npm install`

## 📱 Prueba de Funcionalidades

1. **Navegación**: Prueba los enlaces en el header
2. **Login**: usuario: `admin`, contraseña: `admin`
3. **Opiniones**: Deja una opinión desde la página de inicio
4. **WhatsApp**: Click en el botón flotante verde

¡Disfruta tu aplicación React! 🎉
