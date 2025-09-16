"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, Code, MessageSquare } from "lucide-react"
import { Button } from "../components/ui/button"
import profilePhoto from "/Asmith.jpg"

const demoSteps = [
  {
    icon: Lightbulb,
    title: "Creative Builder",
    description: "Building cool ideas into reality",
    color: "#d67c49",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end application development",
    color: "#7fb77e",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Explaining complex things simply",
    color: "#d67c49",
  },
]

export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Main demo container */}
      <motion.div
        className="bg-[#2a2a2a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl p-8 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* About Me section with two-column layout */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 mb-8">
          {/* Left: Profile photo */}
          <div className="flex-shrink-0">
            <img
              src={profilePhoto}
              alt="Profile photo of Asmith"
              className="w-48 h-48 md:w-52 md:h-52 rounded-full shadow-lg shadow-[#FF6B35]/50 hover:shadow-[#FF6B35]/80 transition-all duration-300 ease-in-out hover:scale-105 object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Heading and subtitle */}
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-2xl font-bold font-poppins mb-2">About Me</h3>
            <p className="text-[#f8f8f8]/70">
              How I approach building great software
            </p>
          </div>
        </div>

        {/* Demo steps visualization */}
        <div className="space-y-6 mb-8">
          {demoSteps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === currentStep
            const isCompleted = index < currentStep

            return (
              <motion.div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-[#d67c49]/10 border border-[#d67c49]/30" : "bg-[#2a2a2a]/30"
                }`}
                animate={{
                  scale: isActive ? 1.05 : 1,
                  opacity: isActive ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isActive || isCompleted ? "bg-[#d67c49]" : "bg-[#2a2a2a]"
                  }`}
                  animate={{
                    rotate: isActive && isAnimating ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold font-poppins">{step.title}</h4>
                  <p className="text-sm text-[#f8f8f8]/70">{step.description}</p>
                </div>
                {isActive && (
                  <motion.div
                    className="w-2 h-2 bg-[#7fb77e] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Demo result preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            className="bg-[#1c1c1c]/50 rounded-lg p-6 border border-[#2a2a2a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
              <div className="text-center">
                <Lightbulb className="w-16 h-16 text-[#d67c49] mx-auto mb-4" />
                <p className="text-sm text-[#f8f8f8]/70">Turning ideas into innovative solutions...</p>
              </div>
            )}
            {currentStep === 1 && (
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 border-4 border-[#7fb77e] border-t-transparent rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <p className="text-sm text-[#f8f8f8]/70">Building full-stack applications...</p>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-[#7fb77e]" />
                  <span className="font-semibold text-[#7fb77e]">Communication Ready</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Technical concepts:</span>
                    <span className="text-[#d67c49]">Simplified</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team collaboration:</span>
                    <span className="text-[#7fb77e]">Excellent</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Problem solving:</span>
                    <span className="text-[#f8f8f8]/70">Efficient</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button
            className="bg-[#7fb77e] hover:bg-[#7fb77e]/90 text-[#1c1c1c] px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Get In Touch
            <MessageSquare className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-[#d67c49]/20 rounded-full blur-sm"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#7fb77e]/20 rounded-full blur-sm"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}
