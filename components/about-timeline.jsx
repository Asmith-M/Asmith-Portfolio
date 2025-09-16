import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Lightbulb, Trophy, Rocket, GraduationCap } from "lucide-react"
import { Button } from "../components/ui/button"

const timelineEvents = [
  {
    icon: GraduationCap,
    title: "Started CS Journey",
    description: "Began exploring programming with Python and discovered the power of automation.",
    year: "2023",
    color: "#7fb77e",
  },
  {
    icon: Lightbulb,
    title: "First AI Project",
    description: "Built my first machine learning model for text classification, sparking my passion for AI.",
    year: "2024",
    color: "#d67c49",
  },
  {
    icon: Trophy,
    title: "Full Stack Developement",
    description: "Mastered React, Next.js, and FastAPI while building TrendWise and SmartChat applications.",
    year: "2024",
    color: "#7fb77e",
  },
  {
    icon: Code,
    title: "IBM Hackathon Participant",
    description: "Created AccessMap - AI-enhanced accessibility mapping tool, recognized at IBM showcase.",
    year: "2025",
    color: "#d67c49",
  },
  {
    icon: Rocket,
    title: "Chairperson – Technova (College Technical Festival)",
    description: "Led a team of 70+ members to organize a college-wide technical fest with 1800+ participants.",
    year: "2025",
    color: "#7fb77e",
  },
]

export function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: false, amount: 0.3 })

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const rect = timelineRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      )
      const newActiveIndex = Math.floor(scrollProgress * timelineEvents.length)
      setActiveIndex(Math.min(newActiveIndex, timelineEvents.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#1c1c1c] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#d67c49] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#7fb77e] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">My Journey</h2>
          <p className="text-xl text-[#f8f8f8]/80 max-w-2xl mx-auto">
            From curious beginner to AI developer, here's how I've grown through challenges and discoveries.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d67c49] via-[#7fb77e] to-[#d67c49] opacity-30" />

          <motion.div
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-[#d67c49] to-[#7fb77e]"
            initial={{ height: 0 }}
            animate={{
              height: `${((activeIndex + 1) / timelineEvents.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isActive = index <= activeIndex
              const isCurrent = index === activeIndex

              return (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                      isActive
                        ? `bg-[${event.color}] border-[${event.color}] shadow-lg shadow-[${event.color}]/25`
                        : "bg-[#2a2a2a] border-[#2a2a2a]"
                    }`}
                    animate={{
                      scale: isCurrent ? 1.2 : 1,
                      boxShadow: isCurrent ? `0 0 30px ${event.color}40` : "none",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-8 h-8 ${isActive ? "text-white" : "text-[#f8f8f8]/50"}`} />
                  </motion.div>

                  {/* Event content */}
                  <motion.div
                    className={`flex-1 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                      isActive ? "border-[#d67c49]/30 shadow-lg" : "border-[#2a2a2a]"
                    }`}
                    animate={{
                      scale: isCurrent ? 1.05 : 1,
                      y: isCurrent ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold font-poppins">{event.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isActive ? `bg-[${event.color}]/20 text-[${event.color}]` : "bg-[#2a2a2a] text-[#f8f8f8]/50"
                        }`}
                      >
                        {event.year}
                      </span>
                    </div>
                    <p className={`text-[#f8f8f8]/80 leading-relaxed ${isActive ? "opacity-100" : "opacity-50"}`}>
                      {event.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-[#d67c49]/10 to-[#7fb77e]/10 rounded-2xl p-8 border border-[#d67c49]/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins mb-4">Ready for the Next Chapter</h3>
            <p className="text-[#f8f8f8]/80 mb-6">
              I'm excited to bring my AI expertise and full-stack skills to your next project. Let's build something
              amazing together.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-[#d67c49] hover:bg-[#d67c49]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Open to Freelance — Contact Me
            </Button>
            <p className="text-sm text-[#f8f8f8]/60 mt-3">I usually reply within 48 hours</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
