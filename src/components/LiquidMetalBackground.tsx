import { useEffect, useState } from "react"
import { Warp } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-[#0a0014]" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Warp
        style={{ width: "100%", height: "100%" }}
        color1="hsla(270, 100%, 4%, 1)"
        color2="hsla(265, 75%, 30%, 1)"
        color3="hsla(285, 70%, 55%, 1)"
        scale={0.5}
        rotation={0}
        speed={0.15}
        proportion={0.35}
        softness={1}
        distortion={0.2}
        swirl={0.6}
        swirlIterations={8}
        shapeScale={0.1}
        shape={0}
      />
    </div>
  )
}