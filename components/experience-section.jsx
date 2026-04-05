import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const EXPERIENCE = [
  {
    role: "Software Development Intern",
    company: "NStechX India",
    period: "Nov 2025 – Feb 2026 · Remote",
    bullets: [
      "Built FRMS (Fraud Risk Management System) solo   complete fraud detection pipeline, frontend + backend",
      "Architected UPI, IMPS, ATM reconciliation prototypes from scratch",
      "Contributed to AWS deployment and infrastructure setup",
      "Presented prototypes to banking stakeholders",
    ],
    tech: ["FastAPI", "Python", "Node.js", "SQL", "AWS", "UPI/IMPS APIs"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" ref={ref} className="py-16 lg:py-20">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-jetbrains-mono tracking-widest text-[#64FFDA] uppercase mb-3">
          02. Experience
        </p>
        <div className="w-12 h-px bg-[#64FFDA]" />
      </motion.div>

      {/* Experience cards */}
      <div className="space-y-4">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            className="group bg-[#161B27] border border-[#233554] rounded-[4px] p-6 hover:border-[#64FFDA]/40 hover:bg-[#64FFDA]/[0.02] transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 + 0.15 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <h3 className="font-poppins font-semibold text-[#CCD6F6] text-base">
                  {exp.role}
                </h3>
                <p className="text-[#64FFDA] font-jetbrains-mono text-xs mt-0.5 tracking-wide">
                  {exp.company}
                </p>
              </div>
              <span className="text-[#495670] font-jetbrains-mono text-xs shrink-0 mt-0.5 whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 mb-5">
              {exp.bullets.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-[#64FFDA] shrink-0 mt-0.5 text-xs">▸</span>
                  <span className="text-[#8892B0] font-inter text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 border border-[#64FFDA]/25 bg-[#0F1117] text-[#64FFDA] text-xs font-jetbrains-mono rounded-[4px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
