# Portfolio-Alpha Web Development Guardrails

1. **SPA Routing & Root-Relative Assets**:
   - `package.json` MUST keep `"homepage": "/"` (never `"."`) so Create React App emits `/static/...` paths that work on nested routes such as `/projects/:slug`.
   - `vercel.json` MUST exclude `/static/` and files containing extensions (`.*\\..*`) from the `/index.html` rewrite rule so missing/static files never return HTML (`Unexpected token '<'`).
2. **Design System Consistency**:
   - Every page and component MUST use `theme.js` tokens (`theme.body`, `theme.highlight`, `theme.text`, `theme.secondaryText`) and the native `90%` (`5%` horizontal margin) layout cadence of `Projects.css` / `Experience.css`.
   - Reuse `Header`, `Footer`, `TopButton`, `Button`, and `ProjectLanguages` rather than inventing discordant boxed layouts.
3. **Header & Cross-Browser Font Safety**:
   - Keep `white-space: nowrap` on `.header .logo` and `.header li a` so navigation never wraps onto two lines on desktop.
   - Custom `.woff` fonts (especially `Agustina.woff`) must remain free of Apple AAT `morx`/`feat` tables and use `font-synthesis: none` so iOS Safari/CoreText matches Chrome/HarfBuzz.
4. **Mandatory Pre-Push Verification**:
   - Always run `npm run build` and verify `build/index.html` references `/static/js/` (not `./static/js/`) before pushing to `main`.
