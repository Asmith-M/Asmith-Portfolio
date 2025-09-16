import React from "react"
import { ThemeProvider } from "../components/theme-provider"
import { FloatingElements } from "../components/floating-elements"
import { ScrollProgress } from "../components/scroll-progress"
import { SmoothScroll } from "../components/smooth-scroll"
import { CursorFollower } from "../components/cursor-follower"
import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { AboutTimeline } from "../components/about-timeline"
import { FeaturedCaseStudies } from "../components/featured-case-studies"
import { OtherProjects } from "../components/other-projects"
import { SkillsSection } from "../components/skills-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { SampleClauseWidget } from "../components/sample-clause-widget"

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        <FloatingElements />
        <ScrollProgress />
        <SmoothScroll />
        <CursorFollower />
        <Header />
        <main>
          <HeroSection />
          <AboutTimeline />
          <FeaturedCaseStudies />
          <OtherProjects />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
        <SampleClauseWidget />
      </div>
    </ThemeProvider>
  )
}
