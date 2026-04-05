import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setMobileOpen(false)
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const navLinks = [
    { label: "Work", section: "work" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Contact", section: "contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/92 backdrop-blur-md border-b border-[#2A2A2A] shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Name only   no logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-lg font-poppins text-[#F5F5F0] hover:text-[#E8C547] transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Asmith Mahendrakar
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-sm font-medium text-[#9A9A8E] hover:text-[#E8C547] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex items-center justify-center bg-[#E8C547] text-[#0D0D0D] px-5 py-2 rounded-[4px] text-sm font-semibold font-poppins transition-all duration-200 hover:bg-[#C8A832]"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-[#9A9A8E] hover:text-[#E8C547] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-[#2A2A2A] pt-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-left text-sm font-medium text-[#9A9A8E] hover:text-[#E8C547] transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center bg-[#E8C547] text-[#0D0D0D] px-5 py-2 rounded-[4px] text-sm font-semibold font-poppins w-fit hover:bg-[#C8A832] transition-colors duration-200"
            >
              Hire Me
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
