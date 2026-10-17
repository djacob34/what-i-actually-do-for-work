import { useEffect, useState } from 'react';
import { activities, chapters } from '../content/activities.js';
import { loadAnswers, saveAnswers, clearAnswers } from '../lib/storage.js';
import { asset } from '../lib/asset.js';

// Participant mode: a chapter menu, three short activities and a results page.
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

  const update = (id, value) => {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    saveAnswers(next);
  };
  const reset = () => {
    clearAnswers();
    setAnswers({});
    navigate('');
  };

  let page;
  if (chapter === 'results') page = <Results answers={answers} navigate={navigate} onReset={reset} />;
  else if (activities[chapter]) page = <Chapter key={chapter} id={chapter} answer={answers[chapter]} onSave={(v) => update(chapter, v)} navigate={navigate} />;
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
      <footer className="play-foot">Your answers are saved on this phone only. Nothing is sent to anyone.</footer>
    </div>
  );
}

function isDone(id, answer) {
  if (!answer) return false;
  return activities[id].kind === 'text' ? Boolean(answer.text?.trim()) : Boolean(answer.choice);
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
              <span>All three answers together</span>
            </span>
            <span className="menu-state">View</span>
          </button>
        </li>
      </ol>
    </section>
  );
}

function Chapter({ id, answer, onSave, navigate }) {
  const a = activities[id];
  const saved = isDone(id, answer);
  const [editing, setEditing] = useState(!saved);
  const [choice, setChoice] = useState(answer?.choice || '');
  const [text, setText] = useState(answer?.text || '');

  const submit = (e) => {
    e.preventDefault();
    if (a.kind === 'choice' ? !choice : !text.trim()) return;
    onSave(a.kind === 'choice' ? { choice } : { text: text.trim() });
    setEditing(false);
  };

  const idx = chapters.indexOf(id);
  const nextId = chapters[idx + 1];

  return (
    <section className={`chapter chapter-${id}`}>
      <p className="chapter-kicker">
        {a.chapter} · {a.label}
      </p>
      <p className="chapter-intro">{a.intro}</p>
      <h1 className="chapter-prompt">{a.prompt}</h1>

      {editing ? (
        <form onSubmit={submit} className="chapter-form">
          {a.kind === 'choice' ? (
            <fieldset>
              <legend className="sr-only">{a.prompt}</legend>
              {a.options.map((o, i) => (
                <label key={o.id} className={`option ${choice === o.id ? 'is-selected' : ''}`}>
                  <input type="radio" name={id} value={o.id} checked={choice === o.id} onChange={() => setChoice(o.id)} />
                  <span className="option-letter">{o.letter || String.fromCharCode(65 + i)}</span>
                  <span>{o.label}</span>
                </label>
              ))}
            </fieldset>
          ) : (
            <div className="text-field">
              <label htmlFor={`${id}-text`}>{a.fieldLabel}</label>
              <textarea id={`${id}-text`} rows={4} maxLength={a.maxLength} value={text} onChange={(e) => setText(e.target.value)} />
              <span className="count" aria-live="polite">
                {text.length}/{a.maxLength}
              </span>
            </div>
          )}
          <button type="submit" className="btn-primary" disabled={a.kind === 'choice' ? !choice : !text.trim()}>
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
          <div className="chapter-actions">
            <button type="button" className="btn-ghost" onClick={() => setEditing(true)}>
              {a.kind === 'choice' ? 'Change my answer' : 'Edit my ideas'}
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
  if (a.kind === 'text') {
    return (
      <div className={`result result-${id}`}>
        <span className="result-head">{a.resultHeading}</span>
        <p className="result-quote">{answer.text}</p>
        <span className="result-foot">Danielle may ask you to share this aloud.</span>
      </div>
    );
  }
  const opt = a.options.find((o) => o.id === answer.choice);
  if (!opt) return null;
  return (
    <div className={`result result-${id}`}>
      <span className="result-head">{a.resultHeading}</span>
      <p className="result-choice">{opt.label}</p>
      <span className="result-lead">{a.resultLead}</span>
      <p className="result-text">{opt.result}</p>
      {a.footnote && <span className="result-foot">{a.footnote}</span>}
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
