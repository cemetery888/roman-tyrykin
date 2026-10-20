(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Появление блоков при скролле
  const revealed = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealed.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealed.forEach((el) => io.observe(el));
  }

  // Плавный скролл к контактам
  document.querySelectorAll('[data-scroll]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  // Кастомный курсор «Смотреть кейс →» только для мыши
  const cursor = document.querySelector('.cursor-case');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (cursor && finePointer.matches) {
    document.documentElement.classList.add('has-custom-cursor');
    const move = (event) => {
      cursor.style.setProperty('--x', `${event.clientX}px`);
      cursor.style.setProperty('--y', `${event.clientY}px`);
    };
    document.querySelectorAll('[data-cursor="case"]').forEach((card) => {
      card.addEventListener('pointerenter', (event) => { move(event); cursor.classList.add('is-visible'); });
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
    });
  }
})();
