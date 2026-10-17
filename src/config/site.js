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
    // InCUBE intro: one photo per demo site (landscape works best).
    sites: {
      groningen: 'assets/incube/site-groningen.jpg',
      zaragoza: 'assets/incube/site-zaragoza.jpg',
      trento: 'assets/incube/site-trento.jpg',
    },
    // Slide 6: the selected film. Use EITHER a YouTube id OR a local file.
    film: {
      title: 'InCUBE Mid-way project update',
      youtubeId: '46jReRgEuqE', // the part after watch?v=
      start: 0, // seconds; 0 = from the beginning
      end: 0, // seconds; 0 = whole video (scrub freely with the player controls)
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
  // "Everyday work" slide: examples that pop up and fill the screen, in this order.
  // type: web (browser frame), video (16:9 frame), social (post card), doc (portrait page) or banner (roll-up).
  // slot: [left, top, width, tilt in degrees] on the 1280 × 720 slide.
  everyday: [
    { type: 'web', label: 'Hy2Market case studies', src: 'assets/everyday/web-case-studies.jpg', slot: [40, 34, 390, -3] },
    { type: 'social', label: 'Hy2Market on LinkedIn', src: 'assets/everyday/li-hy2market.jpg', slot: [450, 30, 320, 2] },
    { type: 'web', label: 'incubeproject.eu', src: 'assets/everyday/web-incube.jpg', slot: [760, 40, 420, 3] },
    { type: 'doc', label: 'NESSIE traineeship summary', src: 'assets/everyday/report-nessie-traineeship.jpg', slot: [1030, 270, 220, -4] },
    { type: 'web', label: 'NESSIE on interregnorthsea.eu', src: 'assets/everyday/web-nessie.jpg', slot: [175, 255, 300, 2] },
    { type: 'doc', label: 'Hy2Market newsletter', src: 'assets/everyday/news-hy2market.jpg', slot: [470, 280, 200, -2] },
    { type: 'social', label: 'InCUBE on LinkedIn', src: 'assets/everyday/li-incube.jpg', slot: [190, 440, 300, -3] },
    { type: 'video', label: 'InCUBE × ReLIFE webinar', src: 'assets/everyday/webinar-incube-relife.jpg', slot: [700, 250, 300, -1] },
    { type: 'social', label: 'NESSIE on LinkedIn', src: 'assets/everyday/li-nessie.jpg', slot: [700, 460, 320, 3] },
    { type: 'doc', label: 'InCUBE newsletter', src: 'assets/everyday/news-incube.jpg', slot: [1070, 14, 190, 5] },
    { type: 'banner', label: 'NESSIE × FREIIA roll-up banner', src: 'assets/everyday/banner.jpg', slot: [28, 300, 150, -4] },
  ],
  hy2market: {
    header: 'assets/hy2market/hy2market-header.jpg',
    boothRender: 'assets/hy2market/hy2market-booth-render.jpg',
    policyBoard: null, // 'assets/hy2market/hy2market-policy-board.png'
  },
};

// Danielle's existing creative-direction slides, shown straight after slide 13.
// Export each slide as an image into public/assets/portfolio/ and list them in
// order. While the list is empty, one labelled placeholder slide is shown.
export const portfolio = [
  { src: 'assets/portfolio/02-statement.jpg', title: 'Clarity out of complexity' },
  { src: 'assets/portfolio/03-web-design.jpg', title: 'Web Design' },
  { src: 'assets/portfolio/04-ux.jpg', title: 'UX Research & Strategy' },
  { src: 'assets/portfolio/05-brand.jpg', title: 'Brand Strategy and Design' },
  { src: 'assets/portfolio/06-ai-design.jpg', title: 'AI Design and Workflows' },
  { src: 'assets/portfolio/07-graphic-motion.jpg', title: 'Graphic & Motion Design', notes: 'Includes the InCUBE spotlight graphic, a link back to the first chapter.' },
  { src: 'assets/portfolio/08-leadership-operations.jpg', title: 'Design Leadership & Operations' },
];
