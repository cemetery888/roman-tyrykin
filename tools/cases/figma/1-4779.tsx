const assetPathPrefix = "https://www.figma.com/api/mcp/asset/72b2f18d-c470-4349-940d-958c27ff367e";
const imgCover = `${assetPathPrefix}/d168a.png`;
const imgImage1 = `${assetPathPrefix}/804b1.png`;
const imgImage2 = `${assetPathPrefix}/c6e4e.png`;
const imgImage3 = `${assetPathPrefix}/56113.png`;
const imgImage4 = `${assetPathPrefix}/65f2e.png`;
const img1441 = `${assetPathPrefix}/b452c.png`;
const img276 = `${assetPathPrefix}/4136b.png`;
const img361 = `${assetPathPrefix}/323e6.png`;
const img46 = `${assetPathPrefix}/1cb1d.png`;
const img51 = `${assetPathPrefix}/c380b.png`;
const img61 = `${assetPathPrefix}/b0e50.png`;
const imgImage11 = `${assetPathPrefix}/595ff.png`;
const img72 = `${assetPathPrefix}/619e0.png`;
const img81 = `${assetPathPrefix}/701e8.png`;
const imgImage15 = `${assetPathPrefix}/ffd5b.png`;
const imgImage16 = `${assetPathPrefix}/b94ad.png`;
const imgImage17 = `${assetPathPrefix}/6a296.png`;
const imgImage18 = `${assetPathPrefix}/c108b.png`;
const imgLine9 = `${assetPathPrefix}/7aace.svg`;
const imgFrame = `${assetPathPrefix}/21b83.svg`;
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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[100px] px-[40px] relative size-full" data-node-id="1:4779" data-name="Tablet">
      <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full z-[4]" data-node-id="1:4780">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:4781">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:4782">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[36px] text-white w-[min-content]" data-node-id="1:4783">
              Bitazza App
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:4784">
              Перепроектирование основных флоу мобильного приложения и редизайн ключевых экранов.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:4785">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:4786">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:4787">
                  Fintech
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:4788">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:4789">
                  Crypto
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:4790">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:4791">
                  Mobile
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative rounded-[20px] shrink-0 w-full" data-node-id="1:4792" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgCover} />
          </div>
          <div className="bg-[#262626] content-stretch flex gap-[40px] items-start px-[24px] py-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:4794">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.35] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:4795">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:4796">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:4797">
                UX/UI-дизайнер
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#303030] text-[0px] w-full whitespace-pre-wrap" data-node-id="1:4801">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid font-['Onest:Bold'] leading-[1.35] text-[28px] text-white underline" href="https://www.bitazza.com/" target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://www.bitazza.com/" target="_blank">
              Bitazza ↗
            </span>
          </a>
          <span className="font-['Onest:Regular'] font-normal leading-[1.35] text-[28px] text-white">{`  — это ведущая и самая надежная криптовалютная биржа Таиланда. Полностью регулируемая Комиссией по ценным бумагам и биржам Таиланда (SEC), она позволяет безопасно покупать, продавать и торговать более чем 100 криптовалютами.`}</span>
        </p>
        <div className="[word-break:break-word] border-3 border-[#11f48b] border-solid content-stretch flex flex-col gap-[16px] items-start p-[28px] relative rounded-[12px] shrink-0 text-white w-full" data-node-id="1:4802">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:4803">
            Об этом кейсе
          </p>
          <div className="font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full" data-node-id="1:4804">
            <p className="leading-[1.35] mb-[12px]">Мне поручили переработать основные флоу и представить редизайн основных экранов приложения. Также требовалось создать элементарную дизайн-систему.</p>
            <p className="leading-[1.35]">Я пошел немного дальше, расширив количество экранов и тщательно проработав дизайн-систему: я создал не только стили и компоненты, но также цветовые токены, систему отступов и радиусы углов.</p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:4805">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:4806">
            Недостатки текущего дизайна
          </p>
          <div className="font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full" data-node-id="1:4807">
            <p className="leading-[1.35] mb-[12px]">Я изучил текущий дизайн приложения Bitazza и выявил следующие недостатки дизайна:</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[27px]">
                <span className="leading-[1.35]">Маленький размер элементов, как статичных, так и интерактивных.</span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="leading-[1.35]">Низкий цветовой контраст в некоторых частях приложения.</span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="leading-[1.35]">Сложные флоу: много тапов, много экранов.</span>
              </li>
              <li className="mb-0 ms-[27px]">
                <span className="leading-[1.35]">Отсутствие персонализации.</span>
              </li>
              <li className="ms-[27px]">
                <span className="leading-[1.35]">Недостаточное использование стандарных UX-паттернов.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4808">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4809">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4810">
            Перепроектированные флоу
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4811">
            Изучив текущие, я создал флоу, которые более простые и логичные.
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4812">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4813">
              1. Быстрый доступ к часто используемой функции с дашборда — торговля избранной парой
            </p>
            <div className="aspect-[4096/786] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4814" data-name="image 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage1} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4815">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4816">
              2. Быстрый просмотр текущей рыночной цены любимого цифрового актива
            </p>
            <div className="aspect-[4096/766] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4817" data-name="image 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage2} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4818">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4819">
              3. Быстрый поиск криптовалютной пары и начало торговли (поиск BTC/USDT)
            </p>
            <div className="aspect-[4096/1967] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4820" data-name="image 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage3} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4821">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4822">
              4. Создание ордера типа limit для пары THB/USDT
            </p>
            <div className="aspect-[4096/1192] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4823" data-name="image 4">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage4} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4824">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4825">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4826">
            Обновлённый UI
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4827">
            Давайте взглянем на переработанный UI. Я использовал те же цвета и шрифт, поскольку они привязаны к бренду и не могут быть изменены.
          </p>
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4828">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4829">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4830">
                Dashboard
              </p>
              <div className="aspect-[3160/2582] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4831" data-name="1 441">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img1441} />
              </div>
              <div className="aspect-[4096/1766] relative shrink-0 w-full" data-node-id="1:4832" data-name="2 76">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img276} />
              </div>
              <div className="aspect-[3168/2084] relative shrink-0 w-full" data-node-id="1:4833" data-name="3 61">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img361} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4834">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4835">
                Market
              </p>
              <div className="aspect-[4096/2077] relative shrink-0 w-full" data-node-id="1:4836" data-name="4 6">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img46} />
              </div>
              <div className="aspect-[4096/3110] relative shrink-0 w-full" data-node-id="1:4837" data-name="5 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img51} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4838">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4839">
                Asset
              </p>
              <div className="aspect-[2952/3082] relative shrink-0 w-full" data-node-id="1:4840" data-name="6 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img61} />
              </div>
              <div className="aspect-[1108/819] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4841" data-name="image 11">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage11} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4842">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4843">
                Trade
              </p>
              <div className="aspect-[4096/3951] relative shrink-0 w-full" data-node-id="1:4844" data-name="7 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img72} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4845">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4846">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4847">
            Компоненты
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4848">
            Я разделил компоненты на глобальные и локальные. Первые используются на многих экранах, вторые — лишь на конкретных.
          </p>
          <div className="aspect-[1994/1516] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4849" data-name="8 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-[103.56%] left-[-1.35%] max-w-none top-[-1.78%] w-[102.71%]" src={img81} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4850">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4851">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4852">
            Цветовые токены
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4853">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4854">
              Я создал цветовые примитивы и связал их с дизайн-токенами. Это реализовано похожим образом в дизайн-системе Atlassian, что меня вдохновило.
            </p>
            <div className="aspect-[2144/4070] border border-[#d5d5d5] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4855" data-name="image 15">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage15} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4856">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4857">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4858">
            Тестовые стили
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4859">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4860">
              Я использовал достаточно стандартную типографику для текста.
            </p>
            <div className="aspect-[1760/1156] border border-[#d5d5d5] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4861" data-name="image 16">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage16} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4862">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4863">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4864">
            Отступы и углы
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4865">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4866">
              Что касается отступов и радиусов углов, я также придерживался стандартного подхода: значения отступов — кратны 2 и 4; радиусы углов — кратны 4, плюс значение 500 для полностью закругленных углов.
            </p>
            <div className="aspect-[1644/1400] border border-[#d5d5d5] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4867" data-name="image 17">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage17} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4868">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4869">
              Все значения отступов и радиусов углов привязаны к соответствующим переменными.
            </p>
            <div className="aspect-[1458/1654] border border-[#d5d5d5] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4870" data-name="image 18">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage18} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[40px] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[24px] z-[3]" data-node-id="1:4871" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:4871;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:4871;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:4871;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[659px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full z-[2]" />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center overflow-clip px-[16px] py-[4px] right-[40px] rounded-[8px] top-[24px] w-[100px] z-[1]" data-node-id="1:4873" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:4873;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:4873;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:4873;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:4873;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:4873;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
    </div>
  );
}