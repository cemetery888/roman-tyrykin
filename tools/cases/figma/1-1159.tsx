const assetPathPrefix = "https://www.figma.com/api/mcp/asset/0da286a5-655e-4bbd-845e-c6eec686390d";
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
const imgLine14 = `${assetPathPrefix}/c2395.svg`;
const imgFrame = `${assetPathPrefix}/af987.svg`;
const imgFrame1 = `${assetPathPrefix}/21b83.svg`;

type SectionProps = {
  className?: string;
  device?: "Desktop";
};

function Section({ className, device = "Desktop" }: SectionProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[461px] items-start overflow-clip relative rounded-[12px] w-[1320px]"} data-node-id="1:8411" style={{ backgroundImage: "linear-gradient(155.0306501596158deg, rgb(91, 75, 224) 14.286%, rgb(169, 79, 214) 53.571%, rgb(226, 86, 108) 85.714%)" }}>
      <div className="content-stretch flex gap-[64px] items-end overflow-clip px-[56px] py-[64px] relative shrink-0 w-full" data-node-id="1:8412" data-name="Main">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-[460px] overflow-clip relative" data-node-id="1:8413" data-name="CTA">
          <div className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[0] relative shrink-0 text-[104px] text-white tracking-[-4.16px] w-full" data-node-id="1:8414">
            <p className="leading-[0.95] mb-0">Давайте</p>
            <p className="leading-[0.95]">работать</p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch cursor-pointer flex flex-[1_0_0] flex-col items-start leading-[normal] max-w-[520px] min-w-[300px] overflow-clip relative text-left text-white" data-node-id="1:8415" data-name="Links">
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid border-t content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="https://t.me/bslt777" data-node-id="1:8416" target="_blank" data-name="Link / Telegram">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8417">
              Telegram
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8418">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="mailto:roman-xt@ya.ru" data-node-id="1:8419" target="_blank" data-name="Link / Email">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8420">
              Email
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8421">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="https://www.linkedin.com/in/romantyrykin/" data-node-id="1:8422" target="_blank" data-name="Link / LinkedIn">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8423">
              LinkedIn
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8424">
              ↗
            </p>
          </a>
          <a className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex gap-[20px] items-center overflow-clip py-[22px] relative shrink-0 w-full" href="https://drive.google.com/file/d/1dLAbhlt6F31C2GcOhBuqI8fjYoDFft10" data-node-id="1:8425" target="_blank" data-name="Link / CV">
            <p className="flex-[1_0_0] font-['Onest:Medium'] font-medium min-w-px relative text-[30px] tracking-[-0.3px]" data-node-id="1:8426">
              CV
            </p>
            <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:8427">
              ↗
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[124px] px-[60px] relative size-full" data-node-id="1:1159" data-name="Desktop">
      <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[1320px] z-[5]" data-node-id="1:1161">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1162">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:1163">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" data-node-id="1:1164">
              Добово
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[22px] text-white w-[min-content]" data-node-id="1:1165">
              Редизайн популярного сервиса краткосрочной аренды квартир.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:1166">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:1167">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1168">
                  Travel
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:1169">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1170">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative shrink-0 w-full" data-node-id="1:1171" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCover} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex gap-[60px] items-start leading-[1.35] px-[24px] py-[20px] relative rounded-[16px] shrink-0 text-[18px] text-white w-full whitespace-nowrap" data-node-id="1:1174">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:1175">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:1176">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:1177">
                Turum-burum
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:1178">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:1179">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:1180">
                UX-дизайнер
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0" data-node-id="1:1184">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:1185">
            <a className="[word-break:break-word] block font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#303030] text-[0px] w-[1000px]" href="https://www.ihaveticket.com/" data-node-id="1:1186" target="_blank">
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
          <div className="[word-break:break-word] content-stretch flex gap-[16px] items-center leading-[1.35] relative shrink-0 text-white" data-node-id="1:1187">
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1188">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1189">
                71
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1190">
                Город по всей стране
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1191">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1192">
                6,000,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1193">
                Ночей забронировано
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1194">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1195">
                7,400+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1196">
                Квартир на любой вкус
              </p>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-[274px]" data-node-id="1:1197">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[36px] w-full" data-node-id="1:1198">
                120,000+
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[20px] w-full" data-node-id="1:1199">
                Отзывов написано
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] border-3 border-[#3275a4] border-solid content-stretch flex flex-col gap-[16px] items-start p-[28px] relative rounded-[12px] shrink-0 text-white w-[1000px]" data-node-id="1:1200">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:1201">
            Результаты и метрики
          </p>
          <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[18px] w-full" data-node-id="1:1202">
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
        <div className="[word-break:break-word] content-stretch flex items-start justify-between relative shrink-0 text-white w-full" data-node-id="1:1203">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:1204">
            Проблемы
          </p>
          <div className="content-stretch flex flex-col font-['Onest:Regular'] font-normal gap-[20px] items-center justify-center relative shrink-0 text-[18px]" data-node-id="1:1205">
            <p className="leading-[1.35] relative shrink-0 w-[800px]" data-node-id="1:1206">
              Пользователям было сложно быстро найти подходящее жильё, сравнить варианты и завершить бронирование. Основной задачей редизайна стало упростить этот путь — от поиска до оплаты.
            </p>
            <ul className="block leading-[0] list-disc relative shrink-0 w-[800px]" data-node-id="1:1207">
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
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1208">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:1209">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1210">
            Решение
          </p>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[800px]" data-node-id="1:1211">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:1212">
              Мы решили полностью переработать продукт по принципу Mobile First и перейти от отдельных desktop- и mobile-версий к единому адаптивному интерфейсу. Мобильный трафик уже составлял большую часть посещений и продолжал расти, а поддержка двух разных версий увеличивала техническую сложность и приводила к различиям в функциональности.
            </p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:1213">
              <div className="aspect-[768/351] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1214" data-name="image 163">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage163} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1215">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex items-start justify-between relative shrink-0 text-white w-full" data-node-id="1:1216">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:1217">
            Что я сделал
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative self-stretch shrink-0 text-[18px] w-[800px]" data-node-id="1:1218">
            Я отвечал за UX редизайна: анализировал продуктовые данные и конкурентов, участвовал в работе со стейкхолдерами, проектировал ключевые сценарии и прототипы для mobile, tablet и desktop.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1219">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex items-start justify-between relative shrink-0 text-white w-full" data-node-id="1:1220">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:1221">
            Подход
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-[800px]" data-node-id="1:1222">
            Основным источником знаний о пользователях стала команда Dobovo: мы регулярно проводили рабочие сессии с владельцем продукта и другими стейкхолдерами, дополняя их данными Google Analytics, обращениями в поддержку и анализом существующего продукта.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1223">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1224">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1225">
            Конкуренты
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1226">
            Я изучил украинских конкурентов и глобальные сервисы бронирования, чтобы найти устоявшиеся паттерны и возможности для улучшения Dobovo. Релевантные решения затем обсуждали и приоритизировали вместе с владельцем продукта.
          </p>
          <div className="aspect-[2000/1331] relative rounded-[12px] shrink-0 w-full" data-node-id="1:1227" data-name="image 170">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage170} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1228">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1229">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1230">
            Поисковая выдача (список апартаментов в городе)
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1231">
            Страница с поисковой выдачей является одной из ключевой на сайте — в подавляющем числе случаев выбор апартаментов происходит именно на ней.
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1232">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[1.35] relative shrink-0 text-white" data-node-id="1:1233">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[24px] w-[800px]" data-node-id="1:1234">
                Пересобрал систему фильтров
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[18px] w-[800px]" data-node-id="1:1235">
                Перегруппировал существующие параметры, вынес тип размещения и жилья в отдельные фильтры, объединил удобства и упростил выбор цены.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1236">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] text-white w-[800px]" data-node-id="1:1237">
                Добавил важные критерии поиска
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1238">
                Добавил фильтры по метро, улице, району, достопримечательностям и ключевым атрибутам жилья — часть этих возможностей пользователи ранее запрашивали через поддержку.
              </p>
              <div className="content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1239">
                <div className="h-[583.05px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1240" data-name="image 171">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage171} />
                </div>
                <div className="h-[584px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1241" data-name="image 172">
                  <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                    <div className="absolute bg-white inset-0 rounded-[12px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                      <img alt="" className="absolute h-[92.98%] left-[-0.08%] max-w-none top-[6.5%] w-[100.17%]" src={imgImage172} />
                    </div>
                  </div>
                </div>
                <div className="h-[512px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1242" data-name="image 173">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage173} />
                </div>
                <div className="h-[375.05px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:1243" data-name="image 174">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage174} />
                </div>
              </div>
              <div className="bg-[#1a3d56] border-l-2 border-solid border-white content-stretch flex items-center px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-[650px]" data-node-id="1:1244">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[1.35] min-w-px relative text-[18px] text-white" data-node-id="1:1245">
                  По информации техподдержки, пользователи сайта неоднократно просили добавить эти эти фильтры на сайт.
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1246">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] text-white w-[800px]" data-node-id="1:1247">
                Помог выбирать даты
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1248">
                Добавил загрузку жилья на выбранные и соседние даты, чтобы показать доступность и помочь найти альтернативу.
              </p>
              <div className="h-[614px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1249" data-name="image 176">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage176} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1250">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] text-white w-[800px]" data-node-id="1:1251">
                Помог выбирать даты
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1252">
                Добавил информацию о доступности жилья на выбранные и соседние даты, чтобы пользователь лучше понимал спрос и мог при необходимости выбрать альтернативные даты.
              </p>
              <div className="h-[356px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1253" data-name="image 177">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage177} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1254">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1255" data-name="Comparison">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1256">
            Сравнение апартаментов
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1257">
            Возможность сравнения апартаментов — уникальная функция для сайтов такого типа. У конкурентов Добово, в том числе Airbnb, такой функции нет и по сей день.
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1258">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-white" data-node-id="1:1259">
              <p className="font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] w-[800px]" data-node-id="1:1260">
                Проблемы
              </p>
              <div className="font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-[800px]" data-node-id="1:1261">
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
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:1262">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] text-white w-[800px]" data-node-id="1:1263">
                Решение
              </p>
              <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0" data-node-id="1:1264">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1265">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1266">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Добавил выбор дат проживания.</span>
                    <span className="leading-[1.35]">{` Стало возможным показывать цены за ночь.`}</span>
                  </p>
                  <div className="h-[416.155px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1267" data-name="image 179">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                      <div className="absolute bg-white inset-0 rounded-[12px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImage179} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1268">
                  <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1269">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35]">{`Сгруппировал информацию об апартаментах. `}</span>
                    <span className="leading-[1.35]">Город и район - в локацию, типы и количество спальных мест - в спальные места и т.д.</span>
                  </p>
                  <div className="h-[556px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1270" data-name="image 180">
                    <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                      <div className="absolute bg-white inset-0 rounded-[12px]" />
                      <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImage180} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#1a3d56] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[800px]" data-node-id="1:1271">
                  <div className="relative shrink-0 size-[32px]" data-node-id="1:1272" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[0] min-w-px relative text-[0px] text-white" data-node-id="1:1274">
                    <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[18px]">Результат:</span>
                    <span className="leading-[1.35] text-[18px]">{` после редизайна функцией сравнения стали пользоваться в 4 раза чаще.`}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1275">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1276" data-name="Apartment page">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1277">
            Страница апартаментов
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-[800px]" data-node-id="1:1278">
            Пользователи часто уходили со страницы, не начав бронирование. Я пересобрал структуру и сделал важную для принятия решения информацию заметнее.
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1279">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1280">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1281">
                <span className="leading-[1.35]">{`Правила дома `}</span>
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">(время въезда и выезда, различные ограничения, залог, получение ключей и т.д.)</span>
                <span className="leading-[1.35]">{` я вытащил из общего описания апартаментов и разместил отдельным блоком. Эта информация критически важна для части пользователей, поэтому прятать её было не совсем логично.`}</span>
              </p>
              <div className="h-[1086px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1282" data-name="image 181">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage181} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1283">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1284">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Добавил правила отмены бронирования.</span>
                <span className="leading-[1.35]">{` Раньше для уточнения этой информации пользователям приходилось связываться с владельцем апартаментов. Не все владельцы имели возможность оперативно отвечать на вопросы, поэтому в некоторых случаях пользователи просто бронировали другие апартаменты.`}</span>
              </p>
              <div className="h-[214px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1285" data-name="image 182">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage182} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1286">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1287">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Добавил список офферов</span>
                <span className="leading-[1.35]">, чтобы пользователям легко видели, бронирование на какие даты является максимально выгодным.</span>
              </p>
              <div className="h-[473px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1288" data-name="image 183">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage183} />
              </div>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex gap-[20px] items-center px-[24px] py-[20px] relative rounded-[12px] shrink-0" data-node-id="1:1289">
              <div className="relative shrink-0 size-[32px]" data-node-id="1:1290" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:1292">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Результат:</span>
                <span className="leading-[1.35]">{` среднее время просмотра страницы увеличилось на 27%.`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1293">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1294" data-name="Booking">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1295">
            Бронирование
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1296">
            Данные показывали, что часть пользователей начинала бронирование, но не завершала его. Точной причины оттока определить не удалось, а команда не была готова полностью менять уже работающий сценарий, поэтому мы ограничились точечными улучшениями на основе известных проблем и UX-паттернов.
          </p>
          <div className="h-[489px] relative shrink-0 w-[600px]" data-node-id="1:1297" data-name="image 185">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage185} />
          </div>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="1:1298">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1299">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1300">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Я добавил правила дома на первый шаг бронирования</span>
                <span className="leading-[1.35]">, так они содержат важную информацию, особенно время заезда и выезда. Таким образом, пользователям не нужно прерывать процесс бронирования, если им необходимо ознакомится с правилами дома ещё раз.</span>
              </p>
              <div className="h-[1047px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1301" data-name="image 186">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
                  <div className="absolute bg-white inset-0 rounded-[12px]" />
                  <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImage186} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1302">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1303">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Использование подарочного сертификата я сделал опцией.</span>
                <span className="leading-[1.35]">{` Раньше это был отдельный метод оплаты, чтобы было крайне неудобно, особенно когда номинал сертификата был ниже стоимости бронирования — в таких случаях сертификаты были просто бесполезными. Также стоит отметить, что подарочные сертификаты Добово были очень популярны, поэтому нужно было срочно исправлять ситуацию.`}</span>
              </p>
              <div className="h-[529px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1304" data-name="image 187">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage187} />
              </div>
            </div>
            <div className="bg-[#1a3d56] content-stretch flex gap-[20px] items-center px-[24px] py-[20px] relative rounded-[12px] shrink-0" data-node-id="1:1305">
              <div className="relative shrink-0 size-[32px]" data-node-id="1:1306" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:1308">
                <span className="font-['Onest:Bold'] font-bold leading-[1.35]">В результате</span>
                <span className="leading-[1.35]">{` проделанных изменений количество завершённых бронирований возросло на 35%.`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1309">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1310">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1311">
            Личный кабинет
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-node-id="1:1312">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1313">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1314">
                Личный кабинет отсутствовал в мобильной версии. Я провёл ревизию сценариев и спроектировал все состояния профиля для адаптивного интерфейса, чтобы его функции стали доступны на любом устройстве.
              </p>
              <div className="h-[887px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1315" data-name="image 188">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage188} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1316">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:1317">
                Теперь профиль и все функции в нём доступны на любом устройстве.
              </p>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="1:1318">
                <div className="h-[780px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:1319" data-name="image 189">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage189} />
                </div>
                <div className="h-[780px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:1320" data-name="image 190">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage190} />
                </div>
                <div className="h-[780px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:1321" data-name="image 191">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage191} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:1322">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:1323">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1324">
            До и после
          </p>
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-node-id="1:1325">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1326">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="1:1327">
                До:
              </p>
              <div className="h-[938px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1328" data-name="image 192">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage192} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="1:1329">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="1:1330">
                После:
              </p>
              <div className="h-[938px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:1331" data-name="image 193">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage193} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[461px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[1320px] z-[4]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[calc(50%-571.5px)] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[36px] z-[3]" data-node-id="1:1333" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:1333;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:1333;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:1333;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}