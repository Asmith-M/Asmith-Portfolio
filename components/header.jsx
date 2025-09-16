import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShieldLogo } from "./ui/shield-logo"
import { Button } from "./ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1c1c1c]/90 backdrop-blur-md shadow-lg border-b border-[#2a2a2a]" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <ShieldLogo className="w-8 h-8 text-[#d67c49]" />
            <span className="font-bold text-lg font-poppins">Asmith Mahendrakar</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium hover:text-[#d67c49] transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-[#d67c49] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-[#d67c49] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-[#d67c49] transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#d67c49] hover:bg-[#d67c49]/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
