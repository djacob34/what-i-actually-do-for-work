// Participant answers live only in this browser's localStorage.
const KEY = 'wdiad-answers-v2';

export function loadAnswers() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveAnswers(answers) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(answers));
  } catch {
    // Private mode or storage blocked: answers still work for this visit.
  }
}

export function clearAnswers() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
