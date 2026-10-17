import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { slides as baseSlides } from '../content/slides.js';
import { portfolio } from '../config/site.js';
import { renderSlide } from '../slides/index.jsx';
import { activities } from '../content/activities.js';

const W = 1280;
const H = 720;

// Expand the portfolio insertion point into one slide per supplied image, or a
// single labelled placeholder while none are configured.
function buildSequence() {
  return baseSlides.flatMap((s) => {
    if (s.activity) return [{ ...s, title: activities[s.activity].label }];
    if (s.layout !== 'portfolioInsert') return [s];
    if (!portfolio.length) {
      return [{ id: 'portfolio-placeholder', layout: 'portfolio', title: 'Creative direction slides', placeholder: true, notes: ['Insert existing creative-direction slides via src/config/site.js → portfolio.'] }];
    }
    return portfolio.map((p, i) => ({
      id: `portfolio-${i + 1}`,
      layout: 'portfolio',
      title: p.title || `Creative direction ${i + 1}`,
      item: p,
      notes: p.notes ? [p.notes] : [],
    }));
  });
}

const sequence = buildSequence();

function readHash() {
  const n = parseInt(window.location.hash.replace(/^#\/?/, ''), 10);
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), sequence.length - 1) : 0;
}

function isTyping(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}

export function Deck() {
  const [index, setIndex] = useState(readHash);
  const [notesOpen, setNotesOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [chromeHidden, setChromeHidden] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const stageRef = useRef(null);

  const go = useCallback((i) => {
    setIndex(Math.min(Math.max(i, 0), sequence.length - 1));
  }, []);

  useEffect(() => {
    const target = `#${index + 1}`;
    if (window.location.hash !== target) history.replaceState(null, '', target);
    document.title = `${index + 1}. ${sequence[index].title || 'Slide'} · What do I actually do for work?`;
  }, [index]);

  useEffect(() => {
    const onHash = () => setIndex(readHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (isTyping(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (k === 'ArrowRight' || k === 'PageDown' || (k === ' ' && !e.target.closest?.('button,a'))) {
        e.preventDefault();
        go(index + 1);
      } else if (k === 'ArrowLeft' || k === 'PageUp') {
        e.preventDefault();
        go(index - 1);
      } else if (k === 'Home') go(0);
      else if (k === 'End') go(sequence.length - 1);
      else if (k === 'f' || k === 'F') toggleFullscreen();
      else if (k === 'n' || k === 'N') setNotesOpen((v) => !v);
      else if (k === 'g' || k === 'G') setPickerOpen((v) => !v);
      else if (k === 'h' || k === 'H') setChromeHidden((v) => !v);
      else if (k === 'Escape') setPickerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, go, toggleFullscreen]);

  // Fit the fixed 16:9 canvas into whatever space the stage has.
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const fit = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.max(0.1, Math.min(width / W, height / H)));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [notesOpen, chromeHidden]);

  const slide = sequence[index];

  return (
    <div className={`deck ${notesOpen ? 'deck-notes' : ''} ${chromeHidden ? 'deck-clean' : ''}`}>
      <main className="deck-main">
        <div className="stage" ref={stageRef}>
          <div
            className="canvas"
            style={{ width: W, height: H, transform: `translate(-50%, -50%) scale(${scale})` }}
            aria-live="polite"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${sequence.length}`}
          >
            {renderSlide(slide, index + 1)}
          </div>
        </div>

        {!chromeHidden && (
          <nav className="controls" aria-label="Presentation controls">
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">
              ←
            </button>
            <button
              type="button"
              className="controls-count"
              onClick={() => setPickerOpen((v) => !v)}
              aria-expanded={pickerOpen}
              aria-haspopup="true"
              title="Slide picker (G)"
            >
              {index + 1} / {sequence.length}
            </button>
            <button type="button" onClick={() => go(index + 1)} disabled={index === sequence.length - 1} aria-label="Next slide">
              →
            </button>
            <span className="controls-sep" />
            <button type="button" onClick={() => setNotesOpen((v) => !v)} aria-pressed={notesOpen} title="Speaker notes (N)">
              Notes
            </button>
            <button type="button" onClick={toggleFullscreen} aria-pressed={isFullscreen} title="Fullscreen (F)">
              {isFullscreen ? 'Exit full screen' : 'Full screen'}
            </button>
            <button type="button" onClick={() => setChromeHidden(true)} title="Hide controls (H)" aria-label="Hide controls">
              ✕
            </button>
          </nav>
        )}

        {chromeHidden && (
          <button type="button" className="controls-reveal" onClick={() => setChromeHidden(false)} aria-label="Show controls">
            •••
          </button>
        )}

        {pickerOpen && (
          <div className="picker" role="dialog" aria-label="Go to slide">
            <ol>
              {sequence.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className={i === index ? 'is-current' : ''}
                    onClick={() => {
                      go(i);
                      setPickerOpen(false);
                    }}
                  >
                    <span className="picker-num">{i + 1}</span>
                    <span className={`picker-dot dot-${s.chapter || 'none'}`} />
                    {s.kicker ? `${s.kicker.split(' · ')[0]}: ` : ''}
                    {s.title || (s.activity ? 'Phone activity' : s.id)}
                    {s.activity ? ' (phone activity)' : ''}
                  </button>
                </li>
              ))}
            </ol>
            <a className="picker-play" href="?mode=play" target="_blank" rel="noreferrer">
              Open participant view ↗
            </a>
          </div>
        )}
      </main>

      {notesOpen && (
        <aside className="notes" aria-label="Speaker notes">
          <h2>
            {index + 1}. {slide.title || (slide.activity ? 'Phone activity' : '')}
          </h2>
          {slide.notes?.length ? (
            <ul>
              {slide.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          ) : (
            <p>No notes for this slide.</p>
          )}
          {sequence[index + 1] && (
            <p className="notes-next">Next: {sequence[index + 1].title || 'Phone activity'}</p>
          )}
        </aside>
      )}
    </div>
  );
}
