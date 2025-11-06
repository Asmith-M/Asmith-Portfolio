import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutTimeline } from "@/components/about-timeline"
import { FeaturedCaseStudies } from "@/components/featured-case-studies"
import { OtherProjects } from "@/components/other-projects"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingElements />
      <ScrollProgress />
      <SmoothScroll />
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
    </div>
  )
}
