import { defineConfig } from 'vite';

// GitHub Pages serves the site from /chroma-fm/; local dev stays at /.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/chroma-fm/' : '/',
  build: { chunkSizeWarningLimit: 900 },
}));
