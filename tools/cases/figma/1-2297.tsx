const assetPathPrefix = "https://www.figma.com/api/mcp/asset/ce463e90-4fad-4c08-ae96-369cf0fe91b4";
const imgCover = `${assetPathPrefix}/252ab.png`;
const imgImage148 = `${assetPathPrefix}/529bb.png`;
const imgImage149 = `${assetPathPrefix}/344d4.png`;
const imgImage150 = `${assetPathPrefix}/c9600.png`;
const imgImage151 = `${assetPathPrefix}/89648.png`;
const imgImage152 = `${assetPathPrefix}/5f1da.png`;
const imgImage153 = `${assetPathPrefix}/e3fa8.png`;
const imgImage154 = `${assetPathPrefix}/d01ef.png`;
const imgImage155 = `${assetPathPrefix}/b6c52.png`;
const imgImage156 = `${assetPathPrefix}/e9cb8.png`;
const imgImage157 = `${assetPathPrefix}/5f4fe.png`;
const imgImage158 = `${assetPathPrefix}/b2cb7.png`;
const imgImage159 = `${assetPathPrefix}/123fb.png`;
const imgImage160 = `${assetPathPrefix}/5a223.png`;
const imgImage161 = `${assetPathPrefix}/734a5.png`;
const imgImage162 = `${assetPathPrefix}/46ca4.png`;
const imgLine24 = `${assetPathPrefix}/6789e.svg`;
const imgLine2 = `${assetPathPrefix}/c2395.svg`;
const imgFrame = `${assetPathPrefix}/21b83.svg`;

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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[124px] px-[60px] relative size-full" data-node-id="1:2297" data-name="Desktop">
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[calc(50%+610px)] overflow-clip px-[16px] py-[4px] rounded-[8px] top-[36px] w-[100px] z-[4]" data-node-id="1:2298" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:2298;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:2298;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:2298;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:2298;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:2298;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[1320px] z-[3]" data-node-id="1:2299">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2300">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:2301">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" data-node-id="1:2302">
              Pentor Exchange
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[22px] text-white w-[min-content]" data-node-id="1:2303">
              Редизайн мобильного приложения популярной сети пунктов обмена валют в Бангкоке.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:2304">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2305">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2306">
                  Fintech
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2307">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2308">
                  Mobile
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2309">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2310">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative shrink-0 w-full" data-node-id="1:2311" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCover} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex gap-[60px] items-start leading-[1.35] px-[24px] py-[20px] relative rounded-[16px] shrink-0 text-white w-[1320px] whitespace-nowrap" data-node-id="1:2313">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:2314">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[18px]" data-node-id="1:2315">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[16px]" data-node-id="1:2316">
                Snocko Technologies Co.Ltd
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[18px]" data-node-id="1:2317">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:2318">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:2319">
                Продуктовый дизайнер
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[28px] text-white w-[1000px]" data-node-id="1:2323">
          <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Pentor Exchange</span>
          <span className="leading-[1.35]">{` — это популярная сеть пунктов обменов валют с лучшими курсами в Бангкоке, Таиланд. Сеть имеет одноимённое мобильное приложение для ознакомления с курсами валют и информацией о локациях обменных пунктов.`}</span>
        </p>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2324">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2325">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2326">
            Задача
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2327">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal h-[72px] leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:2328">
              Полноценный редизайн приложения. Причина: старое приложение сильно устарело — его дизайн не соответствовал ни визуальным нормам, ни стандартам юзабилити. Кроме того, в приложении отсутствовали функции, которые уже давно были реализованы у конкурентов.
            </p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="1:2329">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:2330">
                Интерфейс старого приложения:
              </p>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2331" data-name="image 148">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage148} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2332">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2333">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2334">
            Проблема
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2335">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:2336">
              На рынке приложений для мониторинга обменных курсов по сей день присутствует явная проблема: все его игроки стараются копировать лидеров рынка — приложения сети обменных пунктов SuperRich и SuperRich1965. Эти приложения далеко не самые удобные, поэтому вместо слепого копирования я настоял на проведении как минимум коридорного тестирования, чтобы убедиться в том, что реализованные решения у лидеры рынка далеки от идеала.
            </p>
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-node-id="1:2337">
              <div className="h-[760px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2338" data-name="image 149">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage149} />
              </div>
              <div className="h-[760px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2339" data-name="image 150">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage150} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2340">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:2341">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2342">
            Гипотезы
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[800px]" data-node-id="1:2343">
            <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2344">
              <p className="leading-[1.35] mb-[12px]">Поскольку одним из требованием было спроектировать калькулятор обмена, который, на мой взгляд, был не самым удобным у конкурентов, возникла необходимость провести небольшое тестирование, чтобы подтвердить две сформированные гипотезы.</p>
              <p className="leading-[1.35]">Для этого я провёл коридорное тестирование с 15-ю коллегами.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2345">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:2346">
                Гипотеза #1
              </p>
              <div className="bg-[#1f2a4c] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:2347">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2348">
                  <span className="leading-[1.35]">{`Некоторые люди путаются в таблицах, где указаны курсы покупки и продажи. `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Покупка</span>
                  <span className="leading-[1.35]">{` — кто покупает? `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Продажа</span>
                  <span className="leading-[1.35]">{` — кто продаёт? Обменный пункт или человек, меняющий валюту?`}</span>
                </p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2349">
                На мой взгляд, было бы гораздо понятней, если бы интерфейс спрашивал, сколько у человека валюты есть и сколько он хочет получить в обмен.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2350">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:2351">
                Гипотеза #2
              </p>
              <div className="bg-[#1f2a4c] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:2352">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2353">
                  <span className="leading-[1.35]">{`Не все люди понимают, что такое `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">деноминация</span>
                  <span className="leading-[1.35]">, и использовать это слово в интерфейсе для обозначения функции некорректно.</span>
                </p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2354">
                Эта гипотеза возникла после необходимости реализовать функцию, которая уже была у конкурентов — указание в калькуляторе банкнот каждого номинала для получения суммы, на которую эти банкноты можно обменять.
              </p>
            </div>
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2355">
              В ходе тестирования почти все из 15-и коллег были согласны со мной, поэтому было решено проектировать интерфейс отличным от конкурентов.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2356">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2357">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2358">
            Обменные курсы
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:2359">
            <span className="leading-[1.35]">{`Исходя из подтверждённой гипотезы #1, пресловутые `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Buying</span>
            <span className="leading-[1.35]">{` и `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Selling</span>
            <span className="leading-[1.35]">{` я заменил на более понятные `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35]">We buy</span>
            <span className="leading-[1.35]">{` и `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35]">We sell</span>
            <span className="leading-[1.35]">, чтобы было точно ясно, кто продаёт и покупает — именно обменные пункт, а не человек, совершающий обмен. Таким образом, на этом экране не остаётся места для непонимания.</span>
          </p>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-node-id="1:2360">
            <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2361" data-name="image 151">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage151} />
            </div>
            <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2362" data-name="image 152">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage152} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2363">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2364">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2365">
            Калькулятор
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2366">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:2367">
              Тут использовались выводы как из первой, так и второй гипотезы.
            </p>
            <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0" data-node-id="1:2368">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[800px]" data-node-id="1:2369">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:2370">
                  Указание полной суммы обмена
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2371">
                  Приложение понятно спрашивает, какая валюта у пользователя есть, и какую он хочет получить взамен. Далее пользователь вводит сумму валюты, которая у него есть, и получает ответ, сколько он получит за её обмен.
                </p>
                <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2372" data-name="image 153">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage153} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[800px]" data-node-id="1:2373">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:2374">
                  Указание суммы банкнот каждого номинала
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2375">
                  Если же пользователь хочет узнать точную сумму, которую он получит в результате обмена, он может указать суммы банкнот всех номиналов, которые есть у него руках, и приложение посчитает точную сумму валюты, которую он получит взамен. Эта опция есть только если у валюты получения есть несколько деноминаций (например, USD).
                </p>
                <div className="h-[981px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2376" data-name="image 154">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage154} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2377">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2378">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2379">
            Локации обменных пунктов
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2380">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:2381">
              Информацию о местонахождении обменных пунктов можно наглядно изучить как списком, так и на карте. Также можно посмотреть фото обменного пункта для легкого его нахождения.
            </p>
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="1:2382">
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2383" data-name="image 155">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage155} />
              </div>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2384" data-name="image 156">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage156} />
              </div>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2385" data-name="image 157">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage157} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2386">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2387">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2388">
            Онбординг
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2389">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:2390">
              Для новых пользователь я подготовил онбординг, помогающий ориентироваться в приложении при первом его запуске.
            </p>
            <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:2391">
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2392" data-name="image 158">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage158} />
              </div>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2393" data-name="image 159">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage159} />
              </div>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2394" data-name="image 160">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage160} />
              </div>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2395" data-name="image 161">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage161} />
              </div>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2396" data-name="image 162">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage162} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2397">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:2398">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:2399">
            Текущий статус
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-[800px]" data-node-id="1:2400">
            Приложение работает и пользуется популярностью в Таиланде туристами со всего мира.
          </p>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[461px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[1320px] z-[2]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[calc(50%-571.5px)] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[36px] z-[1]" data-node-id="1:2402" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:2402;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:2402;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:2402;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}