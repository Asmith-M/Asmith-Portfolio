"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { ShieldLogo } from "../components/ui/shield-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Asmith-M",
      color: "#f8f8f8",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/asmith-mahendrakar-955204311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0077b5",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/asmith__M?t=pwsEIUGhsaJcGgp-EmokKQ&s=09",
      color: "#1da1f2",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:asmithmahendrakar@gmail.com",
      color: "#d67c49",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-[#2a2a2a] border-t border-[#2a2a2a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#d67c49] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#7fb77e] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ShieldLogo className="w-8 h-8" />
              <span className="text-2xl font-bold font-poppins">Asmith Mahendrakar</span>
            </div>
            <p className="text-[#f8f8f8]/70 leading-relaxed max-w-md">
              Freelance developer specializing in AI-powered applications and modern web solutions. Turning complex
              problems into elegant, user-friendly experiences.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1c1c1c]/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#2a2a2a] hover:border-[#d67c49]/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Icon className="w-4 h-4 text-[#f8f8f8]/70 group-hover:text-[#d67c49] transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-[#f8f8f8]/70 hover:text-[#d67c49] transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "AI Integration", "API Development", "Consulting"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-[#f8f8f8]/70">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 text-[#f8f8f8]/60">
            <span>© {currentYear} Asmith Mahendrakar. Made with</span>
            <Heart className="w-4 h-4 text-[#d67c49] fill-current" />
            <span>and lots of coffee.</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#f8f8f8]/60">
            <a href="#" className="hover:text-[#d67c49] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#d67c49] transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
