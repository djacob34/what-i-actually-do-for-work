# What do I actually do for work?

Danielle Jacobson's presentation-day deck as a React (Vite) web app: a 16:9 slide deck for the projector, a phone view for three short audience activities, and a tiny Node server (`server.js`, no dependencies) that makes answers pop up live on the screen.

## Run it

```bash
npm install
npm run build      # production build in dist/
npm start          # deck + live answers at http://localhost:3000
```

For editing with hot reload, run `npm run dev:server` in one terminal and `npm run dev` in another (http://localhost:5173; `/api` is proxied to the server).

| URL | What it shows |
| --- | --- |
| `?mode=present` (or no mode) | The projected deck (original version) |
| `?deck=nec` | **A Day in the Life of Dani**: the NEC-focused version (journey, master's, two research projects, NEC, then the three projects) |
| `?mode=play&deck=nec` | Phone view for the NEC version (the QR code on that deck adds `deck=nec` automatically) |
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
| A | On an activity slide: toggle the live answer wall |
| N | Speaker notes panel |
| F | Full screen |
| H | Hide / show the control bar |

The current slide is kept in the URL hash (`#7`), so a reload stays on the same slide. Arrow keys are ignored while typing in a field.

## Participant link and QR code

Friends need a **public** address. Set it in one of two ways:

- `participantUrl` in `src/config/site.js`, or
- at build time: `VITE_PARTICIPANT_URL=https://your-site.example/work/ npm run build`

If neither is set, a deployed copy uses its own address automatically. A local copy (localhost or LAN) shows a "Participant link not set" box instead of a QR code that wouldn't work for the audience.

### Live answers

When someone taps "Save my plan", the answer is sent to `server.js` (no names) and also kept on their phone. On the matching activity slide a counter shows how many answers are in; press **A** (or click the counter) to show them as sticky notes. Click a note to hide it; **Clear** removes that chapter's answers. Editing an answer replaces it, and "Start over" on a phone withdraws that phone's answers.

Answers live in the server's memory, so a restart or redeploy clears them. Set a `RESET_KEY` environment variable and open the deck with `?mode=present&key=…` if you want only yourself to be able to clear. Without the server (e.g. a plain static host) the phones still work and answers simply stay on each phone.

## Deploy

### Railway (recommended: includes live answers)

The repo includes `railway.json`: Railway runs `npm run build`, then `npm start` (`server.js` on Railway's `$PORT`). Generate a domain under the service's *Settings → Networking*. The QR code picks up that public address automatically, so no participant URL setting is needed. Set `VITE_PARTICIPANT_URL` only if friends should use a different address from the one the deck is opened on.

## Two decks

- **Original** (`src/content/slides.js`): "What do I actually do for work?", with the creative-direction section.
- **NEC version** (`src/content/slides-nec.js`, open with `?deck=nec`): "A Day in the Life of Dani". Its project slides are copies, so editing one deck never changes the other. Layouts only it uses live at the bottom of `src/slides/index.jsx`, styles in `src/styles/nec-deck.css`, research figures in `public/assets/research/`.

Both decks share the three phone activities and the live answer wall.

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

They appear straight after the Part 2 divider, with no NEC frame, so they keep their own styling.

### Static hosting

`npm run build` and upload `dist/` anywhere static. Everything works except live answers.

## Structure

1. Cover: title across both halves; science communication at NEC (left) and creative direction (right)
2. **Part 1 · Science communication** divider
3. How this works + QR · 4. Where NEC fits
5–7. InCUBE: intro (three demo-site cards) · phone activity · what I actually did (film + process)
8–10. NESSIE: intro · phone activity · what I actually did
11–13. Hy2Market: intro · phone activity · what I actually did (booth + the day's three discussions)
14. The everyday work: websites, social, newsletters, print, reports
15. **Part 2 · Creative direction** divider → 16–22. seven creative-direction slides
23. Freelance collaboration · 24. Close
