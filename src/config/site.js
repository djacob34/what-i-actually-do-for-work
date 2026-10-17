// ─────────────────────────────────────────────────────────────────────────────
// Everything Danielle is likely to edit before the day lives in this file:
// participant link, footer date, media URLs, image paths and portfolio slides.
// Image paths are relative to /public (e.g. 'assets/incube/demo-site.jpg').
// Leave a value as '' or null and the slide shows a labelled placeholder.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // Public address friends open on their phones, WITHOUT ?mode=play
  // (e.g. 'https://danielle.example.com/work/'). Used for the QR code + link.
  // Can also be set at build time: VITE_PARTICIPANT_URL=https://… npm run build
  // If empty, a deployed (non-localhost) copy uses its own address instead;
  // a local copy shows a setup placeholder rather than encoding localhost.
  participantUrl: import.meta.env.VITE_PARTICIPANT_URL || '',

  // Footer date, as on NEC slides (d-m-yyyy). '' hides it.
  footerDate: '',

  // Footer centre text. The NEC template shows www.newenergycoalition.org.
  footerSite: { pre: 'www.', bold: 'newenergycoalition', post: '.org' },

  // Opening slide, personal half, styled after Danielle's own creative-
  // direction slides (grey ground, Instrument Serif, pastels, mascots).
  personal: {
    name: 'Danielle Jacobson',
    tagline: 'Creative director shaping design, teams, and ideas that move people.',
    image: 'assets/personal/dani-portrait.jpg',
    background: '#F7F7F7',
    ink: '#000000',
    chips: ['#FFCADD', '#FBE74E', '#B9B8FF', '#CEF3A7'], // pink, yellow, lilac, green
    mascots: {
      pink: 'assets/personal/mascot-pink.png',
      green: 'assets/personal/mascot-green.png',
    },
  },
};

export const media = {
  incube: {
    // Slide 4: one strong demo-site / renovation image (before/after welcome).
    demoImage: null, // 'assets/incube/incube-demo-site.jpg'
    demoCaption: '',
    // Slide 6: the selected film. Use EITHER a YouTube id OR a local file.
    film: {
      title: '', // e.g. 'InCUBE: an introduction'
      youtubeId: '46jReRgEuqE', // the part after watch?v=
      start: 0, // seconds — excerpt start
      end: 0, // seconds — excerpt end (0 = play to the end)
      file: '', // 'assets/incube/incube-film.mp4'
      externalUrl: 'https://youtu.be/46jReRgEuqE', // fallback link if the embed is blocked
    },
    // Slide 6: one piece of production material (script, storyboard, edit notes).
    workImage: null, // 'assets/incube/incube-script-feedback.jpg'
    workCaption: '',
  },
  nessie: {
    pipeline: 'assets/nessie/nessie-pipeline.jpg',
    starfish: 'assets/nessie/nessie-starfish.jpg',
    lockup: 'assets/nessie/nessie-interreg-lockup.png',
    board: 'assets/nessie/morbihan-board-a1.jpg',
    journeyLog: 'assets/nessie/morbihan-log.jpg',
    evaluation: 'assets/nessie/samso-eval.jpg',
    // Optional: a photo of partners actually playing.
    facilitationPhoto: null, // 'assets/nessie/nessie-workshop-in-action.jpg'
  },
  hy2market: {
    header: 'assets/hy2market/hy2market-header.jpg',
    boothRender: null, // 'assets/hy2market/hy2market-booth-render.jpg'
    policyBoard: null, // 'assets/hy2market/hy2market-policy-board.png'
  },
};

// Danielle's existing creative-direction slides, shown straight after slide 13.
// Export each slide as an image into public/assets/portfolio/ and list them in
// order. While the list is empty, one labelled placeholder slide is shown.
export const portfolio = [
  { src: 'assets/portfolio/01-presentation.jpg', title: 'Hi! I’m Dani' },
  { src: 'assets/portfolio/02-statement.jpg', title: 'Clarity out of complexity' },
  { src: 'assets/portfolio/03-web-design.jpg', title: 'Web Design' },
  { src: 'assets/portfolio/04-ux.jpg', title: 'UX Research & Strategy' },
  { src: 'assets/portfolio/05-brand.jpg', title: 'Brand Strategy and Design' },
  { src: 'assets/portfolio/06-ai-design.jpg', title: 'AI Design and Workflows' },
  { src: 'assets/portfolio/07-graphic-motion.jpg', title: 'Graphic & Motion Design', notes: 'Includes the InCUBE spotlight graphic, a link back to the first chapter.' },
  { src: 'assets/portfolio/08-leadership-operations.jpg', title: 'Design Leadership & Operations' },
];
