"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, MapPin, PenTool, FileText, Zap, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"

const otherProjects = [
  {
    id: "accessmap",
    title: "SmartChat",
    subtitle: "Dual AI-powered Chatbots",
    description: "AI-powered chatbots for customer support and sales, powered by OpenAI and LangChain.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenRouter API", "JWT", "Vercel", "Render"],
    icon: MapPin,
    color: "#7fb77e",
    size: "large",
    demoUrl: "#",
    githubUrl: "#",
    image: "/SmartChat.png",
    details: {
      problem: "The challenge of building a modern, full-stack AI chatbot that integrates dual personalities, secure authentication, and a seamless, real-time user interface into a single, polished application.",
      approach:
        "Developed a full MERN stack application (MongoDB, Express, React, Node.js), integrating the OpenRouter API for versatile AI responses, using JWT for secure authentication, and deploying the frontend on Vercel and the backend on Render.",
      impact:
        "Successfully launched SmartChat, a live, feature-complete conversational AI with a modern UI, demonstrating a robust architecture that overcame complex development hurdles like routing conflicts and CORS blockades.",
    },
  },
  {
    id: "signature-pad",
    title: "Signature Pad",
    subtitle: "Digital Signing Tool",
    description: "Clean, responsive digital signature capture with export functionality and customizable styling.",
    tech: ["React", "HTML5 Canvas", "JavaScript", "CSS3", "Netlify"],
    icon: PenTool,
    color: "#d67c49",
    size: "medium",
    demoUrl: "https://ezsignaturepad.netlify.app/",
    githubUrl: "#",
    image: "/SignaturePad.png",
    details: {
      problem: "Need for a simple, clean digital signature solution without complex dependencies.",
      approach: "Built using HTML5 Canvas API with smooth drawing algorithms and export functionality.",
      impact: "Lightweight tool with responsive design, deployed on Netlify for easy access.",
    },
  },
  {
    id: "pptq",
    title: "PPTQ",
    subtitle: "Presentation Quiz Tool",
    description: "Interactive quiz platform for presentations with real-time scoring and audience engagement.",
    tech: ["React", "Next.js", "Tailwind"],
    icon: FileText,
    color: "#7fb77e",
    size: "small",
    demoUrl: "https://pptq-7ue2.vercel.app/",
    githubUrl: "#",
    image: "/PPTQ.png",
    details: {
      problem: "Presentations often lack interactive elements to engage audiences effectively.",
      approach: "Created a quiz platform that integrates with presentations for real-time audience participation.",
      impact: "Deployed on Vercel with responsive design for seamless presentation integration.",
    },
  },
  {
    id: "noetic-vault",
    title: "Noetic Vault",
    subtitle: "Coming Soon",
    description: "AI-powered knowledge management system with intelligent categorization and retrieval.",
    tech: ["React", "FastAPI", "Vector DB", "OpenAI"],
    icon: Zap,
    color: "#d67c49",
    size: "medium",
    isComingSoon: true,
    progress: 65,
    image: "/Noetic Vault.png",
    details: {
      problem: "Information overload makes it difficult to organize and retrieve knowledge effectively.",
      approach:
        "Building an AI-powered system that automatically categorizes and connects information using vector embeddings.",
      impact: "Will provide intelligent knowledge discovery and seamless information retrieval.",
    },
  },
]

export function OtherProjects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [emailForNotify, setEmailForNotify] = useState("")

  const handleNotifySubmit = (e) => {
    e.preventDefault()
    console.log("Email for notification:", emailForNotify)
    setEmailForNotify("")
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#2a2a2a] to-[#1c1c1c] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#d67c49] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#7fb77e] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">Other Projects</h2>
          <p className="text-xl text-[#f8f8f8]/80 max-w-2xl mx-auto">
            A collection of diverse projects showcasing different skills and creative approaches.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherProjects.map((project, index) => {
            const Icon = project.icon
            const gridSpan =
              project.size === "large" ? "md:col-span-2" : project.size === "medium" ? "lg:col-span-1" : "lg:col-span-1"
            return (
              <motion.div
                key={project.id}
                className={`${gridSpan} group cursor-pointer`}
                initial={{ opacity: 0, y: 50, rotate: Math.random() * 4 - 2 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                      }
                    : {
                        opacity: 0,
                        y: 50,
                        rotate: Math.random() * 4 - 2,
                      }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() * 2 - 1,
                  zIndex: 10,
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className={`relative bg-[#2a2a2a]/50 backdrop-blur-sm rounded-2xl border border-[#2a2a2a] group-hover:border-[#d67c49]/30 transition-all duration-300`}
                >
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Coming Soon Badge */}
                  {project.isComingSoon && (
                    <div className="absolute top-4 right-4 bg-[#d67c49] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="relative z-10 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-full bg-[${project.color}]/20 flex items-center justify-center backdrop-blur-sm`}
                      >
                        <Icon className={`w-6 h-6 text-[${project.color}]`} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-white">{project.title}</h3>
                        <p className="text-sm text-white/70">{project.subtitle}</p>
                      </div>

                      <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>

                      {/* Progress bar for coming soon projects */}
                      {project.isComingSoon && project.progress && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex justify-between text-xs text-white/70 mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                              className="bg-[#d67c49] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-white/30 bg-white/10 text-white/80 text-xs backdrop-blur-sm whitespace-nowrap"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge
                            variant="outline"
                            className="border-white/30 bg-white/10 text-white/80 text-xs backdrop-blur-sm whitespace-nowrap"
                          >
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-[#2a2a2a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#d67c49]/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full bg-[${selectedProject.color}]/20 flex items-center justify-center`}
                >
                  <selectedProject.icon className={`w-8 h-8 text-[${selectedProject.color}]`} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-poppins">{selectedProject.title}</h3>
                  <p className="text-[#f8f8f8]/70">{selectedProject.subtitle}</p>
                </div>
              </div>

              {selectedProject.isComingSoon ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#d67c49]/10 to-[#7fb77e]/10 rounded-xl p-6 border border-[#d67c49]/20">
                    <h4 className="text-xl font-semibold font-poppins mb-3">Coming Soon</h4>
                    <p className="text-[#f8f8f8]/80 mb-4">{selectedProject.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-[#f8f8f8]/70 mb-2">
                        <span>Development Progress</span>
                        <span>{selectedProject.progress}%</span>
                      </div>
                      <div className="w-full bg-[#2a2a2a] rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-[#d67c49] to-[#7fb77e] h-3 rounded-full transition-all duration-500"
                          style={{ width: `${selectedProject.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-[#f8f8f8]/70">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#7fb77e] rounded-full" />
                        <span>Planning ✓</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#d67c49] rounded-full" />
                        <span>Development (In Progress)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#2a2a2a] rounded-full" />
                        <span>Testing</span>
                      </div>
                    </div>

                    <form onSubmit={handleNotifySubmit} className="mt-6">
                      <label className="block text-sm font-medium mb-2">Get notified when it launches:</label>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={emailForNotify}
                          onChange={(e) => setEmailForNotify(e.target.value)}
                          placeholder="your@email.com"
                          className="flex-1 bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white placeholder-[#f8f8f8]/50 focus:border-[#d67c49] focus:outline-none"
                          required
                        />
                        <Button
                          type="submit"
                          className="bg-[#d67c49] hover:bg-[#d67c49]/90 text-white px-6 py-2 rounded-lg font-medium"
                        >
                          Notify Me
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold font-poppins mb-2 text-[#d67c49]">Problem</h4>
                      <p className="text-[#f8f8f8]/80 leading-relaxed">{selectedProject.details?.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold font-poppins mb-2 text-[#7fb77e]">Approach</h4>
                      <p className="text-[#f8f8f8]/80 leading-relaxed">{selectedProject.details?.approach}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold font-poppins mb-2 text-[#d67c49]">Impact</h4>
                      <p className="text-[#f8f8f8]/80 leading-relaxed">{selectedProject.details?.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-[#2a2a2a] bg-[#2a2a2a]/50 text-[#f8f8f8]/80 hover:border-[#d67c49]/50 hover:bg-[#d67c49]/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                      <Button
                        className="bg-[#d67c49] hover:bg-[#d67c49]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                        asChild
                      >
                        <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Try Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        className="border-[#7fb77e] text-[#7fb77e] hover:bg-[#7fb77e] hover:text-[#1c1c1c] px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 bg-transparent"
                        asChild
                      >
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
