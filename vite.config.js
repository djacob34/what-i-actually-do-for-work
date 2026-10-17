import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built `dist/` works from any static host or sub-folder.
export default defineConfig({
  base: './',
  plugins: [react()],
  // During `npm run dev`, forward live-answer calls to `npm run dev:server`.
  server: { proxy: { '/api': 'http://localhost:3000' } },
});
