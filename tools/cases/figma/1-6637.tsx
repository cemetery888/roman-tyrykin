const assetPathPrefix = "https://www.figma.com/api/mcp/asset/de151ba7-68d5-4f9c-aade-d1fdb8d05c54";
const imgImage109 = `${assetPathPrefix}/87e6c.png`;
const imgCover1 = `${assetPathPrefix}/61faa.png`;
const img1 = `${assetPathPrefix}/1e1c3.png`;
const img2 = `${assetPathPrefix}/b6e29.png`;
const img3 = `${assetPathPrefix}/68ba5.png`;
const imgAaaLocal1 = `${assetPathPrefix}/dd073.png`;
const imgAaaLocal2 = `${assetPathPrefix}/1e706.png`;
const img4 = `${assetPathPrefix}/86131.png`;
const img5 = `${assetPathPrefix}/d3a25.png`;
const img6 = `${assetPathPrefix}/daa27.png`;
const img7 = `${assetPathPrefix}/f0afb.png`;
const img8 = `${assetPathPrefix}/079bb.png`;
const imgDateTime1 = `${assetPathPrefix}/38263.png`;
const imgDateTime2 = `${assetPathPrefix}/64557.png`;
const imgLine24 = `${assetPathPrefix}/6789e.svg`;
const imgLine16 = `${assetPathPrefix}/c2395.svg`;
const imgLine14 = `${assetPathPrefix}/33e6b.svg`;
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
    <div className="bg-[#141414] content-stretch flex flex-col gap-[60px] isolate items-center pb-[40px] pt-[124px] px-[60px] relative size-full" data-node-id="1:6637" data-name="Desktop">
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex gap-[12px] h-[52px] items-center justify-center left-[calc(50%+610px)] overflow-clip px-[16px] py-[4px] rounded-[8px] top-[36px] w-[100px] z-[4]" data-node-id="1:6638" data-name="Header language change">
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:6638;1:7874" data-name="Header language change/Parts">
          <div className="[word-break:break-word] absolute flex flex-col font-['Onest:Bold'] font-bold inset-[5%_0] justify-center leading-[0] text-[16px] text-center text-white" data-node-id="I1:6638;1:7874;1:7872">
            <p className="leading-[1.1]">ru</p>
          </div>
        </div>
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" data-node-id="I1:6638;1:7875">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine24} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-[22px]" data-node-id="I1:6638;1:7876" data-name="Header language change/Parts">
          <a className="[word-break:break-word] absolute flex flex-col font-['Onest:Regular'] font-normal inset-[5%_0] justify-center leading-[0] opacity-40 text-[16px] text-center text-white" href="https://www.figma.com/design/pkNH7F9TLfPHzHNxiW8PH8?node-id=1035-2732" data-node-id="I1:6638;1:7876;1:7868" target="_blank">
            <p className="cursor-pointer leading-[1.1]">en</p>
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-[1320px] z-[3]" data-node-id="1:6639">
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:6640">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6641">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]" data-node-id="1:6642">
              Элтекс
            </p>
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6643">
              Интерфейсы управления сервисным маршрутизатором.
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6644">
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:6645">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6646">
                  Telecom
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:6647">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6648">
                  B2B
                </p>
              </div>
              <div className="bg-[#363636] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:6649">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.45] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6650">
                  Web
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-[2592/692] relative rounded-[20px] shrink-0 w-full" data-node-id="1:6651" data-name="image 109">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage109} />
          </div>
          <div className="[word-break:break-word] bg-[#262626] content-stretch flex gap-[60px] items-start leading-[1.35] px-[24px] py-[20px] relative rounded-[16px] shrink-0 text-[18px] text-white w-[1320px] whitespace-nowrap" data-node-id="1:6654">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:6655">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:6656">
                Компания
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:6657">
                Элтекс
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="1:6658">
              <p className="font-['Onest:Bold'] font-bold relative shrink-0" data-node-id="1:6659">
                Роль
              </p>
              <p className="font-['Onest:Regular'] font-normal relative shrink-0" data-node-id="1:6660">
                Продуктовый дизайнер
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[28px] text-white w-[1000px]" data-node-id="1:6664">
          <p className="mb-0">
            <span className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35]">Сервисный маршрутизатор</span>
            <span className="leading-[1.35]">{` — это продукт для настройки, мониторинга и администрирования сетевого оборудования.`}</span>
          </p>
          <p className="leading-[1.35] mb-0">Основными пользователями системы являлись сетевые инженеры.</p>
          <p className="leading-[1.35]">Моей задачей было преобразовать сложную техническую конфигурацию и инженерные сценарии работы в понятные графические интерфейсы.</p>
        </div>
        <div className="[word-break:break-word] border-3 border-[#275ec7] border-solid content-stretch flex flex-col gap-[16px] items-start p-[28px] relative rounded-[20px] shrink-0 text-white w-[1000px]" data-node-id="1:6665">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:6666">
            Главный вызов проекта
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-full" data-node-id="1:6667">
            Проект требовал работы со сложной предметной областью: большим количеством параметров, взаимосвязанных настроек и высокой информационной плотностью. Одной из ключевых задач было сохранить привычную для сетевых инженеров логику работы, представив её в удобном и понятном графическом интерфейсе.
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-[1320px]" data-node-id="1:6699" data-name="Ограничения">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:6700">
            Ограничения
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-[1000px]" data-node-id="1:6701">
            Проект стартовал до моего прихода. Я продолжил развитие продукта, проектируя новые разделы и сценарии с нуля, при этом соблюдая уже сформированные принципы интерфейса и ограничения существующей системы.
          </p>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:6703">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine16} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:6704">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-px relative text-white" data-node-id="1:6705">
            <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] w-full" data-node-id="1:6706">
              Корпоративная дизайн-система
            </p>
            <p className="font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full" data-node-id="1:6707">
              <span className="leading-[1.35]">{`Интерфейсы создавались на базе корпоративной дизайн-системы `}</span>
              <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Protocol UI</span>
              <span className="leading-[1.35]">. Система построена на дизайн-токенах и включает библиотеку компонентов, сторибук и гайды по использованию паттернов интерфейса.</span>
            </p>
          </div>
          <div className="border border-[#094a60] border-solid h-[358px] relative rounded-[12px] shrink-0 w-[650px]" data-node-id="1:6708" data-name="cover 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgCover1} />
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:6747">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine16} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:6748">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:6749">
            Управление физическими интерфейсами
          </p>
          <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6750">
            <span className="font-['Onest:Bold'] font-bold leading-[1.35]">Задача:</span>
            <span className="leading-[1.35]">{` предоставить инженеру быстрый доступ к настройке, мониторингу и диагностике интерфейсов.`}</span>
          </p>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:6751">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6752">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6753">
                Список интерфейсов
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6754">
                Инженеру необходимо одновременно контролировать большое количество физических и вложенных интерфейсов и быстро находить проблемные состояния. Поэтому основой раздела стала таблица с фильтрацией, визуальными статусами и поддержкой иерархии интерфейсов.
              </p>
              <div className="aspect-[4096/1728] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6755" data-name="физические интерфейсы — таблица 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img1} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6756">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6757">
                Настройка интерфейса
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6758">
                Конфигурация интерфейса включает большое количество связанных параметров. Вместо распределения настроек по нескольким экранам я объединил их в единую форму, чтобы инженер мог последовательно настроить интерфейс без лишних переходов.
              </p>
              <div className="aspect-[3840/2592] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6759" data-name="физические интерфейсы — форма 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img2} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6760">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6761">
                Мониторинг и диагностика
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6762">
                Для диагностики инженеру важно видеть состояние интерфейса, технические показатели и динамику нагрузки в одном месте. Поэтому я объединил оперативные данные, статусы и графики в едином экране, чтобы основные проверки можно было выполнять без перехода в CLI.
              </p>
              <div className="h-[2304px] relative rounded-[12px] shrink-0 w-[1000px]" data-node-id="1:6763" data-name="физические интерфейсы — статистика 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img3} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:6765">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine14} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full" data-node-id="1:6766">
          <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:6767">
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:6768">
              Управление пользователями
            </p>
            <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6769">
              <span className="leading-[1.35]">{`Задача: `}</span>
              <span className="font-['Onest:Regular'] font-normal leading-[1.35]">управление доступом к устройству и настройка методов аутентификации.</span>
            </p>
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:6770">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6771">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6772">
                  Список пользователей
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6773">
                  Для управления доступом инженеру необходимо быстро видеть состояние учётной записи, уровень доступа и используемый метод аутентификации. Поэтому основные параметры и статусы были вынесены непосредственно в таблицу.
                </p>
                <div className="aspect-[3840/2160] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6774" data-name="AAA Local — таблица 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAaaLocal1} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6775">
                <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6776">
                  Карточка пользователя
                </p>
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6777">
                  Настройки учётной записи зависят от выбранного метода аутентификации, наличия пароля и SSH-ключа. Изменение одного параметра могло делать другие настройки обязательными, недоступными или приводить к конфликтному состоянию. Поэтому я спроектировал форму, которая меняется в зависимости от выбранного сценария и заранее показывает ограничения.
                </p>
                <div className="aspect-[3840/2160] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6778" data-name="AAA Local — страница пользователя 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAaaLocal2} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0" data-node-id="1:6780">
            <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6781">
              Для раздела управления пользователями я проработал около 20 сценариев, связанных с сочетанием методов аутентификации, состояния пароля, SSH-ключей и уровней доступа. Ниже — несколько примеров того, как интерфейс меняется в зависимости от конфигурации.
            </p>
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[800px]" data-node-id="1:6782">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6783">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:6784">
                  Метод аутентификации — пароль
                </p>
                <div className="aspect-[2619/1536] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6785" data-name="Метод аутентификации — пароль 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img4} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6786">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:6787">
                  Метод аутентификации — публичный ключ
                </p>
                <div className="aspect-[2619/1716] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6788" data-name="Метод аутентификации — публичный ключ 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img5} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6789">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:6790">
                  Метод аутентификации — пароль и публичный ключ
                </p>
                <div className="aspect-[2619/2124] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6791" data-name="Метод аутентификации — пароль и публичный ключ 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img6} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6792">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:6793">
                  Пароль удалён / метод аутентификации — пароль и публичный ключ
                </p>
                <div className="aspect-[2619/2292] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6794" data-name="Пароль удалён _ метод аутентификации — пароль и публичный ключ 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img7} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6795">
                <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-full" data-node-id="1:6796">
                  Пароль удалён / метод аутентификации — пароль
                </p>
                <div className="aspect-[2619/1704] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6797" data-name="Пароль удалён _ метод аутентификации — пароль 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={img8} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:6798">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine16} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="1:6799">
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:6800">
            Настройка времени
          </p>
          <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[0] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6801">
            <span className="leading-[1.35]">{`Задача: `}</span>
            <span className="font-['Onest:Regular'] font-normal leading-[1.35]">управление синхронизацией времени через NTP.</span>
          </p>
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-node-id="1:6802">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6803">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6804">
                Таблица серверов
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6805">
                Управление источниками времени и их параметрами.
              </p>
              <div className="aspect-[3840/2160] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6806" data-name="Date & Time — таблица 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgDateTime1} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6807">
              <p className="[word-break:break-word] font-['Onest:Bold'] font-bold leading-[1.35] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" data-node-id="1:6808">
                Добавление и редактирование
              </p>
              <p className="[word-break:break-word] font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] text-white w-[1000px]" data-node-id="1:6809">
                Разные типы NTP-источников требуют разного набора параметров конфигурации. Вместо одной перегруженной формы я сделал интерфейс зависимым от выбранного типа: инженер видит только те параметры, которые относятся к текущему сценарию.
              </p>
              <div className="aspect-[3146/1712] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6810" data-name="Date & Time — добавление и редактирование сервера 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgDateTime2} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="1:6812">
          <div className="flex-none rotate-180 w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine16} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start relative shrink-0 text-white w-full" data-node-id="1:6813">
          <p className="font-['Onest:Bold'] font-bold leading-[1.45] relative shrink-0 text-[28px] whitespace-nowrap" data-node-id="1:6814">
            Результат
          </p>
          <p className="font-['Onest:Regular'] font-normal leading-[1.35] relative shrink-0 text-[18px] w-[1000px]" data-node-id="1:6815">
            Спроектировал интерфейсы для настройки, мониторинга и администрирования сервисного маршрутизатора, сохранив привычную для сетевых инженеров логику работы. В рамках проекта проработал сложные конфигурационные сценарии, зависимости между параметрами и различные состояния интерфейса для управления физическими интерфейсами, пользователями и синхронизацией времени.
          </p>
        </div>
      </div>
      <Section className="content-stretch flex flex-col h-[461px] items-start overflow-clip relative rounded-[12px] shrink-0 w-[1320px] z-[2]" />
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[rgba(20,20,20,0.8)] border border-[#b2a0f8] border-solid content-stretch flex h-[52px] items-center left-[calc(50%-571.5px)] overflow-clip px-[24px] py-[4px] rounded-[8px] top-[36px] z-[1]" data-node-id="1:6817" data-name="Header Case">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I1:6817;1:3190" data-name="Header button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I1:6817;1:3190;1:7852" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Onest:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" data-node-id="I1:6817;1:3190;1:7854">
            <p className="leading-[1.35]">На главную</p>
          </div>
        </div>
      </div>
    </div>
  );
}