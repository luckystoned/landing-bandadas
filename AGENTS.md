# AGENTS.md

Guia permanente para agentes de IA y desarrolladores que trabajen en la landing del Premio GES de Bandadas.

## Objetivo del proyecto

Este proyecto construye la landing oficial del Premio GES, una convocatoria vinculada a Bandadas.

Bandadas es una plataforma/ecosistema orientado a conectar proyectos, artistas, instituciones y procesos culturales. El Premio GES es una convocatoria de caracter institucional que debe comunicar con claridad la oportunidad, el valor del premio, las condiciones de participacion y el camino de postulacion.

La landing debe funcionar como pieza principal de comunicacion, SEO y conversion. Su objetivo no es demostrar complejidad tecnica, sino entregar una experiencia rapida, clara, accesible y confiable.

## Filosofia del proyecto

El proyecto prioriza:

- **Performance**: una landing de marketing pierde conversiones si carga lento. Cada decision debe cuidar tiempos de carga, Core Web Vitals, peso de assets y cantidad de JavaScript enviado al navegador.
- **SEO**: la pagina debe ser indexable y comprensible para buscadores. La estructura HTML, metadata, contenido, schema y performance son parte del producto, no tareas secundarias.
- **Accesibilidad**: el Premio GES debe poder ser entendido y usado por la mayor cantidad posible de personas. Se debe apuntar a WCAG AA, buen contraste, navegacion por teclado y contenido semantico.
- **Codigo simple**: una landing institucional debe ser facil de mantener. Preferir soluciones directas antes que abstracciones prematuras.
- **Bajo mantenimiento**: evitar dependencias innecesarias, patrones complejos y logica cliente que no aporte valor directo.
- **HTML semantico**: usar la estructura nativa del documento para mejorar accesibilidad, SEO, mantenibilidad y legibilidad.
- **Excelente experiencia mobile**: el primer contacto probablemente ocurra desde celular. La experiencia mobile debe ser rapida, clara y completa.
- **Escalabilidad**: aunque sea una landing, debe permitir sumar secciones, contenidos, idiomas o nuevas ediciones sin reescribir la base.
- **Componentizacion**: cada seccion debe estar aislada en componentes claros, reutilizables y de responsabilidad unica.

## Stack tecnologico

### Astro

Astro es la base recomendada para este proyecto porque permite generar HTML estatico, minimizar JavaScript por defecto y organizar contenido en componentes. Es especialmente adecuado para sitios de marketing, documentacion y contenido editorial donde la velocidad y el SEO son centrales.

### TypeScript

TypeScript se usa para mejorar la seguridad del codigo, documentar contratos de props y reducir errores al modificar componentes, contenido o configuracion SEO.

### Tailwind CSS

Tailwind CSS permite construir una interfaz consistente sin crear hojas de estilo grandes y dificiles de mantener. Debe usarse con criterio: clases claras, tokens reutilizables y sin convertir los componentes en bloques ilegibles.

### HTML semantico

La estructura HTML debe aprovechar elementos nativos como `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `h1`-`h6`, `figure`, `time`, `dl`, `details` y `summary` cuando correspondan.

### CSS moderno

Usar CSS moderno para resolver layout, responsive, animaciones simples y estados visuales: grid, flexbox, custom properties, `clamp`, container-aware thinking cuando sea util, `prefers-reduced-motion` y media queries bien acotadas.

### Sin librerias innecesarias

No incorporar dependencias si HTML, CSS, Astro o TypeScript resuelven el problema. Cada libreria agrega peso, riesgo de mantenimiento y superficie de errores.

### Sin React salvo necesidad real

Astro permite usar islands interactivas, pero React solo debe agregarse si existe una necesidad real de interactividad compleja que no pueda resolverse de forma simple con Astro, HTML o JavaScript liviano.

### Deploy estatico sobre AWS S3 + CloudFront

El objetivo es generar archivos estaticos y servirlos desde S3 + CloudFront. Esta arquitectura es ideal para una landing porque ofrece baja latencia, bajo costo, alta disponibilidad, cache global y baja complejidad operativa.

## Arquitectura esperada

La estructura puede evolucionar, pero debe partir de una organizacion simple:

```txt
src/
  components/
    ui/
    common/
  layouts/
    BaseLayout.astro
  sections/
    Hero.astro
    Context.astro
    PalacioMolina.astro
    Objective.astro
    Awards.astro
    TechnicalMaterial.astro
    Tutorials.astro
    Jury.astro
    Faqs.astro
    FinalCta.astro
  pages/
    index.astro
  styles/
    global.css
  content/
    premio-ges/
  seo/
    metadata.ts
    schemas.ts
  schemas/
    premioGes.ts
  scripts/
public/
  assets/
  fonts/
  images/
  robots.txt
  favicon.svg
```

Reglas de arquitectura:

- `src/pages/` define rutas.
- `src/layouts/` define envoltorios de documento, metadata y estructura comun.
- `src/sections/` contiene secciones de pagina completas.
- `src/components/` contiene piezas reutilizables mas pequenas.
- `src/content/` centraliza contenido editable cuando convenga.
- `src/seo/` centraliza metadata, Open Graph, canonical y Schema.org.
- `public/` contiene assets que se copian sin procesar.
- No mezclar contenido, presentacion y configuracion SEO en componentes gigantes.

## Convenciones

### Naming

- Componentes Astro en `PascalCase`: `Hero.astro`, `FinalCta.astro`.
- Utilidades TypeScript en `camelCase`: `buildCanonicalUrl.ts`.
- Constantes en `UPPER_SNAKE_CASE` solo cuando sean globales e inmutables.
- Archivos de contenido con nombres descriptivos y estables.

### Componentes

- Cada seccion principal debe ser un componente independiente.
- Un componente debe tener una unica responsabilidad.
- Evitar componentes de mas de una responsabilidad visual o semantica.
- Extraer subcomponentes solo cuando reduzcan duplicacion real o mejoren legibilidad.

### Props

- Tipar props con interfaces o tipos locales.
- Mantener props simples y explicitas.
- Evitar pasar objetos enormes si el componente solo necesita campos concretos.

### Archivos

- Un archivo debe tener un proposito claro.
- Evitar carpetas profundas sin necesidad.
- No crear abstracciones "por si acaso".

### Imports

- Preferir imports relativos claros dentro de modulos cercanos.
- Evitar alias hasta que exista una necesidad real.
- No importar librerias completas si solo se necesita una funcion puntual.

### Responsive

- Diseñar mobile first.
- Agregar mejoras progresivas para tablet, desktop y ultra wide.
- Validar que ningun texto, CTA o imagen se rompa en anchos chicos.

### Spacing

- Usar una escala consistente.
- Mantener ritmo vertical claro.
- Evitar espaciados arbitrarios por seccion.

### Tipografia

- Definir jerarquia clara para `h1`, `h2`, `h3`, parrafos, captions y CTAs.
- Optimizar carga de fuentes.
- Evitar tamaños extremos que perjudiquen mobile.

### Imagenes

- Usar formatos modernos cuando corresponda.
- Definir dimensiones para evitar layout shift.
- Agregar `alt` significativo o `alt=""` si la imagen es puramente decorativa.
- Evitar imagenes pesadas, oscuras o genericas que no ayuden a entender el premio.

### SEO

- Cada pagina debe tener title, description, canonical y metadata social.
- Mantener una jerarquia de headings coherente.
- Centralizar Schema.org y metadata repetible.

### Accesibilidad

- Usar controles nativos cuando sea posible.
- Mantener focus visible.
- Garantizar navegacion por teclado.
- Usar ARIA solo cuando mejore la semantica; no usar ARIA redundante.

### Animaciones

- Preferir transiciones CSS livianas.
- Evitar animaciones que bloqueen lectura o conversion.
- Respetar `prefers-reduced-motion`.

## Performance

Reglas estrictas:

- No enviar JavaScript innecesario.
- No hidratar componentes salvo que exista una interaccion indispensable.
- Evitar React u otros runtimes de cliente salvo necesidad real.
- Optimizar imagenes antes de publicarlas.
- Usar lazy loading en imagenes fuera del primer viewport.
- Considerar prefetch solo si mejora una navegacion real.
- Cargar fuentes de forma optimizada y con fallback adecuado.
- Mantener CSS minimo y reutilizable.
- Evitar dependencias pesadas para sliders, animaciones o efectos simples.
- Objetivo: Lighthouse Performance mayor a 95.

## SEO

Reglas del proyecto:

- Usar HTML semantico.
- Mantener una unica `h1` por pagina.
- Respetar jerarquia de headings.
- Definir metadata unica y precisa.
- Definir canonical.
- Implementar Open Graph.
- Implementar Twitter Cards.
- Agregar Schema.org relevante.
- Incluir `robots.txt`.
- Generar `sitemap.xml`.
- Usar URLs limpias.
- Escribir `alt` text util.
- Incluir enlaces internos cuando aporten contexto.
- Preparar contenido para rich snippets cuando aplique.
- Garantizar indexabilidad.
- Cuidar Core Web Vitals: LCP, CLS, INP.

## Accesibilidad

El objetivo minimo es WCAG AA.

Reglas:

- Contraste suficiente en texto, botones, links y estados.
- Estados de focus visibles.
- Navegacion por teclado completa.
- Orden logico del documento.
- Links y botones con nombres accesibles.
- Formularios o CTAs con labels claros si aparecen.
- ARIA solo cuando corresponda.
- No reemplazar semantica nativa con `div` interactivos.
- Validar la experiencia con lector de pantalla de forma razonable cuando haya interacciones.

## Componentizacion

La landing debe dividirse por secciones:

- Hero.
- Contexto.
- Palacio Molina.
- Objetivo del premio.
- Premiacion.
- Material tecnico.
- Tutoriales.
- Jurado.
- FAQs.
- CTA final.
- Footer.

Cada seccion debe poder entenderse, editarse y testearse visualmente de forma aislada. No crear componentes gigantes que mezclen varias secciones, metadata, fetch de contenido y estilos locales complejos.

## Animaciones

- Usar animaciones livianas y con proposito.
- Preferir CSS sobre librerias.
- Evitar animaciones en scroll complejas si no son esenciales.
- No bloquear interaccion ni lectura.
- Respetar `prefers-reduced-motion`.
- Mantener duraciones cortas y consistentes.

## Buenas practicas

- No duplicar codigo.
- No sobreingenierizar.
- Mantener el codigo limpio.
- Comentar solo cuando el comentario aporte contexto real.
- Favorecer simplicidad sobre flexibilidad prematura.
- Revisar el impacto de cada dependencia.
- Mantener el contenido separado de la logica cuando sea posible.

## Checklist obligatorio antes de finalizar cualquier tarea

Antes de dar una tarea por terminada, revisar:

- Performance.
- SEO.
- Accesibilidad.
- Responsive mobile, tablet, desktop y ultra wide.
- Limpieza del codigo.
- Tipado TypeScript.
- Build sin errores.
- Ausencia de JavaScript innecesario.
- Imagenes optimizadas y con dimensiones.
- Metadata correcta.
- Headings coherentes.
- Contraste y focus visibles.
