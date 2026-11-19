// Google Analytics 4. ID потока берётся в GA: Администратор → Потоки данных → Веб → «Идентификатор потока» (G-…).
// Пока ID пустой, код счётчика на страницы не попадает.
export const GA_ID = '';

export const analytics = () => GA_ID ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}')</script>
` : '';
