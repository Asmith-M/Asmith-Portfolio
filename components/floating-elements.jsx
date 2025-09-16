import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [elements, setElements] = useState([])

  useEffect(() => {
    const generateElements = () => {
      const newElements = []
      for (let i = 0; i < 6; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
        })
      }
      setElements(newElements)
    }

    generateElements()
    window.addEventListener("resize", generateElements)
    return () => window.removeEventListener("resize", generateElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-[#d67c49]/10 to-[#7fb77e]/10 blur-sm"
          style={{
            width: element.size,
            height: element.size,
          }}
          animate={{
            x: [element.x, element.x + 100, element.x - 50, element.x],
            y: [element.y, element.y - 100, element.y + 50, element.y],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.2, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
