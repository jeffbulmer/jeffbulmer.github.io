# CLAUDE.md

Personal site for Jeff Bulmer, served by GitHub Pages at https://jeffbulmer.github.io/.
Angular 20, NgModule-based, single page with no router.

## Commands

```bash
npm start            # dev server at http://localhost:4200
npm run build        # dev build
npm run build:prod   # production build into dist/jeffbulmer-portfolio/browser
npm run deploy       # production build + push to the gh-pages branch
```

Source lives on `master`; the compiled site is published to `gh-pages` by angular-cli-ghpages.
GitHub Pages must be configured to serve the `gh-pages` branch root.

## Layout

- `src/app/app.component.*` composes splash screen, header, banner and footer.
- `src/app/components/` holds those four components plus the shared `dynamic-button`.
- `src/app/services/` has `particles` (canvas background) and `loading` (signals when the splash is done so the banner can animate).
- `src/assets/` holds fonts, the logo, the banner video, the loader Lottie, and `cv/` for the resume PDF the header button links to.
- Global styles: `src/styles.scss` (imports Bootstrap 4), `src/fonts.scss`, `src/variables.scss`.

## Notes

- No tests, i18n, PWA, analytics or custom domain. They were removed when the template was trimmed down.
- The design is Brittany Chiang's v4 ported to Angular by José Andrés; keep the footer attribution.
