import { esc } from './layout.mjs';
import { footer } from './home.mjs';

const arrowLeft = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16.25 10H3.75M8.75 5 3.75 10l5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const arrowUp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Страница кейса: шапка с кнопкой «На главную», вёрстка из макета (src/cases), футер, кнопка «Наверх»
export function casePage({ t, base, links, homeHref, content }) {
  return `<a class="case-back" href="${homeHref}">${arrowLeft}<span>${esc(t.back)}</span></a>
<main class="page page--case" id="top">
${content.replaceAll('{{base}}', base)}
</main>
<div class="page page--footer">
  ${footer({ t, links })}
</div>
<div class="page to-top-wrap"><button class="to-top" type="button" aria-label="${esc(t.toTop)}" data-to-top>${arrowUp}</button></div>`;
}
