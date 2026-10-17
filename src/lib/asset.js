// Resolve a /public path against Vite's base so sub-folder hosting works.
export function asset(path) {
  if (!path) return null;
  if (/^(https?:|data:|blob:)/.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
