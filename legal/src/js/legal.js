document.querySelectorAll('.legal-toc a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href')?.slice(1);
    const target = id && document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  });
});

const printBtn = document.getElementById('print-page');
if (printBtn) printBtn.addEventListener('click', () => window.print());
