import { initPage } from '../../src/js/copy-loader.js';

const images = [
  { src: '/src/img/1.png', alt: 'Follow every match in real time with live score' },
  { src: '/src/img/2.png', alt: 'Browse the full tournament calendar day by day' },
  { src: '/src/img/3.png', alt: 'Track group tables and qualification zones' },
  { src: '/src/img/4.png', alt: 'Dive into lineup' },
  { src: '/src/img/5.png', alt: 'Pick your nation to get personalized feed of fixtures' },
  { src: '/src/img/6.png', alt: 'Dive into lineup and head-to-head stats for every match' },
];

initPage().then(() => {
  const mainImg = document.querySelector('[data-carousel]');
  const thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const i = Number(thumb.dataset.index);
      mainImg.src = images[i].src;
      mainImg.alt = images[i].alt;
      thumbs.forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});
