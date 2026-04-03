# Hisham Abuzaid — Professional portfolio

Single-page professional profile site for **Hisham Abuzaid**, with English and Arabic locales, light/dark theme, and responsive layout.

**Repository:** [github.com/WailSolaiman/hisham-abuzaid-portfolio](https://github.com/WailSolaiman/hisham-abuzaid-portfolio)

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- [React Router](https://reactrouter.com/) (home + privacy/terms)
- [Framer Motion](https://www.framer.com/motion/) (reveals, hero, CTA)
- [Lucide React](https://lucide.dev/) (icons)

## Prerequisites

- **Node.js** 20+ (or current LTS) and npm

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm install`  | Install dependencies           |
| `npm run dev`  | Start dev server (Vite)        |
| `npm run build`| Typecheck + production build   |
| `npm run preview` | Serve the `dist` output locally |
| `npm run lint` | Run ESLint                     |

## Project layout

- `src/pages/home/` — Home sections (hero, vision, milestones, credentials, etc.)
- `src/i18n/` — `en.json`, `ar.json`, and `types.ts` for message shape
- `src/context/` — Theme and locale providers
- `src/components/layout/` — Nav, footer, back-to-top
- `public/` — Static assets served as-is

Content strings live in the JSON locale files; images are referenced from `src/pages/home/assets.ts`.

## Deployment

Build output is the `dist/` folder after `npm run build`. Host on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). Configure the platform to run `npm run build` and publish `dist`, and set the SPA fallback to `index.html` if the host supports it.

## License

Private project; all rights reserved unless otherwise agreed with the site owner.
