# Mis 15 Años | Azul Pistoni

Landing page responsive para la quinceañera de Azul Pistoni, construida con Next.js 14, TypeScript, Tailwind CSS, Framer Motion y Cloudinary Upload Widget.

## Ejecutar

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## SEO para redes sociales

La landing incluye metadatos Open Graph y Twitter para que WhatsApp, Facebook y otras redes muestren título, descripción e imagen al compartir el link.

En producción, configurá la URL pública del sitio:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

La imagen ilustrativa del preview se genera en `app/opengraph-image.tsx`. Podés reemplazar ese diseño por una foto real más adelante.

## Cloudinary

La subida funciona sin backend usando el Upload Widget. Antes de publicar, reemplazá `YOUR_CLOUD_NAME` en `components/UploadButton.tsx` por el cloud name real y asegurate de tener creado el upload preset unsigned `quince_uploads` en Cloudinary.

Configuración usada:

```ts
{
  cloudName: "YOUR_CLOUD_NAME",
  uploadPreset: "quince_uploads",
  folder: "quince-evento",
  multiple: true,
  resourceType: "auto",
  sources: ["local", "camera"]
}
```

## Imágenes

Las imágenes actuales son placeholders remotos. Reemplazá el fondo del hero en `components/Hero.tsx` y las fotos de la galería en `components/Gallery.tsx` por fotos reales del evento.
