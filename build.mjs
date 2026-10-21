// Сборка статического сайта в dist/. Без зависимостей: node build.mjs
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { layout } from './src/templates/layout.mjs';
import { homePage } from './src/templates/home.mjs';
import { notFoundPage } from './src/templates/not-found.mjs';
import { casePage } from './src/templates/case.mjs';
import { readFile } from 'node:fs/promises';
import * as home from './src/data/home.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
export const SITE_URL = 'https://roman-tyrykin.ru/';

// Маршруты: RU в корне, EN в /en/. path — без ведущего слэша, с завершающим.
const pages = [
  { path: '', lang: 'ru', alt: 'en/', render: (base) => homePage({ t: home.ru, base, links: home.links, cases: home.cases, caseHref: (slug) => `${base}${slug}/` }) , meta: home.ru },
  { path: 'en/', lang: 'en', alt: '', render: (base) => homePage({ t: home.en, base, links: home.links, cases: home.cases, caseHref: (slug) => `${base}en/${slug}/` }), meta: home.en },
];

// Кейсы: вёрстка сгенерирована из макета tools/cases/convert.mjs
const caseMeta = JSON.parse(await readFile(join(root, 'src/cases/meta.json'), 'utf8'));
const ogFor = (slug, lang) => (slug === 'ui' ? home[lang].og : `og-${slug}.jpg`);
for (const [slug, langs] of Object.entries(caseMeta)) {
  for (const lang of ['ru', 'en']) {
    const t = home[lang];
    const content = await readFile(join(root, `src/cases/${slug}-${lang}.html`), 'utf8');
    const name = langs[lang].title;
    pages.push({
      path: lang === 'ru' ? `${slug}/` : `en/${slug}/`,
      lang,
      alt: lang === 'ru' ? `en/${slug}/` : `${slug}/`,
      styles: ['assets/css/cases.css'],
      bodyClass: 'is-case',
      render: (base) => casePage({ t, base, links: home.links, homeHref: lang === 'ru' ? base : `${base}en/`, content }),
      meta: {
        ...t,
        title: `${name} — ${lang === 'ru' ? 'Роман Тырыкин' : 'Roman Tyrykin'}`,
        description: slug === 'ui' ? t.uiDescription : langs[lang].description,
        og: ogFor(slug, lang),
      },
    });
  }
}

const baseFor = (path) => '../'.repeat(path.split('/').filter(Boolean).length) || './';

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, 'src/assets'), join(dist, 'assets'), { recursive: true });
// Браузеры без поддержки SVG-иконок ищут /favicon.ico в корне.
await cp(join(root, 'src/assets/img/favicon.ico'), join(dist, 'favicon.ico'));

for (const page of pages) {
  const base = baseFor(page.path);
  const html = layout({
    lang: page.lang,
    base,
    title: page.meta.title,
    description: page.meta.description,
    og: page.meta.og,
    url: SITE_URL + page.path,
    altUrl: SITE_URL + page.alt,
    altLang: page.lang === 'ru' ? 'en' : 'ru',
    langSwitch: { ru: page.lang === 'ru' ? null : base + page.alt, en: page.lang === 'en' ? null : base + page.alt, label: page.meta.langLabel },
    body: page.render(base),
    styles: page.styles,
    bodyClass: page.bodyClass,
  });
  await mkdir(join(dist, page.path), { recursive: true });
  await writeFile(join(dist, page.path, 'index.html'), html);
}

// 404 для GitHub Pages: пути там абсолютные от корня проекта.
await writeFile(join(dist, '404.html'), notFoundPage({ base: '/' }));
await writeFile(join(dist, '.nojekyll'), '');
console.log(`Built ${pages.length} pages into dist/`);
