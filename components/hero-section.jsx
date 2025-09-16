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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] via-[#1c1c1c] to-[#2a2a2a]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#d67c49]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7fb77e]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.4%3E%3Ccircle cx=7 cy=7 r=1/%3E%3Ccircle cx=27 cy=7 r=1/%3E%3Ccircle cx=47 cy=7 r=1/%3E%3Ccircle cx=7 cy=27 r=1/%3E%3Ccircle cx=27 cy=27 r=1/%3E%3Ccircle cx=47 cy=27 r=1/%3E%3Ccircle cx=7 cy=47 r=1/%3E%3Ccircle cx=27 cy=47 r=1/%3E%3Ccircle cx=47 cy=47 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold font-poppins leading-tight text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I build <span className="text-[#ff8c42] drop-shadow-[0_2px_4px_rgba(255,140,66,0.3)]">AI systems</span> &{" "}
              <span className="text-[#90d690] drop-shadow-[0_2px_4px_rgba(144,214,144,0.3)]">full-stack apps</span> that
              solve real problems.
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-[#f8f8f8]/80 font-inter leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate about leveraging technology to create{" "}
              <span className="text-[#ff8c42] font-semibold drop-shadow-[0_1px_2px_rgba(255,140,66,0.3)]">
                intuitive, intelligent, and impactful
              </span>{" "}
              solutions.
            </motion.p>

            <motion.p
              className="text-lg lg:text-xl text-[#90d690] font-semibold mt-4 drop-shadow-[0_1px_2px_rgba(144,214,144,0.3)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }} // Slightly later delay for effect
            >
              Available for freelance & internships.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={scrollToWork}
                className="bg-[#ff8c42] hover:bg-[#ff8c42]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff8c42]/25"
              >
                See My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-[#90d690] text-[#90d690] hover:bg-[#90d690] hover:text-[#1c1c1c] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 bg-transparent"
                asChild
              >
                <a href="/Resume-Public.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <InteractiveDemo />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#ff8c42]/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-[#ff8c42] rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
