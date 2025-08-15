# Decisiones Front-end — Te lo Vendo

Este documento explica el rol del desarrollador front-end y las decisiones técnicas tomadas para este MVP.

## Rol del Front-end

- Diseño e implementación de la interfaz con foco en accesibilidad (HTML semántico, roles, etiquetas ARIA donde corresponde).
- Construcción del sistema visual reutilizable: variables, tipografías, colores, componentes (botones, tarjetas, chips).
- Arquitectura de CSS con metodología BEM y separación por capas (base, layout, componentes, páginas).
- Modularización de JavaScript para interacciones mínimas (navegación responsiva, filtros, detalle de producto) sin frameworks.
- Coordinación con equipos de Contenido y Producto para mantener consistencia y escalabilidad.

## Metodología CSS

Se utiliza BEM (Block, Element, Modifier), ejemplificado en elementos como `site-header__inner`, `card__media`, `nav__link--active`. La hoja de estilos está separada en:

- `base.css`: tokens (colores, tipografía), resets y utilidades.
- `layout.css`: rejillas, contenedores, header/footer, hero y layout de páginas.
- `components.css`: componentes reutilizables (botones, tarjetas, chips, badges) y variantes.
- `pages.css`: ajustes específicos de páginas.

## Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Saltar al contenido con `.skip-link`.
- Navegación con `aria-label`, `aria-expanded` y estados en botones de menú.
- Imágenes con `alt` significativo; imágenes decorativas se omiten o vacían.
- Contraste suficiente y foco visible.

## Guía de estilos

Definimos tipografía Inter (Google Fonts) y una paleta:

- Primario: `--color-primary: #0ea5e9`
- Secundario: `--color-secondary: #10b981`
- Texto: `--color-text: #111827`
- Fondo claro/superficie: `#ffffff` / `#f3f4f6`

Componentes base: botones (`.btn`), tarjetas (`.card`), badges, chips, rejillas.

## Estructura de carpetas

```text
assets/
  css/ (base, layout, components, pages)
  js/  (data, main, catalogo, producto)
  img/ (logo, hero, placeholder)
```

`docs/` contiene documentación del proyecto.

## Decisiones clave

- Sin dependencia de frameworks para reducir complejidad inicial. Vanilla JS y CSS modernos.
- Internacionalización futura: formateo de moneda con `Intl.NumberFormat` (es-CL / CLP) y texto en español.
- Ruteo simple con parámetros en query (`?categoria=...`, `?id=...`).
- Preparado para crecimiento: componentes y estilos modulares.

## Próximos pasos

- Integrar un generador estático o framework (p. ej., Next.js) cuando se necesite contenido dinámico.
- Añadir tests ligeros de accesibilidad (Lighthouse/axe) y un pipeline de CI.
- Conectar con API real para productos y categorías.
