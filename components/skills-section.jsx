import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Brain, Server, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "#3B82F6",
    skills: [
      { name: "React/Next.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "#06B6D4",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python/FastAPI", level: 85 },
      { name: "REST/GraphQL", level: 90 },
      { name: "WebSockets", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "#8B5CF6",
    skills: [
      { name: "API creation", level: 75 },
      { name: "API integration", level: 70 },
      { name: "LangChain", level: 65 },
      { name: "Prompt Engineering", level: 80 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "#10B981",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 75 },
      { name: "Vercel/AWS", level: 85 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: GitBranch,
    color: "#06B6D4",
    skills: [
      { name: "Git/GitHub", level: 75 },
      { name: "Postman", level: 70 },
      { name: "N8N", level: 65 },
      { name: "Slack", level: 60 },
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-[#06B6D4] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">Skills & Expertise</h2>
          <p className="text-xl text-[#F1F5F9]/80 max-w-2xl mx-auto">
              My curated collection of technologies for bringing creative ideas to life.          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon

            return (
              <motion.div
                key={category.title}
                className="bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-bold font-poppins">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[#F1F5F9]/90 font-medium">{skill.name}</span>
                        <span className="text-sm text-[#F1F5F9]/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#0A0A0A] rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${category.color}, ${category.color}B3)`
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold font-poppins mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Ollama",
              "Jupyter Notebooks",
              "Prisma",
              "streamlit",
              "OpenAI API",
              "Auth0",
              "Firebase",
              "Cloudflare",
              "Figma",
              "FastAPI",
              "Postman",
              "Notion API",
              "Slack API",
              "Discord.js",
              "EmailJS",
              "Hugging Face",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-[#1E293B]/50 backdrop-blur-sm rounded-full text-[#F1F5F9]/80 border border-[#1E293B] hover:border-[#06B6D4]/30 hover:bg-[#06B6D4]/10 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
