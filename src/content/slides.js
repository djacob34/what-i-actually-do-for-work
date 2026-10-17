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
    sites: [
      { id: 'groningen', city: 'Groningen', building: 'Student flats', what: 'Prefab solar facades, heat pumps and construction robots' },
      { id: 'zaragoza', city: 'Zaragoza', building: '40 social-housing homes', what: 'A new prefab facade and roof, a lift and heat pumps' },
      { id: 'trento', city: 'Trento', building: 'Municipal heritage building', what: 'Geothermal heating, solar roof shingles and energy communities' },
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
      'Then the reveal: my first step is a theme and a story outline, and the partners have to OK it before anything gets filmed.',
    ],
  },
  // ── 6 InCUBE reveal ───────────────────────────────────────────────────────
  {
    id: 'incube-reveal',
    layout: 'incubeReveal',
    chapter: 'incube',
    kicker: 'InCUBE · 3 of 3',
    title: 'What I actually did',
    processLead: 'How I make a project film',
    processNote: 'Partners sign off twice: on the story before filming, and on the cut before it’s published.',
    process: [
      { step: 'Choose a theme and outline the story' },
      { step: 'Get the partners’ OK' },
      { step: 'Write interview questions and talking points' },
      { step: 'Schedule interviews and b-roll filming' },
      { step: 'Write the script; AI voiceover with ElevenLabs' },
      { step: 'Brief the editor: scene-by-scene selects and animation direction' },
      { step: 'Rich storyboards the animation and style' },
      { step: 'About 2 months of edits; I review every step' },
      { step: 'Share with the partners for feedback' },
      { step: 'Apply the feedback and publish' },
    ],
    notes: [
      'Answer to the phone question first: my first step is choosing a theme and outlining the story, and then getting the partners’ OK before anything is filmed. Compare with what people wrote.',
      'Then play the InCUBE Mid-way project update and scrub to the parts you want. Clicking into the video gives it the keyboard; click the slide outside the video to get the arrow keys back for the deck.',
      'The process: theme + story outline → partners sign off → interview questions with proposed talking points → schedule filming for interviews and b-roll → write the script and produce the voiceover with ElevenLabs (an AI voice platform) → gather all materials and footage into a video brief for the editor, with scene-by-scene selects and animation direction → the editor comes back with a storyboard for animation and styling → we collaborate for about two months, and I review every step → partners give feedback → apply it and publish.',
      'Rich is my video editor. Don’t say I shot all the footage or that Rich edited every InCUBE film. [Add exact credits for this film.]',
      'Film themes for InCUBE: an introduction, a technologies film, and one on international European collaboration. Each has its own job. [Confirm which are published.]',
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
    regionsLead: 'Four lighthouse regions test it first',
    regions: ['Ameland, NL', 'Borkum, DE', 'Samsø, DK', 'Morbihan, FR'],
    notes: [
      'NESSIE: New Skills & Spaces Impulse for the Education of aspirant energy-transition installers. An Interreg North Sea project.',
      'Four strands: Short Advanced Courses (SACs), targeted recruitment, practical learning (traineeships and Energy Transition Intensives), and international collaboration through E-Campuses, regional training hubs with shared learning resources (not only online).',
      'Four lighthouse regions: Ameland (NL), Borkum (DE), Samsø (DK) and Morbihan (FR). Morbihan is a region, not an island.',
      'Don’t mention the traineeship requirement yet. It’s the brief on the next slide.',
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
      'Phones: tap NESSIE. This is where the twist comes in: partners were required to deliver traineeships, but nobody’s programme was concrete yet. Same brief I had for the General Assembly: 75 minutes, 24 partners, four regions.',
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
    sub: 'My answer: a traineeship-building game for the General Assembly',
    steps: [
      { min: '5', label: 'Meet your trainee, pick a host' },
      { min: '35', label: 'Build a journey: 3–4 stops' },
      { min: '10', label: 'Decide how it’s assessed' },
      { min: '5', label: 'Name the programme' },
      { min: '15', label: 'Present to the room' },
    ],
    forced: 'Who is it for? Who hosts? What happens, where, for how long? How will anyone know it worked?',
    regions: [
      { name: 'Ameland', line: 'School prep, then island site visits', img: 'assets/nessie/ameland-board-a1.jpg' },
      { name: 'Borkum', line: 'Online start, then wind and heat-pump training', img: 'assets/nessie/borkum-board-a1.jpg' },
      { name: 'Samsø', line: 'Governance and community trust', img: 'assets/nessie/samso-board-a2.jpg' },
      { name: 'Morbihan', line: 'A career-change pathway', img: 'assets/nessie/morbihan-board-a3.jpg' },
    ],
    regionsLead: 'What the four regions designed',
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
    event: 'What travels between the regions is knowledge, partners and investment, not hydrogen.',
    role: 'My part: the project’s communication and dissemination. Not the engineering.',
    notes: [
      'Hy2Market is EU-funded under the ERDF Interregional Innovation Investments (I3) instrument, developing hydrogen value chains across regions.',
      'Value chain = the connected steps and organisations involved in producing, moving and using hydrogen. Hy2Market frames it as Production → Transport, which then forks into two end uses: Industry and Mobility. Not four equal steps in a row.',
      'What moves between the regions is knowledge and partnership, not hydrogen. Messaging is anchored on the three I’s of I3: Interregional, Innovation, Investments.',
      'I deliver WP7 (communication and dissemination) for NEC as coordinator: hy2market.eu, the interactive case-studies site, LinkedIn, the newsletter, the wrap-up film, EU Hydrogen Week and the Final Conference in Linz (Nov 2026). I sit on the Management Board and chair the WP7 meetings.',
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
      'Set it up: European Hydrogen Week in Brussels, 26–28 October 2026; Tuesday 27 October is Hy2Market Day on ERIG’s stand. Phones: tap Hy2Market. Two prompts: how to get people to stop, and how to get them to talk.',
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
    standLead: 'On the stand all day',
    stand: [
      { tag: 'Stop', name: 'Europe map with six panels', why: 'The big picture first, then five regional spotlights and a project intro to start conversations' },
      { tag: 'Talk', name: 'Networking board', why: 'Visitors pin what they’re looking for and what they offer, so the right people find each other' },
    ],
    agendaLead: 'Three discussions, Tuesday 27 October',
    agenda: [
      { time: '10:30', name: 'Skills and standards', how: 'Groups map the gaps on a poster: yellow notes for problems, white for what already works' },
      { time: '14:30', name: 'Policy priorities', how: 'Tables react to the policy letter’s recommendations with green and red sticky notes' },
      { time: '16:30', name: 'Value chain and next projects', how: 'Pitch breakouts agree next steps, then everyone ends at the networking board' },
    ],
    notes: [
      'Same split as the phone prompts: what makes people stop, and what gets them talking. Connect to what friends said only where it genuinely matches.',
      'Hy2Market Day is Tuesday 27 October at ERIG’s booth H32 in the Innovation Hub. I designed the stand programme, the three sessions’ formats and the flyers.',
      'Back wall: a Europe map of the ten Hy2Market regions, colour-coded by role, with six panels: five regional spotlights (Upper Austria, Northern Netherlands, Sicily, Asturias, Médio Tejo) plus a project introduction with a QR code to hy2market.eu. Each spotlight: what was done, what was learned, three key figures, partner logos.',
      'Networking board: visitors fill in a card with what they want to connect on, what they offer and how to reach them, and pin it up. It stays up all three days. There is no matching system and no counts.',
      'Session 1, Skills and Standardisation (10:30): two groups (Beau Broen on skills, Gregor Offenthaler on standards). Facilitators put post-its on a gap map: columns are project stages (plan and permit, build and commission, operate and maintain), rows are skills and standards. Everyone marks the three that matter most.',
      'Session 2, Policy Priorities (14:30), facilitated by Hans Rasmusson (ERIG): a 65 × 90 cm board with three sections, one per policy-letter recommendation. Green notes for positives, red for negatives. DG Regio, EISMEA and the Clean Hydrogen Partnership react. Feeds the policy letter.',
      'Session 3, Value Chain and Future Project Development (16:30), moderated by Jozsef Szuper (ELEVATE-CEE): breakout groups on four spin-off pitches, each leaving with next steps and a named owner. Closes at the networking board.',
      'Between sessions the booth is open. Also: the Austrian Hydrogen Valleys Lunch and Learn at 12:30, and a get-together from 17:00. Dirk’s H2 Journey marble run is the stand’s eye-catcher (not my design).',
      'The point: I plan how people contribute, as well as what they read.',
    ],
  },

  // ── Everyday work across all three projects ─────────────────────────────
  {
    id: 'everyday',
    layout: 'everyday',
    steps: 1, // next arrow first pops up the examples
    kicker: 'Across all three projects',
    title: 'And the everyday work',
    items: [
      { name: 'Websites', what: 'News stories and an interactive case-studies site for Hy2Market, plus the InCUBE and NESSIE project pages' },
      { name: 'Social media', what: 'LinkedIn for all three projects. I publish every post; my assistant drafts copy and graphics' },
      { name: 'Newsletters', what: 'Hy2Market every quarter, InCUBE three times a year' },
      { name: 'Webinars', what: 'Organised and run online, like the InCUBE × ReLIFE session on renovation data' },
      { name: 'Flyers and print', what: 'Stand programmes, flyers, roll-up banners and exhibition displays' },
      { name: 'Reports', what: 'Communication results for the EU, dissemination reports, workshop summaries and the NESSIE replication plan' },
    ],
    principle: 'Nothing goes public without my review.',
    notes: [
      'The three cases are the big pieces. This is what fills most weeks. Press → once to pop up the examples, again to move on.',
      'Websites: hy2market.eu news (e.g. “Crossing Canal and Rail”, “Teaching a Coal Power Plant to Burn Hydrogen”) and the interactive case-studies site, five regions live; incubeproject.eu in WordPress; NESSIE on the Interreg site.',
      'Social: the LinkedIn pages for NESSIE, Hy2Market and InCUBE. Partner spotlight video series “My ‘I’ in I3” for Hy2Market.',
      'Newsletters via LaPosta.',
      'Webinars on WebinarGeek, e.g. InCUBE × ReLIFE “Renovation Data in Action” (30 Sept 2026) with the Zaragoza demo as the case study, and the captioned R-Guide / Resilience Dashboard recording.',
      'Print: e.g. the EU Hydrogen Week programme and flyers, the joint FREIIA–NESSIE banner at EUSEW 2026, and the InCUBE lift-the-flap demo-site map display.',
      'Reports: monthly KPI tracking against each grant agreement, the InCUBE dissemination report (D9.12), the four NESSIE traineeship summaries, and the WP4 replication plan.',
      'Principles: factual rather than promotional; partners get a draft to correct rather than a blank request.',
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
      'Next: seven of my creative-direction slides. Keep it brisk: roughly 20–30 seconds each.',
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
