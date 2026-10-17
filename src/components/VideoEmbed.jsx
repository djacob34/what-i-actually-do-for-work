import { useState } from 'react';
import { asset } from '../lib/asset.js';
import { Placeholder } from './Figure.jsx';

// Embeds the configured film (YouTube id or local file) with a fallback link.
export function VideoEmbed({ film }) {
  const [failed, setFailed] = useState(false);
  const external =
    film.externalUrl || (film.youtubeId ? `https://www.youtube.com/watch?v=${film.youtubeId}&t=${film.start || 0}s` : '');

  let player = null;
  if (film.file && !failed) {
    const range = film.start || film.end ? `#t=${film.start || 0}${film.end ? ',' + film.end : ''}` : '';
    player = (
      <video controls preload="metadata" src={asset(film.file) + range} onError={() => setFailed(true)}>
        <track kind="captions" />
      </video>
    );
  } else if (film.youtubeId) {
    const params = new URLSearchParams({ rel: '0', modestbranding: '1', playsinline: '1', controls: '1' });
    if (film.start) params.set('start', String(film.start));
    if (film.end) params.set('end', String(film.end));
    player = (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?${params}`}
        title={film.title || 'InCUBE film'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <div className="video">
      <div className="video-frame">
        {player || (
          <Placeholder
            icon="video"
            title={failed ? 'Film file could not be played' : 'Film to come'}
            hint="Add a YouTube id or video file in media.incube.film"
          />
        )}
      </div>
      <div className="video-meta">
        {film.title && <span className="video-title">{film.title}</span>}
        {external && (
          <a href={external} target="_blank" rel="noreferrer" className="video-link">
            Open film ↗
          </a>
        )}
      </div>
    </div>
  );
}
