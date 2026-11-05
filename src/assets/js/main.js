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

  // ===== Анимации главной =====
  const hoverPointer = finePointer.matches;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  // Видоискатель: перекрестие следует за курсором
  const vf = document.querySelector('[data-viewfinder]');
  if (vf && hoverPointer && !reduceMotion) {
    vf.addEventListener('pointermove', (event) => {
      const r = vf.getBoundingClientRect();
      vf.style.setProperty('--vf-x', `${event.clientX - r.left - r.width / 2}px`);
      vf.style.setProperty('--vf-y', `${event.clientY - r.top - r.height / 2}px`);
    });
    vf.addEventListener('pointerleave', () => {
      vf.style.setProperty('--vf-x', '0px');
      vf.style.setProperty('--vf-y', '0px');
    });
  }

  // Карточки кейсов: наклон и параллакс картинки
  if (hoverPointer && !reduceMotion) {
    document.querySelectorAll('.case').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const r = card.getBoundingClientRect();
        const x = (event.clientX - r.left) / r.width - 0.5;
        const y = (event.clientY - r.top) / r.height - 0.5;
        card.classList.add('is-tilting');
        card.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
        card.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`);
        card.style.setProperty('--px', `${(-x * 16).toFixed(1)}px`);
        card.style.setProperty('--py', `${(-y * 16).toFixed(1)}px`);
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-tilting');
        ['--rx', '--ry', '--px', '--py'].forEach((p) => card.style.removeProperty(p));
      });
    });
  }

  // «Обо мне»: подсветка следует за курсором
  if (hoverPointer && !reduceMotion) {
    document.querySelectorAll('[data-spot]').forEach((item) => {
      item.addEventListener('pointermove', (event) => {
        const r = item.getBoundingClientRect();
        item.style.setProperty('--mx', `${event.clientX - r.left}px`);
        item.style.setProperty('--my', `${event.clientY - r.top}px`);
      });
    });
  }

  // Появление по скроллу для эффектов ниже
  const onVisible = (els, fn, options = { threshold: 0.4 }) => {
    if (!els.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        fn(entry.target);
      });
    }, options);
    els.forEach((el) => obs.observe(el));
  };

  // Заголовки секций печатаются по буквам
  const titles = [...document.querySelectorAll('[data-type]')];
  if (!reduceMotion && 'IntersectionObserver' in window) {
    titles.forEach((title) => {
      const text = title.textContent;
      title.setAttribute('aria-label', text);
      title.innerHTML = '';
      const chars = [...text].map((ch) => {
        const span = document.createElement('span');
        span.className = 'type__ch';
        span.setAttribute('aria-hidden', 'true');
        span.textContent = ch;
        title.append(span);
        return span;
      });
      title._chars = chars;
    });
    onVisible(titles, (title) => {
      const caret = document.createElement('span');
      caret.className = 'type__caret';
      caret.setAttribute('aria-hidden', 'true');
      const chars = title._chars;
      let i = 0;
      title.prepend(caret);
      const tick = () => {
        if (i >= chars.length) { caret.classList.add('is-done'); return; }
        chars[i].classList.add('is-on');
        chars[i].after(caret);
        i += 1;
        setTimeout(tick, 45 + Math.random() * 50);
      };
      setTimeout(tick, 250);
    }, { threshold: 0.6 });
  }

  // Опыт работы: линия растёт со скроллом, числа в датах набираются
  const timeline = document.querySelector('[data-timeline]');
  if (timeline && !reduceMotion) {
    let ticking = false;
    const draw = () => {
      ticking = false;
      const r = timeline.getBoundingClientRect();
      const progress = r.bottom <= window.innerHeight ? 1 : clamp((window.innerHeight * 0.85 - r.top) / r.height, 0, 1);
      timeline.style.setProperty('--progress', progress.toFixed(3));
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(draw); }
    }, { passive: true });
    draw();
  }
  onVisible([...document.querySelectorAll('[data-count]')], (el) => {
    const text = el.textContent;
    const parts = text.split(/(\d+)/);
    const start = performance.now();
    const duration = 1200;
    const frame = (now) => {
      const k = clamp((now - start) / duration, 0, 1);
      const ease = 1 - (1 - k) ** 3;
      el.textContent = parts.map((part, idx) => {
        if (idx % 2 === 0) return part;
        const to = Number(part);
        const from = part.length === 4 ? to - 12 : 0;
        return String(Math.round(from + (to - from) * ease)).padStart(part.length, '0');
      }).join('');
      if (k < 1) requestAnimationFrame(frame); else el.textContent = text;
    };
    requestAnimationFrame(frame);
  }, { threshold: 1 });

  // Навигация: подчёркивание едет к пункту под курсором
  const navEl = document.querySelector('.nav');
  const navLine = navEl && navEl.querySelector('.nav__line');
  if (navEl && navLine) {
    navEl.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('pointerenter', () => {
        const nr = navEl.getBoundingClientRect();
        const lr = link.getBoundingClientRect();
        navLine.style.setProperty('--x', `${lr.left - nr.left}px`);
        navLine.style.setProperty('--w', `${lr.width}px`);
        navEl.classList.add('is-pointing');
      });
    });
    navEl.addEventListener('pointerleave', () => navEl.classList.remove('is-pointing'));
  }

  // Кнопка «Наверх» на страницах кейсов
  const toTop = document.querySelector('[data-to-top]');
  if (toTop) {
    const update = () => toTop.classList.toggle('is-visible', window.scrollY > window.innerHeight);
    window.addEventListener('scroll', update, { passive: true });
    update();
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  }
})();
