import { useState, useEffect } from "react"

/**
 * Tracks which section ID is currently in the viewport.
 * Uses IntersectionObserver with a root margin that highlights
 * the section occupying the upper-middle portion of the screen.
 *
 * @param {string[]} sectionIds  - Array of element IDs to watch
 * @returns {string}             - The currently active section ID
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        // Section is "active" when it's in the top 40%–70% band of the viewport
        { rootMargin: "-20% 0px -55% 0px", threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, []) // stable   sectionIds are compile-time constants

  return activeSection
}
