import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Lock, X } from "lucide-react"
import { Badge } from "../components/ui/badge"

const otherProjects = [
  {
    id: "trendwise",
    title: "TrendWise",
    subtitle: "AI SEO Blog Generator",
    description:
      "Next.js blog generator powered by OpenRouter AI. Generates SEO-ready drafts instantly with MongoDB persistence and Google OAuth.",
    tech: ["Next.js", "MongoDB", "OpenRouter", "NextAuth", "Vercel"],
    demoUrl: "https://trend-wise-nu.vercel.app",
    githubUrl: "https://github.com/Asmith-M/TrendWise",
    image: "/Trendwise.png",
  },
  {
    id: "accessmap",
    title: "AccessMap",
    subtitle: "Accessibility Navigation Tool",
    description:
      "Accessibility-focused navigation for 150+ pilot users across Mumbai. Built for IBM Hackathon   Top 30 statewide.",
    tech: ["React", "Node.js", "Google Maps API", "MongoDB", "Express"],
    demoUrl: null,
    githubUrl: "https://github.com/0Ankit0-0/Access-Map0",
    image: "/AccessMap.png",
  },
  {
    id: "noetic-vault",
    title: "Noetic Vault",
    subtitle: "Offline RAG System",
    description:
      "Fully offline document intelligence   local LLMs via Ollama/Mistral, no API calls, no data leaves your machine. Presented at Avishkar State Research Competition.",
    tech: ["Ollama", "Mistral", "LlamaIndex", "FastAPI", "SQLite"],
    demoUrl: null,
    githubUrl: "https://github.com/Asmith-M/Noetic-Vault",
    image: "/Noetic Vault.png",
  },
  {
    id: "frms",
    title: "FRMS @ NStechX",
    subtitle: "Internship Work · Private",
    description:
      "Fraud Risk Management System   built solo during internship. Full backend pipeline + frontend. Cannot open source (NDA) but happy to discuss architecture.",
    tech: ["FastAPI", "Python", "Node.js", "SQL", "UPI/IMPS APIs"],
    demoUrl: null,
    githubUrl: null,
    image: null,
    isPrivate: true,
  },
]

function ProjectCard({ project, index, onSelect }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onSelect(project)}
    >
      <div className="relative bg-[#141414] border border-[#2A2A2A] rounded-[4px] overflow-hidden min-h-[260px] flex flex-col justify-between group-hover:border-[#E8C547] transition-colors duration-200">
        {/* Background image or gradient */}
        {project.image ? (
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
          </div>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #141414 0%, #1A1A1A 50%, #141414 100%)",
            }}
          >
            {/* Terminal grid pattern for private/no-image cards */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(#E8C547 1px, transparent 1px), linear-gradient(90deg, #E8C547 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
        )}

        {/* Private badge */}
        {project.isPrivate && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#0D0D0D]/80 border border-[#E8C547]/40 px-2 py-1 rounded-[4px]">
            <Lock className="w-3 h-3 text-[#E8C547]" />
            <span className="text-xs font-jetbrains-mono text-[#E8C547]">NDA</span>
          </div>
        )}

        {/* Card content */}
        <div className="relative z-10 p-6 flex flex-col justify-end flex-1 mt-20">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold font-poppins text-[#F5F5F0]">
                {project.title}
              </h3>
              <p className="text-sm text-[#9A9A8E] font-jetbrains-mono mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#F5F5F0]/80 font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[#0D0D0D]/80 border border-[#E8C547]/30 text-[#F5F5F0]/80 text-xs font-jetbrains-mono rounded-[4px]"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2 py-0.5 bg-[#0D0D0D]/80 border border-[#E8C547]/30 text-[#F5F5F0]/80 text-xs font-jetbrains-mono rounded-[4px]">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function OtherProjects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#0D0D0D] relative overflow-hidden border-t border-[#2A2A2A]"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Section header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-[#F5F5F0]">
            Other Projects
          </h2>
        </motion.div>
        <motion.p
          className="text-[#9A9A8E] font-inter text-lg mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          A collection of things built along the way.
        </motion.p>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-[#141414] border border-[#2A2A2A] rounded-[4px] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image or gradient header */}
            <div className="relative">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-t-[4px]"
                />
              ) : (
                <div
                  className="w-full h-32 rounded-t-[4px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #141414 0%, #1A1A1A 100%)",
                    borderBottom: "1px solid #2A2A2A",
                  }}
                />
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-[#0D0D0D]/80 border border-[#2A2A2A] rounded-[4px] flex items-center justify-center text-[#9A9A8E] hover:border-[#E8C547] hover:text-[#E8C547] transition-all duration-200"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8">
              {/* Title */}
              <h3 className="text-2xl font-bold font-poppins text-[#F5F5F0] mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-jetbrains-mono text-[#9A9A8E] mb-6">
                {selectedProject.subtitle}
              </p>

              {/* Gold separator */}
              <div className="w-12 h-px bg-[#E8C547] mb-6" />

              <p className="text-[#9A9A8E] font-inter leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-[#E8C547]/40 bg-[#0D0D0D] text-[#F5F5F0] text-xs font-jetbrains-mono rounded-[4px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex gap-3 flex-wrap">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E8C547] text-[#0D0D0D] px-5 py-2.5 rounded-[4px] text-sm font-semibold font-poppins hover:bg-[#C8A832] transition-colors duration-200"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#2A2A2A] text-[#9A9A8E] px-5 py-2.5 rounded-[4px] text-sm font-semibold font-poppins hover:border-[#E8C547] hover:text-[#E8C547] transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {selectedProject.isPrivate && (
                  <div className="inline-flex items-center gap-2 border border-[#2A2A2A] text-[#5A5A52] px-5 py-2.5 rounded-[4px] text-sm font-jetbrains-mono">
                    <Lock className="w-4 h-4" />
                    Private   NDA
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
