import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      color: "bg-primary/10 text-primary border-primary/20",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"],
    },
    {
      title: "Frontend",
      color: "bg-secondary/10 text-secondary border-secondary/20",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      color: "bg-accent/10 text-accent border-accent/20",
      skills: ["Node.js", "Express.js", "Flask", "Django", "REST APIs", "GraphQL"],
    },
    {
      title: "Databases",
      color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
      title: "Tools & Platforms",
      color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
      skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "VS Code"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Skills & Toolbox</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-xl text-secondary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
