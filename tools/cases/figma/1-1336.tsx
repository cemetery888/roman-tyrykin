const assetPathPrefix = "https://www.figma.com/api/mcp/asset/65d337e3-0f9a-4b0b-b8a4-e4f315e3fb85";
const imgCover = `${assetPathPrefix}/a2e41.png`;
const imgImage163 = `${assetPathPrefix}/74dfa.png`;
const imgImage170 = `${assetPathPrefix}/9523d.png`;
const imgImage171 = `${assetPathPrefix}/80557.png`;
const imgImage172 = `${assetPathPrefix}/c1d26.png`;
const imgImage173 = `${assetPathPrefix}/6cc96.png`;
const imgImage174 = `${assetPathPrefix}/971c1.png`;
const imgImage176 = `${assetPathPrefix}/9554c.png`;
const imgImage177 = `${assetPathPrefix}/bbd11.png`;
const imgImage179 = `${assetPathPrefix}/41d47.png`;
const imgImage180 = `${assetPathPrefix}/d2bd2.png`;
const imgImage181 = `${assetPathPrefix}/3af61.png`;
const imgImage182 = `${assetPathPrefix}/9ec90.png`;
const imgImage183 = `${assetPathPrefix}/101c1.png`;
const imgImage185 = `${assetPathPrefix}/600aa.png`;
const imgImage186 = `${assetPathPrefix}/8c42a.png`;
const imgImage187 = `${assetPathPrefix}/82c6a.png`;
const imgImage188 = `${assetPathPrefix}/305f9.png`;
const imgImage189 = `${assetPathPrefix}/4aa02.png`;
const imgImage190 = `${assetPathPrefix}/84fcd.png`;
const imgImage191 = `${assetPathPrefix}/90d6e.png`;
const imgImage192 = `${assetPathPrefix}/9639d.png`;
const imgImage193 = `${assetPathPrefix}/4f4f8.png`;
const imgLine14 = `${assetPathPrefix}/4cb4b.svg`;
const imgFrame = `${assetPathPrefix}/af987.svg`;
const imgFrame1 = `${assetPathPrefix}/21b83.svg`;
const imgLine24 = `${assetPathPrefix}/6789e.svg`;

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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[100px] px-[40px] relative size-full" data-node-id="1:1336" data-name="Tablet">
      <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full z-[5]" data-node-id="1:1338">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1339">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:1340">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[36px] text-white w-[min-content]" data-node-id="1:1341">
              Добово
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1342">
              Редизайн популярного сервиса краткосрочной аренды квартир.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:1343">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:1344">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1345">
                  Travel
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:1346">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1347">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative shrink-0 w-full" data-node-id="1:1348" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCover} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex gap-[40px] items-start leading-[1.35] px-[24px] py-[20px] relative rounded-[16px] shrink-0 text-[18px] text-white w-full whitespace-nowrap" data-node-id="1:1351">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:1352">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:1353">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:1354">
                Turum-burum
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:1355">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:1356">
                Команда
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:1357">
                UX-дизайнер
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1361">
          <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0" data-node-id="1:1362">
            <a className="[word-break:break-word] block font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#303030] text-[0px] w-full" href="https://www.ihaveticket.com/" data-node-id="1:1363" target="_blank">
              <p className="cursor-pointer text-[28px]">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Onest:Bold'] font-bold leading-[1.35] text-white underline" role="link" tabIndex="0">
                  Dobovo ↗
                </span>
                <span className="font-['Onest:Regular'] font-normal leading-[1.35] text-white">{` — ведущий сайт по краткосрочной аренде квартир в Украине, являющийся основным конкурентом `}</span>
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[#ff5a5f]">Airbnb</span>
                <span className="font-['Onest:Regular'] font-normal leading-[1.35] text-white">{` в стране.`}</span>
              </p>
            </a>
          </div>
          <div className="[word-break:break-word] content-start flex flex-wrap gap-[16px] items-start justify-center leading-[1.35] relative shrink-0 text-white w-[564px]" data-node-id="1:1364">
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1365">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1366">
                71
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1367">
                Город по всей стране
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1368">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1369">
                6,000,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1370">
                Ночей забронировано
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1371">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1372">
                7,400+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1373">
                Квартир на любой вкус
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1374">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1375">
                120,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1376">
                Отзывов написано
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] border-3 border-[#3275a4] border-solid content-stretch flex flex-col gap-[16px] items-start max-w-[680px] p-[28px] relative rounded-[12px] shrink-0 text-white w-[680px]" data-node-id="1:1377">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:1378">
            Результаты и метрики
          </p>
          <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[18px] w-full" data-node-id="1:1379">
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">×4 — Использование функции сравнения</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">+27% — Среднее время просмотра страницы апартаментов</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">+35% — Завершённые бронирования</span>
            </li>
            <li className="ms-[27px]">
              <span className="leading-[1.35]">+12% — Конверсия бронирований на мобильных устройствах</span>
            </li>
          </ul>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:1380">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:1381">
            Проблемы
          </p>
          <div className="content-stretch flex flex-col font-['Onest:Regular'] font-normal gap-[20px] items-center justify-center relative shrink-0 text-[18px] w-full" data-node-id="1:1382">
            <p className="leading-[1.35] relative shrink-0 w-full" data-node-id="1:1383">
              Пользователям было сложно быстро найти подходящее жильё, сравнить варианты и завершить бронирование. Основной задачей редизайна стало упростить этот путь — от поиска до оплаты.
            </p>
            <ul className="block leading-[0] list-disc relative shrink-0 w-full" data-node-id="1:1384">
              <li className="mb-0 ms-[27px]">
                <span className="leading-[1.35]">Разрозненный опыт на разных устройствах — десктопная и мобильная версии отличались по функциональности, а часть возможностей — например личный кабинет — на мобильных устройствах отсутствовала.</span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="leading-[1.35]">Сложный поиск жилья — фильтры были плохо сгруппированы, а части важных параметров поиска не было.</span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="leading-[1.35]">Сложно принять решение — пользователи покидали страницы апартаментов, не переходя к бронированию, а уникальная функция сравнения почти не использовалась.</span>
              </li>
              <li className="ms-[27px]">
                <span className="leading-[1.35]">Потери во время бронирования — часть пользователей начинала бронирование, но не завершала его.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1385">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1386">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:1387">
            Решение
          </p>
          <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="1:1388">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:1389">
              Мы решили полностью переработать продукт по принципу Mobile First и перейти от отдельных desktop- и mobile-версий к единому адаптивному интерфейсу. Мобильный трафик уже составлял большую часть посещений и продолжал расти, а поддержка двух разных версий увеличивала техническую сложность и приводила к различиям в функциональности.
            </p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:1390">
              <div className="aspect-[768/351] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1391" data-name="image 163">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage163} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1392">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:1393">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:1394">
            Что я сделал
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-full" data-node-id="1:1395">
            Я отвечал за UX редизайна: анализировал продуктовые данные и конкурентов, участвовал в работе со стейкхолдерами, проектировал ключевые сценарии и прототипы для mobile, tablet и desktop.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1396">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:1397">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:1398">
            Подход
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-full" data-node-id="1:1399">
            Основным источником знаний о пользователях стала команда Dobovo: мы регулярно проводили рабочие сессии с владельцем продукта и другими стейкхолдерами, дополняя их данными Google Analytics, обращениями в поддержку и анализом существующего продукта.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1400">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1401">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:1402">
            Конкуренты
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:1403">
            Я изучил украинских конкурентов и глобальные сервисы бронирования, чтобы найти устоявшиеся паттерны и возможности для улучшения Dobovo. Релевантные решения затем обсуждали и приоритизировали вместе с владельцем продукта.
          </p>
          <div className="aspect-[2000/1331] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1404" data-name="image 170">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage170} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1405">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1406">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:1407">
            Поисковая выдача (список апартаментов в городе)
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:1408">
            Страница с поисковой выдачей является одной из ключевой на сайте — в подавляющем числе случаев выбор апартаментов происходит именно на ней.
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1409">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.35] max-w-[680px] relative shrink-0 text-white" data-node-id="1:1410">
              <p className="font-['Onest:Bold'] font-bold min-w-full relative shrink-0 text-[24px] w-[min-content]" data-node-id="1:1411">
                Пересобрал систему фильтров
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-[680px]" data-node-id="1:1412">
                Перегруппировал существующие параметры, вынес тип размещения и жилья в отдельные фильтры, объединил удобства и упростил выбор цены.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1413">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1414">
                Добавил важные критерии поиска
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1415">
                Добавил фильтры по метро, улице, району, достопримечательностям и ключевым атрибутам жилья — часть этих возможностей пользователи ранее запрашивали через поддержку.
              </p>
              <div className="content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1416">
                <div className="h-[583.05px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1417" data-name="image 171">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage171} />
                </div>
                <div className="h-[584px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1418" data-name="image 172">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                    <div className="absolute bg-white inset-0 rounded-[12px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="" className="absolute h-[92.98%] left-[-0.08%] max-w-none top-[6.5%] w-[100.17%]" src={imgImage172} />
                    </div>
                  </div>
                </div>
                <div className="h-[512px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1419" data-name="image 173">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage173} />
                </div>
                <div className="h-[375.05px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1420" data-name="image 174">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage174} />
                </div>
              </div>
              <div className="bg-[#1a3d56] border-l-2 border-solid border-white content-stretch flex items-center px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-[650px]" data-node-id="1:1421">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[1.35] min-w-px relative text-[18px] text-white" data-node-id="1:1422">
                  По информации техподдержки, пользователи сайта неоднократно просили добавить эти эти фильтры на сайт.
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1423">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1424">
                Помог выбирать даты
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1425">
                Добавил загрузку жилья на выбранные и соседние даты, чтобы показать доступность и помочь найти альтернативу.
              </p>
              <div className="h-[417.031px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1426" data-name="image 176">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage176} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1427">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1428">
                Статистика бронирования на выбранные даты
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1429">
                Добавил информацию о доступности жилья на выбранные и соседние даты, чтобы пользователь лучше понимал спрос и мог при необходимости выбрать альтернативные даты.
              </p>
              <div className="h-[241.719px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1430" data-name="image 177">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage177} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1431">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1432">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:1433">
            Сравнение апартаментов
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:1434">
            Возможность сравнения апартаментов — уникальная функция для сайтов такого типа. У конкурентов Добово, в том числе Airbnb, такой функции нет и по сей день.
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1435">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0 text-white w-full" data-node-id="1:1436">
              <p className="font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] whitespace-nowrap" data-node-id="1:1437">
                Проблемы
              </p>
              <div className="font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:1438">
                <p className="leading-[1.35] mb-[12px]">Несмотря на всю полезность функции, ей пользовалась лишь небольшая часть пользователей. Я предположил, что причины этому следующие:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[27px]">
                    <span className="leading-[1.35]">Отсутствие выбора дат въезда и выезда, и, как следствие, невозможность сравнения по цене за ночь, а это основной фактор для огромного количества пользователей.</span>
                  </li>
                  <li className="ms-[27px]">
                    <span className="leading-[1.35]">Плохо структурированная информация о сравниваемых апартаментах, без разделения на блоки. Визуально информацию было сложно воспринимать.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1439">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1440">
                Решение
              </p>
              <div className="content-stretch flex flex-col gap-[28px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1441">
                <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1442">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1443">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Добавил выбор дат проживания.</span>
                    <span className="leading-[1.35]">{` Стало возможным показывать цены за ночь.`}</span>
                  </p>
                  <div className="h-[282.986px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1444" data-name="image 179">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.16px]">
                      <div className="absolute bg-white inset-0 rounded-[8.16px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[8.16px] size-full" src={imgImage179} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1445">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1446">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35]">{`Сгруппировал информацию об апартаментах. `}</span>
                    <span className="leading-[1.35]">Город и район - в локацию, типы и количество спальных мест - в спальные места и т.д.</span>
                  </p>
                  <div className="h-[378.241px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1447" data-name="image 180">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.16px]">
                      <div className="absolute bg-white inset-0 rounded-[8.16px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[8.16px] size-full" src={imgImage180} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#1a3d56] content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1448">
                  <div className="relative shrink-0 size-[32px]" data-node-id="1:1449" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[0] min-w-px relative text-[0px] text-white" data-node-id="1:1451">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[18px]">Результат:</span>
                    <span className="leading-[1.35] text-[18px]">{` после редизайна функцией сравнения стали пользоваться в 4 раза чаще.`}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1452">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1453" data-name="Apartment page">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:1454">
            Страница апартаментов
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1455">
            Пользователи часто уходили со страницы, не начав бронирование. Я пересобрал структуру и сделал важную для принятия решения информацию заметнее.
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1456">
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1457">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1458">
                <span className="leading-[1.35]">{`Правила дома `}</span>
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">(время въезда и выезда, различные ограничения, залог, получение ключей и т.д.)</span>
                <span className="leading-[1.35]">{` я вытащил из общего описания апартаментов и разместил отдельным блоком. Эта информация критически важна для части пользователей, поэтому прятать её было не совсем логично.`}</span>
              </p>
              <div className="h-[738.48px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1459" data-name="image 181">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage181} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1460">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1461">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Добавил правила отмены бронирования.</span>
                <span className="leading-[1.35]">{` Раньше для уточнения этой информации пользователям приходилось связываться с владельцем апартаментов. Не все владельцы имели возможность оперативно отвечать на вопросы, поэтому в некоторых случаях пользователи просто бронировали другие апартаменты.`}</span>
              </p>
              <div className="h-[145.43px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1462" data-name="image 182">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage182} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1463">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1464">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Добавил список офферов</span>
                <span className="leading-[1.35]">, чтобы пользователям легко видели, бронирование на какие даты является максимально выгодным.</span>
              </p>
              <div className="h-[322.07px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1465" data-name="image 183">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage183} />
              </div>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex gap-[20px] items-center px-[24px] py-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1466">
              <div className="relative shrink-0 size-[32px]" data-node-id="1:1467" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[0] min-w-px relative text-[18px] text-white" data-node-id="1:1469">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Результат:</span>
                <span className="leading-[1.35]">{` среднее время просмотра страницы увеличилось на 27%.`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1470">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1471">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:1472">
            Бронирование
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1473">
            Данные показывали, что часть пользователей начинала бронирование, но не завершала его. Точной причины оттока определить не удалось, а команда не была готова полностью менять уже работающий сценарий, поэтому мы ограничились точечными улучшениями на основе известных проблем и UX-паттернов.
          </p>
          <div className="h-[489px] relative shrink-0 w-[600px]" data-node-id="1:1474" data-name="image 185">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage185} />
          </div>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1475">
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1476">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1477">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Я добавил правила дома на первый шаг бронирования</span>
                <span className="leading-[1.35]">, так они содержат важную информацию, особенно время заезда и выезда. Таким образом, пользователям не нужно прерывать процесс бронирования, если им необходимо ознакомится с правилами дома ещё раз.</span>
              </p>
              <div className="h-[712.465px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1478" data-name="image 186">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.16px]">
                  <div className="absolute bg-white inset-0 rounded-[8.16px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8.16px] size-full" src={imgImage186} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1479">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1480">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Использование подарочного сертификата я сделал опцией.</span>
                <span className="leading-[1.35]">{` Раньше это был отдельный метод оплаты, чтобы было крайне неудобно, особенно когда номинал сертификата был ниже стоимости бронирования — в таких случаях сертификаты были просто бесполезными. Также стоит отметить, что подарочные сертификаты Добово были очень популярны, поэтому нужно было срочно исправлять ситуацию.`}</span>
              </p>
              <div className="h-[359.922px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1481" data-name="image 187">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage187} />
              </div>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex gap-[20px] items-center max-w-[680px] px-[24px] py-[20px] relative rounded-[12px] shrink-0 w-[680px]" data-node-id="1:1482">
              <div className="relative shrink-0 size-[32px]" data-node-id="1:1483" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[0] min-w-px relative text-[18px] text-white" data-node-id="1:1485">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">В результате</span>
                <span className="leading-[1.35]">{` проделанных изменений количество завершённых бронирований возросло на 35%.`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1486">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1487">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:1488">
            Личный кабинет
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1489">
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1490">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1491">
                Личный кабинет отсутствовал в мобильной версии. Я провёл ревизию сценариев и спроектировал все состояния профиля для адаптивного интерфейса, чтобы его функции стали доступны на любом устройстве.
              </p>
              <div className="h-[603.301px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1492" data-name="image 188">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage188} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1493">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:1494">
                Теперь профиль и все функции в нём доступны на любом устройстве.
              </p>
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-node-id="1:1495">
                <div className="h-[780px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:1496" data-name="image 189">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage189} />
                </div>
                <div className="h-[780px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:1497" data-name="image 190">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage190} />
                </div>
                <div className="h-[780px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:1498" data-name="image 191">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage191} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1499">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1500">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:1501">
            До и после
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1502">
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1503">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1504">
                До:
              </p>
              <div className="h-[638.031px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1505" data-name="image 192">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage192} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[680px] relative shrink-0" data-node-id="1:1506">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1507">
                После:
              </p>
              <div className="h-[638.031px] relative rounded-[8.16px] shrink-0 w-[680px]" data-node-id="1:1508" data-name="image 193">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8.16px] size-full" src={imgImage193} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[659px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full z-[4]" />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[40px] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[24px] z-[3]" data-node-id="1:1510" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:1510;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:1510;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:1510;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[1280px] overflow-clip px-[16px] py-[4px] rounded-[8px] top-[36px] w-[100px] z-[2]" data-node-id="1:1511" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:1511;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:1511;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:1511;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:1511;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:1511;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
    </div>
  );
}