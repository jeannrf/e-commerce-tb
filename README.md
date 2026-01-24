# 🛒 Tribuna E-commerce

Bienvenido al repositorio oficial del e-commerce de **Tribuna**. Una plataforma moderna, rápida y escalable construida con las últimas tecnologías web para ofrecer la mejor experiencia de compra a la hinchada.

🚀 **Sitio en vivo:** [https://tribuna-svr.vercel.app/](https://tribuna-svr.vercel.app/)

---

## ✨ Características Principales

- **🛍️ Catálogo Inteligente**: Visualización de productos con carga asíncrona y estados de carga optimizados.
- **🔍 Búsqueda y Filtros Avanzados**: Encuentra productos por nombre, descripción o categoría con resultados en tiempo real.
- **📊 Ordenamiento Dinámico**: Clasifica los productos por precio (menor/mayor) o por los más destacados.
- **📄 Paginación Fluida**: Navegación eficiente a través de grandes catálogos sin recargas de página.
- **⚡ Rendimiento Extremo**: Construido con **Astro 5** siguiendo la arquitectura de "Islands", logrando un Lighthouse score excepcional.
- **🎨 Diseño Premium**: Interfaz moderna con soporte nativo para **Modo Oscuro**, micro-animaciones y diseño completamente responsive.
- **📝 Gestión de Contenido (CMS)**: Integración total con **Sanity.io** para una gestión de inventario intuitiva y actualizaciones instantáneas.
- **🤖 Admin Embebido**: Acceso al panel de control directamente desde `/admin` mediante **Sanity Studio v3**.
- **💬 WhatsApp Checkout**: Integración directa con WhatsApp para facilitar el proceso de compra y atención personalizada.
- **💾 Sistema de Caché**: Implementación de caché en disco para optimizar las peticiones a la API durante el desarrollo.

---

## 🛠️ Tech Stack

El proyecto utiliza un stack tecnológico de vanguardia para garantizar estabilidad y velocidad:

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation & Server-side Rendering)
- **UI Libraries**: [React 19](https://reactjs.org/) (para componentes dinámicos y el CMS Studio)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/) (utilizando el nuevo motor JIT)
- **Base de Datos / CMS**: [Sanity.io](https://www.sanity.io/) (Headless CMS)
- **Iconografía**: [Lucide Astro](https://lucide.dev/)
- **Despliegue**: [Vercel](https://vercel.com/)

---

## 📁 Estructura del Proyecto

```text
/
├── public/          # Recursos estáticos (imágenes, fuentes, etc.)
├── sanity/          # Esquemas de datos y configuración del CMS
├── src/
│   ├── components/  # Componentes modulares (.astro y .tsx)
│   ├── data/        # Datos locales y constantes
│   ├── layouts/     # Estructuras base de las páginas (Layout, SEO)
│   ├── lib/         # Clientes de API y utilidades (Sanity client)
│   ├── pages/       # Sistema de rutas (Index, Tienda, Admin, API)
│   └── styles/      # Tokens de diseño y configuración de Tailwind
├── astro.config.mjs # Configuración maestra de Astro
└── sanity.config.ts # Punto de entrada para el Sanity Studio
```

---

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para configurar el entorno de desarrollo:

1. **Requisitos previos**:
   - Node.js 18.x o superior
   - Una cuenta en Sanity (si deseas usar tu propio proyecto)

2. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/jeannrf/e-commerce-tb.git
   cd e-commerce-tb
   ```

3. **Instalar dependencias**:
   ```bash
   npm install
   ```

4. **Variables de Entorno**:
   El proyecto utiliza el Project ID `3u2452q3` por defecto. Si deseas usar el tuyo, actualiza `src/lib/sanity.ts`.

5. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

6. **Explorar**:
   Abre [http://localhost:4321](http://localhost:4321) para ver la tienda o [http://localhost:4321/admin](http://localhost:4321/admin) para el panel de control.

---

## ⚙️ Configuración del CMS

Para gestionar los productos:
1. Accede a la ruta `/admin` en tu navegador.
2. Inicia sesión con tus credenciales de Sanity.
3. Puedes crear, editar o eliminar productos, categorías y banners principales.
4. Los cambios se reflejarán automáticamente en el sitio gracias a la integración nativa.

---

## 📝 Notas de Implementación

- **Optimización de Imágenes**: Astro se encarga de procesar y servir las imágenes en formatos modernos (WebP/AVIF) para reducir el ancho de banda.
- **Dark Mode**: Implementado mediante clases de Tailwind, detectando automáticamente la preferencia del sistema del usuario.
- **Interacciones**: Se ha priorizado el uso de componentes de Astro para mantener el bundle de JS al mínimo, usando React solo donde es estrictamente necesario.

---

Desarrollado con ❤️ para **Tribuna SVR**.
