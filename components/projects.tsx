"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product catalog, shopping cart, order management, and real-time inventory tracking.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "AI-Powered Task Manager",
      description:
        "An intelligent task management application that uses machine learning to prioritize tasks, predict completion times, and provide productivity insights. Includes natural language processing for task creation.",
      image: "/ai-task-management-dashboard-interface.jpg",
      technologies: ["Python", "Flask", "TensorFlow", "React", "PostgreSQL"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A modern chat application with real-time messaging, file sharing, group chats, and video calling. Built with WebSocket technology for instant communication and responsive design.",
      image: "/modern-chat-app.png",
      technologies: ["Next.js", "Socket.io", "WebRTC", "Redis", "Tailwind"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "A comprehensive weather analytics platform that aggregates data from multiple APIs, provides detailed forecasts, and displays interactive charts and maps for weather patterns analysis.",
      image: "/weather-analytics-dashboard-with-charts.jpg",
      technologies: ["Vue.js", "D3.js", "Express", "Weather APIs", "Chart.js"],
      liveDemo: "#",
      github: "#",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 text-primary transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:scale-105 group ${
                isVisible ? `animate-scale-in animate-delay-${(index + 2) * 200}` : "opacity-0 scale-95"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
