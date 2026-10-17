import { site } from '../config/site.js';

const LOCAL = /^(localhost|127\.|0\.0\.0\.0|\[::1\]|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;

// Returns the public participant link, or null when only a local address is
// known (so the audience is never shown a localhost QR code).
export function participantUrl() {
  let base = site.participantUrl.trim();
  if (!base) {
    const { protocol, hostname, origin, pathname } = window.location;
    if (!protocol.startsWith('http') || LOCAL.test(hostname) || hostname.endsWith('.local')) return null;
    base = origin + pathname;
  }
  const url = new URL(base, window.location.href);
  url.search = '';
  url.hash = '';
  url.searchParams.set('mode', 'play');
  return url.toString();
}

export function readableUrl(url) {
  return url.replace(/^https?:\/\//, '');
}
