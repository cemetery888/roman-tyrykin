// Конвертер выгрузки Figma (get_design_context: React + Tailwind) в HTML-фрагменты кейсов.
// node convert.mjs → ../../src/cases/<slug>-<lang>.html, ../../src/assets/css/cases.css, assets.json
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { transform } from 'esbuild';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '../..');
const outDir = join(repo, 'src/cases');

// Кадры макета: [Desktop 1440, Tablet 800, Mobile 375]
export const frames = {
  bitrix:        { ru: ['1:186', '1:346', '1:506'],    en: ['1:668', '1:831', '1:994'] },
  dobovo:        { ru: ['1:1159', '1:1336', '1:1513'], en: ['1:1692', '1:1893', '1:2094'] },
  'pt-exchange': { ru: ['1:2297', '1:2403', '1:2509'], en: ['1:2617', '1:2723', '1:2829'] },
  top1bet:       { ru: ['1:3194', '1:3269', '1:3344'], en: ['1:3421', '1:3496', '1:3571'] },
  ihaveticket:   { ru: ['1:3648', '1:3820', '1:3992'], en: ['1:4166', '1:4338', '1:4510'] },
  bitazza:       { ru: ['1:4684', '1:4779', '1:4874'], en: ['1:4971', '1:5066', '1:5161'] },
  triafly:       { ru: ['1:5258', '1:5494', '1:5720'], en: ['1:5948', '1:6183', '1:6409'] },
  eltex:         { ru: ['1:6637', '1:6818', '1:6999'], en: ['1:7182', '1:7363', '1:7544'] },
  ui:            { ru: ['1:7727', '1:7747', '1:7767'], en: ['1:7789', '1:7809', '1:7829'] },
};
const BP = ['d', 't', 'm'];
const CONTENT_W = { d: 1320, t: 720, m: 343 };
const SKIP = new Set(['Header language change', 'Header Case']);
const FOOTER = Symbol('footer');
const LINES = new Set(['c2395', '33e6b', '4cb4b', 'cd78c', '92621', '43c89', '7aace', '081d7', '576b9', '5c2ac']);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');

// Все ассеты: id → { ext, nodes: [{ id, w, h }] } — по node id потом снимаем картинку из Figma
const assets = {};

function h(type, props, ...children) {
  props = props || {};
  if (typeof type === 'function') {
    if (type.name === 'Section') return FOOTER;
    return type({ ...props, children });
  }
  return { tag: type, props, children: children.flat(Infinity).filter((c) => c != null && c !== false && c !== '') };
}

async function load(nodeId) {
  const src = await readFile(join(here, 'figma', nodeId.replace(':', '-') + '.tsx'), 'utf8');
  const { code } = await transform(src, { loader: 'tsx', jsx: 'transform', jsxFactory: 'h', format: 'cjs' });
  const module = { exports: {} };
  new Function('h', 'module', 'exports', code)(h, module, module.exports);
  return module.exports.default();
}

const px = (cls, prefix) => {
  const m = cls.match(new RegExp(`(?:^|\\s)${prefix}-\\[(\\d+(?:\\.\\d+)?)px\\]`));
  return m ? parseFloat(m[1]) : null;
};

function fixClasses(node, bp, parent) {
  let cls = ` ${node.props.className || ''} `;
  cls = cls.replace(/font-\['(Onest|Inter):[^']*'\]/g, "font-['Onest']")
    .replace(/font-\['IBM_Plex_Mono:[^']*'\]/g, "font-['IBM_Plex_Mono']")
    .replace(/font-\['Space_Mono:[^']*'\]/g, "font-['Space_Mono']");
  // «Растянуть по ширине» в Figma выгружается как w-[min-content] min-w-full — это просто w-full
  if (/ w-\[min-content\] /.test(cls) && / min-w-full /.test(cls)) cls = cls.replace(/ w-\[min-content\] /, ' w-full ').replace(/ min-w-full /, ' ');
  const w = px(cls, 'w'); const hgt = px(cls, 'h');
  if (w && w >= CONTENT_W[bp] - 1) cls = cls.replace(/ w-\[[\d.]+px\] /, ' w-full ');
  if (hgt && hgt > 40 && !/ absolute /.test(cls)) {
    cls = cls.replace(/ h-\[([\d.]+)px\] /, ' min-h-[$1px] ');
  }
  if (w && !/ w-full /.test(cls)) {
    // Фиксированная ширина из макета: не шире родителя
    const mw = cls.match(/ max-w-\[([\d.]+)px\] /);
    if (mw && parseFloat(mw[1]) >= w) cls = cls.replace(mw[0], ' ');
    if (!/ max-w-\[/.test(cls)) cls += ' max-w-full ';
  }
  // max-w из макета тоже не шире родителя
  cls = cls.replace(/ max-w-\[([\d.]+px)\] /g, ' max-w-[min($1,100%)] ');
  if (/ shrink-0 /.test(cls) && w) cls = cls.replace(/ shrink-0 /, ' shrink min-w-0 ');
  if (/ whitespace-nowrap /.test(cls) && text(node).length > 16) cls = cls.replace(/ whitespace-nowrap /, ' ');
  const rowParent = parent?.props && / flex /.test(` ${parent.props.className} `) && !/ flex-col /.test(` ${parent.props.className} `);
  if (rowParent && / shrink-0 /.test(cls) && !/ (w|size)-\[/.test(cls)) cls = cls.replace(/ shrink-0 /, ' shrink min-w-0 ');
  // Длинные строки не должны вылезать за экран
  if ((node.tag === 'p' || node.tag === 'span') && / shrink-0 /.test(cls) && !/ whitespace-nowrap /.test(cls)) cls = cls.replace(/ shrink-0 /, ' shrink min-w-0 ');
  return cls.trim().replace(/\s+/g, ' ');
}

const text = (node) => (typeof node === 'string' ? node : node.children ? node.children.map(text).join('') : '');

const isRaster = (n) => n.tag === 'img' && /\.png$/.test(n.props.src);
const walk = (n, f) => { if (n && n.tag) { f(n); n.children.forEach((c) => walk(c, f)); } };
// Узел-картинка: внутри только растровые картинки и обёртки без собственных id
function imageLeaf(node) {
  let raster = 0, other = false;
  node.children.forEach((c) => walk(c, (d) => {
    if (isRaster(d)) raster++;
    else if (d.tag === 'img' || d.props['data-node-id']) other = true;
  }));
  if (node.children.some((c) => typeof c === 'string' && c.trim()) || node.children.some((c) => c.children && text(c).trim())) other = true;
  return raster > 0 && !other;
}
const assetId = (src) => String(src).match(/\/(\w+)\.(png|svg)$/);

function addAsset(key, ext, nid, cls) {
  const a = (assets[key] ||= { ext, nodes: [] });
  if (nid) a.nodes.push({ id: nid, w: px(` ${cls} `, 'w'), h: px(` ${cls} `, 'h') });
}

function render(node, bp, ctx) {
  if (node === FOOTER) return '';
  if (typeof node === 'string' || typeof node === 'number') return esc(node);
  const p = node.props;
  if (SKIP.has(p['data-name'])) return '';
  if (/^Section \/ Футер/.test(p['data-name'] || '')) return '';
  const nid = p['data-node-id'];
  if (node.tag === 'img') {
    // Векторы: линии-разделители и иконки — снимаем узел-предок из Figma как SVG
    const [, id] = assetId(p.src);
    // Линии-разделители (все #474747) рисуем CSS-ом
    if (LINES.has(id)) return `<span class="${attr((p.className || '').trim())} bg-[#474747]"></span>`;
    const holder = ctx.anc;
    const key = 'v' + id;
    addAsset(key, 'svg', holder.props['data-node-id'], holder.props.className);
    return `<img src="{{base}}assets/cases/${key}.svg" alt="" class="${attr((p.className || '').trim())}">`;
  }
  const out = [];
  let cls = fixClasses(node, bp, ctx.parent);
  let inner;
  if (nid && imageLeaf(node)) {
    const imgs = []; node.children.forEach((c) => walk(c, (d) => isRaster(d) && imgs.push(d)));
    const simple = imgs.length === 1 && /size-full/.test(imgs[0].props.className) && /object-cover/.test(imgs[0].props.className);
    const key = simple ? assetId(imgs[0].props.src)[1] : 'n' + nid.replace(/[:;]/g, '-');
    addAsset(key, 'png', nid, p.className);
    const w = px(` ${p.className} `, 'w'), hh = px(` ${p.className} `, 'h');
    if (w && hh) cls = cls.replace(/(^| )(h|min-h)-\[[\d.]+px\]( |$)/, `$1aspect-[${w}/${hh}]$3`).replace(/ ?max-h-\[[^\]]+\]/, '');
    if (!/overflow/.test(cls)) cls += ' overflow-hidden';
    const r = (p.className || '').match(/rounded-\[[^\]]+\]/);
    inner = `<img src="{{base}}assets/cases/${key}.webp" alt="" class="absolute inset-0 size-full object-cover max-w-none${r ? ' ' + r[0] : ''}" loading="lazy" decoding="async">`;
  } else {
    inner = node.children.map((c) => render(c, bp, { anc: nid ? node : ctx.anc, parent: node })).join('');
  }
  if (cls) out.push(`class="${attr(cls)}"`);
  if (p.style) out.push(`style="${attr(Object.entries(p.style).map(([k, v]) => `${k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())}:${v}`).join(';'))}"`);
  if (p.href) out.push(`href="${attr(p.href)}"`);
  if (p.target) out.push('target="_blank" rel="noopener"');
  return `<${node.tag}${out.length ? ' ' + out.join(' ') : ''}>${inner}</${node.tag}>`;
}

const used = new Set();
const meta = {};
await mkdir(outDir, { recursive: true });
for (const [slug, langs] of Object.entries(frames)) {
  for (const [lang, ids] of Object.entries(langs)) {
    const parts = [];
    for (let i = 0; i < 3; i++) {
      const root = await load(ids[i]);
      if (i === 0) {
        const ps = []; walk(root, (n) => n.tag === 'p' && text(n).trim() && ps.push(text(n).trim()));
        const start = ps.findIndex((t) => !['ru', 'en'].includes(t));
        (meta[slug] ||= {})[lang] = { title: ps[start], description: ps[start + 1] };
      }
      const body = root.children.map((c) => render(c, BP[i], { anc: root, parent: root })).join('');
      parts.push(`<div class="fig fig--${BP[i]}">${body}</div>`);
    }
    const html = parts.join('\n');
    html.replace(/class="([^"]*)"/g, (_, c) => c.split(' ').forEach((x) => used.add(x)));
    await writeFile(join(outDir, `${slug}-${lang}.html`), html + '\n');
  }
}

// Tailwind: собираем только используемые классы
const contentFile = join(here, '.classes.html');
await writeFile(contentFile, `<div class="${[...used].join(' ')}"></div>`);
await writeFile(join(here, '.input.css'), '@tailwind utilities;\n');
execFileSync(join(here, 'node_modules/.bin/tailwindcss'), ['-c', join(here, 'tailwind.config.cjs'), '-i', join(here, '.input.css'), '-o', join(here, '.tw.css'), '--minify'], { stdio: 'inherit' });
const tw = await readFile(join(here, '.tw.css'), 'utf8');
const head = await readFile(join(here, 'cases.head.css'), 'utf8');
await writeFile(join(repo, 'src/assets/css/cases.css'), head + '\n' + tw + '\n');
await writeFile(join(outDir, 'meta.json'), JSON.stringify(meta, null, 2) + '\n');
await writeFile(join(here, 'assets.json'), JSON.stringify(assets, null, 1));
console.log(`cases: ${Object.keys(frames).length * 2}, assets: ${Object.keys(assets).length}`);
