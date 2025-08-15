# Te lo Vendo — Sitio estático (MVP)

Sitio web estático inicial para el emprendimiento "Te lo Vendo". Incluye página de inicio, catálogo por categorías, ficha de recurso, página "Acerca", guía de estilos y documentación técnica.

## Estructura

```text
assets/
  css/ (styles.css generado desde SCSS)
  js/  (data, main, catalogo, producto)
  img/ (logo, hero, placeholder)
scss/ (patrón 7-1)
  abstracts/ (_variables.scss, _mixins.scss)
  base/ (_base.scss)
  components/ (_buttons.scss, _card.scss, _form.scss, ...)
  layout/ (_header.scss, _nav.scss, _grid.scss, _sections.scss, _hero.scss, _product.scss, _breadcrumbs.scss, _footer.scss, _responsive.scss)
  pages/ (_home.scss, _catalog.scss, _product.scss, _about.scss, _styleguide.scss, _contact.scss)
  themes/ (_default.scss)
  vendors/ (_normalize.scss)
  main.scss (manifiesto con @import)
index.html
catalogo.html
producto.html
acerca.html
styleguide.html
/docs/decisiones-frontend.md
```

## Cómo ejecutar

Opción simple: abre `index.html` con tu navegador.

Opcional (servidor local):

- Si usas Live Server (VS Code): clic derecho sobre `index.html` > "Open with Live Server".
- Node.js: `npx serve .` y abre la URL indicada.
- Python 3: `python -m http.server 5500` y visita `http://localhost:5500/`.

## Tecnologías y guías

- HTML semántico y ARIA básica.
- CSS con BEM. SCSS (Sass) con patrón 7-1 y manifiesto `scss/main.scss` usando `@import`.
- Vanilla JS para interacción mínima (filtros, navegación móvil, ficha).
- Guía de estilos en `styleguide.html`.
- Decisiones técnicas en `docs/decisiones-frontend.md`.

## SCSS (Sass)

- Variables en `scss/abstracts/_variables.scss` (colores, radios, sombras y breakpoints). También se exponen como CSS vars.
- Nesting para pseudo selectores y estados con `&` (ej. `.btn { &:hover { ... } &--primary { ... } }`).
- Parciales organizados por 7-1 y manifiesto `scss/main.scss` con `@import`.
- Compilación con Sass (opcional):

```bash
npm install
npm run sass:build        # compila a assets/css/styles.css (minificado)
npm run sass:watch        # modo watch (expandido)
```

## Próximos pasos sugeridos

- Conectar con una API real para datos de productos.
- Añadir tests de accesibilidad (Lighthouse/axe) y CI/CD.
- Internacionalización completa y estados de carga/errores.
