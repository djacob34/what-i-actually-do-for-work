import { QR } from './QR.jsx';
import { participantUrl, readableUrl } from '../lib/participantUrl.js';

// QR + readable link for participant mode, or an honest setup note when no
// public address is configured.
export function JoinPanel({ size = 200, compact = false, chapterLabel }) {
  const url = participantUrl();
  if (!url) {
    return (
      <div className={`join join-missing ${compact ? 'join-compact' : ''}`}>
        <div className="join-missing-box" style={{ width: size, height: size }}>
          <strong>Participant link not set</strong>
          <span>
            Add the public address to <code>participantUrl</code> in <code>src/config/site.js</code>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className={`join ${compact ? 'join-compact' : ''}`}>
      <QR value={url} size={size} />
      <div className="join-text">
        {chapterLabel && <span className="join-chapter">Tap “{chapterLabel}”</span>}
        <span className="join-url">{readableUrl(url)}</span>
      </div>
    </div>
  );
}
