"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Coffee, Music, Gamepad2 } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const funFacts = [
    { icon: Code, text: "Started coding at age 14" },
    { icon: Coffee, text: "Powered by coffee and curiosity" },
    { icon: Music, text: "Love listening to lo-fi while coding" },
    { icon: Gamepad2, text: "Avid gamer and tech enthusiast" },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 text-primary transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-secondary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into computer science began with a simple curiosity about how websites work. What started as
                tinkering with HTML and CSS quickly evolved into a deep passion for problem-solving through code.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science Engineering, I've immersed myself in various domains
                including web development, machine learning, and software engineering. I believe in writing clean,
                efficient code and creating solutions that make a real impact.
              </p>
              <p>
                My goal is to contribute to innovative projects that push the boundaries of technology while
                continuously learning and growing as a developer. I'm particularly interested in full-stack development
                and emerging technologies like AI and blockchain.
              </p>
            </div>
          </div>

          {/* Fun Facts */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-accent">Fun Facts</h3>
            <div className="grid gap-4">
              {funFacts.map((fact, index) => (
                <Card
                  key={index}
                  className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isVisible ? `animate-fade-in-up animate-delay-${(index + 6) * 100}` : "opacity-0 translate-y-4"
                  }`}
                >
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div
                      className="p-2 bg-primary/10 rounded-lg animate-float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <fact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-card-foreground">{fact.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
