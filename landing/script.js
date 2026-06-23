import { initPage } from './src/js/copy-loader.js';

initPage().then((copy) => {
  document.querySelectorAll('.cta-neon').forEach((btn) => {
    btn.setAttribute('aria-label', copy.ctaPrimary);
    const store = copy.footerLinks.find((l) => l.label === 'App Store');
    if (store) btn.href = store.href;
  });
});
