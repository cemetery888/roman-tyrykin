// Черновик новой главной: стопка кейсов, точки таймлайна
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wide = window.matchMedia('(min-width: 640px)');
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const onScroll = (fn) => {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { ticking = false; fn(); });
    }, { passive: true });
    window.addEventListener('resize', fn);
    fn();
  };

  // Стопка кейсов: накрытая следующей карточка чуть уменьшается и темнеет
  const stack = [...document.querySelectorAll('[data-hn-stack]')];
  if (stack.length && wide.matches && !reduceMotion) {
    onScroll(() => {
      stack.forEach((item, i) => {
        const next = stack[i + 1];
        if (!next) return;
        const top = parseFloat(getComputedStyle(item).top) || 0;
        const h = item.offsetHeight;
        const k = clamp(1 - (next.getBoundingClientRect().top - top) / h, 0, 1);
        item.style.setProperty('--s', (1 - k * 0.05).toFixed(4));
        item.style.setProperty('--b', (1 - k * 0.35).toFixed(3));
      });
    });
  }

  // Таймлайн: точка загорается, когда до неё дорастает линия (её рост считает main.js)
  const timeline = document.querySelector('[data-timeline]');
  const jobs = [...document.querySelectorAll('[data-hn-job]')];
  if (timeline && jobs.length) {
    if (reduceMotion) {
      jobs.forEach((job) => job.classList.add('is-lit'));
    } else {
      onScroll(() => {
        const r = timeline.getBoundingClientRect();
        const progress = parseFloat(timeline.style.getPropertyValue('--progress')) || 0;
        const lineY = r.top + r.height * progress;
        jobs.forEach((job) => {
          const j = job.getBoundingClientRect();
          job.classList.toggle('is-lit', lineY >= j.top + j.height / 2);
        });
      });
    }
  }
})();
