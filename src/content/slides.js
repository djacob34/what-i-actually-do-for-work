// All slide copy and speaker notes. Layout components read from here.
// Keep on-slide text short; detail belongs in `notes`.
// `layout` picks the component in src/slides/index.jsx.

export const slides = [
  // ── 1 ───────────────────────────────────────────────────────────────────
  {
    id: 'opening',
    layout: 'opening',
    title: 'What do I actually do for work?',
    name: 'Danielle Jacobson',
    nec: {
      kicker: 'At New Energy Coalition',
      heading: 'Science communication',
      text: 'I lead communication for three EU-funded energy projects, turning research into things people can understand, take part in and use.',
      formats: ['Films', 'Workshops', 'Event concepts', 'Websites & stories'],
      projects: ['InCUBE', 'NESSIE', 'Hy2Market'],
    },
    personal: {
      kicker: 'As a creative director',
      heading: 'Creative direction',
      skills: ['Brand', 'UX', 'Web design', 'Motion'],
    },
    notes: [
      'Welcome. The short answer to “what do you do?” never quite works, so today you get the long one, with a few things to try on your phones.',
      'Two sides of my work. Left: science communication at New Energy Coalition, where I lead communication and dissemination for three EU energy projects. Right: creative direction, which is where I come from and still do.',
      'What connects them: understanding something complex, then shaping how people see it and take part. My background helps on the left: BSc Environmental Engineering, MSc Energy & Environmental Science.',
      'Order today: Part 1, the three NEC projects. Part 2, my creative-direction work. Then how I work as a freelancer.',
    ],
  },
  // ── Part 1 ──────────────────────────────────────────────────────────────
  {
    id: 'part1',
    layout: 'divider',
    variant: 'nec',
    section: 'Part 1 · Science communication',
    kicker: 'Part 1',
    title: 'Science communication at New Energy Coalition',
    sub: 'Three EU energy projects: a film, a workshop and a booth.',
    notes: ['Part 1 is my work at New Energy Coalition. Three projects, each with a quick task on your phone.'],
  },
  // ── 2 ───────────────────────────────────────────────────────────────────
  {
    id: 'how',
    layout: 'how',
    title: 'A day in the life of Danielle',
    steps: [
      { n: '1', label: 'Project introduction', sub: 'What it is, in plain language' },
      { n: '2', label: 'The brief I got, on your phone', sub: 'How would you approach it? No wrong answers' },
      { n: '3', label: 'My real example', sub: 'What I actually did, and why' },
    ],
    joinLead: 'Open this once on your phone',
    joinSub: 'I’ll tell you which chapter to tap. Answers show up here, without names.',
    notes: [
      'Three projects, same rhythm each time: intro, quick task, then my real example.',
      'Scan the code now so you’re ready. When you save an answer it pops up on this screen, anonymously. Press A on an activity slide to show the wall; click a note to hide it.',
      'Working title. Rename freely in src/content/slides.js.',
    ],
  },
  // ── 3 ───────────────────────────────────────────────────────────────────
  {
    id: 'nec',
    layout: 'nec',
    title: 'Where NEC fits',
    lead: 'I work with New Energy Coalition, a Groningen network of business, research and government, as a freelance consultant embedded in its team on three EU energy projects.',
    verbs: [
      { word: 'Understand', sub: 'the information and what the project needs from it' },
      { word: 'Shape', sub: 'how it’s communicated, and how people take part' },
      { word: 'Coordinate', sub: 'the creative work that turns it into something real' },
    ],
    projects: ['InCUBE', 'NESSIE', 'Hy2Market'],
    notes: [
      'NEC (New Energy Coalition) is a Groningen-based triple-helix network connecting businesses, knowledge institutions and government, formed in 2017 from Energy Academy Europe, Energy Valley and Energy Delta Institute.',
      'I work with NEC as a freelance consultant (Danielle Jacobson Consulting), embedded in the project team and contracted per project.',
      'Working principles: nothing goes public without my review; tone stays factual, not promotional; partners find it easier to correct a draft than write from scratch, so I send drafts.',
      'My work: communication and dissemination. Website content, social media, articles, video, webinars, events, presentations, workshop design, partner coordination and stakeholder engagement.',
      'I lead communication and dissemination on all three projects (NESSIE, Hy2Market WP7, InCUBE C&D), and design events, workshops and replication work for them. All three run until 2027, so this year is about results, final events and legacy.',
      'It’s not “posting on LinkedIn”: understand the information → who needs it and why → structure a story or a process → choose the format → coordinate specialists → review and deliver.',
      'Technical research and engineering belong to the project partners. I make that work understandable and usable.',
    ],
  },

  // ── 4 InCUBE intro ────────────────────────────────────────────────────────
  {
    id: 'incube-intro',
    layout: 'incubeIntro',
    chapter: 'incube',
    kicker: 'InCUBE · 1 of 3',
    title: 'Renovating buildings while people live in them',
    lead: 'An EU project making deep renovation faster, more digital and more inclusive, proven on three occupied buildings.',
    cities: [
      { city: 'Groningen', country: 'student housing' },
      { city: 'Zaragoza', country: 'social housing' },
      { city: 'Trento', country: 'heritage building' },
    ],
    challenge: 'My challenge: make the technical side and the human side understandable at the same time.',
    notes: [
      'InCUBE: An INClUsive toolBox for accElerating and smartening deep renovation. Horizon Europe, coordinated by CERTH; NEC leads Communication, Dissemination & Exploitation (WP9).',
      'Why it matters: Europe renovates only about 1% of its buildings a year. Renovation is slow, disruptive for residents, labour-intensive and often unsafe.',
      'Demo sites: Groningen, Van Heemskerckflat (Lefier student housing: prefab solar facades, heat pumps, robotics). Zaragoza, Balsas de Ebro Viejo (40 social-housing homes from 1970: prefab facade and roof, new lift, heat pumps). Trento, Santa Chiara (municipal heritage building: geothermal, solar roof shingles, links to energy communities).',
      'Topics in its communication include digital building information (BIM), scanning and digital tools, renovation automation, energy management, renewables and social inclusion. Pick only what the film needs; this is not a technical inventory.',
      'My wider InCUBE work: website, LinkedIn, newsletter, video (tool demos, interview-based films from written briefs, captioned webinar recordings), webinars (e.g. InCUBE × ReLIFE, Sept 2026), event presence, and the final showcase at Construmat 2027.',
      'Not every InCUBE video is mine. The Trento spotlight series was produced by partner FBK.',
    ],
  },
  // ── 5 InCUBE activity ─────────────────────────────────────────────────────
  {
    id: 'incube-activity',
    layout: 'activity',
    chapter: 'incube',
    activity: 'incube',
    kicker: 'InCUBE · 2 of 3',
    timing: 'About 30 seconds',
    notes: [
      'Phones out: tap InCUBE. Read the brief, type your first step, tap “Save my plan”.',
      'Ask two or three people what they wrote. Expect “start filming” or “write a script”.',
      'Then the reveal: before any filming, I write the brief (purpose, audience, message). Everything else follows from it.',
    ],
  },
  // ── 6 InCUBE reveal ───────────────────────────────────────────────────────
  {
    id: 'incube-reveal',
    layout: 'incubeReveal',
    chapter: 'incube',
    kicker: 'InCUBE · 3 of 3',
    title: 'What I actually did',
    films: [
      { name: 'Introduction', sub: 'What InCUBE is' },
      { name: 'Technologies', sub: 'What it develops' },
      { name: 'European collaboration', sub: 'Who makes it work' },
    ],
    filmsLead: 'Three film ideas, each with its own job',
    role: [
      'Write the brief: purpose, audience, message',
      'Shape the story: which examples, voices and order',
      'Turn technical wording into plain language',
      'Brief and review the edit with Rich, my video editor',
    ],
    notes: [
      'Answer to the phone question first: my first step is the written brief (purpose, audience, message). Then play 60–90 seconds of the film (start/end in src/config/site.js → media.incube.film).',
      'Three distinct film themes: an introduction to InCUBE, a technologies film, and one about international European collaboration. Deliberately different jobs; not all three are necessarily published. [Confirm which are published.]',
      'Kinds of decisions in development: script wording, terminology and timing; aligning voiceover with animation; maps linking the demo sites; Zaragoza drone/demo-site footage; checklist overlays; ending on project branding. [Check these against the film shown.]',
      'Collaboration-film concept: General Assembly footage, partner interviews, maps and grouped partner logos. These are proposed treatments, not a description of a final edit.',
      'Rich edits; my role is creative and narrative direction and working with him. Don’t say I shot all the footage or that Rich edited every InCUBE film. [Add exact credits for this film.]',
      'Prompt: what was the hardest bit of wording to make accessible in this film? [Add your own anecdote.]',
      'Wider work for questions: website, social, webinars.',
    ],
  },

  // ── 7 NESSIE intro ────────────────────────────────────────────────────────
  {
    id: 'nessie-intro',
    layout: 'nessieIntro',
    chapter: 'nessie',
    kicker: 'NESSIE · 1 of 3',
    title: 'Training people for energy-transition jobs',
    lead: 'Demand for installers of solar, heat pumps and wind is growing faster than the workforce. NESSIE builds a skills pipeline across the North Sea region.',
    strands: ['Recruitment', 'Short courses', 'Learning by doing', 'Regional collaboration'],
    twist: {
      a: 'Partners were required to deliver traineeships.',
      b: 'But what each programme would actually look like wasn’t defined yet.',
    },
    notes: [
      'NESSIE: New Skills & Spaces Impulse for the Education of aspirant energy-transition installers. An Interreg North Sea project.',
      'Four strands: Short Advanced Courses (SACs), targeted recruitment, practical learning (traineeships and Energy Transition Intensives), and international collaboration through E-Campuses, regional training hubs with shared learning resources (not only online).',
      'Four lighthouse regions: Ameland (NL), Borkum (DE), Samsø (DK) and Morbihan (FR). Morbihan is a region, not an island.',
      'Key point: partners didn’t just want traineeships. They had to deliver them under the programme, but the practical plans weren’t concrete.',
      'I’ve led NESSIE communication and dissemination since July 2024: website, LinkedIn, social templates, presenting results accessibly, recruitment workshop development with Learning Hub Friesland, worksheets and facilitation guidance.',
      'Skip the headline figures (partners, budget, student targets) unless definitions and dates are confirmed.',
    ],
  },
  // ── 8 NESSIE activity ─────────────────────────────────────────────────────
  {
    id: 'nessie-activity',
    layout: 'activity',
    chapter: 'nessie',
    activity: 'nessie',
    kicker: 'NESSIE · 2 of 3',
    timing: 'About 45 seconds',
    notes: [
      'Phones: tap NESSIE. Same brief I had for the General Assembly: 75 minutes, 24 partners, four regions, no concrete plans yet.',
      'Ask two people how they’d use the time. Any approach is fair; the comparison with mine is the point.',
      'Then the reveal: I turned it into a game, so planning became a series of small decisions.',
    ],
  },
  // ── 9 NESSIE reveal ───────────────────────────────────────────────────────
  {
    id: 'nessie-reveal',
    layout: 'nessieReveal',
    chapter: 'nessie',
    kicker: 'NESSIE · 3 of 3',
    title: 'What I actually did',
    sub: 'My answer: a traineeship-building game for the General Assembly in Morbihan',
    steps: [
      { min: '5', label: 'Meet your trainee, pick a host' },
      { min: '35', label: 'Build a journey: 3–4 stops' },
      { min: '10', label: 'Decide how it’s assessed' },
      { min: '5', label: 'Name the programme' },
      { min: '15', label: 'Present to the room' },
    ],
    forced: 'Who is it for? Who hosts? What happens, where, for how long? How will anyone know it worked?',
    regions: [
      { name: 'Ameland', line: 'Digital prep at school, then hands-on island visits', img: 'assets/nessie/ameland-board-a1.jpg' },
      { name: 'Borkum', line: 'Online onboarding, then wind and heat-pump training', img: 'assets/nessie/borkum-board-a1.jpg' },
      { name: 'Samsø', line: 'Energy governance and community trust', img: 'assets/nessie/samso-board-a2.jpg' },
      { name: 'Morbihan', line: 'A career-change pathway', img: 'assets/nessie/morbihan-board-a3.jpg' },
    ],
    status: 'Workshop designs, not delivered placements',
    notes: [
      'Compare with what you wrote on your phone. Here’s what I designed: “Journey Through the E-Campus”, a 75-minute physical group game at the NESSIE General Assembly (Quiberon, Morbihan, May 2026). One of three 75-minute workshops I designed and facilitated there, each with four groups and 24 participants.',
      'Afterwards I wrote a summary per region from the boards, worksheets and voice notes, as input to traineeship reporting (T3.4).',
      'Materials: an A2 board per region; trainee-profile, location, organisation and activity cards; a Journey Log and an evaluation sheet. Teams physically placed cards on the board.',
      'A profile came with needs and constraints. Each stop linked a location, organisation, activity, duration and skill. Teams then decided how learning is assessed, by whom, and what counts as completion. The Journey Log fed further traineeship work (T3.4).',
      'Why it worked: it forced abstract intentions into decisions, and it showed what was still missing (responsibilities, duration, assessment).',
      'Ameland: blended. Digital map-based prep through the school, then visits: battery storage, the sustainable KNRM boathouse, holiday-home sustainability, installation practice. They built it around their own vocational students rather than the assigned profile (Daan). That’s real facilitation complexity, and the fit still needs discussing.',
      'Borkum: Jana, a renewable-energy student. Online intro and entry test, a 2-day short course on heat-pump and wind-turbine installation, then practical training at the E-Campus. Total duration not recorded.',
      'Samsø: Sofie, interested in governance and community. A governance workshop, community dinner, energy tour, talks with decision-makers, a symposium. Assessed by reflection report and interview. Which tour sites still needs clarifying.',
      'Morbihan: Thomas, 32, changing career. Orientation, sector discovery, recognition of prior experience (VAE), then an employment ambition. Duration doesn’t add up (≈3 months headline vs 6-month VAE) and the employer is unnamed. Don’t present employment as achieved.',
      'These are workshop designs, not implemented or accredited traineeships.',
    ],
  },

  // ── 10 Hy2Market intro ────────────────────────────────────────────────────
  {
    id: 'hy2market-intro',
    layout: 'hy2Intro',
    chapter: 'hy2market',
    kicker: 'Hy2Market · 1 of 3',
    title: 'Building hydrogen value chains across Europe',
    chain: [
      { word: 'Production', sub: 'making hydrogen' },
      { word: 'Transport', sub: 'pipelines, hubs' },
    ],
    fork: [
      { word: 'Industry', sub: 'e.g. a power plant' },
      { word: 'Mobility', sub: 'e.g. buses, taxis' },
    ],
    chainLead: 'Ten European regions share know-how along the hydrogen value chain: every step from making it to using it.',
    event: 'European Hydrogen Week, Brussels, October 2026: a chance to show what the regions have done, and to get people talking.',
    role: 'My part: the project’s communication and the event concept. Not the engineering.',
    notes: [
      'Hy2Market is EU-funded under the ERDF Interregional Innovation Investments (I3) instrument, developing hydrogen value chains across regions.',
      'Value chain = the connected steps and organisations involved in producing, moving and using hydrogen. Hy2Market frames it as Production → Transport, which then forks into two end uses: Industry and Mobility. Not four equal steps in a row.',
      'What moves between the regions is knowledge and partnership, not hydrogen. Messaging is anchored on the three I’s of I3: Interregional, Innovation, Investments.',
      'I deliver WP7 (communication and dissemination) for NEC as coordinator: hy2market.eu, the interactive case-studies site, LinkedIn, the newsletter, the wrap-up film, EU Hydrogen Week and the Final Conference in Linz (Nov 2026). I sit on the Management Board and chair the WP7 meetings.',
      'European Hydrogen Week: ERIG’s stand runs 26–28 October 2026; Tuesday 27 October is Hy2Market Day (booth H32, Innovation Hub).',
      'My wider work: turning regional technical work into accessible case studies and web content, gathering information from partners and checking claims. Example: the Sicily case study with Francesco Sergi at CNR-ITAE, with draft content boxes and requests for missing data.',
      'Keep planned infrastructure, installed equipment, tested performance and routine operation separate when talking about the regions.',
    ],
  },
  // ── 11 Hy2Market activity ─────────────────────────────────────────────────
  {
    id: 'hy2market-activity',
    layout: 'activity',
    chapter: 'hy2market',
    activity: 'hy2market',
    kicker: 'Hy2Market · 2 of 3',
    timing: 'About 45 seconds',
    notes: [
      'Phones: tap Hy2Market. Two prompts: how to get people to stop, and how to get them to talk.',
      'Ask two people to read theirs out. Remember them and link back on the next slide only where they actually match.',
      'Don’t hint at the map, spotlights or networking board yet.',
    ],
  },
  // ── 12 Hy2Market reveal ───────────────────────────────────────────────────
  {
    id: 'hy2market-reveal',
    layout: 'hy2Reveal',
    chapter: 'hy2market',
    kicker: 'Hy2Market · 3 of 3',
    title: 'What I actually did',
    status: 'Concept in development',
    elements: [
      { tag: 'Stop', name: 'Europe map + six panels', why: 'The big picture first, then five regional spotlights and a project intro to start conversations' },
      { tag: 'Talk', name: 'Networking board', why: 'Visitors pin what they’re looking for and what they offer, so the right people find each other' },
      { tag: 'Take away', name: 'Agenda banners + flyers', why: 'What’s on next, and something to take away' },
    ],
    policy: {
      label: 'Separate: Session 2 policy board',
      size: '65 × 90 cm · three sections',
      sections: ['Recommendation 1', 'Recommendation 2', 'Recommendation 3'],
      how: 'Sticky-note feedback on each policy recommendation',
    },
    notes: [
      'Same split as the phone prompts: what makes people stop, what gets them talking, and what they take away. Connect to what friends said only where it genuinely matches.',
      'Back wall: a Europe map of the ten Hy2Market regions, colour-coded by role, with six panels: five regional spotlights (Upper Austria, Northern Netherlands, Sicily, Asturias, Médio Tejo) plus a project introduction with a QR code to hy2market.eu. Each spotlight: what was done, what was learned, three key figures, partner logos.',
      'Layout variations tested: three frames each side; a smaller landscape map with spotlights around it; a larger central map with three above and three below. Not all of them are final instructions. I wanted more breathing room between the map and the networking board.',
      'Networking board (left of the map): categories such as project development, research and innovation, and industry. Visitors attach a card with what they offer, what they’re looking for, and contact details. Photos of it are allowed. There is no matching system and no counts.',
      'Right wall: three vertical agenda banners (Mon–Wed) with perspex flyer holders. I design the stand programme and the flyers.',
      'Policy board, Session 2 (Policy Priorities): 65 × 90 cm, three horizontal sections, one per recommendation from the policy letter. Green notes for positives, red for negatives. Headings to come from the policy letter. Don’t invent them.',
      'The point: I plan how people contribute, as well as what they read.',
      'Also on the stand (not my design): Dirk’s H2 Journey marble run as the eye-catcher.',
      'Broader work if asked: website and case studies.',
    ],
  },

  // ── Part 2 ──────────────────────────────────────────────────────────────
  {
    id: 'part2',
    layout: 'divider',
    variant: 'personal',
    section: 'Part 2 · Creative direction',
    kicker: 'Part 2',
    title: 'Creative direction',
    sub: 'Brand, UX, web, motion, AI workflows, and leading the teams that make them.',
    notes: [
      'Part 2: the other side of my work, creative direction. Different clients and different visual language, same core skill: understand the problem, set a direction, brief people, review, deliver.',
      'BX Studio was a former role: built and led a design team across strategy, UX, visual direction, review and delivery. Not my current role; no team-size or client claims without checking.',
      'Next: eight of my creative-direction slides. Keep it brisk: roughly 20–30 seconds each.',
    ],
  },
  // ── Portfolio insertion happens here (see src/config/site.js → portfolio) ──
  { id: 'portfolio', layout: 'portfolioInsert' },
  // ── 14 Freelance ──────────────────────────────────────────────────────────
  {
    id: 'freelance',
    layout: 'freelance',
    section: 'Wrap-up',
    title: 'Freelance doesn’t mean working alone',
    centre: 'Danielle',
    nodes: [
      { name: 'Clients', role: 'NEC and others' },
      { name: 'Ihor', role: 'Designer' },
      { name: 'Rich', role: 'Video editor' },
      { name: 'Bella', role: 'Comms & project assistant' },
      { name: 'Specialists', role: 'e.g. a Moodle developer' },
    ],
    jobs: ['Shape the approach', 'Brief: a call plus a written brief', 'Check in every two weeks', 'Final review: nothing goes public without it'],
    zzp: 'I’m a ZZP’er, a Dutch independent professional. Clients contract me per project, and I bring in the right people for each piece.',
    notes: [
      'I work freelance (ZZP: zelfstandige zonder personeel). Clients bring the project; I assemble the right people for each piece.',
      'Ihor Berkyta designs; Richard (Rich) van Kuik does video production and editing, mainly for InCUBE; Bella Furze is my communications and project assistant (copy, graphics, drafts, tracking); specialists join when needed, e.g. Yared, a Moodle developer for the NESSIE SAC Library. Not everyone works on every project.',
      'How we work: new tasks start with a briefing call and a written brief (scope, deadline, hours). Check-ins every two weeks on Teams, day-to-day on Slack. My assistant never publishes directly; I keep final review and all publishing.',
      'My job in the middle: shape the approach, brief, coordinate, and review how the pieces fit.',
    ],
  },
  // ── 15 Close ──────────────────────────────────────────────────────────────
  {
    id: 'close',
    layout: 'close',
    title: 'So, what do I actually do?',
    statement: 'I turn complex information and project goals into things people can understand, contribute to, and use.',
    refs: [
      { label: 'A film', sub: 'InCUBE' },
      { label: 'A workshop', sub: 'NESSIE' },
      { label: 'An event concept', sub: 'Hy2Market' },
    ],
    results: 'On your phone: tap “My results” to see all three of your answers.',
    notes: [
      'Bring it back to the three examples: a film people can understand, a workshop people contribute to, an event people use.',
      'Thank you, and questions.',
    ],
  },
];
