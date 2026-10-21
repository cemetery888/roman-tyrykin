import { esc, rich } from './layout.mjs';

const ext = 'target="_blank" rel="noopener"';

// Навигация по разделам: десктоп и планшет, на мобильном скрыта
function nav({ t }) {
  const items = [['about', t.nav.about], ['cases', t.nav.cases], ['experience', t.nav.experience], ['contacts', t.nav.contacts]]
    .map(([id, label]) => `<li><a class="nav__link" href="#${id}" data-scroll>${esc(label)}</a></li>`).join('');
  return `<nav class="nav" aria-label="${esc(t.nav.label)}"><ul class="nav__list">${items}</ul></nav>`;
}

function hero({ t, base, links }) {
  return `<section class="hero">
  <div class="hero__text" data-reveal>
    <h1 class="hero__name">${t.name.map(esc).join('<br>')}</h1>
    <p class="hero__lead">${esc(t.lead)} <strong class="accent">${esc(t.leadAccent)}</strong></p>
    <div class="hero__actions">
      <a class="btn btn--filled" href="#contacts" data-scroll>${esc(t.contacts)}</a>
      <a class="btn btn--outline" href="${links.cv[t.lang]}" ${ext}>${esc(t.cv)}</a>
    </div>
  </div>
  <div class="viewfinder" data-reveal>
    <span class="viewfinder__axis viewfinder__axis--x" aria-hidden="true"></span>
    <span class="viewfinder__axis viewfinder__axis--y" aria-hidden="true"></span>
    <span class="viewfinder__ring" aria-hidden="true"></span>
    <span class="viewfinder__corner viewfinder__corner--tl" aria-hidden="true"></span>
    <span class="viewfinder__corner viewfinder__corner--tr" aria-hidden="true"></span>
    <span class="viewfinder__corner viewfinder__corner--br" aria-hidden="true"></span>
    <span class="viewfinder__corner viewfinder__corner--bl" aria-hidden="true"></span>
    <img class="viewfinder__photo" src="${base}assets/img/me.webp" width="600" height="600" alt="${esc(t.photoAlt)}">
  </div>
</section>`;
}

function about({ t, base }) {
  const items = t.about.map((text) => `<li class="about__item" data-reveal>
      <img src="${base}assets/img/asterisk.svg" width="28" height="28" alt="">
      <p>${rich(text)}</p>
    </li>`).join('\n    ');
  return `<section class="section" id="about" aria-labelledby="about-title">
  <h2 class="section__title" id="about-title" data-reveal>${esc(t.aboutTitle)}</h2>
  <ul class="about panel">
    ${items}
  </ul>
</section>`;
}

function caseCard({ c, t, base, href }) {
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

function casesSection({ t, base, cases, caseHref }) {
  const uiHref = caseHref('ui');
  return `<section class="section" id="cases" aria-labelledby="cases-title">
  <div class="section__head" data-reveal>
    <h2 class="section__title" id="cases-title">${esc(t.casesTitle)}</h2>
    <p class="visual-link">
      <span>${esc(t.visualQuestion)}</span>
      <a href="${uiHref}"><span class="accent-text">${esc(t.visualLink)}</span><img src="${base}assets/img/arrow-gradient.svg" width="28" height="28" alt=""></a>
    </p>
  </div>
  <div class="cases">
    ${cases.map((c) => caseCard({ c, t, base, href: caseHref(c.slug) })).join('\n    ')}
  </div>
</section>`;
}

function experience({ t }) {
  const rows = t.jobs.map((j) => `<li class="job" data-reveal>
      <span class="job__num">${esc(j.n)}</span>
      <div class="job__info">
        ${j.url ? `<a class="job__company" href="${j.url}" ${ext}>${esc(j.company)} ↗</a>` : `<span class="job__company">${esc(j.company)}</span>`}
        <span class="job__role">${esc(j.role)}</span>
      </div>
      <span class="job__period">${esc(j.period)}</span>
    </li>`).join('\n    ');
  return `<section class="section" id="experience" aria-labelledby="exp-title">
  <h2 class="section__title" id="exp-title" data-reveal>${esc(t.experienceTitle)}</h2>
  <ol class="jobs panel">
    ${rows}
  </ol>
</section>`;
}

export function footer({ t, links }) {
  const items = [
    ['Telegram', links.telegram],
    ['Email', links.email],
    ['LinkedIn', links.linkedin],
    ['CV', links.cv[t.lang]],
  ].map(([label, href]) => `<li><a href="${href}" ${href.startsWith('mailto:') ? '' : ext}><span>${label}</span><span class="contacts__arrow" aria-hidden="true">↗</span></a></li>`).join('\n      ');
  return `<footer class="contacts" id="contacts" data-reveal>
    <h2 class="contacts__title">${t.footerTitle.map(esc).join(' <br class="contacts__br">')}</h2>
    <ul class="contacts__links">
      ${items}
    </ul>
  </footer>`;
}

export function homePage({ t, base, links, cases, caseHref }) {
  return `${nav({ t })}
<main class="page page--home">
${hero({ t, base, links })}
${about({ t, base })}
${casesSection({ t, base, cases, caseHref })}
${experience({ t })}
</main>
<div class="page page--footer">
  ${footer({ t, links })}
</div>
<div class="cursor-case" aria-hidden="true"><span>${esc(t.caseCursor)}</span><svg width="42" height="42" viewBox="0 0 42 42"><path d="M36.13 21.7 24.32 33.51a.98.98 0 0 1-1.39-1.39l10.13-10.13H6.56a.98.98 0 1 1 0-1.97h26.5L22.93 9.88a.98.98 0 0 1 1.39-1.39L36.13 20.3a.98.98 0 0 1 0 1.4Z" fill="#141414"/></svg></div>`;
}
