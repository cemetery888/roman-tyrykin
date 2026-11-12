import { esc, rich } from './layout.mjs';

const ext = 'target="_blank" rel="noopener"';

// Навигация по разделам: десктоп и планшет, на мобильном скрыта
export function nav({ t }) {
  const items = [['about', t.nav.about], ['cases', t.nav.cases], ['experience', t.nav.experience], ['contacts', t.nav.contacts]]
    .map(([id, label]) => `<li><a class="nav__link" href="#${id}" data-scroll>${esc(label)}</a></li>`).join('');
  return `<nav class="nav" aria-label="${esc(t.nav.label)}"><ul class="nav__list">${items}</ul><span class="nav__line" aria-hidden="true"></span></nav>`;
}

export function about({ t, base }) {
  // Порядковый номер у градиентных слов: «зажигаются» по очереди
  const lit = (html) => { let k = 0; return html.replace(/<strong class="accent">/g, () => `<strong class="accent about__lit" style="--k:${k++}">`); };
  const items = t.about.map((text, i) => `<li class="about__item" data-reveal data-spot style="--d:${[0, 1, 1, 2][i] ?? i}">
      <span class="about__star"><img src="${base}assets/img/asterisk.svg" width="28" height="28" alt=""></span>
      <p>${lit(rich(text))}</p>
    </li>`).join('\n    ');
  return `<section class="section" id="about" aria-labelledby="about-title">
  <h2 class="section__title" data-type id="about-title" data-reveal>${esc(t.aboutTitle)}</h2>
  <ul class="about panel">
    ${items}
  </ul>
</section>`;
}

export function caseCard({ c, t, base, href }) {
  const copy = t.cases[c.slug];
  const media = c.phones
    ? `<div class="case__phones">${c.images.map((img) => `<img src="${base}assets/img/${img}" width="360" height="800" alt="" loading="lazy">`).join('')}</div>`
    : `<div class="case__media"><img src="${base}assets/img/${c.images[0]}" width="1360" height="720" alt="" loading="lazy"></div>`;
  return `<a class="case case--${c.theme}${c.phones ? ' case--phones' : ''}" href="${href}" data-reveal data-cursor="case">
      ${media}
      <div class="case__body">
        <h3 class="case__title">${esc(copy.title)}</h3>
        <p class="case__text">${rich(copy.text, 'case__bold')}</p>
        <ul class="case__tags">${c.tags.map((tag) => `<li>${esc(tag)}</li>`).join('')}</ul>
      </div>
    </a>`;
}

const arrowUp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Кнопка «Наверх»: появляется после первого экрана (main.js)
export function toTop({ t }) {
  return `<div class="page to-top-wrap"><button class="to-top" type="button" aria-label="${esc(t.toTop)}" data-to-top>${arrowUp}</button></div>`;
}

export function footer({ t, links }) {
  const items = [
    ['Telegram', links.telegram],
    ['Email', links.email],
    ['LinkedIn', links.linkedin],
    ['CV', links.cv[t.lang]],
  ].map(([label, href], i) => `<li style="--i:${i}"><a href="${href}" ${href.startsWith('mailto:') ? '' : ext}><span>${label}</span><span class="contacts__arrow" aria-hidden="true"><span>↗</span><span>↗</span></span></a></li>`).join('\n      ');
  // Строки заголовка выезжают из-под маски по очереди
  const lines = t.footerTitle.map((w, i) => `<span class="contacts__line"><span style="--i:${i}">${esc(w)}</span></span>`).join(' ');
  return `<footer class="contacts" id="contacts" data-reveal data-glow>
    <h2 class="contacts__title">${lines}</h2>
    <ul class="contacts__links">
      ${items}
    </ul>
  </footer>`;
}
