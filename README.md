# EnergíaFácil — Landing Next.js

Landing page responsive creada a partir del diseño de referencia del desafío. Está pensada para captación de leads de una empresa de asesoramiento energético en España.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS puro, sin framework visual
- Diseño responsive para desktop, tablet y móvil

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## Producción

```bash
npm run build
npm start
```

## Estructura

- `app/page.tsx`: landing completa y comportamiento del formulario.
- `app/globals.css`: sistema visual responsive.
- `app/layout.tsx`: metadata y layout global.
- `public/design-reference.png`: imagen de referencia generada para la prueba.

## Formulario

Actualmente el formulario funciona como demo frontend: al enviar muestra un estado de confirmación. Para producción, conecta `handleSubmit` con una API route, CRM, servicio de formularios o backend.

## Nota sobre imágenes

La propuesta usa recursos visuales generados con CSS para mantener el repositorio autocontenido y evitar depender de imágenes externas. Esto también permite adaptar fácilmente el diseño en una prueba técnica.
