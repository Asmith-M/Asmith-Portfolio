import { useEffect, useState } from "react"

/**
 * Soft radial cursor glow   a full-viewport overlay whose gradient
 * origin tracks the mouse pointer. Zero extra DOM nodes, GPU-composited.
 */
export function CursorFollower() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(100,255,218,0.055), transparent 60%)`,
        transition: "background 0.05s linear",
      }}
    />
  )
}
