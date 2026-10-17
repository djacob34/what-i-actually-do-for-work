import { SlideFrame, Kicker } from '../components/SlideFrame.jsx';
import { Figure, Placeholder } from '../components/Figure.jsx';
import { JoinPanel } from '../components/JoinPanel.jsx';
import { VideoEmbed } from '../components/VideoEmbed.jsx';
import { activities } from '../content/activities.js';
import { media, site } from '../config/site.js';
import { asset } from '../lib/asset.js';
import { useEffect, useState } from 'react';
import { resetAnswers } from '../lib/live.js';

function Title({ s }) {
  return (
    <header className="slide-head">
      {s.kicker && <Kicker chapter={s.chapter}>{s.kicker}</Kicker>}
      <h1 className="slide-title">{s.title}</h1>
    </header>
  );
}

// ── 1 ────────────────────────────────────────────────────────────────────────
function Opening({ s }) {
  const p = site.personal;
  return (
    <SlideFrame variant="bare" className="opening">
      <div className="opening-nec">
        <img className="opening-ring" src={asset('assets/nec/nec-ring-white.svg')} alt="" aria-hidden="true" />
        <img className="nec-plus" src={asset('assets/nec/nec-plus-grid.svg')} alt="" aria-hidden="true" />
        <div className="opening-side">
          <img className="opening-logo" src={asset('assets/nec/nec-logo-black.png')} alt="New Energy Coalition" />
          <p className="opening-kicker">{s.nec.kicker}</p>
          <h2 className="opening-heading">{s.nec.heading}</h2>
          <p className="opening-text">{s.nec.text}</p>
          <ul className="opening-formats">
            {s.nec.formats.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="opening-projects">{s.nec.projects.join('  ·  ')}</p>
        </div>
      </div>
      <div className="opening-personal" style={{ background: p.background, color: p.ink }}>
        {p.mascots?.pink && <img className="mascot mascot-a" src={asset(p.mascots.pink)} alt="" aria-hidden="true" />}
        {p.mascots?.green && <img className="mascot mascot-b" src={asset(p.mascots.green)} alt="" aria-hidden="true" />}
        <div className="opening-side">
          {p.image && <img className="opening-portrait" src={asset(p.image)} alt={p.name} />}
          <p className="opening-kicker">{s.personal.kicker}</p>
          <h2 className="opening-heading opening-heading-serif">{s.personal.heading}</h2>
          <p className="opening-text opening-text-serif">{p.tagline}</p>
          <ul className="opening-formats opening-skills">
            {s.personal.skills.map((m, i) => (
              <li key={m} style={{ background: p.chips?.[i % p.chips.length] }}>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <header className="opening-head">
        <h1 className="opening-title">{s.title}</h1>
        <p className="opening-name">{s.name}</p>
      </header>
    </SlideFrame>
  );
}

// ── 2 ────────────────────────────────────────────────────────────────────────
function How({ s, n }) {
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <div className="how">
        <ol className="how-steps">
          {s.steps.map((st) => (
            <li key={st.n}>
              <span className="how-n">{st.n}</span>
              <span className="how-label">{st.label}</span>
              <span className="how-sub">{st.sub}</span>
            </li>
          ))}
        </ol>
        <div className="how-join">
          <p className="how-join-lead">{s.joinLead}</p>
          <JoinPanel size={210} />
          <p className="how-join-sub">{s.joinSub}</p>
        </div>
      </div>
    </SlideFrame>
  );
}

// ── 3 ────────────────────────────────────────────────────────────────────────
function Nec({ s, n }) {
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <p className="lead nec-lead">{s.lead}</p>
      <div className="verbs">
        {s.verbs.map((v) => (
          <div className="verb" key={v.word}>
            <span className="verb-word">{v.word}</span>
            <span className="verb-sub">{v.sub}</span>
          </div>
        ))}
      </div>
      <p className="nec-projects">
        Today:{' '}
        {s.projects.map((p) => (
          <span key={p} className={`chip chip-${p.toLowerCase()}`}>
            {p}
          </span>
        ))}
      </p>
    </SlideFrame>
  );
}

// ── 4 ────────────────────────────────────────────────────────────────────────
function IncubeIntro({ s, n }) {
  const photos = media.incube.sites || {};
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <p className="incube-lead">{s.lead}</p>
      <ul className="sites">
        {s.sites.map((site) => (
          <li key={site.id} className="site">
            <Figure
              src={photos[site.id]}
              alt={`${site.city} demo site`}
              fit="cover"
              placeholder={{ title: `${site.city} photo`, file: `assets/incube/site-${site.id}.jpg` }}
            />
            <div className="site-text">
              <span className="site-city">{site.city}</span>
              <span className="site-building">{site.building}</span>
              <span className="site-what">{site.what}</span>
            </div>
          </li>
        ))}
      </ul>
      <p className="callout incube-challenge">{s.challenge}</p>
    </SlideFrame>
  );
}

// ── 5 / 8 / 11 ───────────────────────────────────────────────────────────────
// Brief view while people type; press A (or the button) for the live wall of
// answers sent from phones. Click a note to hide it from the wall.
const NOTE_COLOURS = ['#FFF59B', '#FFCADD', '#B9B8FF', '#CEF3A7', '#FFED00'];
const hiddenNotes = new Set();

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function Activity({ s, n, live }) {
  const a = activities[s.activity];
  const [wall, setWall] = useState(false);
  const [, bump] = useState(0);
  const all = live?.answers?.[s.activity] || [];
  const shown = all.filter((x) => !hiddenNotes.has(x.id));

  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      if ((e.key === 'a' || e.key === 'A') && !e.metaKey && !e.ctrlKey && !e.altKey) setWall((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const hide = (id) => {
    hiddenNotes.add(id);
    bump((x) => x + 1);
  };
  const clear = async () => {
    if (window.confirm(`Clear all ${a.chapter} answers from the screen and server?`)) await resetAnswers(s.activity);
  };

  if (wall) {
    const max = 24;
    const visible = shown.slice(-max);
    const size = visible.length <= 4 ? 'xl' : visible.length <= 9 ? 'l' : visible.length <= 16 ? 'm' : 's';
    return (
      <SlideFrame number={n}>
        <header className="slide-head wall-head">
          <Kicker chapter={s.chapter}>{s.kicker}</Kicker>
          <p className="wall-question">{a.fields.map((f) => f.label).join('  ·  ')}</p>
        </header>
        {visible.length ? (
          <ul className={`wall wall-${size}`}>
            {visible.map((x) => {
              const h = hash(x.id);
              return (
                <li
                  key={x.id}
                  className="note-card"
                  style={{ background: NOTE_COLOURS[h % NOTE_COLOURS.length], '--tilt': `${(h % 7) - 3}deg` }}
                  onClick={() => hide(x.id)}
                  title="Click to hide"
                >
                  {a.fields.map((f) =>
                    x.fields[f.id] ? (
                      <p key={f.id}>
                        {f.short && <b>{f.short}: </b>}
                        {x.fields[f.id]}
                      </p>
                    ) : null,
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="wall-empty">{live?.connected ? 'Waiting for answers…' : 'Live answers aren’t connected (run the deck with npm start).'}</p>
        )}
        <div className="wall-bar">
          {shown.length > max && <span>+{shown.length - max} more</span>}
          <button type="button" onClick={() => setWall(false)}>Back to the brief (A)</button>
          <button type="button" onClick={clear}>Clear</button>
        </div>
      </SlideFrame>
    );
  }

  return (
    <SlideFrame number={n}>
      <header className="slide-head">
        <Kicker chapter={s.chapter}>{s.kicker}</Kicker>
        <p className="activity-tag">On your phone · {s.timing}</p>
      </header>
      <div className="activity">
        <div className="activity-main">
          <div className="activity-brief">
            <span className="activity-brief-label">The brief I got</span>
            <p>{a.brief}</p>
          </div>
          <ul className="activity-questions">
            {a.fields.map((f) => (
              <li key={f.id}>{f.label}</li>
            ))}
          </ul>
        </div>
        <div className="activity-join">
          <JoinPanel size={170} compact chapterLabel={a.chapter} />
          <p className="activity-private">Answers appear on this screen, without names.</p>
          {live?.connected && (
            <button type="button" className="live-count" onClick={() => setWall(true)}>
              <span className="live-dot" aria-hidden="true" />
              {shown.length} {shown.length === 1 ? 'answer' : 'answers'} in · show (A)
            </button>
          )}
        </div>
      </div>
    </SlideFrame>
  );
}

// ── 6 ────────────────────────────────────────────────────────────────────────
function IncubeReveal({ s, n }) {
  const m = media.incube;
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <div className="incube-reveal">
        <div className="ir-left">
          <VideoEmbed film={m.film} />
          <p className="callout ir-note">{s.processNote}</p>
          {m.workImage && (
            <Figure className="ir-work frame" src={m.workImage} alt="Production material: script or video brief" caption={m.workCaption} />
          )}
        </div>
        <div className="ir-right">
          <h2 className="mini-head">{s.processLead}</h2>
          <ol className="process">
            {s.process.map((p) => (
              <li key={p.step}>
                {p.step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SlideFrame>
  );
}

// ── 7 ────────────────────────────────────────────────────────────────────────
function NessieIntro({ s, n }) {
  const m = media.nessie;
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <div className="two-col nessie-intro">
        <div className="col-text">
          <p className="lead">{s.lead}</p>
          <ul className="strands">
            {s.strands.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <h2 className="mini-head">{s.regionsLead}</h2>
          <ul className="lighthouses">
            {s.regions.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div className="col-media nessie-visual">
          <Figure src={m.pipeline} alt="NESSIE skills pipeline: recruitment, short advanced courses, E-Campuses, traineeships, replication" />
          <div className="nessie-lockup">
            <img src={asset(m.lockup)} alt="Interreg North Sea, co-funded by the European Union. NESSIE" />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// ── 9 ────────────────────────────────────────────────────────────────────────
function NessieReveal({ s, n }) {
  const m = media.nessie;
  return (
    <SlideFrame number={n}>
      <header className="slide-head">
        <Kicker chapter={s.chapter}>{s.kicker}</Kicker>
        <h1 className="slide-title">{s.title}</h1>
        <p className="slide-sub">{s.sub}</p>
      </header>
      <div className="nr-top">
        <Figure className="nr-board frame" src={m.board} alt="Morbihan game board with cards placed during the workshop" fit="cover" />
        <Figure className="nr-log frame" src={m.journeyLog} alt="Completed Traineeship Journey Log" fit="cover" />
        <div className="nr-steps">
          <ol>
            {s.steps.map((st) => (
              <li key={st.label}>
                <span className="min">{st.min}′</span>
                {st.label}
              </li>
            ))}
          </ol>
          <p className="nr-forced">{s.forced}</p>
        </div>
      </div>
      <div className="nr-regions">
        {s.regions.map((r) => (
          <div className="region" key={r.name}>
            <img src={asset(r.img)} alt={`${r.name} board`} />
            <div>
              <strong>{r.name}</strong>
              <span>{r.line}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="status-badge nr-status">{s.status}</p>
    </SlideFrame>
  );
}

// ── 10 ───────────────────────────────────────────────────────────────────────
function Hy2Intro({ s, n }) {
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <div className="two-col hy2-intro">
        <div className="col-text">
          <p className="lead-small">{s.chainLead}</p>
          <div className="chain-wrap">
            <ol className="chain">
              {s.chain.map((c) => (
                <li key={c.word}>
                  <strong>{c.word}</strong>
                  <span>{c.sub}</span>
                </li>
              ))}
            </ol>
            <ul className="fork">
              {s.fork.map((c) => (
                <li key={c.word}>
                  <strong>{c.word}</strong>
                  <span>{c.sub}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="hy2-event">{s.event}</p>
          <p className="callout">{s.role}</p>
        </div>
        <Figure className="col-media hy2-header" src={media.hy2market.header} alt="Hy2Market: hydrogen across transport, industry and energy" />
      </div>
    </SlideFrame>
  );
}

// ── 12 ───────────────────────────────────────────────────────────────────────
function Hy2Reveal({ s, n }) {
  const m = media.hy2market;
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <div className="hy2-reveal">
        <div className="hr-left">
          <Figure
            className="hr-render frame"
            src={m.boothRender}
            alt="Hy2Market booth concept render"
            placeholder={{ title: 'Booth concept render', file: 'assets/hy2market/hy2market-booth-render.jpg' }}
          />
          {m.policyBoard && <Figure className="hr-policy frame" src={m.policyBoard} alt="Session 2 policy feedback board mockup" />}
          <p className="status-badge">{s.status}</p>
        </div>
        <div className="hr-right">
          <h2 className="mini-head">{s.standLead}</h2>
          <ul className="elements">
            {s.stand.map((e) => (
              <li key={e.name}>
                <strong>
                  <span className="el-tag">{e.tag}</span>
                  {e.name}
                </strong>
                <span>{e.why}</span>
              </li>
            ))}
          </ul>
          <h2 className="mini-head">{s.agendaLead}</h2>
          <ol className="agenda">
            {s.agenda.map((a) => (
              <li key={a.time}>
                <span className="agenda-time">{a.time}</span>
                <div>
                  <strong>{a.name}</strong>
                  <span>{a.how}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SlideFrame>
  );
}

// ── Everyday work ────────────────────────────────────────────────────────────
// On the build step, examples pop up one by one and fill the screen.
// Slots: [left, top, width, tilt] on the 1280 × 720 canvas, in pop order.
const POP_SLOTS = [
  [40, 34, 390, -3], [460, 18, 250, 2], [760, 40, 420, 3], [1030, 270, 220, -4],
  [70, 300, 380, 2], [470, 280, 200, -2], [690, 300, 270, -3], [250, 440, 190, 4],
  [470, 470, 400, -2], [900, 430, 260, 3], [1070, 14, 190, 5], [28, 300, 150, -4],
  [700, 250, 300, -1],
];

function PopItem({ item, slot, i }) {
  const [x, y, w, tilt] = slot;
  const url = asset(item.src);
  return (
    <figure
      className={`pop pop-${item.type}`}
      style={{ left: x, top: y, width: w, '--tilt': `${tilt}deg`, '--d': `${i * 170}ms` }}
    >
      {item.type === 'web' && (
        <div className="pop-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{item.label}</span>
        </div>
      )}
      <div className="pop-body">
        {url ? <img src={url} alt={item.label} /> : <span className="pop-missing">{item.label}</span>}
      </div>
      {item.type !== 'web' && <figcaption>{item.label}</figcaption>}
    </figure>
  );
}

function Everyday({ s, n, step }) {
  const examples = media.everyday || [];
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <dl className="everyday">
        {s.items.map((it) => (
          <div key={it.name} className="everyday-row">
            <dt>{it.name}</dt>
            <dd>{it.what}</dd>
          </div>
        ))}
      </dl>
      <p className="callout everyday-principle">{s.principle}</p>
      {step > 0 && (
        <div className="pops" aria-label="Examples of the everyday work">
          {examples.slice(0, POP_SLOTS.length).map((item, i) => (
            <PopItem key={item.label} item={item} slot={POP_SLOTS[i]} i={i} />
          ))}
        </div>
      )}
    </SlideFrame>
  );
}

// ── Part dividers ────────────────────────────────────────────────────────────
function Divider({ s, n }) {
  const p = site.personal;
  if (s.variant === 'personal') {
    return (
      <SlideFrame variant="bare" className="divider divider-personal">
        {p.mascots?.pink && <img className="divider-mascot divider-mascot-a" src={asset(p.mascots.pink)} alt="" aria-hidden="true" />}
        {p.mascots?.green && <img className="divider-mascot divider-mascot-b" src={asset(p.mascots.green)} alt="" aria-hidden="true" />}
        <div className="divider-body">
          <p className="divider-kicker">{s.kicker}</p>
          <h1 className="divider-title">{s.title}</h1>
          <p className="divider-sub">{s.sub}</p>
          <ul className="divider-chips">
            {['Brand', 'UX', 'Web design', 'Motion', 'AI', 'Leadership'].map((c, i) => (
              <li key={c} style={{ background: p.chips?.[i % p.chips.length] }}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </SlideFrame>
    );
  }
  return (
    <SlideFrame variant="bare" className="divider divider-nec">
      <img className="divider-ring" src={asset('assets/nec/nec-ring-white.svg')} alt="" aria-hidden="true" />
      <img className="divider-logo" src={asset('assets/nec/nec-logo-black.png')} alt="New Energy Coalition" />
      <img className="nec-plus" src={asset('assets/nec/nec-plus-grid.svg')} alt="" aria-hidden="true" />
      <div className="divider-body">
        <p className="divider-kicker">{s.kicker}</p>
        <h1 className="divider-title">{s.title}</h1>
        <p className="divider-sub">{s.sub}</p>
        <ul className="divider-chips divider-chips-nec">
          {['InCUBE', 'NESSIE', 'Hy2Market'].map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <span className="divider-num">{n}</span>
    </SlideFrame>
  );
}

// ── Portfolio insert ─────────────────────────────────────────────────────────
function Portfolio({ s }) {
  if (s.placeholder) {
    return (
      <SlideFrame variant="bare" className="portfolio">
        <Placeholder
          title="Creative direction slides go here"
          hint="Export each slide as an image and list it under portfolio in src/config/site.js"
          file="assets/portfolio/01.jpg …"
        />
      </SlideFrame>
    );
  }
  return (
    <SlideFrame variant="bare" className="portfolio">
      <img className="portfolio-img" src={asset(s.item.src)} alt={s.item.title || 'Creative direction slide'} />
      {s.item.credit && <p className="portfolio-credit">{s.item.credit}</p>}
    </SlideFrame>
  );
}

// ── 14 ───────────────────────────────────────────────────────────────────────
function Freelance({ s, n }) {
  const cx = 300;
  const cy = 230;
  const r = 178;
  const pts = s.nodes.map((node, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / s.nodes.length;
    return { ...node, x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <div className="freelance">
        <svg className="hub" viewBox="0 -10 600 490" role="img" aria-label="Danielle at the centre, connected to clients, Ihor, Rich, Bella and specialist freelancers">
          {pts.map((p) => (
            <line key={p.name} x1={cx} y1={cy} x2={p.x} y2={p.y} className="hub-line" />
          ))}
          <circle cx={cx} cy={cy} r="78" className="hub-centre" />
          <text x={cx} y={cy + 9} className="hub-centre-text">
            {s.centre}
          </text>
          {pts.map((p) => (
            <g key={p.name} transform={`translate(${p.x} ${p.y})`}>
              <circle r="66" className="hub-node" />
              <text y="-2" className="hub-name">
                {p.name}
              </text>
              <foreignObject x="-58" y="6" width="116" height="48">
                <div className="hub-role">{p.role}</div>
              </foreignObject>
            </g>
          ))}
        </svg>
        <div className="freelance-text">
          <h2 className="mini-head">What I do in the middle</h2>
          <ul className="ticks">
            {s.jobs.map((j) => (
              <li key={j}>{j}</li>
            ))}
          </ul>
          <p className="zzp">{s.zzp}</p>
        </div>
      </div>
    </SlideFrame>
  );
}

// ── 15 ───────────────────────────────────────────────────────────────────────
const refIcons = [
  // film
  <svg key="f" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="10" width="40" height="28" rx="3" /><path d="M20 18l10 6-10 6z" className="fill" /></svg>,
  // workshop board with cards
  <svg key="w" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="8" width="40" height="30" rx="2" /><rect x="10" y="14" width="9" height="12" className="fill" /><rect x="24" y="18" width="9" height="12" className="fill" /><path d="M16 38l-4 6M32 38l4 6" /></svg>,
  // booth
  <svg key="b" viewBox="0 0 48 48" aria-hidden="true"><path d="M4 40V12h40v28" /><rect x="14" y="17" width="20" height="13" className="fill" /><path d="M2 40h44" /></svg>,
];

function Close({ s, n }) {
  return (
    <SlideFrame variant="black" number={n}>
      <div className="close">
        <h1 className="close-title">{s.title}</h1>
        <p className="close-statement">{s.statement}</p>
        <ul className="close-refs">
          {s.refs.map((r, i) => (
            <li key={r.label}>
              {refIcons[i]}
              <strong>{r.label}</strong>
              <span>{r.sub}</span>
            </li>
          ))}
        </ul>
        <p className="close-results">{s.results}</p>
      </div>
    </SlideFrame>
  );
}

const layouts = {
  opening: Opening,
  how: How,
  nec: Nec,
  incubeIntro: IncubeIntro,
  activity: Activity,
  incubeReveal: IncubeReveal,
  nessieIntro: NessieIntro,
  nessieReveal: NessieReveal,
  hy2Intro: Hy2Intro,
  hy2Reveal: Hy2Reveal,
  everyday: Everyday,
  divider: Divider,
  portfolio: Portfolio,
  freelance: Freelance,
  close: Close,
};

export function renderSlide(slide, number, live, step = 0) {
  const C = layouts[slide.layout];
  return C ? <C key={slide.id} s={slide} n={number} live={live} step={step} /> : null;
}
