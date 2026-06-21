import DotPattern from "@/components/ui/dot-pattern"
import { BookOpen, HeartPulse, Shield } from "lucide-react"

const thanks = [
  {
    icon: BookOpen,
    role: "Библиотекарь",
    name: "Чирва Елена Владимировна",
    text: "Спасибо за тишину, в которой рождались знания, и за каждую книгу, открывшую новый мир.",
  },
  {
    icon: HeartPulse,
    role: "Медсестра",
    name: "Зайцева Юлия Анатольевна",
    text: "Спасибо за заботу и доброту — рядом с Вами было спокойно и безопасно.",
  },
  {
    icon: Shield,
    role: "Особая благодарность · Охранник",
    name: "Дядя Ислам",
    text: "Спасибо за надёжность, добрую улыбку и тёплое слово каждое утро у входа в школу.",
    highlight: true,
  },
]

export function AboutQuote() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {thanks.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.name}
              className={`relative flex flex-col gap-4 border-2 rounded-lg backdrop-blur-sm p-6 ${
                item.highlight
                  ? "border-purple-400/40 bg-purple-500/15"
                  : "border-white/20 bg-white/5"
              }`}
            >
              <DotPattern width={5} height={5} />
              <div
                className={`w-fit rounded-lg p-3 ${
                  item.highlight ? "bg-purple-500/30" : "bg-white/10"
                }`}
              >
                <Icon className="h-6 w-6 text-purple-200" />
              </div>
              <p className="text-xs uppercase tracking-wider text-purple-300 font-open-sans-custom">
                {item.role}
              </p>
              <p className="text-xl font-semibold text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-snug">
                {item.name}
              </p>
              <p className="text-sm md:text-base text-white/85 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
                {item.text}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
