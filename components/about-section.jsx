import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STAT_PILLS = ["5 Projects Shipped", "Top 30 IBM Hackathon", "4 Months Fintech"]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-jetbrains-mono tracking-widest text-[#64FFDA] uppercase mb-3">
          01. About
        </p>
        <div className="w-12 h-px bg-[#64FFDA]" />
      </motion.div>

      {/* Bio paragraphs */}
      <motion.div
        className="space-y-5 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="font-inter text-[#CCD6F6] leading-relaxed">
          I build AI systems that work in production. Not &ldquo;AI-powered&rdquo; buttons
          on a landing page   actual RAG pipelines, fraud detection engines,
          federated learning security layers.
        </p>
        <p className="font-inter text-[#8892B0] leading-relaxed">
          I spent four months as a founding intern at a fintech startup building
          banking reconciliation infrastructure from scratch. Before that I was
          researching hallucination reduction in LLMs and presenting at state
          research competitions.
        </p>
        <p className="font-inter text-[#8892B0] leading-relaxed">
          Currently finishing BSc CS{" "}
          <span className="text-[#CCD6F6] font-medium">(9.55 CGPA)</span> in
          Mumbai. Heading into MCA. Open to full-time and remote roles.
        </p>
        <p className="font-inter text-[#8892B0] leading-relaxed">
          If you&apos;re building something that matters and is slightly chaotic
          behind the scenes   let&apos;s talk.
        </p>
      </motion.div>

      {/* Stat pills */}
      <motion.div
        className="flex flex-wrap gap-3 mt-10"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {STAT_PILLS.map((stat) => (
          <span
            key={stat}
            className="px-4 py-2 border border-[#233554] bg-[#161B27] text-[#8892B0] text-sm font-jetbrains-mono rounded-[4px]"
          >
            {stat}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
