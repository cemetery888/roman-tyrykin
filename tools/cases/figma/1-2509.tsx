const assetPathPrefix = "https://www.figma.com/api/mcp/asset/0a7d2d2c-17d4-49c2-9600-cbb4ce3e882a";
const imgCover = `${assetPathPrefix}/a8d1b.png`;
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
const imgLine2 = `${assetPathPrefix}/92621.svg`;
const imgFrame = `${assetPathPrefix}/21b83.svg`;

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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[28px] isolate items-center pb-[28px] pt-[84px] px-[16px] relative size-full" data-node-id="1:2509" data-name="Mobile">
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[44px] items-center justify-center overflow-clip px-[16px] py-[4px] right-[16px] rounded-[8px] top-[16px] w-[100px] z-[4]" data-node-id="1:2510" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:2510;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:2510;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:2510;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:2510;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:2510;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full z-[3]" data-node-id="1:2511">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2512">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:2514">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[32px] text-white w-[min-content]" data-node-id="1:2515">
              Pentor Exchange
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:2516">
              Редизайн мобильного приложения популярной сети пунктов обмена валют в Бангкоке.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:2517">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2518">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2519">
                  Fintech
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2520">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2521">
                  Mobile
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:2522">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:2523">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/603] relative rounded-[8px] shrink-0 w-full" data-node-id="1:2524" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgCover} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex flex-col gap-[20px] items-start leading-[1.35] px-[16px] py-[12px] relative rounded-[8px] shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-node-id="1:2525">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="1:2526">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:2527">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:2528">
                Snocko Technologies Co.Ltd
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="1:2529">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:2530">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:2531">
                Продуктовый дизайнер
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-white w-full" data-node-id="1:2535">
          <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[22px]">Pentor Exchange</span>
          <span className="leading-[1.35] text-[22px]">{` — это популярная сеть пунктов обменов валют с лучшими курсами в Бангкоке, Таиланд. Сеть имеет одноимённое мобильное приложение для ознакомления с курсами валют и информацией о локациях обменных пунктов.`}</span>
        </p>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2536">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2537">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:2538">
            Задача
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2539">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2540">
              Полноценный редизайн приложения. Причина: старое приложение сильно устарело — его дизайн не соответствовал ни визуальным нормам, ни стандартам юзабилити. Кроме того, в приложении отсутствовали функции, которые уже давно были реализованы у конкурентов.
            </p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:2541">
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:2542">
                Интерфейс старого приложения:
              </p>
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[9.833px] shrink-0 w-[320px]" data-node-id="1:2543" data-name="image 148">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9.833px] size-full" src={imgImage148} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2544">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2545">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:2546">
            Проблема
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2547">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2548">
              На рынке приложений для мониторинга обменных курсов по сей день присутствует явная проблема: все его игроки стараются копировать лидеров рынка — приложения сети обменных пунктов SuperRich и SuperRich1965. Эти приложения далеко не самые удобные, поэтому вместо слепого копирования я настоял на проведении как минимум коридорного тестирования, чтобы убедиться в том, что реализованные решения у лидеры рынка далеки от идеала.
            </p>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2549">
              <div className="h-[675px] max-h-[759.375px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2550" data-name="image 149">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage149} />
              </div>
              <div className="h-[675px] max-h-[759.375px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2551" data-name="image 150">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage150} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2552">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2553">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:2554">
            Гипотезы
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2555">
            <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2556">
              <p className="leading-[1.35] mb-[12px]">Поскольку одним из требованием было спроектировать калькулятор обмена, который, на мой взгляд, был не самым удобным у конкурентов, возникла необходимость провести небольшое тестирование, чтобы подтвердить две сформированные гипотезы.</p>
              <p className="leading-[1.35]">Для этого я провёл коридорное тестирование с 15-ю коллегами.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2557">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:2558">
                Гипотеза #1
              </p>
              <div className="bg-[#1f2a4c] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:2559">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-white w-full" data-node-id="1:2560">
                  <span className="leading-[1.35] text-[16px]">{`Некоторые люди путаются в таблицах, где указаны курсы покупки и продажи. `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Покупка</span>
                  <span className="leading-[1.35] text-[16px]">{` — кто покупает? `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Продажа</span>
                  <span className="leading-[1.35] text-[16px]">{` — кто продаёт? Обменный пункт или человек, меняющий валюту?`}</span>
                </p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2561">
                На мой взгляд, было бы гораздо понятней, если бы интерфейс спрашивал, сколько у человека валюты есть и сколько он хочет получить в обмен.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2562">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[20px] text-white w-full" data-node-id="1:2563">
                Гипотеза #2
              </p>
              <div className="bg-[#1f2a4c] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:2564">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-white w-full" data-node-id="1:2565">
                  <span className="leading-[1.35] text-[16px]">{`Не все люди понимают, что такое `}</span>
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">деноминация</span>
                  <span className="leading-[1.35] text-[16px]">, и использовать это слово в интерфейсе для обозначения функции некорректно.</span>
                </p>
              </div>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2566">
                Эта гипотеза возникла после необходимости реализовать функцию, которая уже была у конкурентов — указание в калькуляторе банкнот каждого номинала для получения суммы, на которую эти банкноты можно обменять.
              </p>
            </div>
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2567">
              В ходе тестирования почти все из 15-и коллег были согласны со мной, поэтому было решено проектировать интерфейс отличным от конкурентов.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2568">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2569">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[24px] text-white w-[min-content]" data-node-id="1:2570">
            Обменные курсы
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" data-node-id="1:2571">
            <span className="leading-[1.35] text-[16px]">{`Исходя из подтверждённой гипотезы #1, пресловутые `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Buying</span>
            <span className="leading-[1.35] text-[16px]">{` и `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">Selling</span>
            <span className="leading-[1.35] text-[16px]">{` я заменил на более понятные `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">We buy</span>
            <span className="leading-[1.35] text-[16px]">{` и `}</span>
            <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[16px]">We sell</span>
            <span className="leading-[1.35] text-[16px]">, чтобы было точно ясно, кто продаёт и покупает — именно обменные пункт, а не человек, совершающий обмен. Таким образом, на этом экране не остаётся места для непонимания.</span>
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-node-id="1:2572">
            <div className="h-[711px] max-h-[799.875px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2573" data-name="image 151">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage151} />
            </div>
            <div className="h-[711px] max-h-[799.875px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2574" data-name="image 152">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage152} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2575">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2576">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:2577">
            Калькулятор
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2578">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2579">
              Тут использовались выводы как из первой, так и второй гипотезы.
            </p>
            <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2580">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2581">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:2582">
                  Указание полной суммы обмена
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:2583">
                  Приложение понятно спрашивает, какая валюта у пользователя есть, и какую он хочет получить взамен. Далее пользователь вводит сумму валюты, которая у него есть, и получает ответ, сколько он получит за её обмен.
                </p>
                <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2584" data-name="image 153">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage153} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:2585">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[20px] text-white w-[min-content]" data-node-id="1:2586">
                  Указание суммы банкнот каждого номинала
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]" data-node-id="1:2587">
                  Если же пользователь хочет узнать точную сумму, которую он получит в результате обмена, он может указать суммы банкнот всех номиналов, которые есть у него руках, и приложение посчитает точную сумму валюты, которую он получит взамен. Эта опция есть только если у валюты получения есть несколько деноминаций (например, USD).
                </p>
                <div className="h-[871px] max-h-[980.425537109375px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2588" data-name="image 154">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage154} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2589">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2590">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:2591">
            Локации обменных пунктов
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2592">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2593">
              Информацию о местонахождении обменных пунктов можно наглядно изучить как списком, так и на карте. Также можно посмотреть фото обменного пункта для легкого его нахождения.
            </p>
            <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2594">
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2595" data-name="image 155">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage155} />
              </div>
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2596" data-name="image 156">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage156} />
              </div>
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2597" data-name="image 157">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage157} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2598">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:2599">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] text-white w-full" data-node-id="1:2600">
            Онбординг
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:2601">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:2602">
              Для новых пользователь я подготовил онбординг, помогающий ориентироваться в приложении при первом его запуске.
            </p>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:2603">
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2604" data-name="image 158">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage158} />
              </div>
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2605" data-name="image 159">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage159} />
              </div>
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2606" data-name="image 160">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage160} />
              </div>
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2607" data-name="image 161">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage161} />
              </div>
              <div className="h-[711px] max-h-[800px] max-w-[360px] relative rounded-[11.063px] shrink-0 w-[320px]" data-node-id="1:2608" data-name="image 162">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[11.063px] size-full" src={imgImage162} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:2609">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-white w-full" data-node-id="1:2610">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[24px] w-full" data-node-id="1:2611">
            Текущий статус
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[16px] w-full" data-node-id="1:2612">
            Приложение работает и пользуется популярностью в Таиланде туристами со всего мира.
          </p>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[455px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full z-[2]" />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[44px] items-center left-[16px] overflow-clip px-[24px] py-[12px] rounded-[8px] top-[16px] z-[1]" data-node-id="1:2614" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:2614;1:3192" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:2614;1:3192;1:7856" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="I1:2614;1:3192;1:7858">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}