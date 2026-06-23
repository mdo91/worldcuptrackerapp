const variations = [
  { id: '01', slug: '01-classic-sports', name: 'Classic Sports', desc: 'Bold sports poster with strong contrast and energetic typography.', theme: 'light', tags: ['light'] },
  { id: '02', slug: '02-minimal-editorial', name: 'Minimal Editorial', desc: 'Whitespace-driven magazine layout with serif and sans pairing.', theme: 'light', tags: ['light'] },
  { id: '03', slug: '03-glass-ios', name: 'Glass iOS', desc: 'Frosted cards, soft gradients, and native iOS-like polish.', theme: 'light', tags: ['light'] },
  { id: '04', slug: '04-dark-premium', name: 'Dark Premium', desc: 'Dark theme with neon accents and premium feel. Project default.', theme: 'dark', tags: ['dark'], featured: true },
  { id: '05', slug: '05-split-hero', name: 'Split Hero', desc: 'Left copy with sticky phone mockup on the right.', theme: 'light', tags: ['light'] },
  { id: '06', slug: '06-timeline-story', name: 'Timeline Story', desc: 'Vertical scroll narrative with alternating milestones.', theme: 'light', tags: ['light'] },
  { id: '07', slug: '07-feature-grid', name: 'Feature Grid', desc: '2×3 feature cards each showcasing an app screenshot.', theme: 'light', tags: ['light'] },
  { id: '08', slug: '08-world-cup-campaign', name: 'World Cup Campaign', desc: 'Tournament event campaign with bold event styling.', theme: 'light', tags: ['light'] },
  { id: '09', slug: '09-fan-emotional', name: 'Fan Emotional', desc: 'National-team fan tone with warm, personal messaging.', theme: 'light', tags: ['light'] },
  { id: '10', slug: '10-conversion-cta', name: 'Conversion CTA', desc: 'CTA-heavy layout with pricing above the fold.', theme: 'light', tags: ['light', 'cta'] },
];

const previews = {
  '01-classic-sports': 'linear-gradient(135deg, #FF383C 50%, #0052C7 50%)',
  '02-minimal-editorial': 'linear-gradient(180deg, #2a3140 60%, #0B1220 60%)',
  '03-glass-ios': 'linear-gradient(135deg, #1a2744, #3B7DD9)',
  '04-dark-premium': 'linear-gradient(135deg, #0B1220, #1a2744)',
  '05-split-hero': 'linear-gradient(90deg, #1a2744 50%, #0052C7 50%)',
  '06-timeline-story': 'linear-gradient(180deg, #0052C7, #0B1220)',
  '07-feature-grid': 'repeating-linear-gradient(90deg, #1a2744, #1a2744 48%, #0B1220 48%, #0B1220 52%)',
  '08-world-cup-campaign': 'linear-gradient(135deg, #FF383C, #0B1220)',
  '09-fan-emotional': 'linear-gradient(135deg, #FF383C 0%, #1a2744 100%)',
  '10-conversion-cta': 'linear-gradient(180deg, #0052C7 40%, #0B1220 40%)',
};

const tagClass = { light: 'card-tag--light', dark: 'card-tag--dark', cta: 'card-tag--cta' };

const grid = document.getElementById('variation-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

grid.innerHTML = variations.map((v) => `
  <article class="variation-card${v.featured ? ' is-featured' : ''}" data-tags="${v.tags.join(' ')}" data-theme="${v.theme}">
    <div class="card-preview" style="background:${previews[v.slug]}">${v.id}</div>
    <div class="card-body">
      ${v.featured ? '<span class="card-tag card-tag--featured">Project theme</span>' : ''}
      ${v.tags.map((t) => `<span class="card-tag ${tagClass[t]}">${t}</span>`).join('')}
      <h2>${v.name}</h2>
      <p>${v.desc}</p>
      <a class="card-link" href="variations/${v.slug}/index.html">${v.featured ? 'View live landing →' : 'View variation →'}</a>
    </div>
  </article>
`).join('');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.variation-card').forEach((card) => {
      if (filter === 'all') {
        card.classList.remove('is-hidden');
      } else {
        card.classList.toggle('is-hidden', !card.dataset.tags.includes(filter));
      }
    });
  });
});
