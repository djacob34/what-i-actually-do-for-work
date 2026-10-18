// Which deck is open. `?deck=nec` loads the NEC-focused "A Day in the Life of
// Dani" version; anything else loads the original presentation.
// A host page can also preselect it with window.__DECK__ = 'nec'.
const param = window.__DECK__ || new URLSearchParams(window.location.search).get('deck');

export const deckId = param === 'nec' ? 'nec' : 'main';

export const deckInfo = {
  main: { presenter: 'Danielle', title: 'What do I actually do for work?' },
  nec: { presenter: 'Dani', title: 'A Day in the Life of Dani' },
}[deckId];
