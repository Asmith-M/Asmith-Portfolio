import { Github, Linkedin, Mail } from "lucide-react"

const NAV_ITEMS = [
  { label: "About",      id: "about",      number: "01" },
  { label: "Experience", id: "experience", number: "02" },
  { label: "Projects",   id: "work",       number: "03" },
  { label: "Skills",     id: "skills",     number: "04" },
]

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    icon: Github,
    url: "https://github.com/Asmith-M",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/asmith-mahendrakar-955204311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "Email",
    icon: Mail,
    url: "mailto:asmithmahendrakar@gmail.com",
  },
]

export function LeftPanel({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col h-full justify-between">
      {/* ── Top: identity ── */}
      <div>
        {/* Photo */}
        <div className="mb-6">
          <img
            src="/Asmith.jpg"
            alt="Asmith Mahendrakar"
            className="w-20 h-20 rounded-full object-cover border-2 border-[#233554] hover:border-[#64FFDA]/60 transition-colors duration-300"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl xl:text-3xl font-bold font-poppins text-[#CCD6F6] mb-1 leading-tight">
          Asmith Mahendrakar
        </h1>

        {/* Role */}
        <p className="font-jetbrains-mono text-sm text-[#64FFDA] mb-5 tracking-wide">
          AI Systems Developer
        </p>

        {/* Short bio */}
        <p className="font-inter text-sm text-[#8892B0] leading-relaxed max-w-[260px] xl:max-w-[280px] mb-10">
          I build production AI systems   RAG pipelines, fraud detection
          engines, federated learning security. Based in Mumbai.
        </p>

        {/* ── Nav links ── */}
        <nav className="space-y-0.5" aria-label="Page sections">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`group flex items-center gap-4 w-full py-2.5 transition-all duration-200 ${
                  isActive
                    ? "text-[#CCD6F6]"
                    : "text-[#495670] hover:text-[#8892B0]"
                }`}
              >
                {/* Animated indicator line */}
                <span
                  className={`h-px shrink-0 transition-all duration-300 ${
                    isActive
                      ? "w-14 bg-[#64FFDA]"
                      : "w-6 bg-[#495670] group-hover:w-9 group-hover:bg-[#8892B0]"
                  }`}
                />
                {/* Label */}
                <span
                  className={`text-xs font-jetbrains-mono tracking-widest uppercase transition-colors duration-200 ${
                    isActive ? "text-[#CCD6F6]" : ""
                  }`}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* ── Bottom: status + social ── */}
      <div>
        {/* Open to work pill */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#64FFDA] animate-pulse shrink-0" />
          <span className="text-xs font-jetbrains-mono text-[#495670] tracking-wide">
            Open to full-time &amp; remote roles
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, icon: Icon, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#495670] hover:text-[#64FFDA] transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
