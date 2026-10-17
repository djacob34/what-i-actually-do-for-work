import { useEffect, useState } from 'react';
import { asset } from './asset.js';

// Talks to server.js: phones POST answers, the deck listens on a stream.
// Without the server (e.g. `npm run dev` alone or a plain static host) every
// call fails quietly and answers simply stay on the phone.

const DEVICE_KEY = 'wdiad-device';

export function deviceId() {
  try {
    let id = window.localStorage.getItem(DEVICE_KEY);
    if (!id) {
      id = (crypto.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36)).slice(0, 36);
      window.localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  } catch {
    return 'anon-' + Math.random().toString(36).slice(2);
  }
}

export async function sendAnswer(chapter, fields) {
  try {
    const res = await fetch(asset('api/answers'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter, device: deviceId(), fields }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function resetAnswers(chapter) {
  const key = new URLSearchParams(window.location.search).get('key');
  const params = new URLSearchParams();
  if (chapter) params.set('chapter', chapter);
  if (key) params.set('key', key);
  try {
    const res = await fetch(asset(`api/reset?${params}`), { method: 'POST' });
    return res.ok;
  } catch {
    return false;
  }
}

// Presenter: live answers per chapter, plus whether the stream is connected.
export function useLiveAnswers() {
  const [state, setState] = useState({ connected: false, answers: {} });
  useEffect(() => {
    if (typeof EventSource === 'undefined') return undefined;
    const es = new EventSource(asset('api/stream'));
    es.onmessage = (e) => {
      try {
        setState({ connected: true, answers: JSON.parse(e.data) });
      } catch {
        // ignore malformed frames
      }
    };
    es.onerror = () => setState((s) => ({ ...s, connected: false }));
    return () => es.close();
  }, []);
  return state;
}
