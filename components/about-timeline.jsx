import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const chapters = [
  {
    number: "01",
    year: "2023",
    title: "Spawned into the World",
    description:
      "Started BSc CS in Mumbai. Discovered Python. Wrote my first script. It worked. I didn't know why. That bothered me enough to keep going.",
  },
  {
    number: "02",
    year: "2024",
    title: "Learned to Ship, Not Just Build",
    description:
      "Built TrendWise and ClauseIQ   full stack, deployed, real users. Realized that \"it runs on my machine\" is not a product.",
  },
  {
    number: "03",
    year: "2024",
    title: "Went Deep on AI",
    description:
      "Built Noetic Vault   an offline RAG system to research hallucination reduction. Presented at Avishkar State Research Competition. Found out \"making LLMs not lie\" is a harder problem than it sounds.",
  },
  {
    number: "04",
    year: "2025",
    title: "IBM Hackathon   Top 30",
    description:
      "Built AccessMap in a two-person team. Accessibility navigation for 150+ pilot users across Mumbai. Ranked Top 30 of 300+ teams statewide. First time I presented to judges and didn't want to disappear.",
  },
  {
    number: "05",
    year: "2025",
    title: "Led TechNova 2k25",
    description:
      "Chairperson of our college's flagship tech fest. 25+ person team, 20+ events, 1000+ attendees across 30+ colleges. Learned that coordinating humans is harder than debugging code.",
  },
  {
    number: "06",
    year: "Nov 2025 – Feb 2026",
    title: "Founding Intern   NStechX India",
    description:
      "Got transported to fintech. No magic, just reconciliation systems and banking APIs. Built FRMS end-to-end   solo. Architected UPI, IMPS, ATM recon prototypes. Presented to actual banks. Left with a certificate and the realization that production systems are a different beast entirely.",
  },
]

function ChapterEntry({ chapter, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="py-8"
    >
      {/* Chapter header row */}
      <div className="flex items-end justify-between gap-4 mb-3">
        <div className="flex items-end gap-2">
          <span className="text-[10px] font-jetbrains-mono tracking-[0.2em] text-[#495670] uppercase mb-1 shrink-0">
            Chapter
          </span>
          <span
            className="font-bold font-poppins leading-none text-[#64FFDA]"
            style={{ fontSize: "52px", lineHeight: 1 }}
          >
            {chapter.number}
          </span>
        </div>
        <span className="text-xs font-jetbrains-mono text-[#495670] shrink-0 mb-1">
          {chapter.year}
        </span>
      </div>

      {/* Gold separator */}
      <div className="w-full h-px bg-[#64FFDA]/40 mb-4" />

      {/* Title */}
      <h3
        className="font-semibold font-poppins text-[#CCD6F6] mb-2"
        style={{ fontSize: "22px" }}
      >
        {chapter.title}
      </h3>

      {/* Description */}
      <p className="text-[#8892B0] font-inter text-sm leading-relaxed max-w-xl">
        {chapter.description}
      </p>
    </motion.div>
  )
}

export function AboutTimeline() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 })

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-16 lg:py-20 border-t border-[#233554]"
    >
      {/* Section header */}
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold font-poppins text-[#CCD6F6]">
          The Lore
        </h2>
      </motion.div>
      <motion.p
        className="text-[#8892B0] font-inter text-sm mb-10 max-w-lg"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Every developer has an origin story. Here&apos;s mine   no dragons,
        but plenty of APIs that worked yesterday.
      </motion.p>

      {/* Chapters */}
      <div className="divide-y divide-[#233554]">
        {chapters.map((chapter, index) => (
          <ChapterEntry key={chapter.number} chapter={chapter} index={index} />
        ))}
      </div>

      {/* What's Next */}
      <motion.div
        className="mt-2 pt-8 border-t border-[#233554]"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-end gap-2 mb-3">
          <span className="text-[10px] font-jetbrains-mono tracking-[0.2em] text-[#495670] uppercase mb-1">
            Chapter
          </span>
          <span
            className="font-bold font-poppins leading-none text-[#64FFDA]"
            style={{ fontSize: "52px", lineHeight: 1 }}
          >
            ∞
          </span>
        </div>
        <div className="w-full h-px bg-[#64FFDA]/40 mb-4" />
        <h3 className="font-semibold font-poppins text-[#CCD6F6] mb-2" style={{ fontSize: "22px" }}>
          What&apos;s Next
        </h3>
        <p className="text-[#8892B0] font-inter text-sm leading-relaxed max-w-xl mb-6">
          Currently looking for full-time roles in AI engineering and fintech
          backend. Heading into MCA next. Building things in the meantime. If
          you&apos;re working on something hard and slightly chaotic, let&apos;s talk.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center justify-center bg-transparent border border-[#64FFDA] text-[#64FFDA] px-6 py-2.5 rounded-[4px] font-jetbrains-mono text-sm hover:bg-[#64FFDA]/10 transition-all duration-200"
        >
          Let&apos;s Talk
        </button>
      </motion.div>
    </section>
  )
}
