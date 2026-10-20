const assetPathPrefix = "https://www.figma.com/api/mcp/asset/c360e682-b235-4467-8c90-890164a90d34";
const imgCover = `${assetPathPrefix}/a4a75.png`;
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
const imgLine14 = `${assetPathPrefix}/92621.svg`;
const imgFrame = `${assetPathPrefix}/af987.svg`;
const imgFrame1 = `${assetPathPrefix}/21b83.svg`;
const imgLine24 = `${assetPathPrefix}/6789e.svg`;

type SectionProps = {
  className?: string;
  device?: "Mobile";
};

function Section({ className, device = "Mobile" }: SectionProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[455px] items-start overflow-clip relative rounded-[12px] w-[343px]"} data-node-id="1:8445" style={{ backgroundImage: "linear-gradient(119.48315051507898deg, rgb(91, 75, 224) 14.286%, rgb(169, 79, 214) 53.571%, rgb(226, 86, 108) 85.714%)" }}>
      <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[20px] py-[32px] relative shrink-0 w-full" data-node-id="1:8446" data-name="Main">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:8447" data-name="CTA">
          <div className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[0] relative shrink-0 text-[52px] text-white tracking-[-1.56px] w-full" data-node-id="1:8448">
            <p className="leading-[1.1] mb-0">Давайте</p>
            <p className="leading-[1.1]">работать</p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch cursor-pointer flex flex-col items-start leading-[normal] overflow-clip relative shrink-0 text-[22px] text-left text-white w-full" data-node-id="1:8449" data-name="Links">
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid border-t content-stretch flex gap-[20px] items-center overflow-clip py-[16px] relative shrink-0 w-full" href="https://t.me/bslt777" data-node-id="1:8450" target="_blank" data-name="Link / Telegram">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative tracking-[-0.22px]" data-node-id="1:8451">
              Telegram
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 whitespace-nowrap" data-node-id="1:8452">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[16px] relative shrink-0 w-full" href="mailto:roman-xt@ya.ru" data-node-id="1:8453" target="_blank" data-name="Link / Email">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative tracking-[-0.22px]" data-node-id="1:8454">
              Email
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 whitespace-nowrap" data-node-id="1:8455">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[16px] relative shrink-0 w-full" href="https://www.linkedin.com/in/romantyrykin/" data-node-id="1:8456" target="_blank" data-name="Link / LinkedIn">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative tracking-[-0.22px]" data-node-id="1:8457">
              LinkedIn
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 whitespace-nowrap" data-node-id="1:8458">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[16px] relative shrink-0 w-full" href="https://drive.google.com/file/d/1dLAbhlt6F31C2GcOhBuqI8fjYoDFft10" data-node-id="1:8459" target="_blank" data-name="Link / CV">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative tracking-[-0.22px]" data-node-id="1:8460">
              CV
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 whitespace-nowrap" data-node-id="1:8461">
              ↗
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[28px] isolate items-center pb-[28px] pt-[84px] px-[16px] relative size-full" data-node-id="1:1513" data-name="Mobile">
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full z-[5]" data-node-id="1:1515">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1516">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:1518">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[32px] text-white w-[min-content]" data-node-id="1:1519">
              Добово
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:1520">
              Редизайн популярного сервиса краткосрочной аренды квартир.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:1521">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:1522">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1523">
                  Travel
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:1524">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1525">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/603] relative shrink-0 w-full" data-node-id="1:1526" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCover} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex flex-col gap-[20px] items-start leading-[1.35] px-[16px] py-[12px] relative rounded-[8px] shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-node-id="1:1528">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="1:1529">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:1530">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:1531">
                Turum-burum
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="1:1532">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:1533">
                Команда
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:1534">
                UX-дизайнер
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:1538">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:1539">
            <a className="[word-break:break-word] block font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#303030] text-[0px] w-full" href="https://www.ihaveticket.com/" data-node-id="1:1540" target="_blank">
              <p className="cursor-pointer text-[22px]">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Onest:Bold'] font-bold leading-[1.35] text-white underline" role="link" tabIndex="0">
                  Dobovo ↗
                </span>
                <span className="font-['Onest:Regular'] font-normal leading-[1.35] text-white">{` — ведущий сайт по краткосрочной аренде квартир в Украине, являющийся основным конкурентом `}</span>
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[#ff5a5f]">Airbnb</span>
                <span className="font-['Onest:Regular'] font-normal leading-[1.35] text-white">{` в стране.`}</span>
              </p>
            </a>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.35] relative shrink-0 text-white w-full" data-node-id="1:1541">
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[6px] items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:1542">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:1543">
                71
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[16px] w-full" data-node-id="1:1544">
                Город по всей стране
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[6px] items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:1545">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:1546">
                6,000,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[16px] w-full" data-node-id="1:1547">
                Ночей забронировано
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[6px] items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:1548">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:1549">
                7,400+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[16px] w-full" data-node-id="1:1550">
                Квартир на любой вкус
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[6px] items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:1551">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[24px] w-full" data-node-id="1:1552">
                120,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[16px] w-full" data-node-id="1:1553">
                Отзывов написано
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] border-3 border-[#3275a4] border-solid content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[20px] relative rounded-[8px] shrink-0 text-white w-full" data-node-id="1:1554">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] w-full" data-node-id="1:1555">
            Результаты и метрики
          </p>
          <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[16px] w-full" data-node-id="1:1556">
            <li className="mb-0 ms-[24px]">
              <span className="leading-[1.35]">×4 — Использование функции сравнения</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[1.35]">+27% — Среднее время просмотра страницы апартаментов</span>
            </li>
            <li className="mb-0 ms-[24px]">
              <span className="leading-[1.35]">+35% — Завершённые бронирования</span>
            </li>
            <li className="ms-[24px]">
              <span className="leading-[1.35]">+12% — Конверсия бронирований на мобильных устройствах</span>
            </li>
          </ul>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-white w-full" data-node-id="1:1557">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] w-full" data-node-id="1:1558">
            Проблемы
          </p>
          <div className="content-stretch flex flex-col font-['Onest:Regular'] font-normal gap-[12px] items-center justify-center relative shrink-0 text-[16px] w-full" data-node-id="1:1559">
            <p className="leading-[1.35] relative shrink-0 w-full" data-node-id="1:1560">
              Пользователям было сложно быстро найти подходящее жильё, сравнить варианты и завершить бронирование. Основной задачей редизайна стало упростить этот путь — от поиска до оплаты.
            </p>
            <ul className="block leading-[0] list-disc relative shrink-0 w-full" data-node-id="1:1561">
              <li className="mb-0 ms-[24px]">
                <span className="leading-[1.35]">Разрозненный опыт на разных устройствах — десктопная и мобильная версии отличались по функциональности, а часть возможностей — например личный кабинет — на мобильных устройствах отсутствовала.</span>
              </li>
              <li className="mb-0 ms-[24px]">
                <span className="leading-[1.35]">Сложный поиск жилья — фильтры были плохо сгруппированы, а части важных параметров поиска не было.</span>
              </li>
              <li className="mb-0 ms-[24px]">
                <span className="leading-[1.35]">Сложно принять решение — пользователи покидали страницы апартаментов, не переходя к бронированию, а уникальная функция сравнения почти не использовалась.</span>
              </li>
              <li className="ms-[24px]">
                <span className="leading-[1.35]">Потери во время бронирования — часть пользователей начинала бронирование, но не завершала его.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1562">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1563">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:1564">
            Решение
          </p>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1565">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1566">
              Мы решили полностью переработать продукт по принципу Mobile First и перейти от отдельных desktop- и mobile-версий к единому адаптивному интерфейсу. Мобильный трафик уже составлял большую часть посещений и продолжал расти, а поддержка двух разных версий увеличивала техническую сложность и приводила к различиям в функциональности.
            </p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:1567">
              <div className="h-[146px] max-h-[164.53123474121094px] max-w-[360px] relative rounded-[8px] shrink-0 w-[319.453px]" data-node-id="1:1568" data-name="image 163">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage163} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1569">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-white w-full" data-node-id="1:1570">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] w-full" data-node-id="1:1571">
            Что я сделал
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] w-full" data-node-id="1:1572">
            Я отвечал за UX редизайна: анализировал продуктовые данные и конкурентов, участвовал в работе со стейкхолдерами, проектировал ключевые сценарии и прототипы для mobile, tablet и desktop.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1573">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-white w-full" data-node-id="1:1574">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] w-full" data-node-id="1:1575">
            Подход
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] w-full" data-node-id="1:1576">
            Основным источником знаний о пользователях стала команда Dobovo: мы регулярно проводили рабочие сессии с владельцем продукта и другими стейкхолдерами, дополняя их данными Google Analytics, обращениями в поддержку и анализом существующего продукта.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1577">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1578">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1579">
            Конкуренты
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:1580">
            Я изучил украинских конкурентов и глобальные сервисы бронирования, чтобы найти устоявшиеся паттерны и возможности для улучшения Dobovo. Релевантные решения затем обсуждали и приоритизировали вместе с владельцем продукта.
          </p>
          <div className="h-[213px] max-h-[239.5800018310547px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.06px]" data-node-id="1:1581" data-name="image 170">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage170} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1582">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1583">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:1584">
            Поисковая выдача (список апартаментов в городе)
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1585">
            Страница с поисковой выдачей является одной из ключевой на сайте — в подавляющем числе случаев выбор апартаментов происходит именно на ней.
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:1586">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[1.35] relative shrink-0 text-white w-full" data-node-id="1:1587">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[20px] w-[295px]" data-node-id="1:1588">
                Пересобрал систему фильтров
              </p>
              <p className="font-['Onest:Regular'] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content]" data-node-id="1:1589">
                Перегруппировал существующие параметры, вынес тип размещения и жилья в отдельные фильтры, объединил удобства и упростил выбор цены.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:1590">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:1591">
                Добавил важные критерии поиска
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1592">
                Добавил фильтры по метро, улице, району, достопримечательностям и ключевым атрибутам жилья — часть этих возможностей пользователи ранее запрашивали через поддержку.
              </p>
              <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:1593">
                <div className="h-[287px] max-h-[322.9200134277344px] max-w-[360px] relative rounded-[8px] shrink-0 w-[319.955px]" data-node-id="1:1594" data-name="image 171">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage171} />
                </div>
                <div className="h-[287px] max-h-[323.4461364746094px] max-w-[360px] relative rounded-[8px] shrink-0 w-[319.435px]" data-node-id="1:1595" data-name="image 172">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <div className="absolute bg-white inset-0 rounded-[8px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                      <img alt="" className="absolute h-[92.98%] left-[-0.08%] max-w-none top-[6.5%] w-[100.17%]" src={imgImage172} />
                    </div>
                  </div>
                </div>
                <div className="h-[252px] max-h-[283.09259033203125px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.461px]" data-node-id="1:1596" data-name="image 173">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage173} />
                </div>
                <div className="h-[184px] max-h-[207.72000122070312px] max-w-[360px] relative rounded-[8px] shrink-0 w-[318.891px]" data-node-id="1:1597" data-name="image 174">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage174} />
                </div>
              </div>
              <div className="bg-[#1a3d56] border-l-2 border-solid border-white content-stretch flex flex-col items-center px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="1:1598">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1599">
                  По информации техподдержки, пользователи сайта неоднократно просили добавить эти эти фильтры на сайт.
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:1600">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:1601">
                Помог выбирать даты
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:1602">
                Добавил загрузку жилья на выбранные и соседние даты, чтобы показать доступность и помочь найти альтернативу.
              </p>
              <div className="h-[196px] max-h-[220.78125px] max-w-[360px] relative rounded-[8px] shrink-0 w-[319.592px]" data-node-id="1:1603" data-name="image 176">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage176} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:1604">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:1605">
                Статистика бронирования на выбранные даты
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:1606">
                Добавил информацию о доступности жилья на выбранные и соседние даты, чтобы пользователь лучше понимал спрос и мог при необходимости выбрать альтернативные даты.
              </p>
              <div className="h-[113.75px] max-h-[127.96875px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320px]" data-node-id="1:1607" data-name="image 177">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage177} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1608">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1609">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:1610">
            Сравнение апартаментов
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1611">
            Возможность сравнения апартаментов — уникальная функция для сайтов такого типа. У конкурентов Добово, в том числе Airbnb, такой функции нет и по сей день.
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:1612">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white w-full" data-node-id="1:1613">
              <p className="font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] whitespace-nowrap" data-node-id="1:1614">
                Проблемы
              </p>
              <div className="font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[16px] w-[min-content]" data-node-id="1:1615">
                <p className="leading-[1.35] mb-[12px]">Несмотря на всю полезность функции, ей пользовалась лишь небольшая часть пользователей. Я предположил, что причины этому следующие:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[24px]">
                    <span className="leading-[1.35]">Отсутствие выбора дат въезда и выезда, и, как следствие, невозможность сравнения по цене за ночь, а это основной фактор для огромного количества пользователей.</span>
                  </li>
                  <li className="ms-[24px]">
                    <span className="leading-[1.35]">Плохо структурированная информация о сравниваемых апартаментах, без разделения на блоки. Визуально информацию было сложно воспринимать.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1616">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:1617">
                Решение
              </p>
              <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1618">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1619">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1620">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Добавил выбор дат проживания.</span>
                    <span className="leading-[1.35] text-[16px]">{` Стало возможным показывать цены за ночь.`}</span>
                  </p>
                  <div className="h-[133px] max-h-[149.81594848632812px] max-w-[360px] relative rounded-[8px] shrink-0 w-[319.592px]" data-node-id="1:1621" data-name="image 179">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                      <div className="absolute bg-white inset-0 rounded-[8px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage179} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1622">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1623">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">{`Сгруппировал информацию об апартаментах. `}</span>
                    <span className="leading-[1.35] text-[16px]">Город и район - в локацию, типы и количество спальных мест - в спальные места и т.д.</span>
                  </p>
                  <div className="h-[178px] max-h-[200.2454071044922px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.007px]" data-node-id="1:1624" data-name="image 180">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                      <div className="absolute bg-white inset-0 rounded-[8px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage180} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#1a3d56] content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1625">
                  <div className="relative shrink-0 size-[32px]" data-node-id="1:1626" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[0] min-w-px relative text-[16px] text-white" data-node-id="1:1628">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Результат:</span>
                    <span className="leading-[1.35]">{` после редизайна функцией сравнения стали пользоваться в 4 раза чаще.`}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1629">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1630" data-name="Apartment page">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:1631">
            Страница апартаментов
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1632">
            Пользователи часто уходили со страницы, не начав бронирование. Я пересобрал структуру и сделал важную для принятия решения информацию заметнее.
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:1633">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1634">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1635">
                <span className="leading-[1.35] text-[16px]">{`Правила дома `}</span>
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">(время въезда и выезда, различные ограничения, залог, получение ключей и т.д.)</span>
                <span className="leading-[1.35] text-[16px]">{` я вытащил из общего описания апартаментов и разместил отдельным блоком. Эта информация критически важна для части пользователей, поэтому прятать её было не совсем логично.`}</span>
              </p>
              <div className="h-[348px] max-h-[391px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.409px]" data-node-id="1:1636" data-name="image 181">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage181} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1637">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1638">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Добавил правила отмены бронирования.</span>
                <span className="leading-[1.35] text-[16px]">{` Раньше для уточнения этой информации пользователям приходилось связываться с владельцем апартаментов. Не все владельцы имели возможность оперативно отвечать на вопросы, поэтому в некоторых случаях пользователи просто бронировали другие апартаменты.`}</span>
              </p>
              <div className="h-[68px] max-h-[76.9921875px] max-w-[360px] relative rounded-[8px] shrink-0 w-[317.954px]" data-node-id="1:1639" data-name="image 182">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage182} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1640">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1641">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Добавил список офферов</span>
                <span className="leading-[1.35] text-[16px]">, чтобы пользователям легко видели, бронирование на какие даты является максимально выгодным.</span>
              </p>
              <div className="h-[152px] max-h-[170.5078125px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.924px]" data-node-id="1:1642" data-name="image 183">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage183} />
              </div>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1643">
              <div className="relative shrink-0 size-[32px]" data-node-id="1:1644" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[0] min-w-px relative text-[16px] text-white" data-node-id="1:1646">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Результат:</span>
                <span className="leading-[1.35]">{` среднее время просмотра страницы увеличилось на 27%.`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1647">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1648">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:1649">
            Бронирование
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:1650">
            Данные показывали, что часть пользователей начинала бронирование, но не завершала его. Точной причины оттока определить не удалось, а команда не была готова полностью менять уже работающий сценарий, поэтому мы ограничились точечными улучшениями на основе известных проблем и UX-паттернов.
          </p>
          <div className="h-[261px] max-h-[293.5546875px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.077px]" data-node-id="1:1651" data-name="image 185">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage185} />
          </div>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:1652">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1653">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1654">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Я добавил правила дома на первый шаг бронирования</span>
                <span className="leading-[1.35] text-[16px]">, так они содержат важную информацию, особенно время заезда и выезда. Таким образом, пользователям не нужно прерывать процесс бронирования, если им необходимо ознакомится с правилами дома ещё раз.</span>
              </p>
              <div className="h-[336px] max-h-[377.1871032714844px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.69px]" data-node-id="1:1655" data-name="image 186">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-white inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage186} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1656">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1657">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Использование подарочного сертификата я сделал опцией.</span>
                <span className="leading-[1.35] text-[16px]">{` Раньше это был отдельный метод оплаты, чтобы было крайне неудобно, особенно когда номинал сертификата был ниже стоимости бронирования — в таких случаях сертификаты были просто бесполезными. Также стоит отметить, что подарочные сертификаты Добово были очень популярны, поэтому нужно было срочно исправлять ситуацию.`}</span>
              </p>
              <div className="h-[170px] max-h-[190.546875px] max-w-[360px] relative rounded-[8px] shrink-0 w-[321.181px]" data-node-id="1:1658" data-name="image 187">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage187} />
              </div>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1659">
              <div className="relative shrink-0 size-[32px]" data-node-id="1:1660" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:1662">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">В результате</span>
                <span className="leading-[1.35] text-[16px]">{` проделанных изменений количество завершённых бронирований возросло на 35%.`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1663">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1664">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:1665">
            Личный кабинет
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:1666">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1667">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:1668">
                Личный кабинет отсутствовал в мобильной версии. Я провёл ревизию сценариев и спроектировал все состояния профиля для адаптивного интерфейса, чтобы его функции стали доступны на любом устройстве.
              </p>
              <div className="h-[284px] max-h-[319.39453125px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.106px]" data-node-id="1:1669" data-name="image 188">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage188} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1670">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:1671">
                Теперь профиль и все функции в нём доступны на любом устройстве.
              </p>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1672">
                <div className="h-[694px] max-h-[780px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.308px]" data-node-id="1:1673" data-name="image 189">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage189} />
                </div>
                <div className="h-[694px] max-h-[780px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.308px]" data-node-id="1:1674" data-name="image 190">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage190} />
                </div>
                <div className="h-[693px] max-h-[780px] max-w-[360px] relative rounded-[8px] shrink-0 w-[319.846px]" data-node-id="1:1675" data-name="image 191">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage191} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1676">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1677">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:1678">
            До и после
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:1679">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1680">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:1681">
                До:
              </p>
              <div className="h-[301px] max-h-[337.78125px] max-w-[360px] relative rounded-[8px] shrink-0 w-[320.799px]" data-node-id="1:1682" data-name="image 192">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage192} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1683">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:1684">
                После:
              </p>
              <div className="h-[300px] max-h-[337.78125px] max-w-[360px] relative rounded-[8px] shrink-0 w-[319.734px]" data-node-id="1:1685" data-name="image 193">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage193} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[455px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full z-[4]" />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[44px] items-center left-[16px] overflow-clip px-[24px] py-[12px] rounded-[8px] top-[16px] z-[3]" data-node-id="1:1687" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:1687;1:3192" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:1687;1:3192;1:7856" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="I1:1687;1:3192;1:7858">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[1280px] overflow-clip px-[16px] py-[4px] rounded-[8px] top-[36px] w-[100px] z-[2]" data-node-id="1:1688" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:1688;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:1688;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:1688;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:1688;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:1688;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
    </div>
  );
}