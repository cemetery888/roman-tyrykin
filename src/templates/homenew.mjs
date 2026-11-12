import { esc } from './layout.mjs';
import { nav, about, caseCard, footer, toTop } from './home.mjs';

const ext = 'target="_blank" rel="noopener"';
const arrow = (color) => `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 2.5v17l4.8-4.6h7.7z" fill="${color}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

// Первый экран: огромный заголовок на «холсте Figma». Курсоры и выделение рисует homenew.js,
// при скролле строки разъезжаются и из видоискателя проявляется фото
function hero({ t, base, links }) {
  const words = t.leadAccent.split(' ');
  const half = Math.ceil(words.length / 2);
  const cursor = (key, color) => `<div class="hn-cur hn-cur--${key}" data-cur="${key}" style="--c:${color}">${arrow(color)}<span class="hn-cur__name">${esc(t.canvas[key])}</span></div>`;
  return `<section class="hn-hero" data-hn-hero>
  <div class="hn-hero__stage">
    <div class="hn-hero__text">
      <p class="hn-hero__kicker">${esc(t.name.join(' '))} — ${esc(t.lead)}</p>
      <h1 class="hn-title" data-hn-title>
        <span class="hn-title__line" data-line="left">${esc(words.slice(0, half).join(' '))}</span>
        <span class="hn-title__line" data-line="right"><span class="accent">${esc(words.slice(half).join(' '))}</span></span>
      </h1>
      <div class="hn-hero__actions">
        <a class="btn btn--filled" href="#contacts" data-scroll>${esc(t.contacts)}</a>
        <a class="btn btn--outline" href="${links.cv[t.lang]}" ${ext} data-hn-cv>${esc(t.cv)}</a>
      </div>
    </div>
    <div class="viewfinder hn-vf" data-hn-vf data-viewfinder>
      <span class="viewfinder__axis viewfinder__axis--x" aria-hidden="true"></span>
      <span class="viewfinder__axis viewfinder__axis--y" aria-hidden="true"></span>
      <span class="viewfinder__ring" aria-hidden="true"></span>
      <span class="viewfinder__corner viewfinder__corner--tl" aria-hidden="true"></span>
      <span class="viewfinder__corner viewfinder__corner--tr" aria-hidden="true"></span>
      <span class="viewfinder__corner viewfinder__corner--br" aria-hidden="true"></span>
      <span class="viewfinder__corner viewfinder__corner--bl" aria-hidden="true"></span>
      <img class="viewfinder__photo" src="${base}assets/img/me.webp" width="600" height="600" alt="${esc(t.photoAlt)}">
    </div>
    <div class="hn-canvas" aria-hidden="true" data-hn-canvas>
      <div class="hn-sel" data-hn-sel>
        <span class="hn-sel__frame">${esc(t.canvas.frame)}</span>
        <i class="hn-sel__h hn-sel__h--tl"></i><i class="hn-sel__h hn-sel__h--tr"></i><i class="hn-sel__h hn-sel__h--br"></i><i class="hn-sel__h hn-sel__h--bl"></i>
        <span class="hn-sel__size" data-hn-size></span>
      </div>
      <div class="hn-comment" data-hn-comment><span class="hn-comment__ava">${esc(t.canvas.client[0])}</span>${esc(t.canvas.comment)}</div>
      ${cursor('me', '#7d60f3')}
      ${cursor('client', '#f45085')}
      ${cursor('dev', '#1f90ef')}
    </div>
  </div>
</section>`;
}

// Кейсы стопкой: карточки прилипают и наезжают друг на друга
function cases({ t, base, cases: list, caseHref }) {
  const visible = list.filter((c) => !c.hidden);
  const items = visible.map((c, i) => `<div class="hn-stack__item" style="--i:${i}" data-hn-stack>
      ${caseCard({ c, t, base, href: caseHref(c.slug) }).replace(' data-reveal', '')}
    </div>`).join('\n    ');
  return `<section class="section" id="cases" aria-labelledby="cases-title">
  <div class="section__head" data-reveal>
    <h2 class="section__title" data-type id="cases-title">${esc(t.casesTitle)}</h2>
    <p class="visual-link">
      <span>${esc(t.visualQuestion)}</span>
      <a href="${caseHref('ui')}"><span class="accent-text">${esc(t.visualLink)}</span><img src="${base}assets/img/arrow-gradient.svg" width="28" height="28" alt=""></a>
    </p>
  </div>
  <div class="hn-stack">
    ${items}
  </div>
</section>`;
}

// Опыт работы таймлайном: точки загораются, когда до них доходит линия
function experience({ t }) {
  const rows = t.jobs.map((j) => `<li class="job" data-reveal data-hn-job>
      <span class="hn-dot" aria-hidden="true"></span>
      <span class="job__num">${esc(j.n)}</span>
      <div class="job__info">
        ${j.url ? `<a class="job__company" href="${j.url}" ${ext}>${esc(j.company)} ↗</a>` : `<span class="job__company">${esc(j.company)}</span>`}
        <span class="job__role">${esc(j.role)}</span>
      </div>
      <span class="job__period" data-count>${esc(j.period)}</span>
    </li>`).join('\n    ');
  return `<section class="section" id="experience" aria-labelledby="exp-title">
  <h2 class="section__title" data-type id="exp-title" data-reveal>${esc(t.experienceTitle)}</h2>
  <ol class="jobs panel hn-jobs" data-timeline>
    ${rows}
  </ol>
</section>`;
}

export function homeNewPage({ t, base, links, cases: list, caseHref }) {
  return `${nav({ t })}
${hero({ t, base, links })}
<main class="page page--home hn-main">
${about({ t, base })}
${cases({ t, base, cases: list, caseHref })}
${experience({ t })}
</main>
<div class="page page--footer">
  ${footer({ t, links })}
</div>
${toTop({ t })}
<div class="cursor-case" aria-hidden="true"><span>${esc(t.caseCursor)}</span><svg width="42" height="42" viewBox="0 0 42 42"><path d="M36.13 21.7 24.32 33.51a.98.98 0 0 1-1.39-1.39l10.13-10.13H6.56a.98.98 0 1 1 0-1.97h26.5L22.93 9.88a.98.98 0 0 1 1.39-1.39L36.13 20.3a.98.98 0 0 1 0 1.4Z" fill="#141414"/></svg></div>`;
}
