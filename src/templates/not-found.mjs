export function notFoundPage({ base }) {
  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Страница не найдена — Роман Тырыкин</title>
<meta name="robots" content="noindex">
<link rel="icon" href="${base}assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;700&display=swap">
<link rel="stylesheet" href="${base}assets/css/style.css">
</head>
<body>
<main class="page not-found">
  <h1 class="section__title">Страница скоро появится</h1>
  <p>Этот раздел ещё в работе. <span lang="en">This page is coming soon.</span></p>
  <div class="hero__actions">
    <a class="btn btn--filled" href="${base}">На главную</a>
    <a class="btn btn--outline" href="${base}en/" lang="en">Home</a>
  </div>
</main>
</body>
</html>
`;
}
