import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type TeacherCardProps = {
  name: string
  role: string
  subjects: string
  photoFile: string
  className?: string
  highlight?: boolean
}

function TeacherCard({ name, role, subjects, photoFile, className, highlight }: TeacherCardProps) {
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
        {/* Фото учителя */}
        <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-purple-400/40 bg-white/10 flex items-center justify-center">
          <img
            src={`/images/teachers/${photoFile}`}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
          <GraduationCap className="absolute h-5 w-5 text-purple-300 -z-10" />
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
        photoFile="kochergina.jpg"
        highlight
      />
      <TeacherCard
        name="Панова Елена Викторовна"
        role="Классный руководитель"
        subjects="История, обществознание"
        photoFile="panova.jpg"
        highlight
      />
      <TeacherCard
        name="Нечаенко Юлия Сергеевна"
        role="Учитель"
        subjects="Русский язык, литература"
        photoFile="nechaenko.jpg"
      />
      <TeacherCard
        name="Павленко Екатерина Владиславовна"
        role="Учитель"
        subjects="ОБЗР, физкультура"
        photoFile="pavlenko.jpg"
      />
      <TeacherCard
        name="Янчук Нина Ивановна"
        role="Учитель"
        subjects="Физика, информатика"
        photoFile="yanchuk.jpg"
      />
      <TeacherCard
        name="Кузьмина Нина Михайловна"
        role="Учитель"
        subjects="География"
        photoFile="kuzmina.jpg"
      />
      <TeacherCard
        name="Боревич Наталья Анатольевна"
        role="Учитель"
        subjects="Биология"
        photoFile="borevich.jpg"
      />
      <TeacherCard
        name="Альшталь Лариса Евгеньевна"
        role="Учитель"
        subjects="Химия, английский язык"
        photoFile="alshtal.jpg"
        className="md:col-span-2 lg:col-span-1"
      />
    </div>
  )
}