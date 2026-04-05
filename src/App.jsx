import React from "react"
import { ThemeProvider } from "../components/theme-provider"
import { ScrollProgress } from "../components/scroll-progress"
import { SmoothScroll } from "../components/smooth-scroll"
import { CursorFollower } from "../components/cursor-follower"
import { LeftPanel } from "../components/left-panel"
import { AboutSection } from "../components/about-section"
import { ExperienceSection } from "../components/experience-section"
import { FeaturedCaseStudies } from "../components/featured-case-studies"
import { SkillsSection } from "../components/skills-section"
import { AboutTimeline } from "../components/about-timeline"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { useActiveSection } from "./lib/useActiveSection"

const SECTION_IDS = ["about", "experience", "work", "skills"]

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0F1117] text-[#CCD6F6] relative">
        {/* Cursor glow   desktop only */}
        <div className="hidden lg:block">
          <CursorFollower />
        </div>

        <ScrollProgress />
        <SmoothScroll />

        {/* ── Two-column layout ── */}
        <div className="lg:flex lg:min-h-screen">
          {/* Left panel   sticky, desktop only */}
          <div className="hidden lg:block lg:w-[42%] xl:w-[40%] shrink-0">
            <div className="sticky top-0 h-screen py-16 px-10 xl:px-16 flex flex-col">
              <LeftPanel activeSection={activeSection} />
            </div>
          </div>

          {/* Right panel   scrollable content */}
          <main className="w-full lg:w-[58%] xl:w-[60%] px-6 md:px-12 lg:px-16 xl:px-20">
            {/* Mobile: show name/nav at top */}
            <div className="lg:hidden pt-6 pb-2 border-b border-[#233554] mb-2">
              <p className="font-bold font-poppins text-[#CCD6F6] text-xl">
                Asmith Mahendrakar
              </p>
              <p className="text-[#64FFDA] font-jetbrains-mono text-xs mt-0.5 mb-4">
                AI Systems Developer
              </p>
              <div className="flex flex-wrap gap-4">
                {SECTION_IDS.map((id) => (
                  <button
                    key={id}
                    onClick={() =>
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-xs font-jetbrains-mono text-[#495670] hover:text-[#64FFDA] uppercase tracking-widest transition-colors"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>

            <AboutSection />
            <ExperienceSection />
            <FeaturedCaseStudies />
            <SkillsSection />
            <AboutTimeline />
            <ContactSection />
          </main>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
