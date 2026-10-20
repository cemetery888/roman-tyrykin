const assetPathPrefix = "https://www.figma.com/api/mcp/asset/10a5e325-8992-4985-99a6-595e0ea68535";
const imgCover = `${assetPathPrefix}/6b84c.png`;
const imgImage194 = `${assetPathPrefix}/f2150.png`;
const imgImage195 = `${assetPathPrefix}/70765.png`;
const imgImage196 = `${assetPathPrefix}/3bc60.png`;
const imgImage197 = `${assetPathPrefix}/ad55f.png`;
const imgImage198 = `${assetPathPrefix}/3e04c.png`;
const imgImage199 = `${assetPathPrefix}/101bd.png`;
const imgImage200 = `${assetPathPrefix}/afa16.png`;
const imgImage201 = `${assetPathPrefix}/3c8eb.png`;
const imgImage202 = `${assetPathPrefix}/20622.png`;
const imgImage203 = `${assetPathPrefix}/790a0.png`;
const imgImage205 = `${assetPathPrefix}/81064.png`;
const imgImage207 = `${assetPathPrefix}/01187.png`;
const imgImage208 = `${assetPathPrefix}/f69d1.png`;
const imgImage209 = `${assetPathPrefix}/032c7.png`;
const imgImage210 = `${assetPathPrefix}/f9481.png`;
const imgImage211 = `${assetPathPrefix}/2e2ff.png`;
const imgImage212 = `${assetPathPrefix}/2d89b.png`;
const imgImage213 = `${assetPathPrefix}/ecbc2.png`;
const imgImage214 = `${assetPathPrefix}/421a9.png`;
const imgLine24 = `${assetPathPrefix}/6789e.svg`;
const imgLine19 = `${assetPathPrefix}/4cb4b.svg`;
const imgLine15 = `${assetPathPrefix}/cd78c.svg`;
const imgFrame = `${assetPathPrefix}/21b83.svg`;

type SectionProps = {
  className?: string;
  device?: "Tablet";
};

function Section({ className, device = "Tablet" }: SectionProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[659px] items-start overflow-clip relative rounded-[12px] w-[720px]"} data-node-id="1:8428" style={{ backgroundImage: "linear-gradient(129.3319925729536deg, rgb(91, 75, 224) 14.286%, rgb(169, 79, 214) 53.571%, rgb(226, 86, 108) 85.714%)" }}>
      <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip px-[40px] py-[48px] relative shrink-0 w-full" data-node-id="1:8429" data-name="Main">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:8430" data-name="CTA">
          <div className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[0] relative shrink-0 text-[96px] text-white tracking-[-3.84px] w-full" data-node-id="1:8431">
            <p className="leading-[0.95] mb-0">Давайте</p>
            <p className="leading-[0.95]">работать</p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch cursor-pointer flex flex-col items-start leading-[normal] overflow-clip relative shrink-0 text-left text-white w-full" data-node-id="1:8432" data-name="Links">
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid border-t content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="https://t.me/bslt777" data-node-id="1:8433" target="_blank" data-name="Link / Telegram">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8434">
              Telegram
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8435">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="mailto:roman-xt@ya.ru" data-node-id="1:8436" target="_blank" data-name="Link / Email">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8437">
              Email
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8438">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="https://www.linkedin.com/in/romantyrykin/" data-node-id="1:8439" target="_blank" data-name="Link / LinkedIn">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8440">
              LinkedIn
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8441">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="https://drive.google.com/file/d/1dLAbhlt6F31C2GcOhBuqI8fjYoDFft10" data-node-id="1:8442" target="_blank" data-name="Link / CV">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8443">
              CV
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8444">
              ↗
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Tablet() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[100px] px-[40px] relative size-full" data-node-id="1:346" data-name="Tablet">
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center overflow-clip px-[16px] py-[4px] right-[40px] rounded-[8px] top-[24px] w-[100px] z-[4]" data-node-id="1:347" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:347;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:347;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:347;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:347;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:347;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full z-[3]" data-node-id="1:348">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:349">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:350">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[36px] text-white w-[min-content]" data-node-id="1:351">
              1C-Битрикс
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:352">
              Редизайн сайта лидирующей CMS в России и СНГ.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:353">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:354">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:355">
                  E-Commerce
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:356">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:357">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[680/181.5399932861328] relative rounded-[12px] shrink-0 w-full" data-node-id="1:358" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCover} />
          </div>
          <div className="bg-[#262626] content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:360">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[18px] text-white w-full" data-node-id="1:364">
              <p className="font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 whitespace-nowrap" data-node-id="1:365">
                Команда
              </p>
              <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc min-w-full relative shrink-0 w-[min-content]" data-node-id="1:366">
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Я в роли UX-дизайнера/ресёрчера</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Глава отдела UX/UI в качестве арт-директора и ПМ</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Веб-аналитик</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Бизнес-аналитик</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Три UI-дизайнера</span>
                </li>
                <li className="ms-[27px]">
                  <span className="leading-[1.35]">
                    Специально приглашенный наставник по проекту
                    <br aria-hidden />
                    (ex-информационный архитектор в Яндексе)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:368">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:369">
            <a className="[word-break:break-word] block font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#303030] text-[0px] w-full" href="https://www.ihaveticket.com/" data-node-id="1:370" target="_blank">
              <p className="cursor-pointer text-[28px] text-white">
                <span className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Onest:Bold'] font-bold leading-[1.35] underline" role="link" tabIndex="0">
                  1С-Битрикс ↗
                </span>
                <span className="font-['Onest:Regular'] font-normal leading-[1.35]">{` — ведущая CMS в России и СНГ для создания сайтов и интернет-магазинов, известная своими ecommerce-функциями, инструментами SEO и интеграцией с бухгалтерским ПО 1C.`}</span>
              </p>
            </a>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[40px] items-start leading-[1.35] relative shrink-0 text-white w-full" data-node-id="1:371">
            <div className="border-[#1f90ef] border-l-3 border-solid content-stretch flex flex-col gap-[8px] items-start pl-[20px] relative shrink-0 w-full" data-node-id="1:372">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:373">
                275,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:374">
                веб-проектов были разработаны на 1С-Битрикс
              </p>
            </div>
            <div className="border-[#1f90ef] border-l-3 border-solid content-stretch flex flex-col gap-[8px] items-start pl-[20px] relative shrink-0 w-full" data-node-id="1:375">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:376">
                17,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:377">
                компаний в партнёрской сети
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] border-3 border-[#1f90ef] border-solid content-stretch flex flex-col gap-[16px] items-start p-[28px] relative rounded-[12px] shrink-0 text-white w-full" data-node-id="1:378">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:379">
            Результаты и метрики
          </p>
          <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[18px] w-full" data-node-id="1:380">
            <li className="leading-[1.35] mb-0 ms-[27px]">
              {`Ключевые сценарии для клиентов были значительно упрощены, что привело к увеличению конверсии покупок продукта на `}
              <span className="[word-break:break-word] font-['Onest:Bold'] font-bold">35%</span>.
            </li>
            <li className="leading-[1.35] mb-0 ms-[27px]">
              {`Новая структура привела к снижению уровня отказов на `}
              <span className="[word-break:break-word] font-['Onest:Bold'] font-bold">28%</span>.
            </li>
            <li className="leading-[1.35] ms-[27px]">
              {`Рабочий процесс с партнерским сайтом был значительно оптимизирован. Продление лицензии теперь требует `}
              <span className="[word-break:break-word] font-['Onest:Bold'] font-bold">в 3 раза меньше времени</span>.
            </li>
          </ul>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:381">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:382">
            Проблемы
          </p>
          <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:383">
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Высокая информационная нагрузка на пользователей — слишком много контента на единицу площади.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Сложные сценарии выбора и покупки продуктов.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Неконтролируемый и несистематический рост контента на веб-сайте. Новая информация иногда добавлялась в те разделы, где пользователь вряд ли ее находил.</span>
            </li>
            <li className="ms-[27px]">
              <span className="leading-[1.35]">Значительное количество «устаревшего» контента, который был необходим, но в этих ситуациях никто не знал, куда его поместить.</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:384">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:385">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:386">
            Что я сделал
          </p>
          <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:387">
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Определил уже существующую ЦА продукта.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Провёл ревизию структуры текущих сайтов в экосистеме продукта и определил дальнейшие шаги работы.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Изучил данные аналитики и нашёл слабые места.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Участвовал в интервью с бизнес-партнёрами для сбора фидбека.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Выдвинул гипотезы о категориях пользователей веб-сайта на основе полученных данных.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Создал персонажей на основе данных исследований.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Создал CJM, сценарии, юзкейсы и новую структуру сайта.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Переработал сравнение планов продукта.</span>
            </li>
            <li className="ms-[27px]">
              <span className="leading-[1.35]">Создал прототипы более 400 страниц.</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:388">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:389">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:390">
            Решение
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:391">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:392">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:393">
                Изначально я пересмотрел структуры как сайта клиента, так и партнера в экосистеме 1C-Битрикс, чтобы получить более глубокое понимание содержания сайтов.
              </p>
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-node-id="1:394">
                <div className="aspect-[650/836] relative rounded-[12px] shrink-0 w-full" data-node-id="1:395" data-name="image 194">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage194} />
                </div>
                <div className="aspect-[650/836] relative rounded-[12px] shrink-0 w-full" data-node-id="1:396" data-name="image 195">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage195} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:397">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:398">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:399">
            Целевая аудитория
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:400">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:401">
              <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:402">
                <p className="leading-[1.35] mb-[12px]">Я определил целевую аудиторию существующего продукта, чтобы лучше понимать потребности, желания и поведение текущих и потенциальных пользователей. Это также помогло сосредоточиться на ключевых функциях, которые наиболее важны для пользователей.</p>
                <p>
                  <span className="leading-[1.35]">{`Вот частичный список сегментов целевой аудитории. Полный список доступен в `}</span>
                  <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline" href="https://docs.google.com/spreadsheets/d/1RQwkS9TLyXL0oy_IuXXwcSlqChYbvnQE07OzAf5jbTc/edit?usp=sharing" target="_blank">
                    <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://docs.google.com/spreadsheets/d/1RQwkS9TLyXL0oy_IuXXwcSlqChYbvnQE07OzAf5jbTc/edit?usp=sharing" target="_blank">
                      Google Sheets.
                    </span>
                  </a>
                </p>
              </div>
              <div className="aspect-[1449/1053] relative rounded-[12px] shrink-0 w-full" data-node-id="1:403" data-name="image 196">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage196} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:404">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:405">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:406">
            Данные аналитики
          </p>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:407">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:408">
              <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:409">
                <p className="leading-[1.35] mb-[12px]">Мы проанализировали данные Google Analytics и выявили список проблем, с которыми сталкиваются пользователи. Вот часть выводов:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Ключевые страницы веб-сайта содержали много информации, не имеющей отношения к пользователям.</span>
                  </li>
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Пользователи посещали только несколько пунктов в главном меню, что приводило к недопониманию концепции продукта.</span>
                  </li>
                  <li className="ms-[27px]">
                    <span className="leading-[1.35]">Пользователи часто «бродили» по сайту, посещая случайные страницы и не достигая своих целей.</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-[855/643] relative rounded-[9.544px] shrink-0 w-full" data-node-id="1:410" data-name="image 197">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.544px] size-full" src={imgImage197} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:411">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:412">
                Затем мы разработали карту на основе данных аналитики, выделив самые посещаемые и наименее посещаемые разделы сайта.
              </p>
              <div className="aspect-[1759/1125] relative rounded-[12px] shrink-0 w-full" data-node-id="1:413" data-name="image 198">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage198} />
              </div>
              <a className="[word-break:break-word] block font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://docs.google.com/spreadsheets/d/1TENVH5-bjDe1g7NbyYT46iaR8564RsNLvDjA_Our9BI/edit#gid=194258268" data-node-id="1:414" target="_self">
                <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline">Смотреть таблицу целиком</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:415">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:416">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:417">
            Глубинные интервью
          </p>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:418">
            <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:419">
              <p className="leading-[1.35] mb-[12px]">Мы провели глубинные интервью с различными пользователями продукта, чтобы собрать необходимую информацию для дальнейшей работы. Мы заранее подготовили вопросы для каждого типа участников и получили множество ценных данных в ходе интервью.</p>
              <p className="leading-[1.35] mb-[12px]">Среди респондентов были:</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">{`Владельцы трёх различных компаний, имеющих статус Золотого партнёра "1С-Битрикс" и использующих эту CMS как основной инструмент в своем процессе разработки.`}</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Владелец онлайн-магазина.</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Представитель государственной организации.</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.35]">Владелец офлайн бизнеса.</span>
                </li>
                <li className="ms-[27px]">
                  <span className="leading-[1.35]">Подписчик.</span>
                </li>
              </ul>
            </div>
            <div className="aspect-[650/922] relative rounded-[12px] shrink-0 w-full" data-node-id="1:420" data-name="image 199">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage199} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:421">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:422">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:423">
            Выводы
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:424">
            На основе собранных данных мы сформулировали выводы о категориях пользователей сайта. Некоторые из этих выводов включали в себя:
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.35] relative shrink-0 w-full" data-node-id="1:425">
            <div className="border-[#1f90ef] border-[1.5px] border-solid content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:426">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[32px] w-full" data-node-id="1:427">
                1.
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-full" data-node-id="1:428">{`Пользователи, пытающиеся найти "их" продукт, перемещаются хаотично среди различных продуктов и решений на сайте клиента, не найдя необходимую информацию.`}</p>
            </div>
            <div className="border-[#1f90ef] border-[1.5px] border-solid content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:429">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[32px] w-full" data-node-id="1:430">
                2.
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-full" data-node-id="1:431">
                Пользователи перегружены множеством вариантов, таких как продукты, тарифные планы, функции, готовые решения и расширения, в то время как у них обычно есть конкретная потребность создать определённый веб-сайт.
              </p>
            </div>
            <div className="border-[#1f90ef] border-[1.5px] border-solid content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:432">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[32px] w-full" data-node-id="1:433">
                3.
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-full" data-node-id="1:434">{`Страницы продуктов в значительной степени заполнены информацией, которая не приводит к совершению покупки. Для большинства пользователей этот контент считается "мусором" и полезен лишь малой части аудитории.`}</p>
            </div>
            <div className="border-[#1f90ef] border-[1.5px] border-solid content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:435">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[32px] w-full" data-node-id="1:436">
                4.
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-full" data-node-id="1:437">
                Неясная функциональность клиентских и партнёрских аккаунтов приводит к постоянному переключению между сайтами, что утомляет пользователей.
              </p>
            </div>
            <div className="border-[#1f90ef] border-[1.5px] border-solid content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:438">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[32px] w-full" data-node-id="1:439">
                5.
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-full" data-node-id="1:440">
                Модель навигации неэффективна, поскольку пользователи не замечают и/или не используют большинство элементов навигации.
              </p>
            </div>
            <div className="border-[#1f90ef] border-[1.5px] border-solid content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:441">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[32px] w-full" data-node-id="1:442">
                6.
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-full" data-node-id="1:443">
                Некоторые пользователи считают, что сайт ориентирован на разработчиков из-за изобилия технической информации, что заставляет их покидать сайт.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:444">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:445">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:446">
            Персоны
          </p>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:447">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:448">
              На основе данных исследования мы создали четыре персонажа.
            </p>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:449">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:450">
                Два клиентских:
              </p>
              <div className="aspect-[1200/678] relative rounded-[6.8px] shrink-0 w-full" data-node-id="1:451" data-name="image 200">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.8px] size-full" src={imgImage200} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:452">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:453">
                И два партнёрских:
              </p>
              <div className="aspect-[1196/675] relative rounded-[6.823px] shrink-0 w-full" data-node-id="1:454" data-name="image 201">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.823px] size-full" src={imgImage201} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:455">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:456">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:457">
            Customer Journey Map
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:458">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:459">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:460">
                Затем мы разработали CJM для полного описания флоу клиента, обеспечивая глубокое понимание их взаимодействий и опыта на каждом этапе.
              </p>
              <div className="aspect-[1344/725] relative rounded-[12px] shrink-0 w-full" data-node-id="1:461" data-name="image 202">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage202} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:462">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:463">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:464">
            Сценарии и кейсы
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:465">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:466">
              <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:467">
                <p className="leading-[1.35] mb-[12px]">Мы создали ряд сценариев и юзкейсов. Вот наиболее значимые:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Планирование продукта и выбор решения</span>
                  </li>
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Выбор партнёра и создание запроса на разработку</span>
                  </li>
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Покупка продукта</span>
                  </li>
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Подача заявки на партнёрство</span>
                  </li>
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Ответ на запросы клиентов</span>
                  </li>
                  <li className="ms-[27px]">
                    <span className="leading-[1.35]">Продление лицензии</span>
                  </li>
                </ul>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:468">
                <div className="aspect-[1391/1330] relative rounded-[7.418px] shrink-0 w-full" data-node-id="1:469" data-name="image 203">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.418px] size-full" src={imgImage203} />
                </div>
                <div className="aspect-[1021/1331] relative rounded-[7.418px] shrink-0 w-full" data-node-id="1:470" data-name="image 205">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.418px] size-full" src={imgImage205} />
                </div>
                <div className="aspect-[897/1026] relative rounded-[7.418px] shrink-0 w-full" data-node-id="1:471" data-name="image 207">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.418px] size-full" src={imgImage207} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:472">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:473">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:474">
            Сравнение планов
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:475">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:476">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:477">
                Это был критический этап, поскольку он является ключевым шагом в воронке продаж. Этот раздел требовал значительной работы для создания его с нуля из-за первоначально неорганизованной и несвязной структуры. Мы уделили значительные усилия для переорганизации и оптимизации процесса сравнения планов для повышения ясности и эффективности.
              </p>
              <div className="aspect-[1223/1040] relative rounded-[12px] shrink-0 w-full" data-node-id="1:478" data-name="image 208">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage208} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:479">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:480">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:481">
            Новая структура
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:482">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:483">
              Я разработал структуру для веб-сайтов клиента и партнёров на основе всех данных, собранных в процессе работы, с целью организации контента и обеспечения логичной навигации. Структура оказалась довольно обширной, поэтому здесь я представляю лишь её часть. Полная структура доступна по ссылкам внизу.
            </p>
            <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:484">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:485">
                <div className="aspect-[2048/748] relative rounded-[12px] shrink-0 w-full" data-node-id="1:486" data-name="image 209">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage209} />
                </div>
                <a className="[word-break:break-word] block font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://drive.google.com/file/d/1fhYeK9pWplqi9YCJTz4kWpugwYMBw0t-/view?usp=sharing" data-node-id="1:487" target="_blank">
                  <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline">Смотреть полную структуру клиенсткого сайта</p>
                </a>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:488">
                <div className="aspect-[2048/748] relative rounded-[12px] shrink-0 w-full" data-node-id="1:489" data-name="image 210">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage210} />
                </div>
                <a className="[word-break:break-word] block font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://drive.google.com/file/d/1yYsroB5WusiVodxl6vRcZQEXCIJ2hKAT/view?usp=sharing" data-node-id="1:490" target="_blank">
                  <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline">Смотреть полную структуру партнёрского сайта</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:491">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:492">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:493">
            Прототипы
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:494">
            Я разработал прототипы более чем на 400 страниц, большинство из которых были динамическими и имели более 1000 состояний. Все прототипы содержали реальный контент, без lorem ipsum. Затем эти прототипы были переданы дизайнеру интерфейсов, который потратил более 400 часов на создание макетов.
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:495">
            <div className="aspect-[650/811] relative rounded-[9.067px] shrink-0 w-full" data-node-id="1:496" data-name="image 211">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.067px] size-full" src={imgImage211} />
            </div>
            <div className="aspect-[650/894] relative rounded-[9.067px] shrink-0 w-full" data-node-id="1:497" data-name="image 212">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.067px] size-full" src={imgImage212} />
            </div>
            <div className="aspect-[1024/1005] relative rounded-[9.067px] shrink-0 w-full" data-node-id="1:498" data-name="image 213">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.067px] size-full" src={imgImage213} />
            </div>
            <div className="aspect-[1024/950] relative rounded-[9.067px] shrink-0 w-full" data-node-id="1:499" data-name="image 214">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.067px] size-full" src={imgImage214} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:500">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine19} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:501">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:502">
            Текущий статус
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:503">{`Продукт успешно получил новый дизайн, после чего стал ещё более успешным: продукт развивается, и количество партнёров и проектов в разработке стремительно растёт. На 2021 год "1С-Битрикс: Управление сайтом" являлся самой популярной коммерческой CMS по реальным установкам на сайтах согласно рейтингу iTrack.`}</p>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[659px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full z-[2]" />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[40px] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[24px] z-[1]" data-node-id="1:505" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:505;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:505;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:505;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}