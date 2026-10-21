// Тексты главной страницы на двух языках. **текст** — жирный градиент (акцент),
// в описаниях кейсов — просто жирный.

export const links = {
  telegram: 'https://t.me/bslt777',
  email: 'mailto:roman-xt@ya.ru',
  linkedin: 'https://www.linkedin.com/in/romantyrykin/',
  // CV для каждого языка свой.
  cv: {
    ru: 'https://drive.google.com/file/d/1dLAbhlt6F31C2GcOhBuqI8fjYoDFft10',
    en: 'https://drive.google.com/file/d/1OiT3fXoFLfmY--vQ4UXAJ67WfevUVoi_',
  },
};

// Порядок карточек как в макете.
export const cases = [
  { slug: 'triafly', theme: 'triafly', images: ['case-triafly.webp'], tags: ['SaaS', 'BI', 'B2B'] },
  { slug: 'ihaveticket', theme: 'iht', images: ['case-iht.webp'], tags: ['Entertainment', 'Streaming', 'B2C'] },
  { slug: 'eltex', theme: 'eltex', images: ['case-eltex.webp'], tags: ['Telecom', 'Web', 'B2B'] },
  { slug: 'bitazza', theme: 'bitazza', phones: true, images: ['case-bitazza-1.webp', 'case-bitazza-2.webp', 'case-bitazza-3.webp'], tags: ['Fintech', 'Crypto', 'Mobile'] },
  { slug: 'pt-exchange', theme: 'pte', phones: true, images: ['case-pte-1.webp', 'case-pte-2.webp', 'case-pte-3.webp'], tags: ['Fintech', 'Mobile', 'B2C'] },
  { slug: 'top1bet', theme: 'top1bet', images: ['case-top1bet.webp'], tags: ['Betting', 'Admin Panel', 'B2B'] },
  { slug: 'bitrix', theme: 'bitrix', images: ['case-bitrix.webp'], tags: ['E-Commerce', 'B2C'] },
];

export const ru = {
  lang: 'ru',
  title: 'Роман Тырыкин — Продуктовый дизайнер',
  description: 'Продуктовый дизайнер с опытом более 10 лет. Проектирую сложные B2B- и B2C-продукты.',
  og: 'og-home-ru.jpg',
  name: ['Роман', 'Тырыкин'],
  lead: 'Продуктовый дизайнер с опытом более 10 лет.',
  leadAccent: 'Делаю дизайн, который работает.',
  contacts: 'Контакты',
  cv: 'CV',
  aboutTitle: 'Обо мне',
  about: [
    'Проектирую сложные **B2B**- и **B2C**-продукты: админки, внутренние системы и интерфейсы для **высоконагруженных систем**.',
    'Нахожу **баланс** между потребностями пользователей, **бизнес-целями** и техническими ограничениями.',
    'Провожу UX-исследования, развиваю дизайн-системы, использую продуктовую аналитику и сопровождаю дизайн **до реализации**.',
    'Активно использую **ИИ** для генерации и проверки UX-гипотез, поиска edge-кейсов и **ускорения** дизайн-процессов.',
  ],
  casesTitle: 'Кейсы',
  visualQuestion: 'Нужно посмотреть визуал?',
  visualLink: 'Вам сюда',
  caseCursor: 'Смотреть кейс',
  cases: {
    triafly: { title: 'ТРИАФЛАЙ', text: 'Перепроектирование low-code платформы для автоматизации аналитики.' },
    ihaveticket: { title: 'I HAVE TICKET', text: 'Дизайн сайта для лайв-стриминга концертов. **CR покупки билетов 8%, RR 30%.**' },
    eltex: { title: 'ЭЛТЕКС', text: 'Проектирование интерфейсов настройки, мониторинга и управления сервисным маршрутизатором.' },
    bitazza: { title: 'BITAZZA', text: 'Перепроектирование основных флоу мобильного приложения и редизайн ключевых экранов.' },
    'pt-exchange': { title: 'PENTOR EXCHANGE', text: 'Редизайн мобильного приложения популярной сети пунктов обмена валют в Бангкоке.' },
    top1bet: { title: 'TOP1BET', text: 'Админка для управления агентами и игроками для сайта с азартными играми и ставками на спорт. **Много картинок.**' },
    bitrix: { title: '1С-БИТРИКС', text: 'Редизайн сайта лидирующией CMS в России и СНГ. **CR покупки продукта +35%, отказы -28%.**' },
  },
  experienceTitle: 'Опыт работы',
  jobs: [
    { n: '04', company: 'Элтекс', url: 'https://eltex.ru/', role: 'Старший продуктовый дизайнер', period: 'Мар 2026 — Июн 2026, 3 мес' },
    { n: '03', company: 'Триафлай', url: 'https://triafly.ru/', role: 'Старший продуктовый дизайнер', period: 'Сен 2024 — Ноя 2025, 1 г 1 мес' },
    { n: '02', company: 'Snocko Technologies Co.Ltd', url: 'https://www.snocko.com/', role: 'Продуктовый дизайнер', period: 'Янв 2019 — Апр 2024, 5 л 4 мес' },
    { n: '01', company: 'Студии и агентства', role: 'UX Дизайнер', period: 'Ноя 2013 — Ноя 2018, 5 л' },
  ],
  footerTitle: ['Давайте', 'работать'],
  photoAlt: 'Роман Тырыкин',
  langLabel: 'Язык сайта',
  back: 'На главную',
  toTop: 'Наверх',
  uiDescription: 'Примеры визуального дизайна интерфейсов.',
};

export const en = {
  lang: 'en',
  title: 'Roman Tyrykin — Product Designer',
  description: 'A product designer with more than 10 years of experience. I design complex B2B and B2C products.',
  og: 'og-home-en.jpg',
  name: ['Roman', 'Tyrykin'],
  lead: 'A product designer with more than 10 years of experience.',
  leadAccent: 'I design things that work.',
  contacts: 'Contacts',
  cv: 'CV',
  aboutTitle: 'About me',
  about: [
    'I design complex **B2B** and **B2C** products, including admin panels, internal tools, and **data-intensive enterprise systems**.',
    '**Balance** user needs, business goals, and technical constraints to create **practical product solutions**.',
    'Experienced in UX research, design systems, product analytics, and supporting implementation **through to release**.',
    'Leverage **AI** to generate and validate UX hypotheses, explore edge cases, and **accelerate** design workflows.',
  ],
  casesTitle: 'Case studies',
  visualQuestion: 'Need to look at the UI?',
  visualLink: 'Come here',
  caseCursor: 'View case study',
  cases: {
    triafly: { title: 'TRIAFLY', text: 'Redesign of a low-code platform for automating analytical processes.' },
    ihaveticket: { title: 'I HAVE TICKET', text: 'Website design for live concert streaming. **Ticket purchase CR: 8%, RR: 30%.**' },
    eltex: { title: 'ELTEX', text: 'Designing interfaces for configuring, monitoring, and managing a service router.' },
    bitazza: { title: 'BITAZZA', text: 'Redesign of the core flows of a mobile application and redesign of key screens.' },
    'pt-exchange': { title: 'PENTOR EXCHANGE', text: 'Redesign of a mobile app for a popular currency exchange chain in Bangkok.' },
    top1bet: { title: 'TOP1BET', text: 'Admin panel for managing agents and players for a gambling and sports betting website. **Lots of visuals.**' },
    bitrix: { title: '1C-BITRIX', text: 'Redesign of the leading CMS website in Russia and the CIS. **Product purchase CR: +35%, bounce rate: −28%.**' },
  },
  experienceTitle: 'Experience',
  jobs: [
    { n: '04', company: 'Eltex', url: 'https://eltex.ru/', role: 'Sr. Product Designer', period: 'Mar 2026 — Jun 2026, 3 mos' },
    { n: '03', company: 'Triafly', url: 'https://triafly.ru/', role: 'Sr. Product Designer', period: 'Sep 2024 — Nov 2025, 1 yr 1 mo' },
    { n: '02', company: 'Snocko Technologies Co.Ltd', url: 'https://www.snocko.com/', role: 'Product Designer', period: 'Jan 2019 — Apr 2024, 5 yrs 4 mos' },
    { n: '01', company: 'Studios and agencies', role: 'UX Designer', period: 'Nov 2013 — Nov 2018, 5 yrs' },
  ],
  footerTitle: ['Let’s', 'work'],
  photoAlt: 'Roman Tyrykin',
  langLabel: 'Site language',
  back: 'To Homepage',
  toTop: 'Back to top',
  uiDescription: 'Examples of visual interface design.',
};
