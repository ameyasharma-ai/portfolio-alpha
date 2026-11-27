---
name: web-dev-architecture-and-ui
description: >-
  Best-practice web development standards for the portfolio-alpha React SPA:
  root-relative asset routing, Vercel SPA rewrites, theme.js consistency,
  cross-browser iOS/WebKit font safety, and responsive layout hygiene.
---

# Web Development Architecture & UI Standards (`portfolio-alpha`)

Follow these rules whenever modifying pages, components, styles, fonts, or routing in `masterPortfolio`:

## 1. SPA Routing & Asset Path Integrity

- **Root-Relative Homepage**: Ensure `package.json` has `"homepage": "/"`. Never set `"homepage": "."` when nested routes (e.g., `/projects/:slug`) exist, or the browser will request `/projects/static/js/...` and crash with `Uncaught SyntaxError: Unexpected token '<'`.
- **Safe Vercel Rewrites**: In `vercel.json`, always exclude static folders and files with extensions from the catch-all SPA rewrite:
  ```json
  {
    "rewrites": [
      { "source": "/((?!static/|.*\\..*).*)", "destination": "/index.html" }
    ]
  }
  ```
- **Nested Route Ordering**: In `src/containers/Main.js`, always place `exact` on parent routes (`/projects`) before dynamic child routes (`/projects/:slug`).

## 2. Theme & Visual Consistency

- **Native Proportions**: Match the airy `90%` width (`5%` horizontal margins, `max-width: 1320px`) used in `Projects.css` and `Experience.css`. Avoid narrow boxed containers that clash with the rest of the site.
- **Theme Tokens**: Read all colors from `this.props.theme` (`body`, `highlight`, `text`, `secondaryText`, `imageHighlight`). Never hardcode off-palette backgrounds.
- **Component CSS Side-Effects**: When reusing shared components (like `ProjectLanguages`, which defaults to `text-align: right`), override alignment inside a scoped parent wrapper rather than leaving icons misaligned.

## 3. Header & Cross-Browser Font Hygiene

- **Zero Navbar Wrapping**: Keep `white-space: nowrap` and `flex-shrink: 0` on `.header .logo` and `white-space: nowrap` on `.header li a`.
- **iOS Safari / CoreText Font Safety**:
  - Do not ship `.woff` files containing FontForge-generated Apple AAT `morx` or `feat` tables; strip them with `fontTools` so CoreText uses standard OpenType `GSUB`/`GPOS` identically to Chrome's HarfBuzz.
  - Apply `font-weight: normal; font-synthesis: none; -webkit-font-smoothing: antialiased;` on single-weight display/script fonts like `Agustina Regular`.

## 4. Portfolio Copy & Footer Separation

- Keep `greeting.title` (hero headline) and `greeting.logo_name` (navbar & footer signature) distinct so updating the hero greeting never mutates `Footer.js` (`Made with ❤️ by {greeting.logo_name}`).
