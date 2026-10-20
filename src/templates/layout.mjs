export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// **слово** → <strong class="…">слово</strong>
export const rich = (s, cls = 'accent') => esc(s).replace(/\*\*(.+?)\*\*/g, `<strong class="${cls}">$1</strong>`);

function langSwitch({ ru, en, label }) {
  const item = (code, href) => href
    ? `<a class="lang__item" href="${href}" hreflang="${code}" lang="${code}">${code}</a>`
    : `<span class="lang__item lang__item--active" aria-current="true">${code}</span>`;
  return `<nav class="lang" aria-label="${esc(label)}">${item('ru', ru)}<span class="lang__divider" aria-hidden="true"></span>${item('en', en)}</nav>`;
}

export function layout({ lang, base, title, description, og, url, altUrl, altLang, langSwitch: ls, body, bodyClass = '' }) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="${lang}" href="${url}">
<link rel="alternate" hreflang="${altLang}" href="${altUrl}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="https://cemetery888.github.io/roman-tyrykin/assets/img/${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#141414">
<link rel="icon" href="${base}assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Onest:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap">
<link rel="stylesheet" href="${base}assets/css/style.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body class="${bodyClass}">
${langSwitch(ls)}
${body}
<script src="${base}assets/js/main.js" defer></script>
</body>
</html>
`;
}
