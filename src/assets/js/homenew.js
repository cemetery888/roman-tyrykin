// Черновик новой главной: липкая сцена первого экрана, «холст Figma», стопка кейсов, точки таймлайна
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wide = window.matchMedia('(min-width: 640px)');
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const ease = (k) => (k < 0.5 ? 4 * k ** 3 : 1 - (-2 * k + 2) ** 3 / 2);
  const tween = (ms, fn) => new Promise((resolve) => {
    const start = performance.now();
    const frame = (now) => {
      const k = clamp((now - start) / ms, 0, 1);
      fn(ease(k));
      if (k < 1) requestAnimationFrame(frame); else resolve();
    };
    requestAnimationFrame(frame);
  });

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

  // Сцена: строки разъезжаются, из видоискателя проявляется фото
  const hero = document.querySelector('[data-hn-hero]');
  const scrolly = hero && wide.matches && !reduceMotion;
  const vf = hero && hero.querySelector('[data-hn-vf]');
  if (vf && !scrolly) vf.classList.add('is-visible');
  if (scrolly) {
    hero.classList.add('is-scrolly');
    onScroll(() => {
      const r = hero.getBoundingClientRect();
      const p = clamp(-r.top / (window.innerHeight * 0.8), 0, 1);
      hero.style.setProperty('--p', p.toFixed(3));
      hero.classList.toggle('is-revealed', p > 0.95);
      if (p > 0.4) vf.classList.add('is-visible');
    });
  }

  // Холст: курсоры заходят, один выделяет заголовок, второй оставляет комментарий
  const canvas = document.querySelector('[data-hn-canvas]');
  if (canvas && wide.matches) {
    const stage = canvas.parentElement;
    const title = stage.querySelector('[data-hn-title]');
    const lines = title.querySelectorAll('.hn-title__line');
    const cv = stage.querySelector('[data-hn-cv]');
    const sel = canvas.querySelector('[data-hn-sel]');
    const size = canvas.querySelector('[data-hn-size]');
    const comment = canvas.querySelector('[data-hn-comment]');
    const cur = Object.fromEntries([...canvas.querySelectorAll('[data-cur]')].map((el) => [el.dataset.cur, el]));
    const at = (el, x, y) => { el.style.setProperty('--x', `${x}px`); el.style.setProperty('--y', `${y}px`); };

    // Координаты целей относительно сцены
    const layout = () => {
      const s = stage.getBoundingClientRect();
      const rel = (el) => { const r = el.getBoundingClientRect(); return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height }; };
      const l1 = rel(lines[0]);
      const l2 = rel(lines[1]);
      const b = rel(cv);
      // Рамка по самому тексту, а не по всей ширине блока
      const t = { x: Math.min(l1.x, l2.x), y: l1.y, w: Math.max(l1.x + l1.w, l2.x + l2.w) - Math.min(l1.x, l2.x), h: l2.y + l2.h - l1.y };
      return {
        w: s.width,
        h: s.height,
        a: { x: t.x - 10, y: t.y - 6 },
        b: { x: t.x + t.w + 10, y: t.y + t.h + 6 },
        rest: { x: t.x + t.w * 0.62, y: t.y + t.h + 44 },
        size: `${Math.round(t.w)} × ${Math.round(t.h)}`,
        client: { x: l1.x + l1.w + 56, y: l1.y + l1.h * 0.25 },
        dev: { x: b.x + b.w * 0.7, y: b.y + b.h * 0.6 },
      };
    };
    const rect = (a, b) => {
      sel.style.setProperty('--sx', `${Math.min(a.x, b.x)}px`);
      sel.style.setProperty('--sy', `${Math.min(a.y, b.y)}px`);
      sel.style.setProperty('--sw', `${Math.abs(b.x - a.x)}px`);
      sel.style.setProperty('--sh', `${Math.abs(b.y - a.y)}px`);
    };
    const placeComment = (L) => { comment.style.setProperty('--x', `${L.client.x + 22}px`); comment.style.setProperty('--y', `${L.client.y - 58}px`); };
    const finalState = () => {
      const L = layout();
      at(cur.me, L.rest.x, L.rest.y);
      at(cur.client, L.client.x, L.client.y);
      at(cur.dev, L.dev.x, L.dev.y);
      rect(L.a, L.b);
      size.textContent = L.size;
      placeComment(L);
    };
    let done = false;
    window.addEventListener('resize', () => { if (done) finalState(); });

    const move = (el, from, to, ms) => tween(ms, (k) => at(el, from.x + (to.x - from.x) * k, from.y + (to.y - from.y) * k));
    const play = async () => {
      const L = layout();
      const meStart = { x: -40, y: L.h * 0.75 };
      const clientStart = { x: L.w + 40, y: L.h * 0.2 };
      const devStart = { x: L.w * 0.55, y: L.h + 40 };
      at(cur.me, meStart.x, meStart.y);
      at(cur.client, clientStart.x, clientStart.y);
      at(cur.dev, devStart.x, devStart.y);
      Object.values(cur).forEach((el) => el.classList.add('is-on'));
      await wait(400);
      // Роман: подводит курсор к углу заголовка и тянет рамку выделения
      const me = move(cur.me, meStart, L.a, 1000).then(async () => {
        await wait(150);
        sel.classList.add('is-on');
        await tween(1000, (k) => {
          const p = { x: L.a.x + (L.b.x - L.a.x) * k, y: L.a.y + (L.b.y - L.a.y) * k };
          at(cur.me, p.x - 4, p.y - 4);
          rect(L.a, p);
        });
        size.textContent = L.size;
        sel.classList.add('is-done');
        // Отпускает выделение и отводит курсор, чтобы подпись не уходила за край
        await wait(300);
        await move(cur.me, { x: L.b.x - 4, y: L.b.y - 4 }, L.rest, 800);
      });
      // Клиент: прилетает справа и оставляет комментарий
      const client = wait(700).then(() => move(cur.client, clientStart, L.client, 1100)).then(async () => {
        placeComment(L);
        await wait(250);
        comment.classList.add('is-on');
      });
      // Разработчик: подводит курсор к кнопке CV
      const dev = wait(1300).then(() => move(cur.dev, devStart, L.dev, 1100));
      await Promise.all([me, client, dev]);
      done = true;
      canvas.classList.add('is-idle');
    };

    if (reduceMotion) {
      finalState();
      Object.values(cur).forEach((el) => el.classList.add('is-on'));
      sel.classList.add('is-on', 'is-done');
      comment.classList.add('is-on');
      done = true;
    } else {
      // Ждём шрифты, иначе размеры заголовка ещё не настоящие
      (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => wait(500)).then(play);
    }
  }

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
