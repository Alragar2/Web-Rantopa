# Landing Page Template

Este proyecto es una plantilla para crear landing pages sencillas utilizando React y Vite. A continuación se detallan los componentes y archivos incluidos en el proyecto.

## Estructura del Proyecto

```
landing-page-template
├── src
│   ├── main.jsx               # Punto de entrada de la aplicación
│   ├── App.jsx                # Componente principal que estructura la landing page
│   ├── index.css              # Estilos globales
│   ├── components             # Componentes reutilizables
│   │   ├── common             # Componentes comunes (Header, Footer, Button, Modal)
│   │   ├── sections           # Secciones de la landing page (Hero, Features, About, etc.)
│   │   └── forms              # Formularios (ContactForm, SubscribeForm)
│   ├── styles                 # Archivos de estilos
│   │   ├── variables.css      # Variables CSS
│   │   ├── base.css           # Estilos base
│   │   ├── animations.css      # Animaciones
│   │   ├── buttons.css        # Estilos para botones
│   │   ├── forms.css          # Estilos para formularios
│   │   └── responsive.css      # Estilos responsivos
│   ├── config                 # Configuración del sitio y secciones
│   ├── hooks                  # Hooks personalizados
│   ├── utils                  # Funciones utilitarias
│   └── assets                 # Imágenes y otros activos
├── public                     # Archivos públicos
│   ├── vite.svg               # Logo de Vite
│   └── images                 # Imágenes adicionales
├── index.html                 # Plantilla HTML principal
├── vite.config.js             # Configuración de Vite
├── vercel.json                # Configuración para despliegue en Vercel
├── package.json               # Configuración de npm
├── .env.example               # Ejemplo de configuración de variables de entorno
└── README.md                  # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd landing-page-template
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar el servidor de desarrollo, ejecuta:
```
npm run dev
```

Abre tu navegador y visita `http://localhost:3000` para ver la landing page en acción.

## Personalización

Puedes personalizar el contenido de la landing page editando los componentes en la carpeta `src/components/sections`. También puedes modificar los estilos en la carpeta `src/styles`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.