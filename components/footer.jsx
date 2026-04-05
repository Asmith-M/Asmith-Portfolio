import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub",   icon: Github,   url: "https://github.com/Asmith-M" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/asmith-mahendrakar-955204311" },
    { name: "Twitter",  icon: Twitter,  url: "https://x.com/asmith__M?t=pwsEIUGhsaJcGgp-EmokKQ&s=09" },
    { name: "Email",    icon: Mail,     url: "mailto:asmithmahendrakar@gmail.com" },
  ]

  return (
    <footer className="border-t border-[#233554] bg-[#0F1117]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div>
            <span className="font-bold font-poppins text-[#CCD6F6] text-base">
              Asmith Mahendrakar
            </span>
            <p className="text-[#495670] font-jetbrains-mono text-xs mt-0.5">
              AI systems developer. Fintech background. Mumbai.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, icon: Icon, url }, i) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-8 h-8 bg-[#161B27] border border-[#233554] rounded-[4px] flex items-center justify-center text-[#495670] hover:border-[#64FFDA]/50 hover:text-[#64FFDA] transition-all duration-200"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-[#233554] flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-[#495670] font-jetbrains-mono text-xs">
            © {currentYear} Asmith Mahendrakar
          </span>
          <span className="text-[#495670] font-jetbrains-mono text-xs text-center">
            Made with FastAPI, React, and an unreasonable amount of debugging.
          </span>
        </div>
      </div>
    </footer>
  )
}
