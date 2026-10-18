import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import '@fontsource/instrument-serif/400.css';
import './styles/tokens.css';
import './styles/deck.css';
import './styles/slides.css';
import './styles/play.css';
import './styles/nec-deck.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
