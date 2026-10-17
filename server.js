// Serves the built deck (dist/) and relays audience answers to the projected
// screen. No dependencies; answers live in memory only, so a restart or
// redeploy clears them. Run with `npm start` after `npm run build`.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(fileURLToPath(new URL('.', import.meta.url)), 'dist');
const PORT = Number(process.env.PORT) || 3000;
// Optional: set RESET_KEY to stop anyone but the presenter clearing answers.
const RESET_KEY = process.env.RESET_KEY || '';

// Mirrors src/content/activities.js: chapter → field ids and max lengths.
const CHAPTERS = {
  incube: { first: 300 },
  nessie: { plan: 400 },
  hy2market: { stop: 250, talk: 250 },
};
const MAX_PER_CHAPTER = 200;

const answers = Object.fromEntries(Object.keys(CHAPTERS).map((c) => [c, new Map()]));
const streams = new Set();

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
};

function snapshot() {
  return Object.fromEntries(
    Object.entries(answers).map(([c, m]) => [c, [...m.values()].sort((a, b) => a.at - b.at)]),
  );
}

function broadcast() {
  const data = `data: ${JSON.stringify(snapshot())}\n\n`;
  for (const res of streams) res.write(data);
}

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

async function readBody(req, limit = 4096) {
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) throw new Error('too large');
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

async function handleApi(req, res, url) {
  if (url.pathname === '/api/stream' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-store',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    });
    res.write(`data: ${JSON.stringify(snapshot())}\n\n`);
    streams.add(res);
    const ping = setInterval(() => res.write(': ping\n\n'), 25000);
    req.on('close', () => {
      clearInterval(ping);
      streams.delete(res);
    });
    return;
  }

  if (url.pathname === '/api/answers' && req.method === 'POST') {
    let body;
    try {
      body = await readBody(req);
    } catch {
      return json(res, 400, { error: 'bad request' });
    }
    const spec = CHAPTERS[body.chapter];
    const device = typeof body.device === 'string' ? body.device.slice(0, 64) : '';
    if (!spec || !device) return json(res, 400, { error: 'bad request' });
    const fields = {};
    for (const [id, max] of Object.entries(spec)) {
      const v = typeof body.fields?.[id] === 'string' ? body.fields[id].trim().slice(0, max) : '';
      if (v) fields[id] = v;
    }
    const store = answers[body.chapter];
    if (!Object.keys(fields).length) {
      store.delete(device); // an empty answer withdraws it from the screen
    } else {
      if (!store.has(device) && store.size >= MAX_PER_CHAPTER) return json(res, 429, { error: 'full' });
      const prev = store.get(device);
      store.set(device, { id: device, fields, at: prev?.at ?? Date.now() });
    }
    broadcast();
    return json(res, 200, { ok: true });
  }

  if (url.pathname === '/api/reset' && req.method === 'POST') {
    if (RESET_KEY && url.searchParams.get('key') !== RESET_KEY) return json(res, 403, { error: 'forbidden' });
    const chapter = url.searchParams.get('chapter');
    for (const [c, m] of Object.entries(answers)) if (!chapter || c === chapter) m.clear();
    broadcast();
    return json(res, 200, { ok: true });
  }

  json(res, 404, { error: 'not found' });
}

async function serveStatic(res, pathname) {
  const safe = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  let file = join(DIST, safe);
  if (!file.startsWith(DIST)) file = join(DIST, 'index.html');
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
  } catch {
    file = join(DIST, 'index.html');
  }
  try {
    const data = await readFile(file);
    const isHtml = file.endsWith('.html');
    res.writeHead(200, {
      'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': isHtml ? 'no-cache' : 'public, max-age=3600',
    });
    res.end(data);
  } catch {
    res.writeHead(500);
    res.end('Build missing: run npm run build');
  }
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname.startsWith('/api/')) {
      handleApi(req, res, url).catch(() => json(res, 500, { error: 'server error' }));
    } else {
      serveStatic(res, url.pathname);
    }
  })
  .listen(PORT, () => console.log(`Deck on http://localhost:${PORT}`));
