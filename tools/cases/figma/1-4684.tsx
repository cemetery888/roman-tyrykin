const assetPathPrefix = "https://www.figma.com/api/mcp/asset/36a19d1a-7367-41d0-85f1-76fcf9450de2";
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
const imgLine24 = `${assetPathPrefix}/6789e.svg`;
const imgLine9 = `${assetPathPrefix}/c2395.svg`;
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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[124px] px-[60px] relative size-full" data-node-id="1:4684" data-name="Desktop">
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[calc(50%+610px)] overflow-clip px-[16px] py-[4px] rounded-[8px] top-[36px] w-[100px] z-[4]" data-node-id="1:4685" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:4685;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:4685;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:4685;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:4685;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:4685;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[1320px] z-[3]" data-node-id="1:4686">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4687">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:4688">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" data-node-id="1:4689">
              Bitazza App
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[22px] text-white w-[min-content]" data-node-id="1:4690">
              Перепроектирование основных флоу мобильного приложения и редизайн ключевых экранов.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:4691">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:4692">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:4693">
                  Fintech
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:4694">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:4695">
                  Crypto
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:4696">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:4697">
                  Mobile
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative rounded-[20px] shrink-0 w-full" data-node-id="1:4698" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgCover} />
          </div>
          <div className="bg-[#262626] content-stretch flex gap-[60px] items-start pl-[24px] pr-[40px] py-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:4700">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.35] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:4701">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:4702">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:4703">
                UX/UI-дизайнер
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[#303030] text-[0px] w-[1000px] whitespace-pre-wrap" data-node-id="1:4707">
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid font-['Onest:Bold'] leading-[1.35] text-[28px] text-white underline" href="https://www.bitazza.com/" target="_blank">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://www.bitazza.com/" target="_blank">
              Bitazza ↗
            </span>
          </a>
          <span className="font-['Onest:Regular'] font-normal leading-[1.35] text-[28px] text-white">{`  — это ведущая и самая надежная криптовалютная биржа Таиланда. Полностью регулируемая Комиссией по ценным бумагам и биржам Таиланда (SEC), она позволяет безопасно покупать, продавать и торговать более чем 100 криптовалютами.`}</span>
        </p>
        <div className="[word-break:break-word] border-3 border-[#11f48b] border-solid content-stretch flex flex-col gap-[16px] items-start p-[28px] relative rounded-[20px] shrink-0 text-white w-[1000px]" data-node-id="1:4708">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:4709">
            Об этом кейсе
          </p>
          <div className="font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full" data-node-id="1:4710">
            <p className="leading-[1.35] mb-[12px]">Мне поручили переработать основные флоу и представить редизайн основных экранов приложения. Также требовалось создать элементарную дизайн-систему.</p>
            <p className="leading-[1.35]">Я пошел немного дальше, расширив количество экранов и тщательно проработав дизайн-систему: я создал не только стили и компоненты, но также цветовые токены, систему отступов и радиусы углов.</p>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-[1000px]" data-node-id="1:4711">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:4712">
            Недостатки текущего дизайна
          </p>
          <div className="font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full" data-node-id="1:4713">
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
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4714">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4715">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:4716">
            Перепроектированные флоу
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:4717">
            Изучив текущие, я создал флоу, которые более простые и логичные.
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4718">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4719">
              1. Быстрый доступ к часто используемой функции с дашборда — торговля избранной парой
            </p>
            <div className="aspect-[4096/786] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4720" data-name="image 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage1} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4721">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4722">
              2. Быстрый просмотр текущей рыночной цены любимого цифрового актива
            </p>
            <div className="aspect-[4096/766] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4723" data-name="image 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage2} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4724">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4725">
              3. Быстрый поиск криптовалютной пары и начало торговли (поиск BTC/USDT)
            </p>
            <div className="aspect-[4096/1967] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4726" data-name="image 3">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage3} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4727">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4728">
              4. Создание ордера типа limit для пары THB/USDT
            </p>
            <div className="aspect-[4096/1192] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4729" data-name="image 4">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage4} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4730">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4731">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:4732">
            Обновлённый UI
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:4733">
            Давайте взглянем на переработанный UI. Я использовал те же цвета и шрифт, поскольку они привязаны к бренду и не могут быть изменены.
          </p>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:4734">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4735">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4736">
                Dashboard
              </p>
              <div className="aspect-[3160/2582] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4737" data-name="1 441">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img1441} />
              </div>
              <div className="aspect-[4096/1766] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4738" data-name="2 76">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img276} />
              </div>
              <div className="aspect-[3168/2084] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4739" data-name="3 61">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img361} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4740">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4741">
                Market
              </p>
              <div className="aspect-[4096/2077] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4742" data-name="4 6">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img46} />
              </div>
              <div className="aspect-[4096/3110] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4743" data-name="5 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img51} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4744">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4745">
                Asset
              </p>
              <div className="aspect-[2952/3082] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4746" data-name="6 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img61} />
              </div>
              <div className="aspect-[1108/819] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4747" data-name="image 11">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage11} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4748">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:4749">
                Trade
              </p>
              <div className="aspect-[4096/3951] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4750" data-name="7 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img72} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4751">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4752">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:4753">
            Компоненты
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:4754">
            Я разделил компоненты на глобальные и локальные. Первые используются на многих экранах, вторые — лишь на конкретных.
          </p>
          <div className="aspect-[1994/1516] relative rounded-[12px] shrink-0 w-full" data-node-id="1:4755" data-name="8 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-[103.56%] left-[-1.35%] max-w-none top-[-1.78%] w-[102.71%]" src={img81} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4756">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4757">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4758">
            Цветовые токены
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4759">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:4760">
              Я создал цветовые примитивы и связал их с дизайн-токенами. Это реализовано похожим образом в дизайн-системе Atlassian, что меня вдохновило.
            </p>
            <div className="aspect-[2144/4070] border border-[#d5d5d5] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4761" data-name="image 15">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage15} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4762">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4763">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4764">
            Тестовые стили
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4765">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:4766">
              Я использовал достаточно стандартную типографику для текста.
            </p>
            <div className="aspect-[1760/1156] border border-[#d5d5d5] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4767" data-name="image 16">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage16} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:4768">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine9} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:4769">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white w-full" data-node-id="1:4770">
            Отступы и углы
          </p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4771">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:4772">
              Что касается отступов и радиусов углов, я также придерживался стандартного подхода: значения отступов — кратны 2 и 4; радиусы углов — кратны 4, плюс значение 500 для полностью закругленных углов.
            </p>
            <div className="aspect-[1644/1400] border border-[#d5d5d5] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4773" data-name="image 17">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage17} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:4774">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:4775">
              Все значения отступов и радиусов углов привязаны к соответствующим переменными.
            </p>
            <div className="aspect-[1458/1654] border border-[#b2a0f8] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:4776" data-name="image 18">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage18} />
            </div>
          </div>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[461px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[1320px] z-[2]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[calc(50%-571.5px)] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[36px] z-[1]" data-node-id="1:4778" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:4778;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:4778;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:4778;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}