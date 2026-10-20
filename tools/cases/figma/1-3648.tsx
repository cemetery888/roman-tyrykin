const assetPathPrefix = "https://www.figma.com/api/mcp/asset/c471d877-7fb0-45b8-ae64-12f6e35301c3";
const imgImage111 = `${assetPathPrefix}/c04c4.png`;
const imgImage115 = `${assetPathPrefix}/cfa62.png`;
const imgImage116 = `${assetPathPrefix}/d540f.png`;
const imgImage118 = `${assetPathPrefix}/379dd.png`;
const imgImage119 = `${assetPathPrefix}/65100.png`;
const imgImage120 = `${assetPathPrefix}/11298.png`;
const imgImage121 = `${assetPathPrefix}/f9e8a.png`;
const imgImage122 = `${assetPathPrefix}/70fd0.png`;
const imgImage126 = `${assetPathPrefix}/438b8.png`;
const imgImage127 = `${assetPathPrefix}/54629.png`;
const imgImage128 = `${assetPathPrefix}/1fbe4.png`;
const imgImage130 = `${assetPathPrefix}/f2eec.png`;
const imgHomepage3 = `${assetPathPrefix}/a81d1.png`;
const imgUpcomingEvent2 = `${assetPathPrefix}/74c98.png`;
const imgCheckout2 = `${assetPathPrefix}/6ada2.png`;
const imgLiveStream2 = `${assetPathPrefix}/37ef5.png`;
const imgLine24 = `${assetPathPrefix}/6789e.svg`;
const imgLine8 = `${assetPathPrefix}/33e6b.svg`;
const imgLine10 = `${assetPathPrefix}/c2395.svg`;
const imgFrame = `${assetPathPrefix}/edc76.svg`;
const imgFrame1 = `${assetPathPrefix}/c278a.svg`;
const imgFrame2 = `${assetPathPrefix}/c49d0.svg`;
const imgFrame3 = `${assetPathPrefix}/21b83.svg`;

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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[124px] px-[60px] relative size-full" data-node-id="1:3648" data-name="Desktop">
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[calc(50%+610px)] overflow-clip px-[16px] py-[4px] rounded-[8px] top-[36px] w-[100px] z-[4]" data-node-id="1:3649" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:3649;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:3649;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:3649;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:3649;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:3649;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[1320px] z-[3]" data-node-id="1:3650">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3651">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:3652">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" data-node-id="1:3653">
              I Have Ticket
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[22px] text-white w-[min-content]" data-node-id="1:3654">{`Дизайн сайта для лайв-стриминга концертов. `}</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:3655">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:3656">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:3657">
                  Entertainment
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:3658">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:3659">
                  Streaming
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:3660">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:3661">
                  B2C
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative shrink-0 w-full" data-node-id="1:3662" data-name="image 111">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage111} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex gap-[60px] items-start leading-[1.35] px-[24px] py-[20px] relative rounded-[16px] shrink-0 text-[18px] text-white w-[1320px] whitespace-nowrap" data-node-id="1:3664">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:3665">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:3666">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:3667">
                Snocko Technologies Co.Ltd
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:3668">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:3669">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:3670">
                Продуктовый дизайнер
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0" data-node-id="1:3674">
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-white w-[1000px]" data-node-id="1:3675">
            <span className="font-['Onest:Bold'] font-bold leading-[1.35] text-[28px]">I Have Ticket</span>
            <span className="leading-[1.35] text-[28px]">{` — платформа для покупки билетов и просмотра онлайн-концертов местных исполнителей. Концерты проходили в профессиональной студии без офлайн-зрителей и транслировались в прямом эфире.`}</span>
          </p>
          <div className="bg-[#302556] border-l-2 border-solid border-white content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] py-[20px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0" data-node-id="1:3676">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:3677">
              Посмотрите самые яркие моменты с некоторых концертов — это было офигенно!
            </p>
            <div className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-node-id="1:3678">
              <a className="bg-white content-stretch flex h-[44px] items-center justify-center px-[20px] relative rounded-[8px] shrink-0" href="https://www.youtube.com/watch?v=Z_7FTvc6TWI" data-node-id="1:3679" target="_blank" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#141414] text-[16px] text-center whitespace-nowrap" data-node-id="I1:3679;1:3187">
                  <p className="leading-[1.35]">Концерт Atom</p>
                </div>
              </a>
              <a className="bg-white content-stretch flex h-[44px] items-center justify-center px-[20px] relative rounded-[8px] shrink-0" href="https://www.youtube.com/watch?v=KOHxCeyWwT4" data-node-id="1:3680" target="_blank" data-name="Button">
                <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#141414] text-[16px] text-center whitespace-nowrap" data-node-id="I1:3680;1:3187">
                  <p className="leading-[1.35]">Концерт Mean</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] border-3 border-[#6d50f5] border-solid content-stretch flex flex-col gap-[16px] items-start p-[28px] relative rounded-[12px] shrink-0 text-white w-[1000px]" data-node-id="1:3681">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:3682">
            Результаты и метрики
          </p>
          <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[18px] w-full" data-node-id="1:3683">
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Конверсия покупки билетов 8%.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Retention Rate составил 30% — столько пользователей купили билеты более чем на один концерт.</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.35]">Customer Satisfaction составил 85%.</span>
            </li>
            <li className="ms-[27px]">
              <span className="leading-[1.35]">Bounce Rate составил всего около 35%.</span>
            </li>
          </ul>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3684">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[28px] text-white w-[min-content]" data-node-id="1:3685">
            Цель создания продукта
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3686">
            На тайском рынке уже существовали сервисы для онлайн-трансляций концертов, включая Thai Ticket Major, а среди K-pop-аудитории был популярен Beyond LIVE. Компания решила запустить локальный продукт с другой концепцией — студийными концертами без офлайн-зрителей, созданными специально для онлайн-трансляции.
          </p>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:3687">
            <div className="aspect-[1024/632] border-[#ec0000] border-b-4 border-l-4 border-solid border-t-4 flex-[1_0_0] min-w-px relative" data-node-id="1:3688" data-name="image 115">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage115} />
            </div>
            <div className="aspect-[1024/632] flex-[1_0_0] min-w-px relative" data-node-id="1:3689" data-name="image 116">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage116} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3690">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine8} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:3691">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:3692">
            Что я сделал
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-[800px]" data-node-id="1:3693">
            Я отвечал практически за весь дизайн продукта: от исследования аудитории и формирования продуктовых решений до UX/UI, тестирования и передачи макетов в разработку. Часть юзабилити-тестирования делегировал junior-дизайнеру и руководил его работой.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3694">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine8} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3695">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3696">
            Опрос
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:3697">
            Чтобы лучше понять аудиторию, я провёл опрос среди примерно 2000 респондентов в возрасте от 18 до 35 лет.
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3698">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[22px] text-white whitespace-nowrap" data-node-id="1:3699">
              Ключевые инсайты
            </p>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:3700">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:3701">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3702">
                  <div className="[word-break:break-word] bg-[#302556] border-l-2 border-solid border-white content-stretch flex flex-[1_0_0] flex-col font-['Onest:Regular'] font-normal gap-[12px] h-full items-start leading-[1.35] min-w-px px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] text-white">
                    <p className="relative shrink-0 text-[36px] whitespace-nowrap" data-node-id="1:3703">
                      70%
                    </p>
                    <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:3704">
                      Больше интересуются лайнапом артистом, нежели ценой билета.
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3705">
                  <div className="[word-break:break-word] bg-[#302556] border-l-2 border-solid border-white content-stretch flex flex-[1_0_0] flex-col font-['Onest:Regular'] font-normal gap-[12px] h-full items-start leading-[1.35] min-w-px px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] text-white">
                    <p className="relative shrink-0 text-[36px] whitespace-nowrap" data-node-id="1:3706">
                      45%
                    </p>
                    <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:3707">
                      Могут отказаться от покупки билетов онлайн, если сайт требует слишком много личной информации.
                    </p>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Onest:Regular'] font-normal gap-[16px] items-start leading-[1.35] relative shrink-0 text-white w-full" data-node-id="1:3708">
                <div className="bg-[#302556] border-l-2 border-solid border-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] self-stretch" data-node-id="1:3709">
                  <p className="relative shrink-0 text-[36px] whitespace-nowrap" data-node-id="1:3710">
                    70%
                  </p>
                  <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]" data-node-id="1:3711">
                    Предпочли бы оплачивать билеты с помощью сканирования QR-кода банковским приложением.
                  </p>
                </div>
                <div className="bg-[#302556] border-l-2 border-solid border-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] self-stretch whitespace-nowrap" data-node-id="1:3712">
                  <p className="relative shrink-0 text-[36px]" data-node-id="1:3713">
                    70%
                  </p>
                  <p className="relative shrink-0 text-[18px]" data-node-id="1:3714">
                    Пересматривали бы записи концертов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3715">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine10} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3716">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3717">
            Конкуренты
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3718">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:3719">
              После опроса я изучил функционал прямых и косвенных конкурентов, чтобы определить, какие функции стоит реализовать в нашем продукте и как сделать их лучше.
            </p>
            <div className="aspect-[1493/2048] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3720" data-name="image 118">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage118} />
            </div>
            <a className="[word-break:break-word] block font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://docs.google.com/spreadsheets/d/1d-k-f4P0p9go6ns5bcxcIXTn_tEnqLoZItKkQk5ECP8" data-node-id="1:3721" target="_blank">
              <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline">Открыть в Google Sheets</p>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3722">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine8} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:3723">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3724">
            Продуктовые решения
          </p>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[800px]" data-node-id="1:3725">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:3727">
              На основе полученных данных я сформировал и приоритизировал следующие продуктовые решения:
            </p>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:3728">
              <div className="bg-[#302556] content-stretch flex flex-col items-start justify-center px-[12px] py-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3729">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:3730">
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Упростить регистрацию</span>
                  <span className="leading-[1.35]">{` — Сократить количество обязательных полей, чтобы снизить число отказов при регистрации.`}</span>
                </p>
              </div>
              <div className="bg-[#302556] content-stretch flex flex-col items-start justify-center px-[12px] py-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3731">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:3732">
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Сделать артистов главным акцентом</span>
                  <span className="leading-[1.35]">{` — В первую очередь показывать исполнителей и лайнап, поскольку они сильнее влияют на интерес к концерту, чем цена билета.`}</span>
                </p>
              </div>
              <div className="bg-[#302556] content-stretch flex flex-col items-start justify-center px-[12px] py-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3733">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:3734">
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">{`Добавить просмотр концертов в записи `}</span>
                  <span className="leading-[1.35]">— Дать возможность купить билет и посмотреть концерт после завершения прямой трансляции.</span>
                </p>
              </div>
              <div className="bg-[#302556] content-stretch flex flex-col items-start justify-center px-[12px] py-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3735">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] text-white w-full" data-node-id="1:3736">
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">{`Добавить VIP-билеты с мерчем `}</span>
                  <span className="leading-[1.35] text-[16px]">— Создать дополнительный формат билета для наиболее заинтересованной аудитории.</span>
                </p>
              </div>
              <div className="bg-[#302556] content-stretch flex flex-col items-start justify-center px-[12px] py-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3737">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:3738">
                  <span className="font-['Onest:Bold'] font-bold leading-[1.35]">{`Добавить обратный отсчёт до концерта `}</span>
                  <span className="leading-[1.35]">— Показывать время до начала трансляции на странице билета, дополнительно стимулируя покупку перед стартом.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3739">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine10} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3740">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3741">
            Структура
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3742">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:3743">
              На основе исследований и выбранных решений я сформировал структуру продукта и перешёл к проектированию ключевых сценариев.
            </p>
            <div className="aspect-[2048/1322] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3744" data-name="image 119">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage119} />
            </div>
            <a className="[word-break:break-word] block font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://www.figma.com/file/6Vhg757Vx4IJ5Z1vNHoYii/Structure?type=whiteboard&node-id=0%3A1&t=b4PTkMDvWgA0Izce-1" data-node-id="1:3745" target="_blank">
              <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline">Смотреть в FigJam</p>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3746">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine10} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3747">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3748">
            Флоу
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3749">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:3750">
              На основе исследований и выбранных решений я сформировал структуру продукта и перешёл к проектированию ключевых сценариев.
            </p>
            <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:3751">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3752">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[22px] text-white whitespace-nowrap" data-node-id="1:3753">
                  Регистрация
                </p>
                <div className="aspect-[2048/392] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3754" data-name="image 120">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage120} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3755">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[22px] text-white whitespace-nowrap" data-node-id="1:3756">
                  Покупка билета
                </p>
                <div className="aspect-[2048/849] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3757" data-name="image 121">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage121} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3758">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[22px] text-white whitespace-nowrap" data-node-id="1:3759">
                  Вход на стрим
                </p>
                <div className="aspect-[2048/564] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3760" data-name="image 122">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage122} />
                </div>
              </div>
            </div>
          </div>
          <a className="[word-break:break-word] block font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://www.figma.com/file/YT7htM2z86aNhbXIUnAzUm/Flows?type=whiteboard&t=xUyyDLqqEUrInLnY-6" data-node-id="1:3761" target="_blank">
            <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline">Смотреть флоу в FigJam</p>
          </a>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3762">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine10} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3763">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3764">
            Юзабилити-тестирование
          </p>
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-node-id="1:3765">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[800px]" data-node-id="1:3766">
              После проработки интерфейса я хотел проверить, насколько хорошо наши решения работают на реальных пользователях, поэтому перед запуском сайта мы провели онлайн-модерируемое юзабилити-тестирование.
              <br aria-hidden />
              Тестирование проводил джуниор-дизайнер под моим руководством. Это позволило нам непосредственно понаблюдать за поведением пользователей и выявить проблемы с интерфейсом.
            </p>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1:3767">
              <div className="aspect-[1990/1337] flex-[1_0_0] min-w-px relative rounded-[8px]" data-node-id="1:3768" data-name="image 126">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage126} />
              </div>
              <div className="aspect-[1990/1337] flex-[1_0_0] min-w-px relative rounded-[8px]" data-node-id="1:3769" data-name="image 127">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage127} />
              </div>
              <div className="aspect-[1990/1337] flex-[1_0_0] min-w-px relative rounded-[8px]" data-node-id="1:3770" data-name="image 128">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage128} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[18px] text-white w-[596px]" data-node-id="1:3771">
              <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 w-[119px]" data-node-id="1:3772">
                Респонденты
              </p>
              <ul className="block font-['Onest:Regular'] font-normal leading-[0] list-disc relative shrink-0 whitespace-nowrap" data-node-id="1:3773">
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.45]">9 респондентов</span>
                </li>
                <li className="mb-0 ms-[27px]">
                  <span className="leading-[1.45]">Возраст от 18 до 30 лет</span>
                </li>
                <li className="ms-[27px]">
                  <span className="leading-[1.45]">Есть опыт в онлайн-покупках</span>
                </li>
              </ul>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3774">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[22px] text-white whitespace-nowrap" data-node-id="1:3775">
                Обнаруженные проблемы
              </p>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:3776">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3777">
                  <div className="[word-break:break-word] bg-[#f9d7d6] content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start leading-[1.45] min-w-px px-[16px] py-[12px] relative rounded-[12px] text-[#141414] text-[18px]">
                    <p className="font-['Onest:Bold'] font-bold relative shrink-0 w-full" data-node-id="1:3778">
                      9 стопперов
                    </p>
                    <p className="font-['Onest:Regular'] font-normal relative shrink-0 w-full" data-node-id="1:3779">
                      Критические проблемы, которые могут привести к тому, что пользователи покидают сайт до завершения сценария.
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3780">
                  <div className="[word-break:break-word] bg-[#f9e6ce] content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start leading-[1.45] min-w-px px-[16px] py-[12px] relative rounded-[12px] text-[#141414] text-[18px]">
                    <p className="font-['Onest:Bold'] font-bold relative shrink-0 w-full" data-node-id="1:3781">
                      6 слоуеров
                    </p>
                    <p className="font-['Onest:Regular'] font-normal relative shrink-0 w-full" data-node-id="1:3782">
                      Некритические проблемы, которые, тем не менее, замедляют продвижение пользователей через сценарий.
                    </p>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="1:3783">
                  <div className="[word-break:break-word] bg-[#fef7cc] content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start leading-[1.45] min-w-px px-[16px] py-[12px] relative rounded-[12px] text-[#141414] text-[18px]">
                    <p className="font-['Onest:Bold'] font-bold relative shrink-0 w-full" data-node-id="1:3784">
                      6 косметических проблем
                    </p>
                    <p className="font-['Onest:Regular'] font-normal relative shrink-0 w-full" data-node-id="1:3785">
                      Мелкие визуальные проблемы, не влияющие на сценарий, но требующие внимания для улучшения общего UX.
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-[1990/1466] border-2 border-[#474747] border-solid relative rounded-[12px] shrink-0 w-full" data-node-id="1:3786" data-name="image 130">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage130} />
              </div>
              <a className="[word-break:break-word] block font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white whitespace-nowrap" href="https://docs.google.com/spreadsheets/d/1FtFdwbB_yJ7BLnctKlJjQ5QoLR0tg6PR3euS1qSqGEk" data-node-id="1:3787" target="_blank">
                <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.35] underline">Открыть в Google Sheets</p>
              </a>
            </div>
            <div className="bg-[#302556] border-l-2 border-solid border-white content-stretch flex items-center px-[20px] py-[12px] relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-[800px]" data-node-id="1:3788">
              <p className="[word-break:break-word] flex-[1_0_0] font-['Onest:Regular'] font-normal leading-[1.35] min-w-px relative text-[18px] text-white" data-node-id="1:3789">
                По результатам тестирования мы вместе с командой нашли решения для выявленных проблем и доработали интерфейс, улучшив пользовательский опыт и техническую производительность сайта.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3790">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine10} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3791">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3792">
            Финальный UI
          </p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3793">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:3794">
              После тестирования я устранил критические проблемы в ключевых сценариях и подготовил финальный UI для desktop, tablet и mobile.
            </p>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="1:3795">
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[20px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0" data-node-id="1:3796">
                <div className="relative shrink-0 size-[32px]" data-node-id="1:3797" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
                </div>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:3799">
                  360px для мобайла
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[20px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0" data-node-id="1:3800">
                <div className="relative shrink-0 size-[32px]" data-node-id="1:3801" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
                </div>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:3803">
                  1024px для планшета
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[20px] items-start px-[20px] py-[16px] relative rounded-[12px] shrink-0" data-node-id="1:3804">
                <div className="relative shrink-0 size-[32px]" data-node-id="1:3805" data-name="Frame">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
                </div>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:3807">
                  1440px для десктопа
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="1:3808">
              <div className="aspect-[2506/4096] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3809" data-name="Homepage 3">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgHomepage3} />
              </div>
              <div className="aspect-[2539/4096] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3810" data-name="Upcoming event 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgUpcomingEvent2} />
              </div>
              <div className="aspect-[4096/4091] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3811" data-name="Checkout 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCheckout2} />
              </div>
              <div className="aspect-[3797/4096] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3812" data-name="Live Stream 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgLiveStream2} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3813">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine10} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:3814">
          <div className="[word-break:break-word] content-stretch flex items-start justify-between relative shrink-0 text-white w-full" data-node-id="1:3815">
            <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:3816">
              Текущий статус
            </p>
            <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-[800px]" data-node-id="1:3817">
              Перед уходом из компании, мы с командой начали работу над дизайном покупки билетов Onstage-эвентов (оффлайн концертов). Я успел поучаствовать в проработке флоу и части UI, в частности страницы эвента и чекаута. В настоящее время компания продолжает работу над продуктом.
            </p>
          </div>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[461px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[1320px] z-[2]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[calc(50%-571.5px)] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[36px] z-[1]" data-node-id="1:3819" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:3819;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:3819;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:3819;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}