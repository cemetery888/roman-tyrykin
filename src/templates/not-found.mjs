import { ver } from './layout.mjs';

// 404 как холст Figma: точечная сетка, направляющие за курсором с координатами,
// огромные «4 0 4» — слои, которые можно схватить и потаскать (отпускаешь — пружинят на место).
// Ноль — фото в видоискателе. Одна страница на оба языка (GitHub Pages отдаёт один 404.html).
const layer = (name, inner, cls = '') => `<div class="nf-layer ${cls}" data-nf-layer data-name="${name}">
      ${inner}
      <span class="nf-sel" aria-hidden="true">
        <span class="nf-sel__name">${name}</span>
        <i class="nf-sel__h nf-sel__h--tl"></i><i class="nf-sel__h nf-sel__h--tr"></i><i class="nf-sel__h nf-sel__h--br"></i><i class="nf-sel__h nf-sel__h--bl"></i>
        <span class="nf-sel__size" data-nf-size></span>
      </span>
    </div>`;

export function notFoundPage({ base }) {
  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 — Роман Тырыкин</title>
<meta name="robots" content="noindex">
<meta name="theme-color" content="#141414">
<link rel="icon" href="${base}assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Onest:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="${base}${ver('assets/css/style.css')}">
<link rel="stylesheet" href="${base}${ver('assets/css/not-found.css')}">
<script>document.documentElement.classList.add('js')</script>
</head>
<body class="nf-body">
<div class="nf-grid" aria-hidden="true"></div>
<div class="nf-guides" aria-hidden="true" data-nf-guides>
  <span class="nf-guide nf-guide--x"></span>
  <span class="nf-guide nf-guide--y"></span>
  <span class="nf-coords" data-nf-coords></span>
</div>
<main class="nf">
  <p class="nf-kicker"><span class="nf-dot"></span>Ошибка 404 · <span lang="en">Page not found</span></p>
  <div class="nf-digits" role="img" aria-label="404">
    ${layer('4', '<span class="nf-digit">4</span>')}
    ${layer('Роман.webp', `<span class="nf-zero">
        <span class="nf-zero__ring"></span>
        <img class="nf-zero__photo" src="${base}assets/img/me.webp" width="600" height="600" alt="" draggable="false">
      </span>`, 'nf-layer--zero')}
    ${layer('4', '<span class="nf-digit nf-digit--accent">4</span>')}
  </div>
  <h1 class="nf-title">Этот экран потерялся <span class="nf-nowrap">где-то</span> между макетом и продом</h1>
  <p class="nf-text">Пока ищу его, можно потаскать цифры. <span lang="en">Meanwhile, drag the numbers around.</span></p>
  <div class="nf-actions">
    <a class="btn btn--filled" href="${base}">На главную</a>
    <a class="btn btn--outline" href="${base}en/" lang="en">Home</a>
  </div>
</main>
<script src="${base}${ver('assets/js/not-found.js')}" defer></script>
</body>
</html>
`;
}
