const assetPathPrefix = "https://www.figma.com/api/mcp/asset/517d7f6e-a21b-44f9-befb-03519aefcc3e";
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
const imgLine2 = `${assetPathPrefix}/4cb4b.svg`;
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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[100px] px-[40px] relative size-full" data-node-id="1:2403" data-name="Tablet">
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center overflow-clip px-[16px] py-[4px] right-[40px] rounded-[8px] top-[24px] w-[100px] z-[4]" data-node-id="1:2404" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:2404;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:2404;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:2404;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:2404;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:2404;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full z-[3]" data-node-id="1:2405">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2406">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:2407">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[36px] text-white w-[min-content]" data-node-id="1:2408">
              Pentor Exchange
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2409">
              Редизайн мобильного приложения популярной сети пунктов обмена валют в Бангкоке.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:2410">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2411">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2412">
                  Fintech
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2413">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2414">
                  Mobile
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2415">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2416">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative shrink-0 w-full" data-node-id="1:2417" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCover} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex gap-[40px] items-start leading-[1.35] px-[24px] py-[20px] relative rounded-[16px] shrink-0 text-white w-full whitespace-nowrap" data-node-id="1:2419">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:2420">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0 text-[18px]" data-node-id="1:2421">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0 text-[16px]" data-node-id="1:2422">
                Snocko Technologies Co.Ltd
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[18px]" data-node-id="1:2423">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:2424">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:2425">
                Продуктовый дизайнер
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:2429">
          <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Pentor Exchange</span>
          <span className="leading-[1.35]">{` — это популярная сеть пунктов обменов валют с лучшими курсами в Бангкоке, Таиланд. Сеть имеет одноимённое мобильное приложение для ознакомления с курсами валют и информацией о локациях обменных пунктов.`}</span>
        </p>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2430">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2431">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2432">
            Задача
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2433">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2434">
              Полноценный редизайн приложения. Причина: старое приложение сильно устарело — его дизайн не соответствовал ни визуальным нормам, ни стандартам юзабилити. Кроме того, в приложении отсутствовали функции, которые уже давно были реализованы у конкурентов.
            </p>
            <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[680px] relative shrink-0" data-node-id="1:2435">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:2436">
                Интерфейс старого приложения:
              </p>
              <div className="h-[800px] relative rounded-[12px] shrink-0 w-[360px]" data-node-id="1:2437" data-name="image 148">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage148} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2438">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2439">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2440">
            Проблема
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2441">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2442">
              На рынке приложений для мониторинга обменных курсов по сей день присутствует явная проблема: все его игроки стараются копировать лидеров рынка — приложения сети обменных пунктов SuperRich и SuperRich1965. Эти приложения далеко не самые удобные, поэтому вместо слепого копирования я настоял на проведении как минимум коридорного тестирования, чтобы убедиться в том, что реализованные решения у лидеры рынка далеки от идеала.
            </p>
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-node-id="1:2443">
              <div className="h-[675px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2444" data-name="image 149">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage149} />
              </div>
              <div className="h-[675px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2445" data-name="image 150">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage150} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2446">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2447">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2448">
            Гипотезы
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:2449">
            <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2450">
              <p className="leading-[1.35] mb-[12px]">Поскольку одним из требованием было спроектировать калькулятор обмена, который, на мой взгляд, был не самым удобным у конкурентов, возникла необходимость провести небольшое тестирование, чтобы подтвердить две сформированные гипотезы.</p>
              <p className="leading-[1.35]">Для этого я провёл коридорное тестирование с 15-ю коллегами.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2451">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:2452">
                Гипотеза #1
              </p>
              <div className="bg-[#1f2a4c] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:2453">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2454">
                  <span className="leading-[1.35]">{`Некоторые люди путаются в таблицах, где указаны курсы покупки и продажи. `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Покупка</span>
                  <span className="leading-[1.35]">{` — кто покупает? `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Продажа</span>
                  <span className="leading-[1.35]">{` — кто продаёт? Обменный пункт или человек, меняющий валюту?`}</span>
                </p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2455">
                На мой взгляд, было бы гораздо понятней, если бы интерфейс спрашивал, сколько у человека валюты есть и сколько он хочет получить в обмен.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2456">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:2457">
                Гипотеза #2
              </p>
              <div className="bg-[#1f2a4c] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:2458">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2459">
                  <span className="leading-[1.35]">{`Не все люди понимают, что такое `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">деноминация</span>
                  <span className="leading-[1.35]">, и использовать это слово в интерфейсе для обозначения функции некорректно.</span>
                </p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2460">
                Эта гипотеза возникла после необходимости реализовать функцию, которая уже была у конкурентов — указание в калькуляторе банкнот каждого номинала для получения суммы, на которую эти банкноты можно обменять.
              </p>
            </div>
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2461">
              В ходе тестирования почти все из 15-и коллег были согласны со мной, поэтому было решено проектировать интерфейс отличным от конкурентов.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2462">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2463">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2464">
            Обменные курсы
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2465">
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
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-node-id="1:2466">
            <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2467" data-name="image 151">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage151} />
            </div>
            <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2468" data-name="image 152">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage152} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2469">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2470">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2471">
            Калькулятор
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2472">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:2473">
              Тут использовались выводы как из первой, так и второй гипотезы.
            </p>
            <div className="content-stretch flex flex-col gap-[36px] items-start max-w-[680px] relative shrink-0" data-node-id="1:2474">
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="1:2475">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:2476">
                  Указание полной суммы обмена
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2477">
                  Приложение понятно спрашивает, какая валюта у пользователя есть, и какую он хочет получить взамен. Далее пользователь вводит сумму валюты, которая у него есть, и получает ответ, сколько он получит за её обмен.
                </p>
                <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2478" data-name="image 153">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage153} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="1:2479">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:2480">
                  Указание суммы банкнот каждого номинала
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:2481">
                  Если же пользователь хочет узнать точную сумму, которую он получит в результате обмена, он может указать суммы банкнот всех номиналов, которые есть у него руках, и приложение посчитает точную сумму валюты, которую он получит взамен. Эта опция есть только если у валюты получения есть несколько деноминаций (например, USD).
                </p>
                <div className="h-[872px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2482" data-name="image 154">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage154} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2483">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2484">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2485">
            Локации обменных пунктов
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2486">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:2487">
              Информацию о местонахождении обменных пунктов можно наглядно изучить как списком, так и на карте. Также можно посмотреть фото обменного пункта для легкого его нахождения.
            </p>
            <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:2488">
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2489" data-name="image 155">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage155} />
              </div>
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2490" data-name="image 156">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage156} />
              </div>
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2491" data-name="image 157">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage157} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2492">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2493">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:2494">
            Онбординг
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2495">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:2496">
              Для новых пользователь я подготовил онбординг, помогающий ориентироваться в приложении при первом его запуске.
            </p>
            <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:2497">
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2498" data-name="image 158">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage158} />
              </div>
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2499" data-name="image 159">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage159} />
              </div>
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2500" data-name="image 160">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage160} />
              </div>
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2501" data-name="image 161">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage161} />
              </div>
              <div className="h-[711px] relative rounded-[12px] shrink-0 w-[320px]" data-node-id="1:2502" data-name="image 162">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage162} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2503">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:2504">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:2505">
            Текущий статус
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:2506">
            Приложение работает и пользуется популярностью в Таиланде туристами со всего мира.
          </p>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[659px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full z-[2]" />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[40px] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[24px] z-[1]" data-node-id="1:2508" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:2508;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:2508;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:2508;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}