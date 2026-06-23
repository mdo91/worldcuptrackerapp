import { resolve } from 'path';
import { defineConfig } from 'vite';

const variations = [
  '01-classic-sports', '02-minimal-editorial', '03-glass-ios', '04-dark-premium',
  '05-split-hero', '06-timeline-story', '07-feature-grid', '08-world-cup-campaign',
  '09-fan-emotional', '10-conversion-cta',
];

const input = { main: resolve(__dirname, 'index.html') };
variations.forEach((v) => {
  input[v] = resolve(__dirname, `variations/${v}/index.html`);
});

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    rollupOptions: { input },
    assetsInlineLimit: 0,
  },
});
