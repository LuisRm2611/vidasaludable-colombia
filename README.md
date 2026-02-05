# Ashwagandha KSM-66 - Landing Page

Landing page moderna para Ashwagandha KSM-66 construida con React, TypeScript, Vite y Tailwind CSS.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`, lista para subir a tu hosting.

## 📁 Estructura del Proyecto

```
├── public/           # Archivos estáticos (incluye .htaccess para Apache)
├── src/
│   ├── components/
│   │   ├── landing/  # Componentes de la landing page
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/       # Componentes UI reutilizables
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       └── carousel.tsx
│   ├── lib/
│   │   └── utils.ts  # Utilidades (función cn para clases)
│   ├── pages/
│   │   └── Index.tsx # Página principal
│   ├── App.tsx       # Componente raíz con React Router
│   ├── main.tsx      # Punto de entrada
│   └── index.css     # Estilos globales y design system
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## 🎨 Design System

El proyecto utiliza un design system personalizado con:

- **Colores principales**: Verde Sabia (Sage), Coral (CTA), Cream
- **Fuentes**: 
  - Inter (sans-serif) para texto general
  - Playfair Display (serif) para títulos
- **Variables CSS**: Todas las variables están definidas en `src/index.css` usando HSL

## 🔧 Configuración

### Alias de Importación

El proyecto usa el alias `@` para imports relativos a `src/`:

```typescript
import Header from "@/components/landing/Header";
```

### WhatsApp

Para cambiar el número de WhatsApp, edita las constantes en:
- `src/components/landing/Header.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/Pricing.tsx`
- `src/components/landing/Footer.tsx`

Busca `WHATSAPP_NUMBER` y reemplázalo con tu número.

## 📦 Deploy

### Hosting Apache (cPanel/Hostinger)

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu servidor
3. El archivo `.htaccess` ya está incluido para que React Router funcione correctamente

### Otros Hostings

Para otros tipos de hosting, consulta la documentación de Vite sobre deployment.

## 🛠️ Tecnologías

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS
- **React Router** - Enrutamiento
- **Lucide React** - Iconos
- **Embla Carousel** - Carrusel de testimonios

## 📝 Notas

- Este proyecto fue migrado desde Lovable a hosting propio
- Todos los componentes están optimizados para SEO y rendimiento
- El diseño es completamente responsive

## 📄 Licencia

Todos los derechos reservados © 2024
