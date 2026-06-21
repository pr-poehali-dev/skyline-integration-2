import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type TeacherCardProps = {
  name: string
  role: string
  subjects: string
  className?: string
  highlight?: boolean
}

function TeacherCard({ name, role, subjects, className, highlight }: TeacherCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border-2 backdrop-blur-sm p-4 flex flex-col gap-3",
        highlight
          ? "bg-purple-500/15 border-purple-400/40"
          : "bg-white/5 border-white/10",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="flex items-center gap-3">
        <div className={cn("rounded-lg p-2", highlight ? "bg-purple-500/30" : "bg-white/10")}>
          <GraduationCap className="h-5 w-5 text-purple-200" />
        </div>
        <Badge
          variant="secondary"
          className={cn(
            "font-open-sans-custom text-[10px] uppercase tracking-wider",
            highlight
              ? "bg-purple-500/30 text-purple-100 border-purple-400/40"
              : "bg-white/10 text-white border-white/20",
          )}
        >
          {role}
        </Badge>
      </div>
      <div>
        <p className="text-white font-semibold font-open-sans-custom [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)] leading-snug">
          {name}
        </p>
        <p className="text-gray-300 text-sm font-open-sans-custom mt-1">{subjects}</p>
      </div>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <TeacherCard
        name="Кочергина Наталия Викторовна"
        role="Директор"
        subjects="Математика"
        highlight
      />
      <TeacherCard
        name="Панова Елена Викторовна"
        role="Классный руководитель"
        subjects="История, обществознание"
        highlight
      />
      <TeacherCard
        name="Нечаенко Юлия Сергеевна"
        role="Учитель"
        subjects="Русский язык, литература"
      />
      <TeacherCard
        name="Павленко Екатерина Владиславовна"
        role="Учитель"
        subjects="ОБЗР, физкультура"
      />
      <TeacherCard
        name="Янчук Нина Ивановна"
        role="Учитель"
        subjects="Физика, информатика"
      />
      <TeacherCard
        name="Кузьмина Нина Михайловна"
        role="Учитель"
        subjects="География"
      />
      <TeacherCard
        name="Боревич Наталья Анатольевна"
        role="Учитель"
        subjects="Биология"
      />
      <TeacherCard
        name="Альшталь Лариса Евгеньевна"
        role="Учитель"
        subjects="Химия, английский язык"
        className="md:col-span-2 lg:col-span-1"
      />
    </div>
  )
}
