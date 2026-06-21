import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm">Наша выпускница</Badge>
          </div>

          {/* Фото + имя */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative flex-shrink-0 w-28 h-28 rounded-full overflow-hidden border-2 border-purple-400/50 bg-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.25)]">
              <img
                src="/images/graduate.jpg"
                alt="Матюхина Татьяна Александровна"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none" }}
              />
              <span className="absolute text-3xl">🎓</span>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
                Матюхина Татьяна Александровна
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Одиннадцать лет упорства, открытий и взросления позади. Сегодня ты — выпускница, которой гордится вся школа. Пусть впереди будет только лучшее!
              </p>
            </div>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-purple-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Целеустремлённость</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Ты всегда шла к своей цели, не сворачивая с пути.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-purple-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Доброта</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Твоё тепло чувствовали и одноклассники, и учителя.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-purple-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Любознательность</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Жажда знаний открывает перед тобой любые двери.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-purple-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Сила характера</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">Ты справишься с любыми испытаниями впереди.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-purple-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Мечты</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Пусть каждая твоя мечта обязательно сбудется.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-purple-300" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Новый старт</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Школа окончена — впереди большой и яркий мир.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }