# CodeLoom - Sitio Web Corporativo

Un sitio web moderno para CodeLoom, empresa de desarrollo web y eCommerce, desarrollado con Vue 3 y Vite.

## 📋 Características

- **Diseño responsivo**: Adaptado a todo tipo de dispositivos
- **Animaciones fluidas**: Mejora la experiencia de usuario
- **Optimizado para SEO**: Estructura semántica y metadatos adecuados
- **Rendimiento optimizado**: Carga rápida y experiencia fluida
- **Componentes reutilizables**: Código limpio y mantenible

## 🚀 Tecnologías utilizadas

- **Vue 3**: Framework progresivo para construir interfaces de usuario
- **Vue Router**: Enrutamiento para SPA (Single Page Application)
- **Vite**: Build tool rápido y eficiente
- **GSAP**: Biblioteca para animaciones avanzadas
- **ScrollReveal**: Animaciones al hacer scroll
- **FontAwesome**: Iconos modernos y escalables

## 🛠️ Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/codeloom-website.git
cd codeloom-website
```

2. Instala las dependencias:
```bash
npm install
# o si prefieres yarn
yarn install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador y visita `http://localhost:3000`

## 📦 Estructura del proyecto

```
codeloom-website/
├── public/               # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── assets/           # Assets (estilos, imágenes, etc.)
│   ├── components/       # Componentes Vue reutilizables
│   ├── views/            # Vistas/páginas principales
│   ├── router/           # Configuración de rutas
│   ├── App.vue           # Componente raíz
│   └── main.js           # Punto de entrada
├── index.html            # Plantilla HTML
├── vite.config.js        # Configuración de Vite
└── package.json          # Dependencias y scripts
```

## 📄 Páginas

- **Home**: Presentación principal de la empresa
- **Portafolio**: Muestra de proyectos realizados
- **Sobre mí**: Información sobre la empresa y habilidades
- **Contacto**: Formulario de contacto y datos de la empresa

## 🔧 Personalización

### Paleta de colores

La paleta de colores se puede modificar fácilmente editando las variables CSS en `src/assets/styles/main.css`:

```css
:root {
  --principal: #2D3047;   /* Color principal */
  --accion: #6C63FF;      /* Color de acción/CTA */
  --secundario: #4A3DE8;  /* Color secundario */
  --acento: #6c63ff17;    /* Versión transparente del color de acción */
  --blanco: #FDFDFD;
  --gris: #F7F7F2;
  --grisFuentes: #2D2D2D;
}
```

### Imágenes y contenido

- Las imágenes deben colocarse en la carpeta `public/images/`
- El contenido de texto se puede editar directamente en los componentes Vue

## 📱 Responsividad

El sitio está diseñado para funcionar en dispositivos de todos los tamaños:
- Móviles (< 576px)
- Tablets (576px - 992px)
- Escritorio (> 992px)

## 🚀 Despliegue

Para construir la versión de producción:

```bash
npm run build
# o
yarn build
```

Los archivos generados estarán en la carpeta `dist/` y estarán listos para ser desplegados en cualquier servidor web.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Desarrollado con ❤️ por [Tu nombre/empresa]