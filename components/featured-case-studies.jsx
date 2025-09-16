import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Zap, TrendingUp, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"

const caseStudies = [
  {
    id: "clauseiq",
    title: "ClauseIQ",
    subtitle: "AI Legal Document Analysis",
    problem: "Contracts are dense, and non-experts miss critical clauses.",
    approach:
      "Built a FastAPI + React pipeline using PyMuPDF for extraction and Mistral via OpenRouter for clause classification and plain-English explanation. Added multi-agent verification and risk scoring.",
    impact: "~5s average analysis time; user-facing demo at clause-iq.vercel.app.",
    tech: ["React", "FastAPI", "PyMuPDF", "OpenRouter", "Tailwind", "Vercel", "Render"],
    demoUrl: "https://clause-iq.vercel.app/",
    githubUrl: "https://github.com/Asmith-M/ClauseIQ",
    icon: Zap,
    color: "#d67c49",
    image: "/ClauseIQ.png",
  },
  {
    id: "trendwise",
    title: "TrendWise",
    subtitle: "AI SEO Blog Generator",
    problem: "Content creators struggle to consistently generate SEO-friendly posts.",
    approach: "Next.js app with OpenRouter for AI generation, MongoDB persistence, and NextAuth Google OAuth.",
    impact: "Generates SEO-ready drafts instantly; live demo at trend-wise-nu.vercel.app.",
    tech: ["Next.js", "Tailwind", "MongoDB", "OpenRouter", "Vercel"],
    demoUrl: "https://trend-wise-nu.vercel.app",
    githubUrl: "https://github.com/Asmith-M/TrendWise",
    icon: TrendingUp,
    color: "#7fb77e",
    image: "/Trendwise.png",
  },
  {
    id: "accessmap",
    title: "AccessMap",
    subtitle: "Accessibility-Focused Navigation",
    problem: "Urban navigation is challenging for differently-abled users due to lack of accessibility information.",
    approach:
      "Participated in IBM Hackathon – developed an accessibility-focused map application to improve urban navigation for differently-abled users.",
    impact:
      "Enhanced navigation experience with accessibility features and barrier identification for inclusive urban mobility.",
    tech: ["React", "Node.js", "Google Maps API", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/0Ankit0-0/Access-Map0",
    icon: MapPin,
    color: "#7fb77e",
    image: "/AccessMap.png",
  },
]

export function FeaturedCaseStudies() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="work" ref={sectionRef} className="py-20 bg-[#1c1c1c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#7fb77e] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#d67c49] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">Featured Case Studies</h2>
          <p className="text-xl text-[#f8f8f8]/80 max-w-2xl mx-auto">
            Deep dives into my most impactful projects, showcasing AI innovation and full-stack expertise.
          </p>
        </motion.div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className={`relative ${isEven ? "" : "lg:col-start-2"}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d67c49]/20 to-[#7fb77e]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-[#2a2a2a]/50 backdrop-blur-sm rounded-2xl p-4 border border-[#2a2a2a] group-hover:border-[#d67c49]/30 transition-all duration-300">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.title} screenshot`}
                        className="w-full h-64 lg:h-80 object-cover rounded-xl"
                      />
                      <div className="absolute inset-4 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-[#d67c49] hover:bg-[#d67c49]/90 text-white" asChild>
                              <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Live Demo
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#7fb77e] text-[#7fb77e] hover:bg-[#7fb77e] hover:text-[#1c1c1c] bg-transparent"
                              asChild
                            >
                              <a href={study.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Github className="w-4 h-4 mr-1" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className={`space-y-6 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-[${study.color}]/20 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-[${study.color}]`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-poppins">{study.title}</h3>
                      <p className="text-[#f8f8f8]/70">{study.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold font-poppins mb-2 text-[#d67c49]">Problem</h4>
                      <p className="text-[#f8f8f8]/80 leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold font-poppins mb-2 text-[#7fb77e]">Approach</h4>
                      <p className="text-[#f8f8f8]/80 leading-relaxed">{study.approach}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold font-poppins mb-2 text-[#d67c49]">Impact</h4>
                      <p className="text-[#f8f8f8]/80 leading-relaxed">{study.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-[#2a2a2a] bg-[#2a2a2a]/50 text-[#f8f8f8]/80 hover:border-[#d67c49]/50 hover:bg-[#d67c49]/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    <Button
                      className="bg-[#d67c49] hover:bg-[#d67c49]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center"
                      asChild
                    >
                      <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Try Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#7fb77e] text-[#7fb77e] hover:bg-[#7fb77e] hover:text-[#1c1c1c] px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 bg-transparent flex items-center"
                      asChild
                    >
                      <a href={study.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
