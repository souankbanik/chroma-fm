import { defineConfig } from 'vite';

// Relative base: the same build works at a domain root (Vercel) and in a
// sub-path (GitHub Pages /chroma-fm/).
export default defineConfig({
  base: './',
  build: { chunkSizeWarningLimit: 900 },
});
