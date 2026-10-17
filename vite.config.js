import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built `dist/` works from any static host or sub-folder.
export default defineConfig({
  base: './',
  plugins: [react()],
  // `npm start` serves the build on hosts like Railway, which use their own domains.
  preview: { allowedHosts: true },
});
