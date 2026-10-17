# What do I actually do for work?

Danielle Jacobson's presentation-day deck as a static React (Vite) web app: a 16:9 NEC-styled slide deck for the projector, plus a phone view for three short audience activities.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve dist/ at http://localhost:4173
```

| URL | What it shows |
| --- | --- |
| `?mode=present` (or no mode) | The projected deck |
| `?mode=play` | Participant chapter menu (phones) |
| `?mode=play&chapter=incube` / `nessie` / `hy2market` | One activity directly |
| `?mode=play&chapter=results` | The participant's three answers |

### Presenter controls

| Key | Action |
| --- | --- |
| → / PageDown / Space | Next slide |
| ← / PageUp | Previous slide |
| Home / End | First / last slide |
| G | Slide picker (also: click the slide counter) |
| N | Speaker notes panel |
| F | Full screen |
| H | Hide / show the control bar |

The current slide is kept in the URL hash (`#7`), so a reload stays on the same slide. Arrow keys are ignored while typing in a field.

## Participant link and QR code

Friends need a **public** address. Set it in one of two ways:

- `participantUrl` in `src/config/site.js`, or
- at build time: `VITE_PARTICIPANT_URL=https://your-site.example/work/ npm run build`

If neither is set, a deployed copy uses its own address automatically. A local copy (localhost or LAN) shows a "Participant link not set" box instead of a QR code that wouldn't work for the audience.

Answers are stored only in each phone's `localStorage`. Nothing is sent anywhere, there is no shared gallery, and the deck never shows counts or other people's answers.

## Deploy (static hosting)

`npm run build` and upload the contents of `dist/` to any static host (Netlify drop, GitHub Pages, Cloudflare Pages, Vercel, or your own server). Paths are relative, so a sub-folder works too. There's no server, database or API.

## Editing content

| What | Where |
| --- | --- |
| Slide text and speaker notes | `src/content/slides.js` |
| Activity prompts, options and result wording | `src/content/activities.js` |
| Participant URL, footer date, personal identity, media URLs and image paths | `src/config/site.js` |
| Creative-direction portfolio slides | `portfolio` array in `src/config/site.js` |
| Colours and type tokens | `src/styles/tokens.css` (see `STYLE.md`) |
| Slide layouts | `src/slides/index.jsx` + `src/styles/slides.css` |

### Replacing an image

1. Put the file in `public/assets/<project>/` using the suggested filename in `MISSING_ASSETS.md`.
2. Set its path in `src/config/site.js` (e.g. `boothRender: 'assets/hy2market/hy2market-booth-render.jpg'`).
3. Until a path is set, or if the file fails to load, the slide shows a labelled placeholder.

### Adding the InCUBE film

In `media.incube.film`, set `youtubeId` (and optional `start` / `end` in seconds for the excerpt) **or** `file` for a local video in `public/assets/incube/`. Add `externalUrl` if you want the fallback "Open film" link to point somewhere specific. If the embed is blocked on the day, use that link.

### Adding creative-direction slides

Export each slide as an image (PNG or JPG, 16:9), save them to `public/assets/portfolio/`, then list them in order:

```js
export const portfolio = [
  { src: 'assets/portfolio/01.jpg', title: 'Project name', credit: 'BX Studio, creative direction' },
];
```

They appear straight after slide 13, with no NEC frame, so they keep their own styling.

## Structure

The base deck has 15 slides plus the portfolio insert:

1. Opening (NEC + personal split) · 2. How this works + QR · 3. Where NEC fits
4–6. InCUBE: intro · phone activity · what I actually did
7–9. NESSIE: intro · phone activity · what I actually did
10–12. Hy2Market: intro · phone activity · what I actually did
13. Creative direction → portfolio slides → 14. Freelance collaboration → 15. Close
