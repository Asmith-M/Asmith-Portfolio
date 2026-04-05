import { motion } from "framer-motion"
import { Download } from "lucide-react"

export function HeroSection() {
  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const stats = [
    "5 Projects Shipped",
    "Top 30 IBM Hackathon",
    "4 Months Fintech",
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16 bg-[#0D0D0D]">
      {/* Subtle radial glow   warm, not blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 60%, rgba(232,197,71,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Small gold monospace tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="font-jetbrains-mono text-sm text-[#E8C547] tracking-wide">
            // Software Engineer Intern → Building Something Real
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-[#F5F5F0] leading-tight mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I didn&apos;t choose the AI life.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-2xl md:text-3xl font-poppins text-[#9A9A8E] mb-8 leading-snug"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          The AI life compiled successfully.
        </motion.p>

        {/* Body paragraph */}
        <motion.p
          className="text-lg text-[#F5F5F0]/80 font-inter leading-relaxed max-w-[600px] mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I build systems that work in production   RAG pipelines, fraud
          detection engines, federated learning security. Based in Mumbai.
          Currently looking for someone interesting to build something
          chaotic with.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <button
            onClick={scrollToWork}
            className="inline-flex items-center justify-center bg-[#E8C547] text-[#0D0D0D] px-8 py-3 rounded-[4px] font-semibold font-poppins text-base transition-all duration-200 hover:bg-[#C8A832]"
          >
            See the Work
          </button>
          <a
            href="/Resume-Public.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[#E8C547] text-[#E8C547] px-8 py-3 rounded-[4px] font-semibold font-poppins text-base transition-all duration-200 hover:bg-[#E8C547]/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Gold separator line */}
        <motion.div
          className="w-full h-px bg-[#E8C547]/30 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Stat pills */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {stats.map((stat) => (
            <span
              key={stat}
              className="px-4 py-2 border border-[#2A2A2A] bg-[#141414] text-[#9A9A8E] text-sm font-inter rounded-[4px] tracking-wide"
            >
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
