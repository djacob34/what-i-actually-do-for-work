import { SlideFrame, Kicker } from '../components/SlideFrame.jsx';
import { Figure, Placeholder } from '../components/Figure.jsx';
import { JoinPanel } from '../components/JoinPanel.jsx';
import { VideoEmbed } from '../components/VideoEmbed.jsx';
import { activities } from '../content/activities.js';
import { media, site } from '../config/site.js';
import { asset } from '../lib/asset.js';

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
        <img className="opening-logo" src={asset('assets/nec/nec-logo-black.png')} alt="New Energy Coalition" />
        <img className="nec-plus" src={asset('assets/nec/nec-plus-grid.svg')} alt="" aria-hidden="true" />
        <h1 className="opening-title">{s.title}</h1>
        <p className="opening-nec-sub">{s.nec}</p>
      </div>
      <div className="opening-personal" style={{ background: p.background, color: p.ink }}>
        {p.image && <img className="opening-portrait" src={asset(p.image)} alt={p.name} />}
        {p.mascots?.pink && <img className="mascot mascot-a" src={asset(p.mascots.pink)} alt="" aria-hidden="true" />}
        {p.mascots?.green && <img className="mascot mascot-b" src={asset(p.mascots.green)} alt="" aria-hidden="true" />}
        <div className="opening-personal-text">
          <p className="opening-name">{p.name}</p>
          <p className="opening-tagline">{p.tagline}</p>
        </div>
        <ul className="opening-mix">
          {s.mix.map((m, i) => (
            <li key={m} style={{ background: p.chips?.[i % p.chips.length] }}>
              {m}
            </li>
          ))}
        </ul>
      </div>
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
  const m = media.incube;
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <div className="two-col incube-intro">
        <div className="col-text">
          <p className="lead">{s.lead}</p>
          <ul className="cities">
            {s.cities.map((c) => (
              <li key={c.city}>
                <span className="pin" aria-hidden="true" />
                <strong>{c.city}</strong> <span>{c.country}</span>
              </li>
            ))}
          </ul>
          <p className="callout">{s.challenge}</p>
        </div>
        <Figure
          className="col-media frame"
          src={m.demoImage}
          alt="InCUBE demonstration site"
          fit="cover"
          caption={m.demoCaption}
          placeholder={{ title: 'InCUBE demo-site photo', file: 'assets/incube/incube-demo-site.jpg' }}
        />
      </div>
    </SlideFrame>
  );
}

// ── 5 / 8 / 11 ───────────────────────────────────────────────────────────────
function Activity({ s, n }) {
  const a = activities[s.activity];
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
          <p className="activity-private">Your answer stays on your phone.</p>
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
          <div className="films">
            <span className="films-lead">{s.filmsLead}</span>
            <ol>
              {s.films.map((f) => (
                <li key={f.name}>
                  <strong>{f.name}</strong>
                  <span>{f.sub}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="ir-right">
          <h2 className="mini-head">My approach</h2>
          <ul className="ticks">
            {s.role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <Figure
            className="ir-work frame"
            src={m.workImage}
            alt="Production material: script or edit feedback"
            caption={m.workCaption}
            placeholder={{ title: 'Script or edit-feedback example', file: 'assets/incube/incube-script-feedback.jpg' }}
          />
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
          <div className="twist">
            <p className="twist-a">{s.twist.a}</p>
            <p className="twist-b">{s.twist.b}</p>
          </div>
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
          <p className="status-badge">{s.status}</p>
        </div>
        <div className="hr-right">
          <ol className="elements">
            {s.elements.map((e) => (
              <li key={e.name}>
                <span className={`el-tag el-tag-${e.tag.toLowerCase().replace(/\s+/g, '-')}`}>{e.tag}</span>
                <strong>{e.name}</strong>
                <span>{e.why}</span>
              </li>
            ))}
          </ol>
          <div className="policy">
            <span className="policy-label">{s.policy.label}</span>
            {m.policyBoard ? (
              <Figure className="policy-img" src={m.policyBoard} alt="Session 2 policy feedback board mockup" />
            ) : (
              <div className="policy-mock" aria-label="Diagram of the policy board: three horizontal sections">
                {s.policy.sections.map((t) => (
                  <div key={t} className="policy-row">
                    <span>{t}</span>
                    <i className="note note-g" />
                    <i className="note note-r" />
                    <i className="note note-g" />
                  </div>
                ))}
              </div>
            )}
            <span className="policy-meta">
              {s.policy.size} · {s.policy.how}
            </span>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

// ── 13 ───────────────────────────────────────────────────────────────────────
function Creative({ s, n }) {
  return (
    <SlideFrame number={n}>
      <Title s={s} />
      <ol className="loop">
        {s.steps.map((st, i) => (
          <li key={st}>
            <span className="loop-n">{i + 1}</span>
            <span>{st}</span>
          </li>
        ))}
      </ol>
      <p className="lead creative-lead">{s.lead}</p>
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
  creative: Creative,
  portfolio: Portfolio,
  freelance: Freelance,
  close: Close,
};

export function renderSlide(slide, number) {
  const C = layouts[slide.layout];
  return C ? <C key={slide.id} s={slide} n={number} /> : null;
}
