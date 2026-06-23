import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
    assetsInlineLimit: 0,
  },
});
