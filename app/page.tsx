import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { ParticleBackground } from "@/components/particle-background"

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />

      <ScrollProgress />

      <ParticleBackground />

      <main className="min-h-screen bg-background relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </main>
    </>
  )
}
