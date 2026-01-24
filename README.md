# <p align="center">🛒 Tribuna E-commerce</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.0+-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro Version" />
  <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Version" />
  <img src="https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Sanity-v3-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity CMS" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployment" />
</p>

---

<p align="center">
  <b>Una plataforma de comercio electrónico de alto rendimiento diseñada para la hinchada de Tribuna SVR.</b><br>
  Construida con la arquitectura de "Islands" para garantizar velocidad, SEO y una experiencia de usuario premium.
</p>

<p align="center">
  <a href="https://tribuna-svr.vercel.app/"><strong>Explorar Sitio en Vivo »</strong></a>
</p>

<p align="center">
  <img src="./public/assets/readme/preview.png" alt="Tribuna Store Preview" width="800" style="border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.3);" />
</p>

---

## 🚀 Vision General

**Tribuna E-commerce** no es solo una tienda virtual; es una herramienta de gestión completa. Combina la velocidad de un sitio estático con la flexibilidad de un CMS moderno, permitiendo actualizaciones en tiempo real sin sacrificar el rendimiento.

### Why Astro 5?
- **Zero JS by default**: Las páginas cargan instantáneamente.
- **Hybrid Rendering**: Páginas estáticas para el catálogo y dinámicas para el carrito y el admin.
- **View Transitions**: Navegación fluida entre páginas sin recargar el navegador.

---

## ✨ Características Destacadas

### 🛍️ Experiencia de Compra
- **Búsqueda Instantánea**: Sistema de filtrado reactivo por categorías, precios y términos.
- **Checkout vía WhatsApp**: Proceso de compra simplificado que conecta directamente al cliente con el vendedor.
- **Product Gallery**: Visualización detallada de productos con zoom y optimización de imágenes.

### 🛠️ Herramientas de Administración
- **Dashboard Embebido**: Gestiona inventario, categorías y banners desde `/admin`.
- **Caché Inteligente**: Sistema de persistencia en disco para acelerar el desarrollo local.
- **Detección de Stock**: Indicadores visuales automáticos para nuevos productos y ofertas.

### 🎨 Diseño y UI
- **Modo Oscuro Adaptativo**: Soporte completo para temas claros y oscuros basado en la preferencia del sistema.
- **Micro-interacciones**: Animaciones suaves con Tailwind 4 y Framer-style transitions.
- **Mobile First**: Optimizado para dispositivos móviles, garantizando una navegación táctil fluida.

---

## 🛠️ Stack de Tecnologías

| Tecnología | Propósito |
| :--- | :--- |
| **Astro 5** | Framework principal y orquestador de componentes. |
| **React 19** | Manejo de estados complejos y renderizado del CMS Studio. |
| **Tailwind CSS 4** | Sistema de diseño moderno con variables CSS dinámicas. |
| **Sanity.io** | Headless CMS para la gestión de productos y contenido multimedia. |
| **Lucide Icons** | Set de iconos vectoriales consistentes y ligeros. |
| **Vercel** | Infraestructura de despliegue y CI/CD. |

---

## 📁 Estructura del Ecosistema

```text
/
├── public/               # Activos estáticos y logos
│   └── assets/           # Imágenes y recursos multimedia
├── sanity/               # Configuración del Backend (Schemas & Structure)
│   ├── schema/           # Modelos de datos (Products, Categories)
│   └── plugins/          # Extensiones del Sanity Studio
├── src/
│   ├── components/       # Componentes atómicos y moleculares
│   ├── layouts/          # Plantillas de página (SEO-ready)
│   ├── lib/              # SDKs y Clientes (Sanity, API Helpers)
│   ├── pages/            # Sistema de rutas basado en archivos
│   │   ├── api/          # Endpoints internos para el catálogo
│   │   └── admin/        # Ruta del panel de administración
│   └── styles/           # Configuración global y capas de Tailwind
└── astro.config.mjs      # Cerebro del proyecto Astro
```

---

## ⚙️ Configuración para Desarrolladores

### 1. Clonar y Preparar
```bash
git clone https://github.com/jeannrf/e-commerce-tb.git
cd e-commerce-tb
npm install
```

### 2. Variables de Entorno
Crea un archivo `.env` en la raíz (o configura en el dashboard de Sanity):
```env
PUBLIC_SANITY_PROJECT_ID=3u2452q3
PUBLIC_SANITY_DATASET=production
```

### 3. Comandos Útiles
- `npm run dev`: Inicia el entorno de desarrollo local.
- `npm run build`: Genera la versión de producción optimizada.
- `npm run preview`: Previsualiza la build de producción localmente.
- `npm run astro check`: Ejecuta el linter de TypeScript y Astro.

---

## 📈 Rendimiento y SEO

El sitio está optimizado siguiendo las mejores prácticas de la industria:
- **Meta-tags dinámicos**: Títulos y descripciones únicas por producto.
- **Sitemap automático**: Generación de `sitemap.xml` para mejores resultados en Google.
- **Compresión de imágenes**: Uso de formatos de última generación para reducir el LCP (Largest Contentful Paint).

---

<p align="center">
  Diseñado con pasión por la hinchada y para la hinchada. 🔵⚪<br>
  <strong>Tribuna SVR © 2026</strong>
</p>
