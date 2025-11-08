# 🎬 CineWAO - Plataforma de Cine Online

<div align="center">

  <img src="public/CineWao.ico" alt="CineWAO Logo" width="180"/>

  <br /><br />

  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.14-646CFF?logo=vite)](https://vitejs.dev/)
  [![Firebase](https://img.shields.io/badge/Firebase-10.12.2-FFCA28?logo=firebase)](https://firebase.google.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📝 Descripción

**CineWAO** es una plataforma web moderna y completa para la gestión y compra de boletos de cine. Ofrece una experiencia de usuario fluida con funcionalidades de cartelera, estrenos, confitería y un sistema completo de compra de boletos con selección de asientos. La aplicación está diseñada para funcionar en múltiples ciudades de Colombia, proporcionando una interfaz accesible, moderna y responsive.

---

## ✨ Funcionalidades Destacadas

- 🎭 **Cartelera de películas** con carrusel interactivo
- 🆕 **Sección de estrenos** para descubrir próximos lanzamientos
- 🍿 **Confitería virtual** para complementar tu experiencia
- 🎫 **Sistema de compra de boletos** en 3 pasos
- 💺 **Selección interactiva de asientos** en tiempo real
- 🏙️ **Multi-ciudad** - Disponible en 12 ciudades de Colombia
- 👤 **Autenticación segura** con Firebase
- 📱 **Diseño responsive** para todos los dispositivos
- 🛒 **Gestión de compras** y historial de transacciones

---

## ⚙️ Tecnologías & Herramientas

### 🔧 **Frontend**

- React 18.2.0
- Vite 5.4.14
- React Router DOM 6.23.0
- Tailwind CSS 3.0
- Swiper 11.1.1

### 🔥 **Backend & Servicios**

- Firebase Authentication 10.12.2
- Cloud Firestore para base de datos
- Firebase Hosting

### 🧪 **Calidad de Código**

- ESLint 8.57.0
- React Hooks Plugin
- React Refresh Plugin

---

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/EDyA2.git
cd EDyA2
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Firebase

Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:

```env
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
```

### 4. Iniciar entorno de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (puerto por defecto de Vite).

---

## 📦 Scripts Disponibles

| Script               | Descripción                                  |
|----------------------|----------------------------------------------|
| `npm run dev`        | Inicia servidor de desarrollo con Vite      |
| `npm run build`      | Compila el proyecto para producción          |
| `npm run preview`    | Previsualiza la build de producción          |
| `npm run lint`       | Analiza el código con ESLint                 |

---

## 🗂️ Estructura del Proyecto

```
EDyA2/
├── public/                    # Archivos estáticos
│   ├── img/                   # Imágenes y recursos multimedia
│   │   ├── cartelera/         # Posters de películas
│   │   ├── estrenos/          # Imágenes de estrenos
│   │   ├── confiteria/        # Productos de confitería
│   │   ├── nosotros/          # Fotos del equipo
│   │   └── iconos/            # Iconos de la aplicación
│   └── CineWao.ico            # Favicon
├── src/                       # Código fuente principal
│   ├── assets/                # Recursos adicionales
│   ├── components/            # Componentes reutilizables
│   │   ├── shared/            # Componentes compartidos
│   │   │   ├── Navbar.jsx     # Barra de navegación
│   │   │   ├── PeliculaCard.jsx
│   │   │   └── ...
│   │   ├── Carrusel.jsx       # Carrusel de imágenes
│   │   ├── Teatro.jsx         # Selección de asientos
│   │   └── ...
│   ├── pages/                 # Vistas principales
│   │   ├── cartelera/         # Página de cartelera
│   │   ├── estrenos/          # Página de estrenos
│   │   ├── confiteria/        # Página de confitería
│   │   ├── infopelicula/      # Detalles de película
│   │   ├── pagos/             # Proceso de pago (3 pasos)
│   │   ├── compras/           # Historial de compras
│   │   ├── registro/          # Registro y login
│   │   └── nosotros/          # Sobre nosotros
│   ├── routes/                 # Configuración de rutas
│   │   └── AppRoutes.jsx
│   ├── firebase/               # Configuración de Firebase
│   │   ├── firebase.js
│   │   └── auth.js
│   ├── hooks/                  # Custom hooks
│   │   └── useRedirect.jsx
│   ├── main.jsx                # Punto de entrada
│   └── main.css                # Estilos globales
├── context/                    # Context API de React
│   ├── authContext.jsx        # Contexto de autenticación
│   ├── useFuncionContext.jsx   # Contexto de funciones
│   └── useAsientosContext.jsx  # Contexto de asientos
├── .eslintrc.cjs               # Configuración de ESLint
├── tailwind.config.js          # Configuración de Tailwind
├── vite.config.js              # Configuración de Vite
├── package.json                # Dependencias y scripts
└── README.md
```

---

## 🎯 Funcionalidades Principales

### 🎬 Cartelera
Visualiza todas las películas disponibles en tu ciudad con información detallada, géneros y horarios de funciones.

### 🆕 Estrenos
Descubre las próximas películas que llegarán a las salas de cine.

### 🍿 Confitería
Explora y agrega productos de confitería a tu compra para complementar tu experiencia cinematográfica.

### 💺 Selección de Asientos
Sistema interactivo para seleccionar tus asientos preferidos en el teatro antes de comprar.

### 💳 Proceso de Pago
Flujo de compra en 3 pasos:
1. Selección de función y asientos
2. Método de pago
3. Confirmación y detalles finales

### 👤 Perfil de Usuario
Gestiona tu cuenta, revisa tu historial de compras y personaliza tu experiencia.

---

## 🏙️ Ciudades Disponibles

La plataforma está disponible en las siguientes ciudades:

- Armenia
- Barranquilla
- Bogotá
- Cali
- Cartagena
- Cúcuta
- Ibagué
- Manizales
- Medellín
- Pasto
- Pereira
- Popayán

---

## 👥 Autores

- Alex Andrey Guzmán - [@AlexG1503](https://github.com/AlexG1503) Desarrollador Frontend
- Alfonso Miguel Hernández - [@FonzHdz](https://github.com/FonzHdz) (Diseñador y Desarrollador Frontend)
- Juan Sebastian Valderrama - [@Xunni1e](https://github.com/Xunni1e) (Desarrollador Frontend)

---

<div align="center">

  <sub>Proyecto para la materia Estructura de Datos y Algoritmos 2</sub>

</div>
