import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Pimpri Chinchwad University",
      period: "2023 - 2027",
      gpa: "8.5/10",
      description:
        "Relevant coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering, Machine Learning, Computer Networks, Operating Systems",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "NES Jr. College",
      period: "2021 - 2023",
      gpa: "85%",
      description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science",
    },
  ]

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera - Meta",
      date: "2023",
      link: "www.coursera.com",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "2023",
      link: "www.coursera.com",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "www.coursera.com",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      link: "www.coursera.com",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Education & Certifications</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-secondary flex items-center">
              <GraduationCap className="w-6 h-6 mr-3" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-card-foreground mb-2">{edu.degree}</h4>
                        <p className="text-accent font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {edu.gpa}
                      </Badge>
                    </div>

                    <div className="flex items-center text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-secondary flex items-center">
              <Award className="w-6 h-6 mr-3" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-accent/30 transition-colors group cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground group-hover:text-accent transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                        {cert.date}
                      </Badge>
                    </div>
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
