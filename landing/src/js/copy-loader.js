export const imagePath = (n) => `/src/img/${n}.png`;

export async function loadCopy() {
  const paths = ['/src/shared/copy.json', '../../src/shared/copy.json'];
  for (const basePath of paths) {
    try {
      const res = await fetch(basePath);
      if (res.ok) return res.json();
    } catch {
      /* try next */
    }
  }
  throw new Error('Failed to load copy.json');
}

export function setText(el, text) {
  if (el && text != null) el.textContent = text;
}

export function populateFromCopy(copy) {
  document.querySelectorAll('[data-copy]').forEach((el) => {
    const keys = el.dataset.copy.split('.');
    let val = copy;
    for (const k of keys) val = val?.[k];
    if (typeof val === 'string') el.textContent = val;
  });

  document.querySelectorAll('[data-feature]').forEach((el) => {
    const feat = copy.features.find((f) => f.id === el.dataset.feature);
    if (!feat) return;
    const title = el.querySelector('[data-slot="title"]');
    const desc = el.querySelector('[data-slot="desc"]');
    el.querySelectorAll('img').forEach((img) => {
      img.src = feat.image;
      img.alt = feat.alt;
      img.loading = 'lazy';
    });
    if (title) title.textContent = feat.title;
    if (desc) desc.textContent = feat.description;
  });

  const stepsEl = document.querySelector('[data-slot="steps"]');
  if (stepsEl) {
    stepsEl.innerHTML = copy.howItWorks
      .map(
        (s) => `<div class="step reveal is-visible">
          <span class="step-num">${s.step}</span>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>`
      )
      .join('');
  }

  const footerEl = document.querySelector('[data-slot="footer-links"]');
  if (footerEl) {
    footerEl.innerHTML = copy.footerLinks
      .map((l) => `<a href="${l.href}">${l.label}</a>`)
      .join('');
  }

  document.querySelectorAll('.app-store-btn').forEach((btn) => {
    btn.setAttribute('aria-label', copy.ctaPrimary);
    const store = copy.footerLinks.find((l) => l.label === 'App Store');
    if (store) btn.href = store.href;
  });
}

export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
}

export function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const show = (el) => el.classList.add('is-visible');

  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) show(el);
  });

  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(show);
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && show(e.target)),
    { threshold: 0.05, rootMargin: '0px 0px 40px 0px' }
  );
  els.forEach((el) => obs.observe(el));
}

export async function initPage() {
  const copy = await loadCopy();
  populateFromCopy(copy);
  initNav();
  initReveal();
  return copy;
}
