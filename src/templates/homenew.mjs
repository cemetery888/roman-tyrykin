import { esc } from './layout.mjs';
import { nav, about, caseCard, footer, toTop } from './home.mjs';

const ext = 'target="_blank" rel="noopener"';
// Первый экран: крупный заголовок, рядом фото как выделенный слой на холсте Figma
function hero({ t, base, links }) {
  const words = t.leadAccent.split(' ');
  const half = Math.ceil(words.length / 2);
  return `<section class="hn-hero">
  <div class="hn-hero__stage">
    <div class="hn-hero__text">
      <p class="hn-hero__kicker">${esc(t.name.join(' '))} — ${esc(t.lead)}</p>
      <h1 class="hn-title">
        <span class="hn-title__line">${esc(words.slice(0, half).join(' '))}</span>
        <span class="hn-title__line"><span class="accent">${esc(words.slice(half).join(' '))}</span></span>
      </h1>
      <div class="hn-hero__actions">
        <a class="btn btn--filled" href="#contacts" data-scroll>${esc(t.contacts)}</a>
        <a class="btn btn--outline" href="${links.cv[t.lang]}" ${ext}>${esc(t.cv)}</a>
      </div>
    </div>
    <figure class="hn-layer" data-hn-layer>
      <img class="hn-layer__photo" src="${base}assets/img/me.webp" width="600" height="600" alt="${esc(t.photoAlt)}">
      <span class="hn-layer__sel" aria-hidden="true">
        <span class="hn-layer__name">${esc(t.canvas.frame)}</span>
        <i class="hn-layer__h hn-layer__h--tl"></i><i class="hn-layer__h hn-layer__h--tr"></i><i class="hn-layer__h hn-layer__h--br"></i><i class="hn-layer__h hn-layer__h--bl"></i>
        <span class="hn-layer__size" data-hn-size></span>
      </span>
    </figure>
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
