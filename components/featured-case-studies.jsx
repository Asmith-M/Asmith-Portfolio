import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Lock } from "lucide-react"

const caseStudies = [
  {
    id: "aura",
    number: "01",
    title: "AURA",
    subtitle: "Federated Learning Security System",
    problem:
      "Federated learning has a trust problem. Any hospital in the network could send poisoned model weights. Nobody would know until it was too late.",
    approach:
      "Built a Trust-as-a-Service security layer. Behavioral fingerprinting using 9-dimensional SHAP vectors, scored by Isolation Forest with a 0.72 anomaly threshold. Every verdict sealed to a blockchain-anchored audit trail via SHA-256 weight hashing.",
    impact:
      "Tamper-proof verdict records. SHAP evidence reports for rejected models. Academic project   deploy-ready architecture.",
    tech: ["PyTorch", "SHAP", "Isolation Forest", "Blockchain", "Python", "FastAPI"],
    githubUrl: "#",
    demoUrl: null,
  },
  {
    id: "noetic-vault",
    number: "02",
    title: "Noetic Vault / DocAI",
    subtitle: "Offline RAG System",
    problem:
      "Every document AI tool sends your data somewhere. What if you want the intelligence without the surveillance?",
    approach:
      "Fully offline RAG pipeline. Local LLMs via Ollama/Mistral, no API calls, no data leaves your machine. Built accuracy scoring to research hallucination reduction via retrieval augmentation.",
    impact:
      "Presented at Avishkar State Research Competition. Real reduction in hallucination rates measurable through retrieval accuracy scores.",
    tech: ["Ollama", "Mistral", "LlamaIndex", "Python", "FastAPI", "SQLite"],
    githubUrl: "https://github.com/Asmith-M/Noetic-Vault",
    demoUrl: null,
  },
  {
    id: "clauseiq",
    number: "03",
    title: "ClauseIQ",
    subtitle: "AI Legal Document Analysis",
    problem:
      "Legal contracts are dense by design. Non-experts miss critical clauses. Lawyers are expensive.",
    approach:
      "Multi-agent verification pipeline. Three agents cross-check clause extraction to reduce false positives by 25% vs single-model baseline.",
    impact:
      "95% clause extraction accuracy. 500+ test documents. Processes 50-page contracts in under 10 seconds. Live.",
    tech: ["React", "FastAPI", "PyMuPDF", "OpenRouter", "Mistral", "Vercel"],
    githubUrl: "https://github.com/Asmith-M/ClauseIQ",
    demoUrl: "https://clause-iq.vercel.app/",
  },
  {
    id: "trendwise",
    number: "04",
    title: "TrendWise",
    subtitle: "AI SEO Blog Generator",
    problem:
      "Content creators struggle to consistently generate SEO-friendly posts at scale.",
    approach:
      "Next.js app with OpenRouter for AI generation, MongoDB persistence, and NextAuth Google OAuth. Semantic keyword injection via prompt engineering.",
    impact:
      "Generates SEO-ready drafts instantly. Live at trend-wise-nu.vercel.app.",
    tech: ["Next.js", "MongoDB", "OpenRouter", "NextAuth", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/Asmith-M/TrendWise",
    demoUrl: "https://trend-wise-nu.vercel.app",
  },
  {
    id: "accessmap",
    number: "05",
    title: "AccessMap",
    subtitle: "Accessibility Navigation Tool",
    problem:
      "Urban navigation is challenging for differently-abled users due to near-total absence of accessibility data in standard mapping tools.",
    approach:
      "Built for IBM Hackathon   accessibility-focused navigation application with real-time barrier tagging and routing for 150+ pilot users across Mumbai.",
    impact:
      "Top 30 of 300+ teams statewide. Enhanced inclusive urban mobility for pilot users.",
    tech: ["React", "Node.js", "Google Maps API", "MongoDB", "Express"],
    githubUrl: "https://github.com/0Ankit0-0/Access-Map0",
    demoUrl: null,
  },
  {
    id: "frms",
    number: "06",
    title: "FRMS @ NStechX",
    subtitle: "Fraud Risk Management System",
    problem:
      "Need for automated fraud detection across UPI, IMPS, and ATM transaction channels with real-time reconciliation reporting.",
    approach:
      "Built solo during internship   complete fraud scoring pipeline, reconciliation engine, frontend dashboard. Architected UPI, IMPS, ATM recon prototypes.",
    impact:
      "Presented to banking stakeholders. Production-informed architecture. NDA   architecture discussion available on request.",
    tech: ["FastAPI", "Python", "Node.js", "SQL", "AWS", "UPI APIs"],
    githubUrl: null,
    demoUrl: null,
    isPrivate: true,
  },
]

function CaseStudyCard({ study, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative border-l-4 border-l-[#64FFDA] bg-[#161B27] border border-[#233554] rounded-[4px] p-6 overflow-hidden hover:border-[#64FFDA]/50 hover:bg-[#64FFDA]/[0.02] transition-all duration-200"
      style={{ borderLeft: "4px solid #64FFDA" }}
    >
      {/* Faded watermark number */}
      <span
        aria-hidden="true"
        className="absolute top-2 right-4 font-bold font-poppins leading-none select-none pointer-events-none"
        style={{ fontSize: "160px", color: "#64FFDA", opacity: 0.04, lineHeight: 1 }}
      >
        {study.number}
      </span>

      <div className="relative z-10">
        {/* Title row */}
        <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold font-poppins text-[#CCD6F6]">
                {study.title}
              </h3>
              {study.isPrivate && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-[#64FFDA]/30 text-[#64FFDA] text-xs font-jetbrains-mono rounded-[4px]">
                  <Lock className="w-2.5 h-2.5" />
                  NDA
                </span>
              )}
            </div>
            <p className="text-[#495670] font-jetbrains-mono text-xs mt-0.5">
              {study.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {study.demoUrl && (
              <a
                href={study.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-200"
                aria-label={`${study.title} live demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {study.githubUrl && study.githubUrl !== "#" && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-200"
                aria-label={`${study.title} GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-10 h-px bg-[#64FFDA] my-4" />

        {/* Problem / Approach / Impact */}
        <div className="space-y-3 mb-5">
          {[
            { label: "PROBLEM",  text: study.problem },
            { label: "APPROACH", text: study.approach },
            { label: "IMPACT",   text: study.impact },
          ].map(({ label, text }) => (
            <div key={label} className="flex gap-4 items-start">
              <span className="shrink-0 w-20 text-[10px] font-jetbrains-mono tracking-[0.12em] text-[#64FFDA] pt-0.5">
                {label}
              </span>
              <p className="text-[#8892B0] font-inter text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {study.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 border border-[#64FFDA]/25 bg-[#0F1117] text-[#64FFDA] text-xs font-jetbrains-mono rounded-[4px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturedCaseStudies() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 })

  return (
    <section id="work" ref={sectionRef} className="py-16 lg:py-20">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-jetbrains-mono tracking-widest text-[#64FFDA] uppercase mb-3">
          03. Projects
        </p>
        <div className="w-12 h-px bg-[#64FFDA]" />
      </motion.div>

      {/* Stacked cards */}
      <div className="space-y-5">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </section>
  )
}
