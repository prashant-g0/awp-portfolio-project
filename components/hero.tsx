import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowDown } from "lucide-react"
import { TypingAnimation } from "./typing-animation"
import { ParallaxSection } from "./parallax-section"

export function Hero() {
  const typingPhrases = [
    "A B.Tech CSE undergrad building the future, one line of code at a time.",
    "Full-stack developer passionate about innovative solutions.",
    "Machine learning enthusiast creating intelligent applications.",
    "Problem solver turning ideas into reality through code.",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <ParallaxSection speed={0.3}>
            <div className="mb-8 animate-scale-in">
              <img
                src="/prash-pic.jpg"
                alt="Prashant Gupta"
                className="w-48 h-48 rounded-full mx-auto border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </ParallaxSection>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up animate-delay-200">
            Hi, I'm <span className="text-primary">Prashant Gupta</span>.
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-secondary text-balance animate-fade-in-up animate-delay-300 min-h-[3rem] flex items-center justify-center">
            <TypingAnimation phrases={typingPhrases} />
          </h2>

          <ParallaxSection speed={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-pretty animate-fade-in-up animate-delay-400">
              Passionate about creating innovative solutions through code. I specialize in full-stack development,
              machine learning, and turning complex problems into elegant, user-friendly applications.
            </p>
          </ParallaxSection>

          <ParallaxSection speed={0.1}>
            <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animate-delay-600">
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </ParallaxSection>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
