const assetPathPrefix = "https://www.figma.com/api/mcp/asset/24de89dd-19b0-4cd7-892d-f2b6d3a33b72";
const imgCover = `${assetPathPrefix}/0d209.png`;
const imgImage140 = `${assetPathPrefix}/e92e8.png`;
const imgImage141 = `${assetPathPrefix}/81ff5.png`;
const imgImage142 = `${assetPathPrefix}/12ace.png`;
const imgImage243 = `${assetPathPrefix}/2c99c.png`;
const imgImage244 = `${assetPathPrefix}/2f733.png`;
const imgImage143 = `${assetPathPrefix}/ad162.png`;
const imgImage144 = `${assetPathPrefix}/0a7d0.png`;
const imgImage145 = `${assetPathPrefix}/475f6.png`;
const imgImage146 = `${assetPathPrefix}/4bc5b.png`;
const imgImage147 = `${assetPathPrefix}/9c7fc.png`;
const imgLine24 = `${assetPathPrefix}/6789e.svg`;
const imgLine0 = `${assetPathPrefix}/c2395.svg`;
const imgLine3 = `${assetPathPrefix}/33e6b.svg`;
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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[124px] px-[60px] relative size-full" data-node-id="1:3194" data-name="Desktop">
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[calc(50%+610px)] overflow-clip px-[16px] py-[4px] rounded-[8px] top-[36px] w-[100px] z-[4]" data-node-id="1:3195" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:3195;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:3195;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:3195;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:3195;1:7876" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" data-node-id="I1:3195;1:7876;1:7868">
            <p className="leading-[1.1]">en</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[1320px] z-[3]" data-node-id="1:3196">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3197">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:3198">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" data-node-id="1:3199">
              TOP1BET
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[22px] text-white w-[min-content]" data-node-id="1:3200">
              Админка для управления агентами и игроками для сайта с азартными играми и ставками на спорт.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:3201">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:3202">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:3203">
                  Betting
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:3204">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:3205">
                  Admin Panel
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:3206">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:3207">
                  B2B
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[1296/346] relative shrink-0 w-full" data-node-id="1:3208" data-name="Cover">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCover} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex gap-[60px] items-start leading-[1.35] px-[24px] py-[20px] relative rounded-[16px] shrink-0 text-[18px] text-white w-[1320px] whitespace-nowrap" data-node-id="1:3210">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:3211">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:3212">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:3213">
                Snocko Technologies Co.Ltd
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:3214">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:3215">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:3216">
                Продуктовый дизайнер
              </p>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[28px] text-white w-[1000px]" data-node-id="1:3220">
          <span className="font-['Inter:Bold'] font-bold leading-[1.35]">{`TOP1BET `}</span>
          <span className="leading-[1.35]">— cистема управления агентами и игроками для сайта с азартными играми и ставками на спортa.</span>
        </p>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3221">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine0} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3222" data-name="Creating and editing users">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3223">
            Создание и редактирование пользователей
          </p>
          <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3224">
            <p className="leading-[1.35] mb-[12px]">Система построена в виде пирамиды. На самом её верху — админ, который может создавать шэрхолдеров, которые, в свою очередь создают агентов всех уровней и игроков. Агентов 3 уровня, Senior, Master Agent и просто Agent. Каждый агент может создавать пользователей ниже себя уровнем. Таким образом, Senior может создавать агентов двух уровней и игроков, а просто Agent — только игроков. Сами же игроки могут только логиниться на игровом сайте и, непосредственно, играть, что им и предназначено.</p>
            <p className="leading-[1.35]">В таблице наглядно показано, кто кого может создавать. Смотреть таблицу нужно сверху налево.</p>
          </div>
          <div className="h-[434.906px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:3225" data-name="image 140">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage140} />
          </div>
          <div className="aspect-[1948/4096] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3226" data-name="image 141">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage141} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3227">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine0} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3228" data-name="Sub accounts">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3229">
            Управление саб аккаунтами
          </p>
          <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3230">
            <p className="leading-[1.35] mb-[12px]">Саб аккаунты нужны для делегирования определённых действий, например, создание пользователей, управление пополнением счёта и т.д.</p>
            <p className="leading-[1.35]">Саб аккаунтам можно настроить определённые пермишны в соответствии с их ролями.</p>
          </div>
          <div className="aspect-[4052/3130] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3231" data-name="image 142">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage142} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3232">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3233" data-name="Punishments">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3234">
            Панишменты
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3235">
            Пользователи могут применять панишменты к своему даунлайну: саспендить (ставить на паузу), лочить и закрывать. Панишмент агента ведёт к панишменту его даунлайна. Пользователь выше уровнем (из аплайна) имеет возможность снять панишмент.
          </p>
          <div className="aspect-[1800/774] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3236" data-name="image 243">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage243} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3237">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine3} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3238" data-name="Users with incomplete registration">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3239">
            Пользователи с незавершённой регистрацией
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3240">
            Для регистрации необходимо полноценно её завершить, пройдя по специальной ссылке. Если этого не произошло, пользователь отображается в соответствующем списке. Для него можно сгенерировать новую ссылку для завершения регистрации, а также применить панишменты, например, закрыть пользователя, если он больше не нужен.
          </p>
          <div className="aspect-[1770/4096] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3241" data-name="image 244">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage244} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3242">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine0} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3243" data-name="Current unsettled bets">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3244">
            Текущие незакрытые ставки
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3245">
            В этом разделе отображаются текущие долгосрочные ставки (спортивные). Ставки можно отменять при необходимости. Есть поиск как пользователям, так и по Bet ID.
          </p>
          <div className="aspect-[4052/2744] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3246" data-name="image 143">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage143} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3247">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine0} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3248" data-name="Downline report">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3249">
            Финансовые отчёты по даунлайну
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3250">
            Если два типа отчёта: Simple и Detailed. Первый более простой, второй — с большим количеством деталей. Основное предназначение отчёта — смотреть, кто сколько заработал.
          </p>
          <div className="aspect-[4052/3804] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3251" data-name="image 144">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage144} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3252">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine0} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3253" data-name="Deposits and withdrawals">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3254">
            Управление пополнением и снятием средств
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3255">
            Есть как автоматическое пополнение и снятие, так и ручное. В автоматическом нужно принимать, либо отказывать в операциях, совершёнными игроками на основном сайте, а в ручном — самому прибавлять или убавлять баланс, проводя остальные операции вне системы.
          </p>
          <div className="aspect-[3165/4096] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3256" data-name="image 145">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage145} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3257">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine0} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3258" data-name="Ads">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3259">
            Объявления на игровом и агентском сайтах
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3260">
            Оба сайта содержат раздел с уведомлениями. В основном уведомления содержат изменения в спортивных событиях: отмена ставки, изменение коэффициентов и др.
          </p>
          <div className="aspect-[4052/3240] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3261" data-name="image 146">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage146} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:3262">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine0} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:3263" data-name="Theme editor">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:3264">
            Редактор темы игрового сайта
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:3265">
            Владелец сайта может изменять цвета палитры сайта — Primary и Secondary (светлый и тёмный оттенки система подбирает сама). Также он может выбирать лэйаут для основных страниц, таких как главная, Slot Game, Casino, Fishing.
          </p>
          <div className="aspect-[1417/4096] relative rounded-[12px] shrink-0 w-full" data-node-id="1:3266" data-name="image 147">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage147} />
          </div>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[461px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[1320px] z-[2]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[calc(50%-571.5px)] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[36px] z-[1]" data-node-id="1:3268" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:3268;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:3268;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:3268;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}