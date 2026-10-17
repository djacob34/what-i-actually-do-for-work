import { useEffect, useState } from 'react';
import { activities, chapters, isDone } from '../content/activities.js';
import { loadAnswers, saveAnswers, clearAnswers } from '../lib/storage.js';
import { asset } from '../lib/asset.js';
import { sendAnswer } from '../lib/live.js';

// Participant mode: a chapter menu, three short briefs and a results page.
// Answers are saved only in this browser; nothing is sent anywhere.

function useRoute() {
  const read = () => new URLSearchParams(window.location.search).get('chapter') || '';
  const [chapter, setChapter] = useState(read);
  useEffect(() => {
    const onPop = () => setChapter(read());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const navigate = (next) => {
    const params = new URLSearchParams(window.location.search);
    params.set('mode', 'play');
    if (next) params.set('chapter', next);
    else params.delete('chapter');
    history.pushState(null, '', `?${params}`);
    setChapter(next);
    window.scrollTo(0, 0);
  };
  return [chapter, navigate];
}

export function Play() {
  const [answers, setAnswers] = useState(loadAnswers);
  const [chapter, navigate] = useRoute();

  const [sent, setSent] = useState({}); // chapter → 'sending' | 'sent' | 'offline'

  const update = async (id, value) => {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    saveAnswers(next);
    setSent((m) => ({ ...m, [id]: 'sending' }));
    const ok = await sendAnswer(id, value);
    setSent((m) => ({ ...m, [id]: ok ? 'sent' : 'offline' }));
  };
  const reset = () => {
    chapters.forEach((c) => answers[c] && sendAnswer(c, {}));
    clearAnswers();
    setAnswers({});
    setSent({});
    navigate('');
  };

  let page;
  if (chapter === 'results') page = <Results answers={answers} navigate={navigate} onReset={reset} />;
  else if (activities[chapter]) page = <Chapter key={chapter} id={chapter} answer={answers[chapter]} status={sent[chapter]} onSave={(v) => update(chapter, v)} onRetry={() => update(chapter, answers[chapter])} navigate={navigate} />;
  else page = <Menu answers={answers} navigate={navigate} />;

  return (
    <div className="play">
      <header className="play-bar">
        <button type="button" className="play-home" onClick={() => navigate('')} aria-label="Chapter menu">
          <img src={asset('assets/nec/nec-ring-yellow.svg')} alt="" aria-hidden="true" />
          <span>What do I actually do?</span>
        </button>
      </header>
      <main className="play-main">{page}</main>
      <footer className="play-foot">Answers show on Danielle’s screen without your name, and stay saved on this phone.</footer>
    </div>
  );
}

function Menu({ answers, navigate }) {
  return (
    <section className="play-menu">
      <h1>Pick the chapter Danielle tells you to open</h1>
      <ol className="menu-list">
        {chapters.map((id, i) => {
          const a = activities[id];
          const done = isDone(id, answers[id]);
          return (
            <li key={id}>
              <button type="button" className={`menu-item menu-${id}`} onClick={() => navigate(id)}>
                <span className="menu-num">{i + 1}</span>
                <span className="menu-text">
                  <strong>{a.chapter}</strong>
                  <span>{a.label}</span>
                </span>
                <span className={`menu-state ${done ? 'is-done' : ''}`}>{done ? '✓ Done' : 'Open'}</span>
              </button>
            </li>
          );
        })}
        <li>
          <button type="button" className="menu-item menu-results" onClick={() => navigate('results')}>
            <span className="menu-num">★</span>
            <span className="menu-text">
              <strong>My results</strong>
              <span>All three plans together</span>
            </span>
            <span className="menu-state">View</span>
          </button>
        </li>
      </ol>
    </section>
  );
}

function Chapter({ id, answer, status, onSave, onRetry, navigate }) {
  const a = activities[id];
  const saved = isDone(id, answer);
  const [editing, setEditing] = useState(!saved);
  const [values, setValues] = useState(() => Object.fromEntries(a.fields.map((f) => [f.id, answer?.[f.id] || ''])));
  const canSave = a.fields.some((f) => values[f.id].trim());

  const submit = (e) => {
    e.preventDefault();
    if (!canSave) return;
    onSave(Object.fromEntries(a.fields.map((f) => [f.id, values[f.id].trim()])));
    setEditing(false);
  };

  const nextId = chapters[chapters.indexOf(id) + 1];

  return (
    <section className={`chapter chapter-${id}`}>
      <p className="chapter-kicker">
        {a.chapter} · {a.label}
      </p>
      <div className="brief">
        <span className="brief-label">The brief</span>
        <p>{a.brief}</p>
      </div>

      {editing ? (
        <form onSubmit={submit} className="chapter-form">
          {a.fields.map((f) => (
            <div className="text-field" key={f.id}>
              <label htmlFor={`${id}-${f.id}`}>{f.label}</label>
              <textarea
                id={`${id}-${f.id}`}
                rows={a.fields.length > 1 ? 3 : 5}
                maxLength={f.maxLength}
                value={values[f.id]}
                onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
              />
              <span className="count" aria-live="polite">
                {values[f.id].length}/{f.maxLength}
              </span>
            </div>
          ))}
          <button type="submit" className="btn-primary" disabled={!canSave}>
            {a.button}
          </button>
          {saved && (
            <button type="button" className="btn-ghost" onClick={() => setEditing(false)}>
              Cancel
            </button>
          )}
        </form>
      ) : (
        <>
          <ResultCard id={id} answer={answer} />
          {status && (
            <p className={`send-status send-${status}`} role="status">
              {status === 'sending' && 'Sending to the screen…'}
              {status === 'sent' && '✓ On the screen'}
              {status === 'offline' && (
                <>
                  Saved on your phone, but it couldn’t reach the screen.{' '}
                  <button type="button" className="btn-link" onClick={onRetry}>
                    Try again
                  </button>
                </>
              )}
            </p>
          )}
          <div className="chapter-actions">
            <button type="button" className="btn-ghost" onClick={() => setEditing(true)}>
              Edit my plan
            </button>
            <button type="button" className="btn-primary" onClick={() => navigate(nextId || 'results')}>
              {nextId ? `Next: ${activities[nextId].chapter}` : 'See my results'}
            </button>
          </div>
        </>
      )}
      <button type="button" className="btn-link" onClick={() => navigate('')}>
        ← All chapters
      </button>
    </section>
  );
}

function ResultCard({ id, answer }) {
  const a = activities[id];
  const filled = a.fields.filter((f) => answer[f.id]?.trim());
  return (
    <div className={`result result-${id}`}>
      <span className="result-head">My plan · {a.chapter}</span>
      {filled.map((f) => (
        <div key={f.id} className="result-item">
          {a.fields.length > 1 && <span className="result-lead">{f.label}</span>}
          <p className="result-quote">{answer[f.id]}</p>
        </div>
      ))}
      <span className="result-foot">Danielle shows her approach next.</span>
    </div>
  );
}

function Results({ answers, navigate, onReset }) {
  const [confirming, setConfirming] = useState(false);
  return (
    <section className="results">
      <h1>My results</h1>
      {chapters.map((id) => (
        <div key={id} className="results-item">
          <h2>{activities[id].chapter}</h2>
          {isDone(id, answers[id]) ? (
            <ResultCard id={id} answer={answers[id]} />
          ) : (
            <p className="results-empty">
              Not answered yet.{' '}
              <button type="button" className="btn-link" onClick={() => navigate(id)}>
                Open {activities[id].chapter}
              </button>
            </p>
          )}
        </div>
      ))}
      <div className="reset">
        {confirming ? (
          <div className="reset-confirm" role="alertdialog" aria-label="Confirm reset">
            <p>Clear all your answers on this phone?</p>
            <button type="button" className="btn-danger" onClick={onReset}>
              Yes, clear everything
            </button>
            <button type="button" className="btn-ghost" onClick={() => setConfirming(false)}>
              Keep my answers
            </button>
          </div>
        ) : (
          <button type="button" className="btn-link" onClick={() => setConfirming(true)}>
            Start over
          </button>
        )}
      </div>
    </section>
  );
}
