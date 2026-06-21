import { LiquidMetalBackground } from "@/components/LiquidMetalBackground"
import { FloatingNavbar } from "@/components/FloatingNavbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Feature } from "@/components/ui/feature-with-advantages"
import { BentoPricing } from "@/components/ui/bento-pricing"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPinIcon, GraduationCapIcon, SchoolIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import func2url from "../../backend/func2url.json"

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const pricingSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  const [wishName, setWishName] = useState("")
  const [wishText, setWishText] = useState("")
  const [wishStatus, setWishStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const sendWish = async () => {
    if (!wishText.trim()) return
    setWishStatus("sending")
    try {
      const res = await fetch(func2url["send-wish"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: wishName, wish: wishText }),
      })
      if (res.ok) {
        setWishStatus("done")
        setWishName("")
        setWishText("")
      } else {
        setWishStatus("error")
      }
    } catch {
      setWishStatus("error")
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      if (currentSection === 2 && pricingSectionRef.current) {
        const pricingSection = pricingSectionRef.current
        const isAtTop = pricingSection.scrollTop === 0
        const isAtBottom = pricingSection.scrollTop + pricingSection.clientHeight >= pricingSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 1 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 3 && aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current
        const isAtTop = aboutSection.scrollTop === 0
        const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 2 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 4 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 4 && contactSectionRef.current) {
        const contactSection = contactSectionRef.current
        const isAtTop = contactSection.scrollTop === 0
        const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          return
        }
      }

      e.preventDefault()

      if (Math.abs(delta) > 10) {
        let targetSection = currentSection
        if (delta > 0) {
          targetSection = Math.min(currentSection + 1, 4)
        } else {
          targetSection = Math.max(currentSection - 1, 0)
        }

        scrollContainer.scrollTo({
          left: targetSection * containerWidth,
          behavior: "smooth",
        })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <LiquidMetalBackground />

      <div className="fixed inset-0 z-[5] bg-black/50" />

      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section id="home" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-5xl w-full">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Фото на главной */}
              <div className="relative flex-shrink-0">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-purple-400/50 overflow-hidden bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                  <img
                    src="/images/hero-photo.jpg"
                    alt="Фото выпускницы"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget
                      t.style.display = "none"
                      t.nextElementSibling?.classList.remove("hidden")
                    }}
                  />
                  <div className="hidden flex-col items-center gap-2 text-center px-4">
                    <span className="text-4xl">🎓</span>
                    <span className="text-purple-300 text-xs font-open-sans-custom">Загрузите фото<br/>hero-photo.jpg</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-purple-500 border-2 border-black flex items-center justify-center text-sm">✨</div>
              </div>

              {/* Текст */}
              <div className="text-center lg:text-left px-0 leading-5">
                <p className="mb-4 text-base uppercase tracking-[0.4em] text-purple-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom">
                  МБОУ СОШ №5 · г. Завитинск
                </p>
                <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-7xl">
                  <span className="font-open-sans-custom not-italic">С</span>{" "}
                  <span className="font-serif italic">Выпускным</span>{" "}
                  <span className="font-open-sans-custom not-italic">2026!</span>
                </h1>
                <p className="mb-8 max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide text-xl">
                  Поздравляем нашу выпускницу и всех, кто прошёл этот путь —{" "}
                  <span className="font-serif italic">впереди новая глава</span>, и она будет яркой
                </p>
                <div className="flex justify-center lg:justify-start">
                  <ShinyButton className="px-8 py-3 text-base">смотреть поздравление</ShinyButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-7xl w-full">
            <Feature />
          </div>
        </section>

        <section
          id="pricing"
          ref={pricingSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Наши учителя
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Низкий поклон тем, кто учил, поддерживал и верил. Спасибо за знания, терпение и
                душу, вложенную в каждого из нас.
              </p>
            </div>
            <BentoPricing />
          </div>
        </section>

        <section
          id="about"
          ref={aboutSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Отдельное спасибо
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Тем, кто всегда был рядом и делал школьные годы теплее и спокойнее.
              </p>
            </div>
            <AboutQuote />
          </div>
        </section>

        <section
          id="contact"
          ref={contactSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20"
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl mt-[5vh]">
            <ContactCard
              title="Оставьте пожелание"
              description="Напишите тёплые слова выпускнице Татьяне и всем выпускникам 2026 года. Пусть этот день запомнится навсегда!"
              contactInfo={[
                {
                  icon: GraduationCapIcon,
                  label: "Выпуск",
                  value: "2026 год",
                },
                {
                  icon: SchoolIcon,
                  label: "Школа",
                  value: "МБОУ СОШ №5",
                },
                {
                  icon: MapPinIcon,
                  label: "Город",
                  value: "г. Завитинск",
                  className: "col-span-2",
                },
              ]}
            >
              <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); sendWish() }}>
                {wishStatus === "done" ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                    <span className="text-4xl">🎉</span>
                    <p className="text-white font-semibold font-open-sans-custom text-lg">Пожелание отправлено!</p>
                    <p className="text-gray-300 text-sm font-open-sans-custom">Спасибо за тёплые слова</p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-2 border-purple-400/40 text-purple-200 hover:bg-purple-500/20 font-open-sans-custom"
                      onClick={() => setWishStatus("idle")}
                    >
                      Написать ещё
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-2">
                      <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                        Ваше имя
                      </Label>
                      <Input
                        type="text"
                        placeholder="Например, мама Татьяны"
                        value={wishName}
                        onChange={(e) => setWishName(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                        Пожелание выпускникам
                      </Label>
                      <Textarea
                        placeholder="Напишите тёплые слова..."
                        value={wishText}
                        onChange={(e) => setWishText(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] min-h-[140px]"
                      />
                    </div>
                    {wishStatus === "error" && (
                      <p className="text-red-400 text-sm font-open-sans-custom">Ошибка отправки. Попробуйте ещё раз.</p>
                    )}
                    <Button
                      className="w-full bg-purple-500 text-white hover:bg-purple-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)] font-open-sans-custom"
                      type="submit"
                      disabled={wishStatus === "sending" || !wishText.trim()}
                    >
                      {wishStatus === "sending" ? "Отправляем..." : "Отправить пожелание"}
                    </Button>
                  </>
                )}
              </form>
            </ContactCard>
          </div>
        </section>
      </div>
    </main>
  )
}