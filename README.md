# Bandadas — Arte para desarrollos inmobiliarios

Landing comercial B2B de Bandadas para desarrolladoras inmobiliarias. Presenta el servicio integral de diseño y gestión de premios de arte, sus diferenciales, proceso, experiencia y vías de contacto.

## Stack

- Astro 5 con salida estática.
- TypeScript estricto.
- Tailwind CSS 3.
- Sitemap generado en build.
- Sin React ni hidratación de componentes.

## Comandos

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

## Contenido y configuración

El contenido comercial y los enlaces viven en `src/content/bandadas.ts`. La metadata y los schemas están centralizados en `src/seo/`.

Variables públicas opcionales:

```bash
PUBLIC_SITE_URL="https://bandadas.com"
PUBLIC_SCHEDULE_URL="https://calendly.com/..."
```

Si no se define `PUBLIC_SCHEDULE_URL`, el CTA abre la agenda pública de Bandadas en Google Calendar. Los clics con `data-track-event` emiten el evento `bandadas:track` y, si existe `window.dataLayer`, también envían un evento compatible.

## Arquitectura

- `src/pages/`: rutas.
- `src/layouts/`: documento base, metadata y tracking.
- `src/sections/`: bloques narrativos completos.
- `src/components/`: piezas compartidas y UI.
- `src/content/`: contenido tipado y enlaces.
- `src/seo/`: metadata y Schema.org.
- `public/`: assets, manifest, robots y llms.txt.

## Criterios

- Una única `h1` y contenido principal en HTML.
- Mobile first, WCAG AA y foco visible.
- JavaScript mínimo y sin animaciones continuas.
- Imágenes con dimensiones y lazy loading fuera del hero.
- Build estático compatible con S3 + CloudFront.
