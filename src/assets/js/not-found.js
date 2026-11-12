// 404: направляющие с координатами за курсором, сетка-параллакс,
// цифры-слои можно тащить, отпущенный слой пружинит на место
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const grid = document.querySelector('.nf-grid');
  const guides = document.querySelector('[data-nf-guides]');
  const coords = document.querySelector('[data-nf-coords]');

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    guides.classList.add('is-on');
    guides.style.setProperty('--mx', `${e.clientX}px`);
    guides.style.setProperty('--my', `${e.clientY}px`);
    coords.textContent = `X ${Math.round(e.clientX)}  Y ${Math.round(e.clientY)}`;
    if (!reduceMotion) {
      grid.style.setProperty('--gx', `${(e.clientX / innerWidth - 0.5) * -24}px`);
      grid.style.setProperty('--gy', `${(e.clientY / innerHeight - 0.5) * -24}px`);
    }
  });
  document.addEventListener('pointerleave', () => guides.classList.remove('is-on'));

  document.querySelectorAll('[data-nf-layer]').forEach((el) => {
    const size = el.querySelector('[data-nf-size]');
    const setSize = () => { size.textContent = `${Math.round(el.offsetWidth)} × ${Math.round(el.offsetHeight)}`; };
    let x = 0; let y = 0; let vx = 0; let vy = 0; let rot = 0;
    let start = null; let raf = 0; let last = null;

    const apply = () => {
      el.style.setProperty('--dx', `${x}px`);
      el.style.setProperty('--dy', `${y}px`);
      el.style.setProperty('--rot', `${rot}deg`);
    };
    // Пружина обратно на место (с лёгким перелётом)
    const spring = () => {
      cancelAnimationFrame(raf);
      const step = () => {
        vx = (vx + -x * 0.09) * 0.82;
        vy = (vy + -y * 0.09) * 0.82;
        x += vx; y += vy;
        rot += (-rot) * 0.15;
        apply();
        if (Math.abs(x) + Math.abs(y) + Math.abs(vx) + Math.abs(vy) > 0.3) raf = requestAnimationFrame(step);
        else { x = y = vx = vy = rot = 0; apply(); el.classList.remove('is-picked'); }
      };
      raf = requestAnimationFrame(step);
    };

    el.addEventListener('pointerdown', (e) => {
      cancelAnimationFrame(raf);
      el.style.animation = 'none';
      el.setPointerCapture(e.pointerId);
      start = { px: e.clientX - x, py: e.clientY - y };
      last = { x: e.clientX, t: performance.now() };
      setSize();
      el.classList.add('is-dragging', 'is-picked');
    });
    el.addEventListener('pointermove', (e) => {
      if (!start) return;
      x = e.clientX - start.px;
      y = e.clientY - start.py;
      // Слой чуть наклоняется по направлению рывка
      const now = performance.now();
      const speed = (e.clientX - last.x) / Math.max(1, now - last.t);
      rot = Math.max(-12, Math.min(12, rot * 0.7 + speed * 4));
      last = { x: e.clientX, t: now };
      apply();
    });
    const release = () => {
      if (!start) return;
      start = null;
      el.classList.remove('is-dragging');
      if (reduceMotion) { x = y = rot = 0; apply(); el.classList.remove('is-picked'); return; }
      spring();
    };
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
  });
})();
