import { useState } from 'react';
import { asset } from '../lib/asset.js';

// An image that falls back to a clearly labelled placeholder when the file is
// not configured yet or fails to load. Aspect ratio is always preserved.
export function Figure({ src, alt, fit = 'contain', caption, placeholder, className = '', style }) {
  const [failed, setFailed] = useState(false);
  const url = asset(src);
  const missing = !url || failed;
  return (
    <figure className={`fig ${className}`} style={style}>
      {missing ? (
        <Placeholder {...placeholder} />
      ) : (
        <img src={url} alt={alt} style={{ objectFit: fit }} onError={() => setFailed(true)} />
      )}
      {caption && !missing && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Placeholder({ title = 'Image to come', file, hint, icon = 'image' }) {
  return (
    <div className="placeholder" role="img" aria-label={`${title} (placeholder)`}>
      <span className="placeholder-icon" aria-hidden="true">{icon === 'video' ? '▶' : '◻'}</span>
      <strong>{title}</strong>
      {hint && <span>{hint}</span>}
      {file && <code>{file}</code>}
    </div>
  );
}
