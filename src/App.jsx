import { Deck } from './components/Deck.jsx';
import { Play } from './participant/Play.jsx';

// ?mode=play → participant view on phones; anything else → the projected deck.
export function App() {
  const mode = new URLSearchParams(window.location.search).get('mode');
  if (mode === 'play') {
    document.documentElement.classList.add('is-play');
    return <Play />;
  }
  document.documentElement.classList.add('is-present');
  return <Deck />;
}
