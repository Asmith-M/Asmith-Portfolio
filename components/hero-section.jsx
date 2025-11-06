import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import { InteractiveDemo } from "../components/interactive-demo"

export function HeroSection() {
  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F172A] to-[#1E293B]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#3B82F6]/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6]/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.4%3E%3Ccircle cx=7 cy=7 r=1/%3E%3Ccircle cx=27 cy=7 r=1/%3E%3Ccircle cx=47 cy=7 r=1/%3E%3Ccircle cx=7 cy=27 r=1/%3E%3Ccircle cx=27 cy=27 r=1/%3E%3Ccircle cx=47 cy=27 r=1/%3E%3Ccircle cx=7 cy=47 r=1/%3E%3Ccircle cx=27 cy=47 r=1/%3E%3Ccircle cx=47 cy=47 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold font-poppins leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I create{" "}
              <span className="text-[#3B82F6] drop-shadow-[0_4px_12px_rgba(59,130,246,0.4)]">
                intelligent full-stack applications
              </span>{" "}
              that solve real problems
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-[#F1F5F9]/80 font-inter leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-stack developer specializing in building{" "}
              <span className="text-[#06B6D4] font-semibold drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]">
                intuitive, scalable, and AI-powered
              </span>{" "}
              solutions using modern web technologies
            </motion.p>

            <motion.p
              className="text-base lg:text-lg text-[#10B981] font-semibold drop-shadow-[0_2px_8px_rgba(16,185,129,0.4)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Available for freelance & internships
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={scrollToWork}
                className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#3B82F6]/40"
              >
                See My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 bg-transparent"
                asChild
              >
                <a href="/Resume-Public.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right side - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InteractiveDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}