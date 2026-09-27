# akb.com

Personal website for Ana Bonamassa, built with React + Vite.

## Structure

- `src/pages/Home.jsx` — single scrolling page composed of sections (Hero, Projects, Cool Orgs, Personal)
- `src/pages/Contact.jsx` — separate contact page with a form that emails through [FormSubmit](https://formsubmit.co)
- `src/components/sections/` — one component per section on the home page
- `src/components/` — shared UI (nav, footer, item modal for the Personal section)
- `src/data/` — content as plain arrays/objects (`bio.js`, `projects.js`, `orgs.js`, `personal.js`, `social.js`) — edit these to add/update content without touching markup
- `src/styles/index.css` — site styles (white / periwinkle / black palette, Space Grotesk + Space Mono + Work Sans)

The top nav scroll-jumps to sections on the home page (`#projects`, `#cool-orgs`, `#personal`) and links out to `/contact` as a separate route.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The build uses [vite-react-ssg](https://github.com/Uzlopak/vite-react-ssg) to prerender both routes (`/` and `/contact`) to static HTML with the real content already baked in — needed so link previews (LinkedIn, Slack, iMessage) and non-JS crawlers see actual content instead of an empty `<div id="root">`. React still hydrates on top for interactivity. Routes are defined in `src/main.jsx`; add a new page by adding it to the `routes` array there.
