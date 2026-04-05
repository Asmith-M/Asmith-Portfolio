import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillGroups = [
  {
    category: "AI & LLM Engineering",
    skills: [
      "LangChain", "LlamaIndex", "RAG", "Multi-Agent Systems",
      "SHAP", "Isolation Forest", "Federated Learning", "Prompt Engineering",
    ],
  },
  {
    category: "LLM Inference",
    skills: ["OpenAI", "OpenRouter", "Ollama", "Mistral", "Local LLM Deployment"],
  },
  {
    category: "Vector & Data",
    skills: ["Pinecone", "Weaviate", "Semantic Search", "SQLite", "MongoDB"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Python", "Node.js", "REST APIs", "AWS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js 14", "Tailwind CSS", "JavaScript"],
  },
]

export function SkillsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="skills" ref={sectionRef} className="py-16 lg:py-20">
      {/* Section label */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-jetbrains-mono tracking-widest text-[#64FFDA] uppercase mb-3">
          04. Skills
        </p>
        <div className="w-12 h-px bg-[#64FFDA]" />
      </motion.div>

      <p className="text-[#495670] font-jetbrains-mono text-xs mb-8">
        No fake percentages. Just the things I actually use.
      </p>

      {/* Grouped tag cloud */}
      <div className="space-y-8">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            {/* Category label */}
            <p className="text-[10px] font-jetbrains-mono tracking-[0.15em] text-[#64FFDA] uppercase mb-3">
              {group.category}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: groupIndex * 0.1 + si * 0.03 }}
                  className="px-3 py-1.5 bg-[#161B27] border border-[#233554] text-[#CCD6F6] text-sm font-inter rounded-[4px] hover:border-[#64FFDA]/50 hover:text-[#64FFDA] hover:bg-[#64FFDA]/[0.03] transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
